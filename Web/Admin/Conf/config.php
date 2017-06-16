<?php
$_config=array(
	//自定义模版潜换 
    
	'TMPL_PARSE_STRING' => array(
		'__PUBLIC__'   => __ROOT__ . '/Public/Admin',
		'__EUDEITOR__' => __ROOT__ . '/Public/Ueditor',
	),
	//自定义success和error的提示页面模板
	// 'TMPL_ACTION_SUCCESS'=>'Public:jump',
	// 'TMPL_ACTION_ERROR'=>'Public:jump',

	
	//扩展
	//'APP_AUTOLOAD_PATH'=>'@.TagLib',
);	
return array_merge(include './Web/Common/Conf/config.php',$_config);
?>