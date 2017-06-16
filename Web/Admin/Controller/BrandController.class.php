<?php
namespace Admin\Controller;
use Think\Controller;
class BrandController extends Controller {

    public function index(){
        header('Content-type:text/html;charset=utf-8');
        $brand = D('brand');
        $data = $brand->select();
        $this->assign('brandList',$data);
        $this->display();
    }

    public function add(){
        $brand = D('brand');
        if(IS_POST){
            $data = I('post.');
            $data['brand_logo'] = uploadImg();
           $res = $brand->add($data);
           if($res){
               $this->success('添加品牌成功',U('Brand/index'));
           }else{
               $this->error('添加失败');
           }
           return;
        }
        $this->display();
    }

}