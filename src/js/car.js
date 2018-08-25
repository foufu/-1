
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
		success (xhr) {
			// if(xhr )
			console.log(xhr)
			// if(xhr === '{status: true}'){
			// 	$('.fdj').text = xhr.map(function(item){
			// 		return 
			// 			`<div class="fdj_l">
	  //                       <div class="s">
	  //                           <img src="${item.images}" alt="" /> 
	  //                       </div>
	  //                         <div class="x">
	  //                             <div class="x_baer">
	  //                                 <div class="i1"><i  class="iconfont icon-left"></i></div>
	  //                                 <div class="gg">
	  //                                       <img src="../img/y2.jpg" alt="" />
	  //                                     <img src="../img/y13.jpg" alt="" />
	  //                                     <img src="../img/y18.jpg" alt="" />
	  //                                     <img src="../img/y23.jpg" alt="" />
	  //                                     <img src="../img/y26.jpg" alt="" />
	  //                                 </div>
	  //                                 <div class="i2"><i  class="iconfont icon-right"></i></div>
	                                 
	  //                             </div>
	  //                             <div class="x_p">温馨提示：部分商品包装更换频繁，如货品与图片不完全一致，请以商品实物为准。</div>
	  //                         </div>
	  //                   </div>
	                 
	  //                <div class="fdj_r">
			// 			<h2>${item.name}</h2>
			// 			<p>${item.price}</p>
	  //                </div>`
									 
									
		// }).join('');

	}

			
			
			
		}
	})


})




