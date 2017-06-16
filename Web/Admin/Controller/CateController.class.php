<?php
namespace Admin\Controller;
use Think\Controller;
class CateController extends Controller {

    public function index(){
        header('Content-type:text/html;charset=utf-8');
        $cate = D('cate');
        $cateres = $cate->catetree();
        $this->assign('tree',$cateres);//栏目树
        $this->display();
    }
    public function add(){
        $cate = D('cate');
        if(IS_POST){
            if($cate->create()){
                if($cate->add()){
                    $this->success('添加成功',U('Cate/index'));
                }else{
                    $this->error('添加失败');
                }
            }else{
                $this->error($cate->getError());
            }
            return;
        }
        $cateres = $cate->catetree();
        $this->assign('cate',$cateres);
        $this->display();
    }

    public function edit(){
        $cate = D('cate');
        $id = I('get.id');
        $map['id'] = $id;
        if(IS_POST){
            if($cate->create()){
                if($cate->save() !== false){
                    $this->success('添加成功',U('Cate/index'));
                }else{
                    $this->error('添加失败');
                }
            }else{
                $this->error($cate->getError());
            }
            return;
        }
        $cates = $cate->where($map)->find();
        $cateres = $cate->catetree();
        $this->assign('cates',$cates);
        $this->assign('cate',$cateres);
        $this->display();
    }

}