let leftslider = document.getElementById("leftslider");
let rightslider = document.getElementById('rightslider');
var imgslider = document.querySelectorAll(".image-item");
leftslider.addEventListener('click', () => {
    if (startslider < 0) {
        startslider = startslider + 100;
    }

    imgslider.forEach(element => {

        element.style.transform = `translateX(${startslider}%)`;
    })
})
var startslider = 0;
var endslider = (imgslider.length - 1) * 100;
console.log(imgslider.length)
rightslider.addEventListener("click", () => {
    if (startslider >= -endslider + 100) {
        startslider = startslider - 100;
    }

    imgslider.forEach(element => {

        element.style.transform = `translateX(${startslider}%)`;
    })
})
    // var imageinterval= setInterval(function(){
    //     if(startslider >=  -endslider+100){
    //         startslider= startslider-100;
    //     }

    //     imgslider.forEach(element=>{

    //         element.style.transform=`translateX(${startslider}%)`;
    //     },500)
    // })



/****************side bar******************/
let slidebox = document.querySelector(".slide-container");
let openbox = document.querySelector('.open-slide-bar')
function clickhandle() {
    slidebox.classList.remove("hide");
    slidebox.classList.add("show");
    
}
function crossSlide() {
    slidebox.classList.remove("show");
    slidebox.classList.add("hide");
}