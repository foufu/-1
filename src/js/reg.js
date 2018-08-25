

			var username = document.querySelector('#user');
			var password = document.querySelector('#pad');
			var password2 = document.querySelector('#pad2');
			var btnReg = document.querySelector('#btn');
			var checkbox = document.querySelector('.checkbox');


			var status = [200,304];

			var isok = false;

			// 注册
			btnReg.onclick = ()=>{
				if(!isok){
					return false;
				}


			// 获取用户名/密码
				var _username = username.value;
				var _password = password.value;
				var _password2 = password2.value;

				if(!/^1[3-9]\d{9}$/.test(_username)){
					alert('昵称只能为手机号码');
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

				
				

				var xhr = new XMLHttpRequest();
				xhr.onload = ()=>{
					if(status.indexOf(xhr.status) >= 0){
						isok = false;
						console.log(xhr.responseText);
						var body = document.querySelector('body');
						body.style.background = 'blue';
						body.innerText = '进入登录';
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
				var _username = username.value;

				var xhr = new XMLHttpRequest();
				
				xhr.onload = ()=>{
					if(status.indexOf(xhr.status) >= 0){
						console.log(xhr.responseText)
						
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

