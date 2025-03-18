console.clear();
const buttons = Array.from(document.querySelectorAll("button"));

buttons.forEach(btn => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("active");
	});
});

$('.btn').click( function() {
    $(".bigPlay img").toggleClass("active");
} );

const audio = document.querySelector('#audio');
let isPlay = false;

const allCibik = document.querySelectorAll('.lines.grey');
let index = 0;
let animation;

const bigButton = document.querySelector('.bigPlay');
bigButton.addEventListener('click', () => {
  if (!isPlay) {
    isPlay = true;
      audio.play();
      animation = setInterval(() => {
    allCibik[index].classList.remove('grey');
    index = index + 1;
  }, 1000);
  } else {
    isPlay = false;
      audio.pause();
    clearInterval(animation);
  }
 
});