$(function(){
    var $minNavL=$('.min-navL');
    var $maxNav=$('.max-nav');
    var flag=true;
    var $banner=$('.banner');
    var $all=$('.all');
    var $h3=$('.footer h3');
    var $ul=$('.footer ul');
    var flag1=true;
    var w=document.documentElement.clientWidth;
    function preDefault(e){
    if ( e && e.preventDefault ) {//如果提供了事件对象，则这是一个非IE浏览器

    e.preventDefault();            //阻止默认浏览器动作(W3C)
    }
    else{            //IE中阻止函数器默认动作的方式
    window.event.returnValue = false;
    }
    return false;
};
    $minNavL.click(function(){
        if(flag){
            $maxNav.css({display:'block'})
            $banner.css({display:'none'})
            $all.hide();
            flag=false;
        }else if(!flag){
            $maxNav.css({display:'none'})
            $banner.css({display:'block'})
            $all.show();
            flag=true;
        }

    })
    //window.onresize=function(){
    //    w=document.documentElement.clientWidth;
    //}
        $h3.each(function(i,obj){
            console.log(w)

            $(this).click(function(){
                if( document.documentElement.clientWidth<=760){
                if(flag1){
                    $ul.eq(i).show();
                    flag1=false;
                }else {
                    $ul.eq(i).hide();
                    flag1=true;
                }
                }else if(w>760){
                    return false;
                }
            })

        })
//轮播函数
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });



})