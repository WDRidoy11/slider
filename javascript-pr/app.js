let slideshowElements = document.querySelectorAll('.slideshow-emement');
let countElements = 1;
setInterval(() => {
    let currentElement = document.querySelector('.current');
    countElements++;
    currentElement.classList.remove('current');
    if (countElements > slideshowElements.length) {
        slideshowElements[0].classList.add('current');
        countElements = 1;
    } else {
        currentElement.nextElementSibling.classList.add('current')
    }
}, 2000);