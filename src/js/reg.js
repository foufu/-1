(function(){
	// 获取元素
	var username = document.querySelector('#user');
	var password = document.querySelector('#pad');
	var password2 = document.querySelector('#pad2');
	var btnReg = document.querySelector('#btn');
	var checkbox = document.querySelector('.checkbox');

	// 声明状态码
	var status = [200,304];
	// 声明一个isok为false
	var isok = false;

	// 注册
	btnReg.onclick = ()=>{
		if(!isok){
			return false;
		}
	// 获取输入的用户名/密码
		var _username = username.value;
		var _password = password.value;
		var _password2 = password2.value;
		// 判断输入的账号
		if(!/^1[3-9]\d{9}$/.test(_username)){
			alert('昵称只能为手机号码');
			// 清空输入框，获取焦点
			_username.value = '';
			username.focus();
			return false;
		}

		if(_password != _password2){
			alert('输入密码有误');
			return false;
		}

		if(!$('.checkbox').is(':checked')){
			return false;
		} 

		
		
		// 发起请求
		var xhr = new XMLHttpRequest();
		xhr.onload = ()=>{
			// 判断状态码
			if(status.indexOf(xhr.status) >= 0){
				// 避免连续多次发起请求
				isok = false;
				// 输出返回的是yes还是no
				console.log(xhr.responseText);
				// 获取body，注册成功时切换背景颜色
				var body = document.querySelector('body');
				body.style.background = 'blue';
				body.innerText = '进入登录';
				// 注册成功，跳转登录界面
				window.location.href = 'logon.html';
			}
		}
		xhr.open('post','../api/reg2.php',true);

		// 设置请求头，以便后端接收post数据
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

		xhr.send(`username=${_username}&password=${_password}`);
	}


	// 验证用户名是否存在
	username.onblur = ()=>{
		// 获取输入的账号
		var _username = username.value;
		// 发起一个请求
		var xhr = new XMLHttpRequest();
		xhr.onload = ()=>{
			// 判断状态码
			if(status.indexOf(xhr.status) >= 0){
				console.log(xhr.responseText)
				// 判断返回的是成功还是失败
				if(xhr.responseText === 'yes'){
					isok = true;
	
				}else if(xhr.responseText === 'no'){
					isok = false;
					alert('用户名已存在');
				}
			}
		}

		xhr.open('get','../api/reg.php?username='+_username,true);
		xhr.send();

	}
})();


// jQuery(function($) {

// 	$('#btn').on('click',function(e){
// 		// 获取元素及输入的值
// 		var username = $('#user').val();
// 		var password = $('#pad').val();
// 		var password2 = $('#pad2').val();
// 		// var checkbox = $('.checkbox');
// 		e.preventDefault();
// 		// console.log(username);



// 		if(!/^1[3-9]\d{9}$/.test(username)){
// 				alert('昵称只能为手机号码');
// 				$('#user').val('').focus();
// 				return false;
// 			}

			
// 			if(_password != password2){
// 				alert('输入密码有误');
// 				$('#pad').val('').focus();
// 				return false;
// 			}
// 			if(!$('.checkbox').is(':checked')){
// 				return false;
// 			} 


// 	})
	
// 	$.ajax({
// 		url: '../api/reg.php',
// 		method: 'post',
// 		data: {aa:username,password:password},
// 		success:function(xhr){
// 			console.log(000);
// 			// if(xhr === '{status: true}'){
// 			// 	window.location.href = '../index.html';
// 			// }
			// if(xhr === '{status: false}'){
			// 	window.location.href = 'javascript:';
			// }
// 		}
// 	})	
// })
