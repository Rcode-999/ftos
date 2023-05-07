
<?php
    $dbServername = "localhost";
    $dbUserName = "root";
    $dbPassword = "";
    $dbName = "student_account_db";
    $email = $_POST['email'];
    $password = $_POST['pass'];
    $conn = mysqli_connect($dbServername,$dbUserName,$dbPassword,$dbName);
    $sql = "INSERT INTO accountdetails (Email,Password) VALUES ('$email','$password');";
    $result = mysqli_query($conn,$sql);
    
    header("Location: home.html?signup=success");
?>