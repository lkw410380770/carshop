layui.use(['layer','form','laydate','layedit','upload'],function(){
	var layer = layui.layer;
	var form = layui.form();
	var laydate = layui.laydate;
	var layedit = layui.layedit;
// 富文本编辑器初始化
  var editIndex = layedit.build('describe',{
  					height:150
  }); 

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
  //删除参与人
  $('.canyu').on('click','b',function(){
    $(this).parent().remove();
  });
  var sliderBox = $('.sliderPeople');
  var mask = $('.mask');
  var sort_boxInput = $('.sort_box').find('input');
  var canyuFuze = 0; //判断是负责人或者参与人的开关
  var bStrop = 0;
  $('.fuze').on('click',function(){
    canyuFuze = 1;
    bStrop = 1;
    showSlide();
  });
   $('.canyuBtn').on('click',function(){
    canyuFuze = 2;
    bStrop = 0;
    showSlide();
  });
  var peoAdd = $('.peoAdd');
  peoAdd.on('click',function(){
      var u_uid = "";
      sort_boxInput.each(function(i,ele){
        var isStr = $(ele).attr('checked');
        var c_name = "";
        var li = "";
        var imgSrc = "";
        if(canyuFuze == 1){
          if(isStr == 'checked'){
            c_name = $(ele).parent().next().next().text();
            imgSrc = $(ele).parent().next().children('img').attr('src');
            u_uid = $(ele).parent().next().next().attr('data');
            li = '<li><img src="'+imgSrc+'" alt=""></li><li>'+c_name+'</li>';
            $('#fuzeBox').html(li);
            $('.shoulder').val(u_uid);
          }
        }else{
          if(isStr == 'checked'){
            c_name = $(ele).parent().next().next().text();
            imgSrc = $(ele).parent().next().find('img').attr('src');
            u_uid += $(ele).parent().next().next().attr('data')+',';
            li = '<li><span><img src="'+imgSrc+'"></span><p>'+c_name+'</p><b><i class="iconfont icon-close"></i></b></li>';
            $('#canyuBox').prepend(li);

          }
        }
      });
      if(canyuFuze == 1){
          u_uid = u_uid;
      }else{
          u_uid = u_uid.substr(0,u_uid.length-1);
          $('.participant').val(u_uid);
      }
      sliderBox.animate({'right':-25+'%'},function(){
          $(this).css('display','none');
            });
          mask.animate({'opacity':0},function(){
            $(this).css('display','none');
      }) 
  })
   
  // 选择取消人员
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
  function showSlide(){
    var inputChecked_span = $('.sort_box').find('span');
    var inputChecked_i = $('.sort_box').find('i');
    var inputChecked_input = $('.sort_box').find('input');
    inputChecked_input.removeAttr('checked');
    inputChecked_span.css('border','1px solid #ddd');
    inputChecked_i.css('display','none');
    sliderBox.css('display','block');
    sliderBox.animate({'right':0});
    mask.css('display','block');
    mask.animate({'opacity':1})
   }
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

  //关闭遮罩
  mask.on('click',function(){
    $(this).animate({'opacity':0},function(){
      $(this).css('display','none');
    });
      sliderBox.animate({'right':-25+'%'},function(){
      $(this).css('display','none');
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
   //上传图片
    layui.upload({
        url: url //上传接口
        ,success: function(res){ //上传成功后的回调
            var imgStr = "";
            var li = "";
            if(res){
                imgStr = rootStr + res;
                li = '<li><img class="imgEle" src="/'+imgStr+'"><span class="deleteImg"><i class="iconfont icon-close"></i></span></li>';
                $('#imgList').prepend(li);
            }

        }
    });
  //删除图片
  $('.imgList').on('click','span.deleteImg',function(){
      var self = $(this);
      var imgURl = $(this).prev().attr('src');
      $.ajax({
          type: 'POST',
          url: deleteImgUrl ,
          data: {
              url:imgURl
          },
          dataType: 'json',
          success:function(res){
              if(res == 1){
                  self.parent().remove();
              }
          }
      })
  });
    // 表单监听
    form.on('submit(formDemo)', function(data){
        var urlStrLen = "";
        var imgEle = $('.imgEle');
        var urlLen = "";
        layedit.sync(editIndex);
        var infoContent = layedit.getText(editIndex);
        $('.info').val(infoContent);
        imgEle.each(function(i,ele){
            urlLen = $(ele).attr('src');
            urlLen = urlLen.substring(1,urlLen.length);
            urlStrLen += urlLen+',';
        });
        urlStrLen = urlStrLen.substr(0,urlStrLen.length-1);
        $('.images').val(urlStrLen);
    });
})