/**
 * Created by shi on 2017/3/8.
 */
$(function(){
    $('.fileBox').on('click','span',function(){
        var self = $(this);
        self.next().click();
        self.next().on('change',function(){
            var objUrl = getObjectURL(this.files[0]) ; //获取图片的路径，该路径不是图片在本地的路径
            alert(objUrl);
            if (objUrl) {
                $('.fileUrl').val(objUrl);
            }
        })
    })
})
function getObjectURL(file) {
    var url = null ;
    if (window.createObjectURL!=undefined) { // basic
        url = window.createObjectURL(file) ;
    } else if (window.URL!=undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file) ;
    } else if (window.webkitURL!=undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file) ;
    }
    return url ;
}