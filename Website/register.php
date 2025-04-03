<?php
include "config.php"; // Assumes this file sets up $conn (database connection)

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password

    // Check if username or email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "Username or email already taken. <a href='register.html'>Try again</a>";
    } else {
        // Insert new user
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password);

        if ($stmt->execute()) {
            echo "Registration successful! <a href='login.html'>Login now</a>";
        } else {
            echo "Error: " . $stmt->error . " <a href='register.html'>Try again</a>";
        }
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method. <a href='register.html'>Go back</a>";
}
?>