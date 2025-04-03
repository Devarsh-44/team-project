<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: login.html"); // Redirect if not logged in
    exit();
}

echo "<h2>Welcome, " . htmlspecialchars($_SESSION["user"]) . "!</h2>";
echo "<a href='logout.php'>Logout</a>";
?>
