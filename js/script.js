let defaultZ = 9999;


$(".click").click(function(e){
    

    console.log(e.target.classList.value)
    
     if (! e.target.classList.value.includes("dontCycle") )   {
        defaultZ=defaultZ-1;
        $(this).css({
            "z-index":defaultZ
        })
     }
    

})


$("")


$(document).ready(function(){
    var maxZIndex = Math.max.apply(null, $('.click').map(function(){
        return parseInt($(this).css('z-index')) || 1;
    }).get());

    $('.click').each(function(){
        if (parseInt($(this).css('z-index')) == defaultZ) {
            $(this).children().addClass('glow');
        }
    });
});