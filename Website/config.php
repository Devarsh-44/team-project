<?php
$host = "localhost";
$username = "root";
$password = ""; // Default XAMPP password
$dbname = "term_project_db";

try {
    $conn = new mysqli($host, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
} catch (Exception $e) {
    die("Database error: " . $e->getMessage());
}
?>