<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>品牌管理</title>
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
        <span class="futitle">品牌管理</span>
        <a href="/index.php/Admin/Brand/add"><span class="addPlan btnright"><i class="iconfont icon-jiahao"></i>添加品牌</span></a>
    </div>
    <div class="info_table">
        <table class="layui-table layui-form" lay-even>
            <thead>
            <tr>
                <th width="50"><input type="checkbox" name="" lay-skin="primary"></th>
                <th width="200">id</th>
                <th>品牌名称</th>
                <th>品牌LOGO</th>
                <th>品牌地址</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php if(is_array($brandList)): $i = 0; $__LIST__ = $brandList;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$tree): $mod = ($i % 2 );++$i;?><tr>
                    <td><input type="checkbox" name="" lay-skin="primary"></td>
                    <td><?php echo ($tree["id"]); ?></td>
                    <td><?php echo ($tree["brand_name"]); ?></td>
                    <td><img src="/<?php echo ($tree["brand_logo"]); ?>" alt=""></td>
                    <td><?php echo ($tree["brand_url"]); ?></td>
                    <td>
                        <a onClick="" href="/index.php/Admin/Brand/edit/id/<?php echo ($tree["id"]); ?>" title="详情" class="tableBtn co1"><i
                                class="iconfont icon-xiangqingshuoming"></i>修改</a>
                        <a title="删除" href="/index.php/Admin/Brand/deletePlan/id/<?php echo ($tree["id"]); ?>" class="tableBtn co2"><i
                                class="iconfont icon-delete"></i>删除</a>
                    </td>
                </tr><?php endforeach; endif; else: echo "" ;endif; ?>
            </tbody>
        </table>
    </div>

    <!-- 分页 -->
    <div class="pageBox">
        <div class="pageRight"><?php echo ($page); ?></div>
    </div>
</div>
</body>
</html>
</body>
<script>
    var guanliUrl = "<?php echo U('Plan/guanliBox');?>";
</script>