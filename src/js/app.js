import '../scss/app.scss';

// Your JS Code goes here
$(document).ready(function(){
    $('.support-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

window.onscroll = function() {stickyHeader()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

const stickyHeader = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const headerMenu = document.getElementsByClassName('header-menu')[0]

toggleButton.addEventListener('click', () => {
    headerMenu.classList.toggle('active')
})
