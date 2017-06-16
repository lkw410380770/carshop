<?php
namespace Admin\Controller;
use Think\Controller;
class AdminController extends Controller {
    public function index(){
        $model = D('admin');
        $data = $model->select();
        $this->assign('user',$data);
        $this->display();
    }
    public function lst(){
        $this->display();
    }
    public function edit(){
        $this->display();
    }
    public function add(){
        if(IS_POST){
           $model = D('admin');
           if($model->create()){
               $model->pass = md5($model->pass);
               if($model->add()){
                    $this->success('添加成功',U('Admin/index'));
               }else{
                   $this->error('添加失败');
               }
           }else{
               $this->error($model->getError());
           }
            return;
        }
        $this->display();
    }
    public function details(){
        $id = I('get.id');
        $model = D('admin');
        $map['id'] = $id;
        $data = $model->where($map)->find();

        $this->assign('details',$data);
        $this->display();
    }
}