layui.use(['layer','form'],function(){
	var layer = layui.layer;
	// var form = layui.form();
	// 添加员工js
	$(function(){
		$('#addPeopleBtn').on('click',function(){
		layer.open({
			    type:1,
			    title:"添加员工",
				content:$('#addPeople'),
				area:['400px','150px'],
				btn:['确认','取消'],
				yes:function(index){
					var did = $("#defaultDid").val();
					var defaultUid = $("#defaultUid").val();
					$.post(DepartmentUrl,{did:did,uid:defaultUid}, function (data) {
						var data = eval("("+data+")");
						if(data.state == 101){
							layer.msg('添加成功!',{
								icon:1,
								time:1000,
							   },function(){
								   location.reload()
							   });
						}else if(data.state == 106){
							layer.msg('该员工已在本部门中!',{
								icon:0,
								time:1000,
							});
						}else{
							layer.msg(data.msg,{
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
	// 添加子部门js
	$('#addDepartBtn').on('click',function(){
		layer.open({
			    type:1,
			    title:"创建子部门",
				content:$('#addDepart'),
				area:['400px','150px'],
				btn:['确认','取消'],
				yes:function(index){
					var parent = $("#parent").val();
					var dname = $("#name").val();
					$.post(DepaAddUrl,{parent:parent,name:dname}, function (data) {
						var data = eval("("+data+")");
						if(data.state == 105){
							layer.msg('创建成功!',{
								icon:1,
								time:1000,
							   },function(){
								   location.reload()
							   });
						}else if(data.state == 104){
							layer.msg(data.content,{
								icon:0,
								time:1000,
							});
						}else {
							layer.msg(data.content,{
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
	
	//修改部门
	$('#editDepartBtn').on('click',function(){
		layer.open({
			    type:1,
			    title:"编辑部门",
				content:$('#editDepart'),
				area:['400px','230px'],
				btn:['确认','取消'],
				yes:function(index){
					var newadminid = $("#newadminid").val();  //用户id
					var did = $("#did").val(); //部门id
					var dname = $("#dname").val();  //部门名称
					$.post(UpdateUrl,{id:did,newadminid:newadminid,name:dname}, function (data) {
						var data = eval("("+data+")");
						if(data.state == 101){
							layer.msg('编辑成功!',{
								icon:1,
								time:1000,
							   },function(){
								   location.reload()
							   });
						}else {
							layer.msg(data.msg,{
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
	
	//添加或修改本部门负责人
	$('#uname').on('click',function(){
		layer.open({
			    type:1,
			    title:"添加负责人",
				content:$('#add_user_style'),
				area:['400px','230px'],
				btn:['确认','取消'],
				yes:function(index){
					var id = $('input:radio[name="username"]:checked').prev().attr("value");
					var newadminid = $('input:radio[name="username"]:checked').attr("value");
					$("#newadminid").val(id);
					$("#uname").val(newadminid);
					layer.close(index);
				}
		})
	})
	
	
	
	/*选择员工*/
	 $('#defaultUname').on('click', function(){
		layer.open({
			type: 1,
			title: '选择员工',
			maxmin: true, 
			shadeClose: true, //点击遮罩关闭层
			area : ['800px' , '650'],
			content:$('#add_defaultUserList_style'),
			btn:['提交','取消'],
			yes:function(index,layero){	
				var defaultUid = $('input:radio[name="defaultusername"]:checked').prev().attr("value");
				var defaultusername = $('input:radio[name="defaultusername"]:checked').attr("value");			
				$("#defaultUid").val(defaultUid);
				$("#defaultUname").val(defaultusername);
				layer.close(index);
			}
		});
	});
	
	
	
	//遮罩层滑动
	var slideBox = $('.rightSilde');
	var mask = $('.mask'); //遮罩层
	$('.lookDetails').on('click',function(){
		var id = $(this).attr('data-id');
		var rid = $(this).attr('data-rid');
		$.ajax({
			type:'post',
			url:DetailUrl,
			dataType:'JSON',
			data:{id:id,rid:rid},
			success:function(data){
				$('.uname').html(data['info']['uname']);
				$('.deparname').html(data['info']['department']);
				$('.rname').html(data['info']['rname']);
				$('.levecode').html(data['info']['levelCode']);
				$('.account').html(data['info']['account']);
				$('.autograph').html(data['info']['autograph']);
			}
		})
		mask.css('display','block');
		mask.animate({'opacity':1});
		slideBox.css('display','block');
		slideBox.animate({'right':0})
	})
	mask.on('click',function(){
		slideBox.animate({'right':-30+"%"},function(){
			$(this).css('display','none')
		})
		$(this).animate({
			'opacity':0
		},function(){
			$(this).css('display','none')
		})
	})
	})
})