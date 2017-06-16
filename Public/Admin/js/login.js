$(function(){
	var topLi = $('.top-nav>ul>li');
	var moveSpan = $('.top-nav>span');
	var tabBox = $('.tab-box>div');
	topLi.mouseover(function(i,ele){
		var index = $(this).index();
		moveSpan.animate({
					'left':index*250+43
		})
		$(this).addClass('active').siblings().removeClass('active');
		tabBox.css('display','none');
		tabBox.eq(index).css('display','block');
		$('form').css('display','block');
	})


});