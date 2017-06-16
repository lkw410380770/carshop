<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>添加分类</title>
	<link rel="stylesheet" type="text/css" href="/Public/Admin/font/iconfont.css">
	<link rel="stylesheet" type="text/css" href="/Public/Admin/layui/css/layui.css">
  	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/public.css">
  	<script type="text/javascript" src="/Public/Admin/js/jquery-1.9.1.min.js"></script>
  	<script type="text/javascript" src="/Public/Admin/layui/layui.js"></script>
</head>
<body>
<form class="layui-form" action="/index.php/Admin/Type/add" method="post" enctype="multipart/form-data">
	  <div class="layui-form-item">
	    <label class="layui-form-label">品牌名称</label>
	    <div class="layui-input-block">
	      <input type="text" name="type_name" required  lay-verify="required" placeholder="请输入名称" autocomplete="off" class="layui-input">
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