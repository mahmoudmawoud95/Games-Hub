<?php
$host = "localhost";
$dbname = "signup";
$username = "root";
$password = "";

$mysqli = new mysqli($host,$username,$password,$dbname);
                     
if ($mysqli->connect_error) {
    die("Connection error: " . $mysqli->connect_error);
}


$sql = "INSERT INTO reg (username, Email)
        VALUES (?, ?)";

$stmt = $mysqli->stmt_init();

if ( ! $stmt->prepare($sql)) {
    die("SQL error: " . $mysqli->error);
}

$stmt->bind_param("ss", $_POST["name"],$_POST["email"], );
                  
if ($stmt->execute()) {

    header("Location: signup-success.html");
    exit; 
}


?>
