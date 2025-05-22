const circle = document.getElementById("circle");
const sections = document.querySelectorAll("section");
const sectionCount = sections.length;
const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

window.addEventListener("scroll", () => {
    let scrollPercentage = window.scrollY / maxScroll;
    let rotation = (scrollPercentage * 360) - 20 ;
    // Scroll ile dönmeyi sağlayan mantığı düzeltmek
    circle.style.transform = `rotate(${rotation}deg)`;
});