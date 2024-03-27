
var elements = $('.click');
var z = 9999
console.log(elements);

elements.click((e)=> console.log(e))

$(elements).click(function(){
    $('.click').each(function(index, element) {
        console.log(element.style.zIndex)
        let layer = element.style.zIndex
        element.style.zIndex = layer + 1
    })

    z=z-1;

    $(this).css("z-index", z)
    // $(this).css("background", "white")


})
