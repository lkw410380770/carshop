layui.use(['layer','form','layedit'],function(){
	var layer = layui.layer;
	var form = layui.form();
    var layedit = layui.layedit;
	var guanli = $('.guanli');
    var editIndex = layedit.build('progtessText',{
        	height:150
    });
    var task_id = "";
	$('.btnAddPinlun').on('click',function(){
		layer.open({
				type:1,
				title:"更新进度",
				content:$('.progress'),
				btn:["确定","取消"],
				area:['600px','350px'],
				yes:function(index){
                  var text_info = layedit.getText(editIndex);
					$.ajax({
                        type: 'POST',
                        url: updateUrl ,
                        data: {
                            id:task_id,
							info:text_info
                        },
                        dataType: 'json',
                        success:function(res){
                        	var li = "";
							if(res){
								var imgUrl = rootlen+res.face;
								li = '<li><div class="top-con"><div class="jindu_title"> <span><img src="'+imgUrl+'"></span> <h4>'+res.name+'</h4> <h5>2017-04-05</h5> </div> <p>'+text_info+'</p><div class="pinlunBtn">评论<span>(10)</span></div></div>';
								$('#progressBox').prepend(li);
                                layer.msg('更新成功',{icon:1,time:1000});
								layer.close(index);
							}else{
                                layer.msg('更新失败',{icon:1,time:1000});
                                layer.close(index);
							}
                        }
					})
				}
		})
	})
	guanli.on('click',function(){
		layer.open({
			type:1,
			title:"计划规则管理",
			content:$('#guanliBox'),
			btn:["确定","取消"],
			area:['400px','400px'],
			success:function(){

			}
		});
	});
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
	});
	// 添加评论
	$('.jindu_info').on('click','div.pinlunBtn',function(){
		var dis_dl = $(this).parent().next().css('display');
		if(dis_dl == 'none'){
			$(this).parent().next().css('display','block');
		}else{
			$(this).parent().next().css('display','none');
		}
		
	});
	var mask = $('.mask');
	var taskSlider = $('.taskSlider');
	//查看详情
	$('.layui-table').on('click','a.details',function(){
		var t_id = $(this).attr('data');
        task_id = $(this).attr('data');
		mask.css('display','block');
		mask.animate({'opacity':1});
		var num = layer.load();
		$.ajax({
            type: 'POST',
            url: ajaxGetProgressUrl ,
            data: {
                id:t_id
            },
            dataType: 'json',
            success:function(res){
                layer.close(num);
				var stateNum = res['taskDetails']['state'];
				var stateBox = $('.task_title>span');
				switch (stateNum){
					case 1:
                        stateBox.text('待接受');
						break;
					case 2:
                        stateBox.text('进行中');
						break;
                    case 3:
                        stateBox.text('已完成');
                        break;
                    case -1:
                        stateBox.text('暂停中');
                        break;
					default:
                        stateBox.text('暂停中');6
				}
                $('.task_title>h4').text(res['taskDetails']['title']);
                $('.task_title>h5').text("任务截止时间:"+res['taskDetails']['time']);
                $('.neirong').text(res['taskDetails']['info']);

               if(res['progress'] != ""){
                   $('#progressBox').html("");
                   var li = "";
                   $.each(res['progress'],function(i,ele){

                       var imgUrlThis = rootlen+ele['face'];
                       li += '<li><div class="top-con"><div class="jindu_title"><span><img src="'+imgUrlThis+'"></span><h4>'+ele['name']+'</h4><h5>'+ele['time']+'</h5></div><p>'+ele['tsinfo']+'</p> <div class="pinlunBtn">评论<span>(10)</span></div></div></li>';
                   });
                   $('#progressBox').append(li);

                   taskSlider.css('display','block');
                   taskSlider.animate({'right':0});
			   }else{
				   var span = $('<span style="display: block;margin:0 auto;width:100px;">暂无数据</span>');
                   $('#progressBox').html("");
                   $('#progressBox').append(span);
                   taskSlider.css('display','block');
                   taskSlider.animate({'right':0});
			   }
            }
		})

	});
	mask.on('click',function(){
		$(this).animate({'opacity':0},function(){
			$(this).css('display','none');
		});
		taskSlider.animate({'right':-25+'%'},function(){
				$(this).css('display','none');
		})
	});

	var stateValue = $('.stateValue').val();
	if(stateValue == ""){
		$('.twoNav>ul>li').eq(0).addClass('touchNow').siblings().removeClass('touchNow');
	}else if(stateValue == 1){
        $('.twoNav>ul>li').eq(1).addClass('touchNow').siblings().removeClass('touchNow');
	}else if(stateValue == 2){
        $('.twoNav>ul>li').eq(2).addClass('touchNow').siblings().removeClass('touchNow');
	}else if(stateValue == -1){
        $('.twoNav>ul>li').eq(3).addClass('touchNow').siblings().removeClass('touchNow');
	}else if(stateValue == 3){
        $('.twoNav>ul>li').eq(4).addClass('touchNow').siblings().removeClass('touchNow');
	}

	//删除任务
	$('.layui-table').on('click','a.deleteTask',function(event){
		var slefId = $(this).attr('data');
        layer.confirm('是否删除?', {icon: 3, title:'删除任务'}, function(index){
            //do something
			location.href = deleUrl+slefId;

        });
	});
})