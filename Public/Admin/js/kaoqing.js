layui.use(['layer','form','laydate'],function(){
	var layer = layui.layer;
	var form = layui.form();
	var laydate = layui.laydate;
	$(function(){
		$('#add_user').on('click',function(){
			layer.open({
					type:1,
					title:'添加行政记录',
					
					area:['800px','450px'],
					content:$('#addUser')
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
		form.on('submit(*)', function(data){
		  console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
		  console.log(data.form) //被执行提交的form对象，一般在存在form标签时才会返回
		  console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
		  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});
	});
})