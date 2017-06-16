layui.use(['layer'],function(){
	var layer = layui.layer;
	$(function(){
	$('.addDepar').on('click',function(){
		layer.prompt({
		  formType: 0,
		  value: '',
		  anim:0,
		  title: '请输入要添加的部门名称',
		  area: ['400px', '50px'] //自定义文本域宽高
		}, function(value, index, elem){
		  alert(value); //得到value
		  layer.close(index);
		});
	})
});
})