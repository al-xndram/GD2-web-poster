var elements = $('.thing');

console.log(elements);

elements.click((e)=> console.log(e))

$(elements).click(function(){
    $('.thing').each(function(index, element) {
        console.log(element.style.zIndex)
        let aaryan = element.style.zIndex
        element.style.zIndex = aaryan + 1
    })
    $(this).css("z-index", "0")

})
