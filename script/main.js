$(function(){
    //메뉴
    $(".main > li").mouseover(function(){
        $(this).children(".sub").stop().slideDown();
    })
    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })

    // $(".fade li").hide();
    // $(".fade li").eq(0).show();

    // $(".fade li:gt(0)").hide();
    
    $(".fade li").eq(0).siblings().hide();

        var n = 0; // 0 1 2
        setInterval(function(){
            $(".fade li").eq(n).fadeOut();
            // if(n==2){
            //     n=0;
            // }else{
            //     n++;
            // }//if

            n = (n+1) % 3 ;
            $(".fade li").eq(n).fadeIn();
        },2500)

        $(".title li").click(function(){
            $(".title li").removeClass("on");
            $(this).addClass("on");

            var j = $(this).index();
            
            $(".cont_list ul").hide();
            $(".cont_list ul").eq(j).css({display : "flex"})

        })
        $(".p_click").click(function(){
            $(".popup").show();
        })
        $(".close").click(function(){
            $(".popup").hide();
        })
        
})//jquery