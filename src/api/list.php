<?php 

		$servername = "localhost"; 
		$username = "root"; 
		$password = ""; 
		$dbname = "php"; 
		  
		// 创建连接 
		$conn =mysqli_connect($servername, $username, $password, $dbname);

		//中文问号乱码加这个；
		$conn->set_charset('utf8');
		// 检测连接
		$sql = "SELECT * FROM goods"; 


		$result = mysqli_query($conn,$sql); 


		$conn->close();



		if (!$result) {
		  printf("Error: %s\n", mysqli_error($conn));
		  exit();
		}
		  
		$jarr = array();

		while ($rows=mysqli_fetch_array($result,MYSQL_ASSOC)){
		  $count=count($rows);//不能在循环语句中，由于每次删除 row数组长度都减小 
		  for($i=0;$i<$count;$i++){ 
		    unset($rows[$i]);//删除冗余数据 
		  }
		  array_push($jarr,$rows);
		}




		$str=json_encode($jarr,JSON_UNESCAPED_UNICODE);
		echo $str;
		//将数组进行json编码

?>
