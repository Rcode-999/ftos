if(document.readyState == 'loading'){
    
    document.addEventListener('DOMContentLoaded',ready);
}
else{
    localStorage.clear();
    ready();
}
function ready(){
    var foodItems = document.querySelectorAll('.btn-add-to-cart');
    var items = new Array();
    var uniqueItems = new Array();
    for (var i = 0; i < foodItems.length; i++) {
        var btnAddToCart = foodItems[i];
        btnAddToCart.addEventListener('click', e => {
            addToCartClicked(e,items,uniqueItems);
        })
    }
}


const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;

//arrange the slides nect to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

function addToCartClicked(e,items,uniqueItems){
    var btnAddToCart = e.target;
    var itemInfo = btnAddToCart.closest('.item-box');
    var itemName = itemInfo.getElementsByClassName('item-name')[0].innerText;
    var itemPrice = parseFloat(itemInfo.getElementsByClassName('item-price')[0].innerText.replace('Price: R',''));
    var object = {name:itemName,price:itemPrice};
        if(!items.includes(object)){
            items.push(object);
        }
        uniqueItems = [...new Map(items.map((item) =>[item['name'],item]) ).values()]
        var serializedItems = JSON.stringify(uniqueItems);
    localStorage.setItem('uniqueArray',serializedItems)
}
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

//
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if (targetIndex == slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden')
    }
    else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //move to next slide
    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    //move to next slide
    moveToSlide(track, currentSlide, prevSlide);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

const goToFoodTruckSlide = (foodTruckName) => {
    const targetSlide = document.querySelector(`.carousel__slide[data-food-truck="${foodTruckName}"]`);
    const targetIndex = slides.findIndex(slide => slide === targetSlide);
    const currentSlide = track.querySelector('.current-slide');
    // move to target slide
    moveToSlide(track, currentSlide, targetSlide);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
}
const slideTomoveTo = localStorage.getItem('food-truck-name');
goToFoodTruckSlide(slideTomoveTo);



