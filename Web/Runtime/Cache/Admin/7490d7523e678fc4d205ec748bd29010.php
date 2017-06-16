<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>添加管理员</title>
	<link rel="stylesheet" type="text/css" href="/Public/Admin/font/iconfont.css">
	<link rel="stylesheet" type="text/css" href="/Public/Admin/layui/css/layui.css">
  	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/public.css">
  	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/plan.css">
  	<script type="text/javascript" src="/Public/Admin/js/jquery-1.9.1.min.js"></script>
  	<script type="text/javascript" src="/Public/Admin/layui/layui.js"></script>
	<script type="text/javascript" src="/Public/Admin/js/plan.js"></script>
</head>
<body>
<form class="layui-form" action="/index.php/Admin/Admin/add" method="post">
	  <div class="layui-form-item">
	    <label class="layui-form-label">账号</label>
	    <div class="layui-input-block">
	      <input type="text" name="name" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
	    </div>
	  </div>
	  <div class="layui-form-item">
    <label class="layui-form-label">密码框</label>
    <div class="layui-input-inline">
      <input type="password" name="pass" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
    </div>
    <div class="layui-form-mid layui-word-aux">辅助文字</div>
  </div>
	  <div class="layui-form-item">
	   <div class="layui-input-block">
	      <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
	      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
	    </div>
	  </div>
</form>

</body>
</html>