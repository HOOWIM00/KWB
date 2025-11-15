<?php
// Simpel FTP upload script voor build folder

$ftp_server = "ftp.raakachterbos.be";
$ftp_username = "raakachterbos.be";
$ftp_password = "Raakachterbos.1";

$conn = ftp_connect($ftp_server);
if (!$conn) die("Kon niet verbinden\n");

$login = ftp_login($conn, $ftp_username, $ftp_password);
if (!$login) die("Login mislukt\n");

echo "✓ Verbonden met FTP server\n\n";
ftp_pasv($conn, true);

$file_count = 0;
$dir_count = 0;

function upload_dir($conn, $local_dir, $remote_dir, &$file_count, &$dir_count) {
    // Maak folder aan - probeer eerst, fail is OK als het al bestaat
    $parts = explode('/', $remote_dir);
    $current = '';
    foreach ($parts as $part) {
        if ($part === '') continue;
        $current .= ($current ? '/' : '') . $part;
        @ftp_mkdir($conn, $current);
    }
    
    if (@ftp_mkdir($conn, $remote_dir)) {
        echo "✓ Folder: $remote_dir\n";
        $dir_count++;
    }
    
    $items = scandir($local_dir);
    foreach ($items as $item) {
        if ($item == '.' || $item == '..') continue;
        
        $local_path = $local_dir . '/' . $item;
        $remote_path = $remote_dir . '/' . $item;
        
        if (is_dir($local_path)) {
            upload_dir($conn, $local_path, $remote_path, $file_count, $dir_count);
        } else {
            echo "Upload: " . basename($item) . " ... ";
            // Gebruik ASCII voor text bestanden, BINARY voor de rest
            $mode = (preg_match('/\.(html|css|js|json|txt|map)$/i', $item)) ? FTP_ASCII : FTP_BINARY;
            $result = ftp_put($conn, $remote_path, $local_path, $mode);
            if ($result) {
                echo "✓\n";
                $file_count++;
            } else {
                $error = error_get_last();
                echo "✗ " . ($error ? $error['message'] : 'unknown') . "\n";
            }
        }
    }
}

$start = microtime(true);

echo "Uploaden build naar /raak/...\n\n";
upload_dir($conn, __DIR__ . '/build', 'raak', $file_count, $dir_count);

echo "\nUploaden PHP...\n";
@ftp_mkdir($conn, 'raak/php');
if (file_exists(__DIR__ . '/php/calendar.php')) {
    echo "Upload: calendar.php ... ";
    if (@ftp_put($conn, 'raak/php/calendar.php', __DIR__ . '/php/calendar.php', FTP_ASCII)) {
        echo "✓\n";
        $file_count++;
    } else {
        echo "✗\n";
    }
}

$duration = round(microtime(true) - $start, 2);

echo "\n========================================\n";
echo "✓ Upload voltooid!\n";
echo "Bestanden: $file_count\n";
echo "Folders: $dir_count\n";
echo "Tijd: {$duration}s\n";
echo "========================================\n\n";
echo "Website: https://raakachterbos.be/raak/\n";
echo "API: https://raakachterbos.be/raak/php/calendar.php\n";

ftp_close($conn);
