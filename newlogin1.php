<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$FirstName = $_POST['firstName'];
$LastName = $_POST['lastName'];
$Email = $_POST['regEmail'];
$Password = $_POST['regPassword2'];

$conn = new mysqli('127.0.0.1:3306','root','','printondemand'); //replace this with your db and password
if ($conn->connect_error) {
    echo $conn->connect_error;
    die('Connection Failed : ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO register(FirstName,LastName,Email,Password) VALUES(?, ?, ?, ?)");
    $stmt->bind_param("ssss", $FirstName, $LastName, $Email, $Password);

    if ($stmt->execute()) {
        error_log("Registration successful for Email: $Email");
        echo "Registration successful!";
    } else {
        error_log("Error: " . $stmt->error);
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
}
?>