<?php 
	
	include 'connect.php';

	$id = isset($_GET['id']) ? $_GET['id']:1;

	$sql = "select * from goods where id= '$id'";

	$result = query_oop($sql);

	$aa = json_encode($result,JSON_UNESCAPED_UNICODE);
	
    if(count($result) > 0){
	    echo "$aa";
	};


?>