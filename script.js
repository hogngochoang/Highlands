//Navbar responsive
// JavaScript
const btnNavEl = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header-container");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});



// Banner slide
var swiper = new Swiper(".banner-slider",{
    loop: true,
    centeredSlides:true,
    slidesPerView:1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
}
) 

//Menu
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let slider = document.getElementById('slider');
let image = document.querySelector('.images');
let items = document.querySelectorAll('.images .item');
let contents = document.querySelectorAll('#content .item');
let detail = document.querySelector('.des');

let tests = document.querySelectorAll(".test");
let underline = document.getElementById('underline')

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;
const colors = ["#4a3124","#d2f0fb","#b6d1a5"];
const textColors = ['#bd945d','#006400','#b22830'];


for(let i = 0; i < tests.length; i++) {
    tests[i].addEventListener("click", function() {
        active = i;
        rotate = rotateAdd * i;
        underline.style.left = (25 + 155 *i) + "px"
        show();
    })
}

function nextSlider(){
    active = active + 1 > countItem - 1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    underline.style.left = (25 + 155 *active) + "px"
    show();
}
function prevSlider(){
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    rotate = rotate - rotateAdd; 
    underline.style.left = (25 + 155 *active) + "px"
    show();     
     
}
function show(){
    image.style.setProperty("--rotate", rotate + 'deg');
    contents.forEach((content, key) => {
        if(key == active){
            content.classList.add('active');
            slider.style.setProperty("--bg", colors[key]);
            content.style.setProperty("--color",textColors[key]);
            next.style.setProperty("--color",textColors[key]);
            prev.style.setProperty("--color",textColors[key]);
            underline.style.setProperty("--color",textColors[key]);
        }else{
            content.classList.remove('active');
            slider.classList.remove('active');
            next.classList.remove('active');
            prev.classList.remove('active');
            underline.classList.remove('active')
        }
    })
}
next.onclick = nextSlider;
prev.onclick = prevSlider;
// const autoNext = setInterval(nextSlider, 3000);

let content = document.querySelectorAll('.about-wrapper .card');
content.forEach(function(card) {
    card.addEventListener("click", function() {
        card.classList.add('active');
    });
});


//Product's price
function changePrice(size) {
     let value1 = document.getElementById('value1');
     let value2 = document.getElementById('value2');
     let value3 = document.getElementById('value3');
     let value4 = document.getElementById('value4');
     const buttons = document.querySelectorAll('.size button');
     
     buttons.forEach(button => {
        if(button.innerText == size && size === 'S') {
            value1.innerText = "45.000 VNĐ" 
            value4.innerText = "69.000 VNĐ"
            value3.innerText = "29.000 VNĐ"
            button.classList.add('active')
        } 
        else if(button.innerText == size && size === 'M') {
            value2.innerText = "49.000 VNĐ"
            value1.innerText = "49.000 VNĐ" 
            value4.innerText = "79.000 VNĐ"
            value3.innerText = "39.000 VNĐ"

            button.classList.add('active')
        }
        else if(button.innerText == size && size === 'L') {
            value2.innerText = "55.000 VNĐ"
            value1.innerText = "55.000 VNĐ" 
            value4.innerText = "85.000 VNĐ"
            value3.innerText = "45.000 VNĐ"
            button.classList.add('active')
        }
        else{
            button.classList.remove('active');
        }
     })
}



