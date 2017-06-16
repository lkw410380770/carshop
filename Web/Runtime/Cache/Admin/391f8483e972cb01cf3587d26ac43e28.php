<?php if (!defined('THINK_PATH')) exit();?>
<!--</html>-->
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title></title>
	<link rel="stylesheet" type="text/css" href="/Public/Admin/font/iconfont.css">
	<link rel="stylesheet" type="text/css" href="/Public/Admin/layui/css/layui.css">
	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/index.css">
	<script type="text/javascript" src="/Public/Admin/js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="/Public/Admin/layui/layui.js"></script>
	<script type="text/javascript" src="/Public/Admin/js/index.js"></script>
	<script type="text/javascript">
		layui.use(['layer', 'form'], function(){
			var layer = layui.layer
					,form = layui.form();
			layer.load();
		});
	</script>
</head>
<body>
<div class="wrap">
	<!-- 头部区域 -->
	<div class="top">
		<img src="/Public/Admin/images/logo.png">
		<span><?php echo session('username'); ?></span>
		<div class="userinfo">
			<div class="user_left">
				<span class="user_title"><img src=""></span>
				<h4><?php echo ($_SESSION['uname']); ?></h4>
				<h5><?php echo ($_SESSION['deparName']); ?></h5>
			</div>
			<span class="icon_down"><i class="iconfont icon-jiantouxia"></i></span>
			<div class="user_back">
				<ul>
					<li><a href="/index.php/Admin/Admin/loginout">注销登录</a></li>
				</ul>
			</div>
		</div>
	</div>

<!-- 左边导航区域 -->

<div class="left">
	<ul>
		<li>
			<a href="javascript:;">
				<i class="left_icon iconfont icon-jianyinghome"></i>系统主页
			</a>
		</li>
		<li>
			<a href="javascript:;" name="<?php echo U('Admin/index');?>"><i class="left_icon iconfont icon-yuangongguanli"></i>管理员管理<i class="right_icon iconfont icon-jiantouyou"></i></a>
		</li>
		<li>
			<a href="javascript:;"><i class="left_icon iconfont icon-yuangongguanli"></i>商品管理<i class="right_icon iconfont icon-jiantouyou"></i></a>
			<dl>
				<dd><a href="javascript:;" name="<?php echo U('Cate/index');?>" title="">商品分类</a></dd>
				<dd><a href="javascript:;" name="<?php echo U('Brand/index');?>" title="">品牌管理</a></dd>
				<dd><a href="javascript:;" name="<?php echo U('Goods/index');?>" title="">商品</a></dd>
			</dl>
		</li>
		<li>
			<a href="javascript:;"><i class="left_icon iconfont icon-yuangongguanli"></i>常用操作<i class="right_icon iconfont icon-jiantouyou"></i></a>
			<dl>
				
				<dd><a href="javascript:;" name="<?php echo U('Cate/index');?>" title="">栏目管理</a></dd>
				<dd><a href="" title="">文章管理</a></dd>
				<dd><a href="" title="">友情链接</a></dd>
			</dl>
		</li>
		<li>
			<a href="javascript:;"><i class="left_icon iconfont icon-yuangongguanli"></i>会原模版<i class="right_icon iconfont icon-jiantouyou"></i></a>
			<dl>

				<dd><a href="javascript:;" name="<?php echo U('MemberLevel/index');?>" title="">会员管理</a></dd>
				<dd><a href="" title="">会员等级</a></dd>
			</dl>
		</li>
		<li>
			<a href="javascript:;"><i class="left_icon iconfont icon-yuangongguanli"></i>商品类型<i class="right_icon iconfont icon-jiantouyou"></i></a>
			<dl>

				<dd><a href="javascript:;" name="<?php echo U('Type/index');?>" title="">商品类型</a></dd>

			</dl>
		</li>
		<li>
			<a href="javascript:;"><i class="left_icon iconfont icon-yuangongguanli"></i>系统设置<i class="right_icon iconfont icon-jiantouyou"></i></a>
			<dl>
				
				<dd><a href="javascript:;" name="<?php echo U('System/index');?>" title="">系统设置</a></dd>
			</dl>
		</li>
	</ul>
</div>
<!-- 右边头部当前位置 -->
<div class="nowPosition">
	<ul>
		<li>当前位置:</li>
		<li class="active">首页</li>
		<li><i class="iconfont icon-jiantouyou"></i></li>
		<li>计划管理</li>
	</ul>
</div>
<!-- 框架iframe -->
<div class="right">
	<iframe id="iframe" style="border:0; width:100%;position: absolute;left:0;top:1%;height:98%;" name="iframe" frameborder="0" src="home.html"></iframe>
</div>
<!-- 右侧底部版权 -->
<div class="foot">
	版权所有：贵州知商网络技术开发有限公司    服务热线：400-838-0299    地址：贵阳花果园财富广场1号楼27层
</div>
</div>
</body>
<script type="text/javascript">
	$(document).ready(function(){
		//一般直接写在一个js文件中
		layui.use(['layer', 'form','element'], function(){
			var layer = layui.layer;
			var element = layui.element();
			var formEle = form = layui.form();
			layer.closeAll();
			var element = layui.element();
			var iframeEle = $('#iframe');
			$('.left').on('click','a',function(){
				var htmlUrl = $(this).attr('name');
				if(htmlUrl == undefined){
					return false;
				}else{
					iframeEle.css({
						'opacity':0,
						'left':5+'%',
						'display':'none'
					});
					iframeEle.attr('src',htmlUrl).ready();
					iframeEle.css('display','block')
					iframeEle.animate({
						'opacity':1,
						'left':0
					},1000).dequeue();
				}
			});
		});
	})

</script>
</html>