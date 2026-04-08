<?php
// ==============================
// Portfolio Data Save Endpoint
// ==============================
// This file only works on localhost (XAMPP).
// On GitHub Pages, PHP files are served as static text — harmless.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Security: Only allow from localhost
$allowed = ['127.0.0.1', '::1', 'localhost'];
$remoteAddr = $_SERVER['REMOTE_ADDR'] ?? '';
if (!in_array($remoteAddr, $allowed)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'error' => 'Forbidden — localhost only']);
    exit;
}

// Read POST body
$rawInput = file_get_contents('php://input');
if (!$rawInput) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Empty request body']);
    exit;
}

// Parse JSON
$data = json_decode($rawInput, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON: ' . json_last_error_msg()]);
    exit;
}

// Validate basic structure
if (!isset($data['profile']) || !isset($data['sections'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing required fields: profile, sections']);
    exit;
}

// Target file
$dataFile = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'data.json';

// Create timestamped backup
if (file_exists($dataFile)) {
    $backupDir = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'api' . DIRECTORY_SEPARATOR . 'backups';
    if (!is_dir($backupDir)) {
        mkdir($backupDir, 0755, true);
    }
    $timestamp = date('Y-m-d_H-i-s');
    $backupFile = $backupDir . DIRECTORY_SEPARATOR . "data_backup_{$timestamp}.json";
    copy($dataFile, $backupFile);

    // Keep only the last 20 backups
    $backups = glob($backupDir . DIRECTORY_SEPARATOR . 'data_backup_*.json');
    if (count($backups) > 20) {
        usort($backups, function($a, $b) { return filemtime($a) - filemtime($b); });
        $toDelete = array_slice($backups, 0, count($backups) - 20);
        foreach ($toDelete as $old) {
            unlink($old);
        }
    }
}

// Write prettified JSON
$jsonOutput = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
if ($jsonOutput === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to encode JSON']);
    exit;
}

$written = file_put_contents($dataFile, $jsonOutput);
if ($written === false) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Failed to write file']);
    exit;
}

echo json_encode([
    'success' => true,
    'message' => 'Data saved successfully',
    'bytes' => $written,
    'timestamp' => date('c')
]);
