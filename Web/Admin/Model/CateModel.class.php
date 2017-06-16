<?php
namespace Admin\Model;
use Think\Model;
class CateModel extends Model {
    protected $_validate = array(
        array('name','require','管理员名称不得为空',1),
    );
    public function catetree(){
        $data = $this->order('id desc')->select();
        return $this->resort($data);
    }

    public function resort($data,$pid = 0,$level = 0){
       static $ret = array();
       foreach ($data as $k => $v){
           if($v['parentid'] == $pid){
               $v['level'] = $level;
               $ret[] = $v;
               $this->resort($data,$v['id'],$level+1);
           }
       }
       return $ret;

    }
}