<?php
namespace Admin\Controller;
use Think\Controller;
class AttrController extends Controller {

    public function index(){
        header('Content-type:text/html;charset=utf-8');
        $brand = D('attr');
        $id = I('get.id');
        $data = $brand->where(array('type_id'=>$id))->select();
        $this->assign('brandList',$data);
        $this->assign('type',$id);
        $this->display();
    }

    public function add(){
        $id = I('get.id');
        if(IS_POST){
            $attr = D('attr');
            $data = I('post.');
            $res = $attr->add($data);
            if($res){
                $this->success('添加成功',U('Attr/index',array('typeid'=>$data['type_id'])));
            }else{
                $this->error('添加失败');
            }
            return;
        }
        $this->assign('type',$id);
        $this->display();
    }


}