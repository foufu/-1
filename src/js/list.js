
(function(){
    var goodslist = document.querySelector('.goodslist');
    var g_bottom = document.querySelector('.g_bottom');

    console.log(g_bottom,goodslist)
                
                // 实例化一个异步请求对象
                var status = [200,304];
                var xhr = new XMLHttpRequest();//readyState=0

                xhr.onreadystatechange = function(){
                
                    // console.log(xhr.readyState)
                     if(status.indexOf(xhr.status) != -1){

                        
                        // 确认数据接收完毕
                        // 在次获取数据：responseText

                        // console.log(xhr.responseText);
                        var data = JSON.parse(xhr.responseText);

                        goodslist.innerHTML = data.map(function(item){
                            return `
                                 <li>
                                    <a href=""> <span class="span_none">在线咨询</span></a>
                                   
                                    <a href="car.html?id=${item.id}"><img src="../img/${item.images}" /></a>
                                    <a href="car.html?id=${item.id}"><h4>${item.name}</h4></a>
                                    <p class="price">￥：<span>${item.price}</span></p>
                                    <div class="chakan"><a href="car.html"><button class="ab">查看详情</button></a><button class="bb">在线咨询</button></div>
                                
                                </li>
                                `
                        }).join('');

                    }
                }

                xhr.open('get','../api/list.php');
                xhr.send();

})();


