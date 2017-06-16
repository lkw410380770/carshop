layui.use(['layer','form'],function(){
	var layer = layui.layer;
	var form = layui.form();
	var guanli = $('.guanli');
	guanli.on('click',function(){
		$.ajax({
			type:'post',
			url:guanliUrl,
			data{},
			success:function(){

			}
		})
		layer.open({
			type:1,
			title:"计划规则管理",
			content:$('#guanliBox'),
			btn:["确定","取消"],
			area:['400px','400px'],
			success:function() {
            }
		})
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
})