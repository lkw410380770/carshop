layui.use(['layer','form'],function(){
	var layer = layui.layer;
	var form = layui.form();
	$(function(){
		$('#add_user').on('click',function(){
			var identy = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/; //验证身份证
			layer.open({
					type:1,
					title:'档案录入',
					area:['800px','640px'],
					content:$('#addUser'),
					btn:['录入','取消'],
					yes:function(index,layero){
						var account = $("#account").val();
						var password = $("#password").val();
						var did = $('#did').val();
						var sex = $('input:radio[name="sex"]:checked').val();
						var admin = $('input:radio[name="admin"]:checked').val();
						var name  = $("#name").val();
						var identity = $("#identity").val();
						var email = $("#email").val();
						var age = $("#age").val();
						var education = $("#education").val();
						var major = $("#major").val();
						var state = $('input:radio[name="state"]:checked').val();
						var autograph = $("#autograph").val();
						var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
						if (account==""){
							layer.alert('账户不能为空!',{
								title: '提示框',
								icon:0,
							});
							return false;
						}
						if(!myreg.test(account))
						{
							layer.alert('请输入有效的手机号码！',{
								title: '提示框',
								icon:0,

							});
							return false;
						}
						if (password==""){
							layer.alert('密码不能为空!',{
								title: '提示框',
								icon:0,

							});
							return false;
						}
						if (did==""){
							layer.alert('部门不能为空!',{
								title: '提示框',
								icon:0,

							});
							return false;
						}
						if (name==""){
							layer.alert('姓名不能为空!',{
								title: '提示框',
								icon:0,

							});
							return false;
						}
						if(identy.test(identity)){
							layer.alert('身份证格式错误!',{
								title: '提示框',
								icon:0,

							});
							return false;
						}

						$.post(danganUrl,{account:account,password:password,did:did,admin:admin,sex:sex,name:name,identity:identity,email:email,age:age,education:education,major:major,state:state,autograph:autograph}, function (data) {
							var data = eval("("+data+")");
							if(data.state == 101){
								layer.msg('录入成功!',{
									icon:1,
									time:1000,
								},function(){
									location.reload()
								});
							}else if(data.state == 103){
								layer.msg('账户已存在!',{
									icon:0,
									time:1000
								});
							} else {
								layer.msg('系统异常,请稍后重试!',{
									icon:0,
									time:1000
								},function(){
									location.reload()
								});
							}

						});
					}
				})
			})
        $('.pageLeft').on('click','span',function(){

            var allInput = $('.layui-table').find('input');
            var child_i_dis = $(this).children('i').css('display');
            var chid_i_ele = $(this).children('i');
            if(child_i_dis == 'none'){
                chid_i_ele.css('display','block');
                $(this).css('border','1px solid #ffa000');
                allInput.prop('checked',true);
            }else{
                chid_i_ele.css('display','none');
                $(this).css('border','1px solid #ddd');
                allInput.prop('checked',false);
            }
            form.render('checkbox');
        })
		form.verify({
			idcard:function(value){
				var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
 				if(!pattern.test(value)){
 					return "身份证号输入有误";
 				} 
			}
		})
	});
})