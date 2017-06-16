<?php
namespace Admin\Model;
use Think\Model;
class AdminModel extends Model {
    protected $_validate = array(
        array('name','require','管理员名称不得为空',1),
        array('pass','require','密码不得为空',1),
        array('name','','账号已存在',0,'unique',1),
    );
}