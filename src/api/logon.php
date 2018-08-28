<?php 
	
	include 'connect.php';

	$text = isset($_POST['user']) ? $_POST['user']:null;
	$pass = isset($_POST['passd']) ? $_POST['passd']:null;

	$sql = "select * from username where name='$text' and password='$pass'";


	
	$result = query_oop($sql);

    // $row = $result->fetch_all(MYSQLI_ASSOC);

    if(count($result) > 0){
	    $_SESSION['name'] = $text;
	    echo "{status: true}";
	} else {
	    echo "{status: false, message: 'username or password error'}";
	}




?>