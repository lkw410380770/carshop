<?php
namespace Admin\Controller;
use Think\Controller;
class GoodsController extends Controller {

    public function index(){
        header('Content-type:text/html;charset=utf-8');
        $goods = D('GoodsView');
        $count = $goods->count();
        $page = new \Think\Page($count,10);
        $show = $page->show();
        $list = $goods->order('id desc')->limit($page->firstRow.','.$page->listRows)->select();
        $this->assign('list',$list);
        $this->assign('page',$show);
        $this->display();
    }

    public function add(){
        $goods = D('goods');
        if(IS_POST){
            $data = I('post.');
            $imglist = uploadImgList();
            $data['original'] = $imglist['original'];
            $data['max_thumb'] = $imglist['big_thumb'];
            $data['middle_thumb'] = $imglist['mid_thumb'];
            $data['sm_thumb'] = $imglist['sm_thumb'];
            $data['goods_sn'] = time().rand(111111,999999);
            $mpres = I('mp');
            $res = $goods->add($data);
           if($res){
               if($mpres){
                   $mp = D('member_price');
                   foreach ($mpres as $k => $v){
                       $mpdata[$k]['level_id'] = $k;
                       $mpdata[$k]['goods_id'] = $res;
                       $mpdata[$k]['price'] = $v;
                   }
                   $arr =  array_values($mpdata);
                   $mp->addAll($arr);
               }
               $this->success('成功',U('Goods/index'));
           }else{
               $this->error('添加失败');
           }
           return;
        }
        $cate = D('cate');
        $cateres = $cate->catetree();
        $brand = D('brand');
        $brandres = $brand->order('id desc')->select();
        $this->assign('cate',$cateres);
        $member = M('member_level');
        $levels = $member->order('id desc')->select();
        $this->assign('levels',$levels);
        $this->assign('brand',$brandres);
        $this->display();
    }

}