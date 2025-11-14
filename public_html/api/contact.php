<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $naam = htmlspecialchars($data['naam'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $bericht = htmlspecialchars($data['bericht'] ?? '');
    
    if (empty($naam) || empty($email) || empty($bericht)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Alle velden zijn verplicht']);
        exit();
    }
    
    // Valideer email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Ongeldig e-mailadres']);
        exit();
    }
    
    // Hier kun je later email versturen of opslaan in database
    // Voor nu loggen we naar een bestand
    $logEntry = date('Y-m-d H:i:s') . " - $naam ($email): $bericht\n";
    file_put_contents(__DIR__ . '/contact_log.txt', $logEntry, FILE_APPEND);
    
    // Optioneel: verstuur email
    /*
    $to = "info@raak-achterbos.be";
    $subject = "Contact formulier: " . $naam;
    $message = "Naam: $naam\nEmail: $email\n\nBericht:\n$bericht";
    $headers = "From: $email\r\nReply-To: $email\r\n";
    mail($to, $subject, $message, $headers);
    */
    
    echo json_encode([
        'success' => true, 
        'message' => 'Bedankt voor je bericht!'
    ]);
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>
