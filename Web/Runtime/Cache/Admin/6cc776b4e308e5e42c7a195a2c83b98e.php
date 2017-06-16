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
        <a href="/index.php/Admin/Goods/add"><span class="addPlan btnright"><i class="iconfont icon-jiahao"></i>添加品牌</span></a>
    </div>
    <div class="info_table">
        <table class="layui-table layui-form" lay-even>
            <thead>
            <tr>
                <th width="50"><input type="checkbox" name="" lay-skin="primary"></th>
                <th width="200">id</th>
                <th>商品名称</th>
                <th>商品LOGO</th>
                <th>市场价格</th>
                <th>本店价格</th>
                <th>是否上架</th>
                <th>所属栏目</th>
                <th>所属品牌</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php if(is_array($list)): $i = 0; $__LIST__ = $list;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$vo): $mod = ($i % 2 );++$i;?><tr>
                    <td><input type="checkbox" name="" lay-skin="primary"></td>
                    <td><?php echo ($vo["id"]); ?></td>
                    <td><?php echo ($vo["goods_name"]); ?></td>
                    <td><img src="/<?php echo ($vo["sm_thumb"]); ?>" alt=""></td>
                    <td><?php echo ($vo["market_price"]); ?></td>
                    <td><?php echo ($vo["shop_price"]); ?></td>
                    <td><?php echo ($vo["onsale"]); ?></td>
                    <td><?php echo ($vo["name"]); ?></td>
                    <td><?php echo ($vo["brand_name"]); ?></td>
                    <td>
                        <a onClick="" href="/index.php/Admin/Goods/edit/id/<?php echo ($vo["id"]); ?>" title="详情" class="tableBtn co1"><i
                                class="iconfont icon-xiangqingshuoming"></i>修改</a>
                        <a title="删除" href="/index.php/Admin/Goods/deletePlan/id/<?php echo ($tree["id"]); ?>" class="tableBtn co2"><i
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