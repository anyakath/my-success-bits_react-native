<?php

    $servername = "localhost"; //servere for xampp it is localhost
    $username = "root@localhost"; //username of the server
    $password = ""; //password of the server
    $database = "Users"; //database name

    //creating a connection
    $conn = new mysqli($servername, $username, $password, $database);

    //checking the connection
    if($conn->connect_error){
        die("Connection failed ".$conn->connect_error);
    }

?>