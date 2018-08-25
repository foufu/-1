<?php 
	
	include 'connect.php';

	$text = isset($_POST['user']) ? $_POST['user']:null;
	$pass = isset($_POST['passd']) ? $_POST['passd']:null;

	$sql = "select * from username where name='$text' and password='$pass'";


	
	$result = $conn -> query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    if(count($row) > 0){
	    $_SESSION['name'] = $text;
	    echo "{status: true}";
	} else {
	    echo "{status: false, message: 'username or password error'}";
	}

	$result->free(); //释放内存
	$conn->close();




?>