
jQuery(function($) {


	var obj = {}
	location.search.slice(1).split('&').forEach(item => {
		item = item.split('=')
		obj[item[0]] = item[1]
	})


	$.ajax({
		url: '../api/car.php',
		method: 'get',
		data: {
			id: obj.id
		},
		success (xhr){		 
			//利用eval转数据类型
			var data  = window.eval('('+xhr+')');
			// console.log(data[0].images);
			// 渲染页面
			$('.nn').text(data[0].name);  
			$('.pp').text(data[0].price);  
			$('.imgggg').attr('src', data[0].images);
			$('.imgggg').attr('data-big',data[0].images);
		}

	})	




	// 放大镜
	$('.s').lxzoom({width:380,height:380}).addClass('box');

		console.log($('.gg'))
			$('.gg').on('click','img',function(){
				$('.s img').attr({
					'src':this.src,
					'data-big':this.dataset.big
				});
			})
			
	

})




