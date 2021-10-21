<?php

require "conn.php";
    

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $json = file_get_contents('php://input');

        $data = json_decode($json);

        $email = $data->email;
        $password = $data->password;

        $sql = "Select username from users where email = '$email' and password = '$password';";
        $result = $conn->query($sql);

        if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
                echo $row['username'];
            }
        }
        else{
            echo "0";
        }        
    }else{
        echo "GET Request Not allowed";
    }
?>