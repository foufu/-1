jQuery($=>{
	$('#denglu').on('click',function(e){
		var text = $('#log_username').val();
		var pass = $('#log_password').val();

		e.preventDefault();
		$.ajax({
			url:'../api/logon.php',
			type:'POST',
			data:{user:text,passd:pass},
			success:function(res){
				console.log(res);
				if(res === '{status: true}'){
					window.location.href = '../index.html';
				}
				if(res === '{status: false}'){
					window.location.href = 'javascript:';
				}
			}
		})
	})
});