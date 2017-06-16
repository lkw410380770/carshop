<?php if (!defined('THINK_PATH')) exit();?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>管理员列表</title>
  	<link rel="stylesheet" type="text/css" href="/Public/Admin/font/iconfont.css">
	<link rel="stylesheet" type="text/css" href="/Public/Admin/layui/css/layui.css">
  	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/public.css">
  	<link rel="stylesheet" type="text/css" href="/Public/Admin/css/plan.css">
  	<script type="text/javascript" src="/Public/Admin/js/jquery-1.9.1.min.js"></script>
  	<script type="text/javascript" src="/Public/Admin/layui/layui.js"></script>
	<script type="text/javascript" src="/Public/Admin/js/addAdmin.js"></script>
</head>
<body>
<div class="bigBox">
  	 <div class="titleNav">
	  	<span class="futitle">管理员列表</span>
	  	<a href="/index.php/Admin/Admin/add"><span class="addPlan btnright"><i class="iconfont icon-jiahao"></i>添加管理员</span></a>
  	</div>
  <div class="info_table">
    <table class="layui-table layui-form" lay-even>
		  <thead>
		    <tr>
		      <th width="50"><input type="checkbox" name="" lay-skin="primary"></th>
		      <th width="200">id</th>
		      <th>管理员名称</th>
		      <th>操作</th>
		    </tr> 
		  </thead>
		  <tbody>
		  <?php if(is_array($user)): $i = 0; $__LIST__ = $user;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$data): $mod = ($i % 2 );++$i;?><tr>
				<td><input type="checkbox" name="" lay-skin="primary"></td>
				<td><?php echo ($data["id"]); ?></td>
				<td><?php echo ($data["name"]); ?></td>
				<td>
					<a onClick=""  href="/index.php/Admin/Admin/details/id/<?php echo ($data["id"]); ?>" title="详情"  class="tableBtn co1"><i class="iconfont icon-xiangqingshuoming"></i>详情</a>
					<a title="删除" href="/index.php/Admin/Admin/deletePlan/id/<?php echo ($data["id"]); ?>"  onclick="member_del(this,'1')" class="tableBtn co2" ><i class="iconfont icon-delete"></i>删除</a>
				</td>
			</tr><?php endforeach; endif; else: echo "" ;endif; ?>
		  </tbody>
	</table>
  </div>

  <!-- 分页 -->
  <div class="pageBox"><div class="pageRight"><?php echo ($page); ?></div></div>
</div>
</body>
</html>
</body>
<script>
	var guanliUrl = "<?php echo U('Plan/guanliBox');?>";
</script>