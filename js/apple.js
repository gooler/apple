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
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });



})