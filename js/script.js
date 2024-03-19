var elements = $('.thing');

console.log(elements);

elements.click((e)=> console.log(e))

$(elements).click(function(){
    $('.thing').each(function(index, element) {
        console.log(element.style.zIndex)
        let layer = element.style.zIndex
        element.style.zIndex = layer + 1
    })
    $(this).css("z-index", "0")
    // $(this).css("background", "white")


})
