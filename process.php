<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data = json_decode(file_get_contents('php://input'), true);

  
  echo json_encode(['success' => true]);
} else {
  // Handle invalid request
  echo json_encode(['success' => false, 'error' => 'Invalid request']);
}