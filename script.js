$(document).ready(function(){
    let desktopSize = window.matchMedia("(max-width: 375px)");
    if (desktopSize.matches){
        $(".box-3").hide();
        $(".hamburger").click(function(){
            $(".box-3").show(500)
            $(".close").show(500)
            $(".hamburger").hide(500)
        })
        $(".close").click(function(){
            $(".box-3").hide(500)
            $(".close").hide(500)
            $(".hamburger").show(500)
        })
    }
    else {
        
    }
});