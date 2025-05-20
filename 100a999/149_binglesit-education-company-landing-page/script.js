//Testimonial Swiper

var testimonialSwiper = new Swiper(".testimonials-swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 32,
    loop: true,
  });

//Accordion FAQ

let accordion = document.querySelector('.accordion-content');
let header = document.querySelectorAll('.accordion-header');
let item = document.querySelectorAll('.accordion-item');

header.forEach(headers => headers.addEventListener('click', toggleAccordion));
function toggleAccordion() {
    thisItem = this.parentNode;
    item.forEach(items => {
        if(thisItem == items){
            thisItem.classList.toggle('collapsed');
            return;
        }
        items.classList.remove('collapsed');
    })
}

// Menu Mobile

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){ navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu')} )}
if(navClose){ navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu')} )}

// Removing Menu Mobile when clicking in menu

const navLink = document.querySelectorAll('.nav-link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Changing Background 

function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 80) { header.classList.add('scroll-header') } else { header.classList.remove('scroll-header') };
}
window.addEventListener('scroll', scrollHeader);

// Active Link Change while scrolling

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);