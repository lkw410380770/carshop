layui.use(['layer','form','laydate','layedit','upload'],function(){
	var layer = layui.layer;
	var form = layui.form();
	var laydate = layui.laydate;
	var layedit = layui.layedit;
// 富文本编辑器初始化
  var editIndex = layedit.build('describe',{
  					height:150
  }); 
  var editTwo = layedit.build('measure',{
  					height:150
  });
  // layedit.getText(index);获取编辑器文本内容
//时间控件初始化
  var start = {
    min: laydate.now()
    ,max: '2099-06-16 23:59:59'
    ,istoday: false
    ,choose: function(datas){
      end.min = datas; //开始日选好后，重置结束日的最小日期
      end.start = datas //将结束日的初始值设定为开始日
    }
  };
  var end = {
    min: laydate.now()
    ,max: '2099-06-16 23:59:59'
    ,istoday: false
    ,choose: function(datas){
      start.max = datas; //结束日选好后，重置开始日的最大日期
    }
  };
  
  document.getElementById('startTime').onclick = function(){
    start.elem = this;
    laydate(start);
  }
  document.getElementById('endTime').onclick = function(){
    end.elem = this
    laydate(end);
  }
  //选择提交人
    var ChoicePeople = $('.ChoicePeople');
    var mask = $('.mask');
    var silderBox = $('.sliderPeople');
    var silderDepartBox = $('.sliderDepart');
    var bStrop = 0;
    ChoicePeople.on('click',function(){
        bStrop = 1;
        mask.css('display','block');
        mask.animate({'opacity':1});
        silderBox.css('display','block');
        silderBox.animate({'right':0});
        $('.foot-bottom').children('span').css('display','none');
        $('.foot-bottom').children('strong').css('display','none');
        $('.sort_box').find('i').css('display','none');
        $('.sort_box').find('input').removeAttr('checked');

    });
    var numCheck = 0;
    $('.descWrapBox').on('click','li.addDescPeople',function(){
        numCheck = $(this).parents('div.descContent').attr('data');
        var index = $(this).index();
        bStrop = 0;
        mask.css('display','block');
        mask.animate({'opacity':1});
        silderBox.css('display','block');
        silderBox.animate({'right':0});
        $('.foot-bottom').children('span').css('display','block');
        $('.foot-bottom').children('strong').css('display','block');
         $('.sort_box').find('i').css('display','none');
        $('.sort_box').find('input').removeAttr('checked');
    });
    var numDepart = 0;
     $('.descWrapBox').on('click','li.addDescDeaprt',function(){
        numDepart = $(this).parents('div.descContent').attr('data');
        var index = $(this).index();
        bStrop = 0;
        mask.css('display','block');
        mask.animate({'opacity':1});
        silderDepartBox.css('display','block');
        silderDepartBox.animate({'right':0});
        $('.borderEle').css('border','1px solid #ddd');
        $('.borderEleI').css('display','none');
    })
  //添加自定义计划
  var addDescBtn = $('.addDescBtn');
  addDescBtn.on('click',function(){
    var strcust = '<div class="descContent"><ul><li class="line-bottom"><span class="leftInfo">标题</span><div class="rightInfo"><ul><li class="textareaInfo"><input type="" name="" placeholder="请输入计划标题"></li></ul></div></li><li><span class="leftInfo">计划内容</span><div class="rightInfo"><ul><li class="textareaInfo"><textarea placeholder="请输入计划内容"></textarea></li></ul></div></li></ul><div class="closeThis closeCus"><i class="iconfont icon-close"></i></div></div>';
      $(this).parent().prepend(strcust);
  })
  // 添加分解按钮
  var decoBtn = $('.decoBtn');
  var num = 0;//地接个分解选项 确定按钮点击的时候用来做判断添加到哪一个descContent盒子里
  decoBtn.on('click',function(){
    num++;
  	var strAll = '<div class="descContent" data="'+num+'"><ul><li class="line-bottom"><span class="leftInfo">分解到部门</span><div class="rightInfo"><ul class="deparBox"><li class="addBtn addDescDeaprt"><i class="iconfont icon-jiahao"></i>添加部门</li></ul></div></li><li class="line-bottom"><span class="leftInfo">分解到人</span><div class="rightInfo"><ul class="peoBoxPeople"><li class="addBtn addDescPeople"><i class="iconfont icon-jiahao"></i>添加人员</li></ul></div></li><li><span class="leftInfo">分解类容</span><div class="rightInfo"><ul><li class="textareaInfo"><textarea placeholder="请输入分解内容"></textarea></li></ul></div></li></ul><div class="closeThis"><i class="iconfont icon-close"></i></div></div>';
  		$(this).parent().prepend(strAll);
  });
  //搜索排名
   var inputKey = $('#inputFind');
    inputKey.on('keyup', function () {
        var str = $(this).val();
        if (str == "") return;
        var arrRslt = makePy(str);
        arrRslt = arrRslt.join();
        var firstRs = arrRslt.charAt(0);
        var s = firstRs.toLocaleUpperCase();
        var sort_letter = $('.sort_letter');
        sort_letter.each(function (i, ele) {
            if ($(ele).attr('id') == s) {
                var top = $(ele).position().top;
                $('.peoBox').animate({scrollTop: top}, 100);
            }
        })
    });
    
  //选择取消人员
  var inputChecked = $('.sort_box');
  inputChecked.on('click','span',function(){
      var spanDis = $(this).children('i').css('display');
     if(bStrop == 1){
        if(spanDis == "none"){
          $(this).children('i').css('display','block');
          $(this).next().attr('checked',true);
          $(this).parent().parent().siblings().children('div.inputChecked').find('i').css('display','none');
          $(this).parent().parent().siblings().children('div.inputChecked').children('input').removeAttr('checked');
        }else{
          $(this).children('i').css('display','none');
          $(this).next().removeAttr('checked');
        }
     }else{
       if(spanDis == "none"){
          $(this).children('i').css('display','block');
          $(this).next().attr('checked',true);
        }else{
          $(this).children('i').css('display','none');
          $(this).next().removeAttr('checked');
        }
     }
  });
  //全选
  $('.foot-bottom>span').click(function(){
    var bDis = $(this).children('b').css('display');
    var bEle = $(this).children('b');
    if(bDis == "none"){
      bEle.css('display','block');
      $(this).css('border','1px solid #ffa000');
      $('.sort_box').find('i').css('display','block');
      $('.sort_box').find('input').attr('checked',true);
    }else{
      bEle.css('display','none');
       $(this).css('border','1px solid #ccc');
       $('.sort_box').find('i').css('display','none');
       $('.sort_box').find('input').removeAttr('checked');
    }
  });
  //选择人员确定按钮
  var peoAdd = $('.peoAdd');
  var sort_boxInput = $('.sort_box').find('input');
  var s = "";
  peoAdd.on('click',function(){
    var objEle = null;
    if(bStrop == 0){
      var boxEle = $('.descContent');
      boxEle.each(function(i,obj){
          var dataNum = $(obj).attr('data');
          if(dataNum == numCheck){
              objEle = $(obj);
          }
      })
     objEle.find('ul.peoBoxPeople *').not('li.addBtn').remove();
      sort_boxInput.each(function(i,ele){
        var isStr = $(ele).attr('checked');
        var c_name = "";
        var li = "";
        if(isStr == 'checked'){
            c_name = $(ele).parent().next().next().text();
			
            li = '<li>'+c_name+'<span class="removeThis"><i class="iconfont icon-close"></i></span></li>';
           objEle.find('ul.peoBoxPeople').prepend(li);
            silderBox.animate({'right':-25+'%'},function(){
              $(this).css('display','none');
            });
            mask.animate({'opacity':0},function(){
                $(this).css('display','none');
            })
        }
        })
      }else if(bStrop == 1){
        sort_boxInput.each(function(i,ele){
          var isStr = $(ele).attr('checked');
		  var c_uid = $('.c_uid');
            if(isStr == 'checked'){
              s = $(ele).parent().next().next().text();
			  c_uid = $(ele).parent().next().next().attr('data');
              $('.conpyto_W').val(c_uid);
              $('.conpyto_W').text(s);
              form.render('select');
              silderBox.animate({'right':-25+'%'},function(){
                $(this).css('display','none');
              });
              mask.animate({'opacity':0},function(){
                  $(this).css('display','none');
              })
            }
        })
      }
  })

  //关闭遮罩
  mask.on('click',function(){
    $(this).animate({'opacity':0},function(){
      $(this).css('display','none');
    });
    silderBox.animate({'right':-25+'%'},function(){
      $(this).css('display','none');
    })
    silderDepartBox.animate({'right':-25+'%'},function(){
      $(this).css('display','none');
    })
  });
  //移除分解人和分解盒子
  $('.removeThis').on('click',function(){
    $(this).parent().remove();
  });
  $('.descWrapBox').on('click','div.closeThis',function(){
    $(this).parent().remove();
  });


  // 部门树形菜单列表
  var slider_show = $('#slider_show');
  slider_show.on('click','a',function(){
      var heightNum = $(this).next().css('height');
      if(heightNum == '0px'){
         $(this).next().css('height','auto');
         $(this).prev().attr('class','iconfont icon-xiala-copy');
       }else{
         $(this).next().css('height',0);
         $(this).prev().attr('class','iconfont icon-jiantouyou');
       }
  });
  $('#slider_show').on('click','span',function(event){
     event.stopPropagation();
    var span_I_Ele_dis = $(this).children('i').css('display');
    var span_I_Ele = $(this).children('i');
      if(span_I_Ele_dis == 'none'){
        span_I_Ele.css('display','block');
        $(this).css('border','1px solid #ffa000');
      }else{
        span_I_Ele.css('display','none');
        $(this).css('border','1px solid #ddd');
      }
  });
  // 部门全选
  $('.foot-bottom-depart').on('click','span',function(){
      var child_b_dis = $(this).children('b').css('display');
      var child_b_ele = $(this).children('b');
      var allDeparSpan = $('.borderEle');
      var allDeparI = $('.borderEleI');
      if(child_b_dis == 'none'){
       allDeparSpan.css('border','1px solid #ffa000');
       allDeparI.css('display','inline-block');
        child_b_ele.css('display','block');
        $(this).css('border','1px solid #ffa000');
      }else{
        child_b_ele.css('display','none');
        $(this).css('border','1px solid #ddd');
        allDeparSpan.css('border','1px solid #ddd');
        allDeparI.css('display','none');
      }
  });
  // 部门确定
  $('.deparAdd').on('click',function(){
    var objEle = null;
    var boxEle = $('.descContent');
      boxEle.each(function(i,obj){
          var dataNum = $(obj).attr('data');
          if(dataNum == numDepart){
              objEle = $(obj);
          }
      })
     objEle.find('ul.deparBox *').not('li.addBtn').remove();
    var allIDIs = $('.borderEleI');
    allIDIs.each(function(i,ele){
      var dis_i = $(ele).css('display');
      var i_li = "";
      var de_name = "";
      if(dis_i == 'block'){
        de_name = $(ele).parent().next().text();
        i_li = '<li>'+de_name+'<span class="removeThis"><i class="iconfont icon-close"></i></span></li>';
          objEle.find('ul.deparBox').prepend(i_li);
            silderDepartBox.animate({'right':-25+'%'},function(){
              $(this).css('display','none');
            });
            mask.animate({'opacity':0},function(){
                $(this).css('display','none');
            })
      }
    })
  });
  // 关闭侧滑框
  $('.closeSliderPeo').on('click',function(){
    $('.sliderPeople').animate({'right':-25+'%'},function(){
      $(this).css('display','none');
    });
    mask.animate({'opacity':0},function(){
      $(this).css('display','none');
    })
  });
   $('.closeSliderDepart').on('click',function(){
    $('.sliderDepart').animate({'right':-25+'%'},function(){
      $(this).css('display','none');
    });
    mask.animate({'opacity':0},function(){
      $(this).css('display','none');
    })
  });
   // 移除自定计划盒子
   $('.cusBox').on('click','div.closeCus',function(){
      $(this).parent().remove();
   });
   //上传图片
  layui.upload({
      url: '' //上传接口
      ,success: function(res){ //上传成功后的回调
        
      }
    });
  //删除图片
  $('.imgList').on('click','span.deleteImg',function(){
      $(this).parent().remove();
  });  

})