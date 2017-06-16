<?php

namespace Admin\Model;

use Think\Model;

class BrandModel extends Model
{
    protected $_validate = array(
        array('level_name','require', '会员等级不能为空', 1),
        array('points_min','require', '积分下限不能为空', 1),
        array('points_max','require', '积分上限不能为空', 1),
        array('rate','require', '折扣率', 1),
        array('level_name','require', '会员等级名称不能重复',1,unique),
    );
}