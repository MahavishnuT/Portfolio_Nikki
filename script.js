// animation appears when scrolling down

window.addEventListener("scroll", () => {
    
    const reveal = document.querySelectorAll(".reveal");
    
    for(var i = 0; i < reveal.length; i++) {

        //deconstructing documentElement
        const {scrollTop, clientHeight} = document.documentElement;
    
        const topElementToTopViewport = reveal[i].getBoundingClientRect().top;
    
        if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.90) {
            reveal[i].classList.add("active")
        }
    }

})
