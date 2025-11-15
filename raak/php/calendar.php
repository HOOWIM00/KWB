<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// Database configuratie voor one.com
$host = 'raakachterbos.be.mysql';  // one.com MySQL server
$dbname = 'raakachterbos_beraak';  // Database naam
$username = 'raakachterbos_beraak';   // Database username
$password = '15chapels@bos';       // Database wachtwoord

try {
    // Database connectie
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Haal activiteiten op, gesorteerd op datum (nieuwste eerst)
    // Inclusief activiteiten van maximaal 1 maand geleden
    $stmt = $pdo->prepare("
        SELECT 
            id,
            date,
            name,
            start_hour,
            stop_hour,
            place,
            comment,
            info,
            CASE 
                WHEN date < CURDATE() THEN 'past'
                WHEN date = CURDATE() THEN 'today'
                ELSE 'future'
            END as status,
            DATEDIFF(CURDATE(), date) as days_ago
        FROM calendar
        WHERE date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
        ORDER BY date ASC
    ");
    
    $stmt->execute();
    $activities = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // Format de data voor React
    $formattedActivities = array_map(function($activity) {
        // Zoek naar foto in activities folder
        $dateFormatted = str_replace('-', '', $activity['date']); // yyyymmdd
        $nameFormatted = str_replace(' ', '', $activity['name']); // zonder spaties
        $baseName = $dateFormatted . '_' . $nameFormatted;
        
        $photoExtension = null;
        $activitiesDir = __DIR__ . '/../activities/';
        
        // Check verschillende extensies
        $extensions = ['jpg', 'jpeg', 'png', 'JPG', 'JPEG', 'PNG', 'gif', 'webp'];
        foreach ($extensions as $ext) {
            if (file_exists($activitiesDir . $baseName . '.' . $ext)) {
                $photoExtension = $ext;
                break;
            }
        }
        
        return [
            'id' => (int)$activity['id'],
            'date' => $activity['date'],
            'name' => $activity['name'],
            'startHour' => $activity['start_hour'],
            'stopHour' => $activity['stop_hour'],
            'place' => $activity['place'],
            'comment' => $activity['comment'],
            'info' => $activity['info'],
            'status' => $activity['status'],
            'daysAgo' => (int)$activity['days_ago'],
            'photoExtension' => $photoExtension,
            'photoFilename' => $photoExtension ? $baseName . '.' . $photoExtension : null
        ];
    }, $activities);
    
    echo json_encode([
        'success' => true,
        'data' => $formattedActivities
    ]);
    
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Database error: ' . $e->getMessage()
    ]);
}
?>
