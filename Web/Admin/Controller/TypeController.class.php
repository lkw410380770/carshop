<?php
namespace Admin\Controller;
use Think\Controller;
class TypeController extends Controller {

    public function index(){
        header('Content-type:text/html;charset=utf-8');
        $brand = D('type');
        $data = $brand->select();
        $this->assign('brandList',$data);
        $this->display();
    }

    public function add(){
        $type = D('type');
        if(IS_POST){
            $data = I('post.');
           $res = $type->add($data);
           if($res){
               $this->success('添加成功',U('Type/index'));
           }else{
               $this->error('添加失败');
           }
           return;
        }
        $this->display();
    }

}