$(function(){
	var leftNav = $('.left>ul>li>a');
	leftNav.on('click',function(){
		var slef = $(this);
		var childNav = $(this).next();
		var chindDd = childNav.find('dd');
		var childDldisplay = childNav.css('display');
		var childI = $(this).find('i').eq(1);
		if(childDldisplay == 'none'){
			$(this).children('i').css('color','#ffa000');
			$(this).css('color','#ffa000');
			$(this).css('background','#546e7a');
			childI.attr('class','iconfont icon-jiantouxia');
			childNav.css('display','block');
			childNav.animate({
						'height':chindDd.length*30
			})
		}else{
			
			childNav.animate({
						'height':0
			},function(){
				childI.attr('class','iconfont icon-jiantouyou');
				slef.children('i').css('color','#767676');
				slef.css('color','#767676');
				slef.css('background','#fff');
				childNav.css('display','none');
			})
		}
	});
    var user_back = $('.user_back');
    $('.icon_down').on('click',function(){
        var dis_user_back = user_back.css('display');
        if(dis_user_back == 'none'){
            user_back.css('display','block');
        }else{
            user_back.css('display','none');
        }
    });
})