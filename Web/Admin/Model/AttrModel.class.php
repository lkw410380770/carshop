<?php

namespace Admin\Model;

use Think\Model;

class AttrModel extends Model
{
    protected $_validate = array(
        array('name', 'require', '管理员名称不得为空', 1),
    );
}