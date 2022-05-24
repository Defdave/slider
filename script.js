const sideSlide = document.querySelector(".side-slide")
const mainSlide = document.querySelector(".main-slide")
const upButton = document.querySelector("#up-button")
const downButton = document.querySelector("#down-button")
const slideLength = mainSlide.querySelectorAll("div").length

const slideHeight = mainSlide.clientHeight

mainSlide.style.top = `-${(slideLength - 1) * slideHeight}px`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

let activeSlideIndex = 0

const changeSlide = (direction) => {    
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slideLength-1) {
            activeSlideIndex = 0
        }
    }    
    else if (direction === 'down'){
        activeSlideIndex--        
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength-1            
        }
    }
    mainSlide.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`
    sideSlide.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
}



