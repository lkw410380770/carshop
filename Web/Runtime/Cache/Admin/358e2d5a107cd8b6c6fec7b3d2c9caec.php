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
<form class="layui-form" action="/index.php/Admin/Goods/add" method="post" enctype="multipart/form-data">
    <div class="layui-tab">
        <ul class="layui-tab-title">
            <li class="layui-this">基本信息</li>
            <li>商品描述</li>
            <li>会员价格</li>
            <li>商品属性</li>
            <li>商品图片</li>
        </ul>
        <div class="layui-tab-content">
            <div class="layui-tab-item layui-show">
                <div class="layui-form-item">
                    <label class="layui-form-label">商品名称</label>
                    <div class="layui-input-block">
                        <input type="text" name="goods_name" required lay-verify="required" placeholder="商品名称"
                               autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">缩略图</label>
                    <div class="layui-input-block">
                        <input type="file" name="original" required lay-verify="required" placeholder="缩略图"
                               autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">所属分类</label>
                    <div class="layui-input-block">
                        <select name="cate_id" lay-verify="required">
                            <option value="0">顶级分类</option>
                            <?php if(is_array($cate)): $i = 0; $__LIST__ = $cate;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$cate): $mod = ($i % 2 );++$i;?><option value="<?php echo ($cate["id"]); ?>"><?php echo str_repeat('-',$cate['level']*4); echo ($cate["name"]); ?>
                                </option><?php endforeach; endif; else: echo "" ;endif; ?>
                        </select>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">所属品牌</label>
                    <div class="layui-input-block">
                        <select name="brand_id" lay-verify="required">
                            <?php if(is_array($brand)): $i = 0; $__LIST__ = $brand;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$brand): $mod = ($i % 2 );++$i;?><option value="<?php echo ($brand["id"]); ?>"><?php echo ($brand["brand_name"]); ?></option><?php endforeach; endif; else: echo "" ;endif; ?>
                        </select>
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">市场价格</label>
                    <div class="layui-input-block">
                        <input type="text" name="market_price" required lay-verify="required" placeholder="市场价格"
                               autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">本店价格</label>
                    <div class="layui-input-block">
                        <input type="text" name="shop_price" required lay-verify="required" placeholder="本店价格"
                               autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-form-item">
                    <label class="layui-form-label">是否上架</label>
                    <div class="layui-input-block">
                        <input type="radio" name="onsale" value="1" title="是">
                        <input type="radio" name="onsale" value="0" title="否" checked>
                    </div>
                </div>

            </div>
            <div class="layui-tab-item">
                <textarea id="desc" name="goods_desc" style="display: none;"></textarea>
            </div>
            <div class="layui-tab-item">
                <?php if(is_array($levels)): $i = 0; $__LIST__ = $levels;if( count($__LIST__)==0 ) : echo "" ;else: foreach($__LIST__ as $key=>$level): $mod = ($i % 2 );++$i;?><div class="layui-form-item">
                        <label class="layui-form-label"><?php echo ($level["level_name"]); ?></label>
                        <div class="layui-input-block">
                            <input type="text" name="mp[<?php echo ($level["id"]); ?>]" placeholder=""
                                   autocomplete="off" class="layui-input">
                        </div>
                    </div><?php endforeach; endif; else: echo "" ;endif; ?>
            </div>
            <div class="layui-tab-item">内容4</div>
            <div class="layui-tab-item">内容5</div>
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
    layui.use(['form', 'element', 'layedit'], function () {
        var form = layui.form();
        var element = layui.element();
        var layedit = layui.layedit;
        var index = layedit.build('desc', {
            height: 180 //设置编辑器高度
        });

    })
</script>
</html>