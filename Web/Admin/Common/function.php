<?php
/**
 * Created by PhpStorm.
 * User: lkw123321
 * Date: 2017/4/23
 * Time: 14:30
 */
function uploadImg(){
    if ($_FILES) {
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728;// 设置附件上传大小
        $upload->exts = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        $upload->rootPath = './Uploads/'; // 设置附件上传根目录
        $upload->savePath = 'Brand/'; // 设置附件上传（子）目录
        // 上传文件
        $info = $upload->upload();
        $logo ='./Uploads/'.$info['brand_logo']['savepath'].$info['brand_logo']['savename'];
        $image = new \Think\Image();
        $image->open($logo);
        $image->thumb(100,30)->save($logo);
        return $logo;
    }
}

/**
 *商品生成多张图片
 */
function uploadImgList(){
    if ($_FILES) {
        $upload = new \Think\Upload();// 实例化上传类
        $upload->maxSize = 3145728;// 设置附件上传大小
        $upload->exts = array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
        $upload->rootPath = './Uploads/'; // 设置附件上传根目录
        $upload->savePath = 'Goods/'; // 设置附件上传（子）目录
        // 上传文件
        $info = $upload->upload();
        $data['original'] ='./Uploads/'.$info['original']['savepath'].$info['original']['savename'];
        $data['big_thumb'] ='./Uploads/'.$info['original']['savepath'].'big_'.$info['original']['savename'];
        $data['mid_thumb'] ='./Uploads/'.$info['original']['savepath'].'mid_'.$info['original']['savename'];
        $data['sm_thumb'] ='./Uploads/'.$info['original']['savepath'].'sm_'.$info['original']['savename'];
        $image = new \Think\Image();
        $image->open($data['original']);
        $image->thumb(362,362)->save($data['big_thumb']);
        $image->thumb(222,222)->save( $data['mid_thumb']);
        $image->thumb(67,67)->save( $data['sm_thumb']);
        return $data;
    }
}