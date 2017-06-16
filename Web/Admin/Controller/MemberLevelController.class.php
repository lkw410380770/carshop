<?php
namespace Admin\Controller;
use Think\Controller;
class MemberLevelController extends Controller {

    public function index(){
        header('Content-type:text/html;charset=utf-8');
        $member = D('memberLevel');
        $data = $member->select();
        $this->assign('brandList',$data);
        $this->display();
    }

    public function add(){
        $member = D('memberLevel');
        if(IS_POST){
            $data = I('post.');
           $res = $member->add($data);
           if($res){
               $this->success('添加会员等级成功',U('MemberLevel/index'));
           }else{
               $this->error('添加失败');
           }
           return;
        }
        $this->display();
    }

}