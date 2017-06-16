<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>修改分类</title>
	<link rel="stylesheet" type="text/css" href="/Public/Admin/font/iconfont.css">
	<link rel="stylesheet" type="text/css" href="/Public/Admin/layui/css/layui.css">
  	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/public.css">
  	<script type="text/javascript" src="/Public/Admin/js/jquery-1.9.1.min.js"></script>
  	<script type="text/javascript" src="/Public/Admin/layui/layui.js"></script>
</head>
<body>
<form class="layui-form" action="/index.php/Admin/Type/add" method="post">
	<input type="hidden" name="id" value="<?php echo ($cates["id"]); ?>">
	  <div class="layui-form-item">
	    <label class="layui-form-label">分类名称</label>
	    <div class="layui-input-block">
	      <input type="text" name="name" required value="<?php echo ($cates["name"]); ?>" lay-verify="required" autocomplete="off" class="layui-input">
	    </div>
	  </div>
	<div class="layui-form-item">
		<label class="layui-form-label">上级分类</label>
		<div class="layui-input-block">
			<select name="parentid" lay-verify="required">
				<option value="0">顶级分类</option>
				<?php if(is_array($cate)): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$cate): $mod = ($i % 2 );++$i;?><option <?php if($cates['parentid'] == $cate['id']): ?>selected="selected"<?php endif; ?> value="<?php echo ($cate["id"]); ?>"><?php echo str_repeat('-',$cate['level']*4); echo ($cate["name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
			</select>
		</div>
	</div>
	<div class="layui-form-item">
	   <div class="layui-input-block">
	      <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
	      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
	    </div>
	</div>
</form>

</body>
<script>
	layui.use(['form'],function(){
		var form = layui.form();
	})
</script>
</html>