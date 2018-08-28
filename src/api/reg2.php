<?php

// 引入connect.php
include 'connect.php';

    // 接口功能：验证用户是否存在
    // 所需参数:username
    		// password


    $username = isset($_POST['username']) ? $_POST['username'] : null; 
	$password = isset($_POST['password']) ? $_POST['password'] : null; 



     // 查找数据中是否存在同名用户
    $sql = "insert into username(name,password) values('$username','$password')";


	// 执行sql语句写入数据库
	$result = query_oop($sql);

    // 判断成功或者失败：返回给前端
    if($result){
    	echo "success";
    }else{
    	echo "fail";
    }

?>