layui.use(['layer','form','laydate'],function(){
	var layer = layui.layer;
	var form = layui.form();
	var laydate = layui.laydate;
	$(function(){
		$('#add_user').on('click',function(){
			layer.open({
					type:1,
					title:'工资导入',
					area:['400px','170px'],
					content:$('#addUser')
			})
		});

	});
})