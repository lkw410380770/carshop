layui.use(['layer','form'],function(){
	var layer = layui.layer;
	var form = layui.form();
	$(function(){
		$('#add_user').on('click',function(){
			layer.open({
					type:1,
					title:'添加用户',
					area:['800px','450px'],
					content:$('#addUser')
			})
		})
		var mask = $('.mask');
		var fiexdBox = $('.fiexdBox');
		$('.td_xq').on('click',function(){
			mask.css('display','block');
			mask.animate({'opacity':1});
			var user_id = $(this).attr('data-id');
			var username = $(this).attr('data-role');
			$('#deparNames').val(username);
			//获取默认数据
			$.ajax({
				url: url,
				type: 'post',
				dataType: 'json',
				data: {
					operate: 'getAllRole'
				},
				success: function (response) {
					var html = '';
					$.each(response, function (i,v) {
						if (v.name != '') {
							html +='<li class="i-box"><span><input type="radio" value="'+ v.id+'"><b></b></span><p>'+ v.dname+'->'+ v.name+'</p></li>';
						}
					});
					$('.departpeole').html(html);
					clickFn();
				}
			});

			fiexdBox.css('display','block');
			fiexdBox.animate({'right':0});
		});

		$('#btnn').on('click',function(){
			var username = $('#deparNames').val();
			var dname = $('#departName').val();
			var rolename = $('#roleName').val();
			$.ajax({
				type:'post',
				url:setRoleUrl,
				dataType: 'json',
				data:{rolename:rolename,dname:dname,name:username},
				success:function(data){
					if(data.status == 101){
						layer.msg(data.msg, {
							icon: 1,
							time: 1000,
						}, function () {
							location.reload()
						});
					}else if(data.status == 102){
						layer.msg(data.msg, {
							icon: 0,
							time: 1000
						});
					}else{
						layer.msg(data.msg, {
							icon: 0,
							time: 1000
						}, function () {
							location.reload()
						});
					}
				}
			})
			fiexdBox.css('display','block');
			fiexdBox.animate({'right':0});
		})
		mask.on('click',function(){
			fiexdBox.animate({'right':-25+"%"},function(){
				$(this).css('display','none')
			})
			$(this).animate({
				'opacity':0
			},function(){
				$(this).css('display','none')
			})
		})

		form.on('submit(*)', function(data){
		  console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
		  console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
		  console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
		  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});
        $('.pageLeft').on('click','span',function(){

            var allInput = $('.layui-table').find('input');
            var child_i_dis = $(this).children('i').css('display');
            var chid_i_ele = $(this).children('i');
            if(child_i_dis == 'none'){
                chid_i_ele.css('display','block');
                $(this).css('border','1px solid #ffa000');
                allInput.prop('checked',true);
            }else{
                chid_i_ele.css('display','none');
                $(this).css('border','1px solid #ddd');
                allInput.prop('checked',false);
            }
            form.render('checkbox');
        })
	});
});
function clickFn(){
	var inputBtnCheck = $('.info_box>ul>li>span');
	inputBtnCheck.on('click',function(){
		var childB = $(this).children('b');
		var b = $(this).children('b').css('display');
		if(b == "none"){
			childB.css('display','block');
			$(this).parent().siblings().children('span').children('b').css('display','none');
			$(this).parent().siblings().children('span').css('border','1px solid #d2d2d2');
			$(this).parent().siblings().children('span').children('input').attr('checked',false);
			$(this).css('border','1px solid #009688');
			$(this).children('input').attr('checked',true);
			var text = $(this).next().text();
			var strLength = text.split('->');
			var nameStr = strLength[0];
			var role = strLength[1];
			$('#roleName').val(role);
			text = text.substr(0, text.indexOf('-'));
			$('#departName').val(text);
		}else{
			childB.css('display','none');
			$(this).css('border','1px solid #d2d2d2');
		}
	})
}

