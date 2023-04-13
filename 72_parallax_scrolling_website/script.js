const element = document.getElementById("menu");
element.addEventListener("click", myFunction);

function myFunction() {
 	$(".navigation").slideToggle();
}

gsap.from("#txt", {
	scrollTrigger: {
		scrub: true
	},
	x: 350
});
gsap.from("#m1", {
	scrollTrigger: {
		scrub: true
	},
	y: 100
});
gsap.from("#m2", {
	scrollTrigger: {
		scrub: true
	},
	y: 50
});
gsap.from("#m3", {
	scrollTrigger: {
		scrub: true
	},
	y: 200
});
gsap.from("#m4", {
	scrollTrigger: {
		scrub: true
	},
	y: 150
});
gsap.from("#tr", {
	scrollTrigger: {
		scrub: true
	},
	y: 150
});
gsap.from("#crs", {
	scrollTrigger: {
		scrub: true
	},
	y: 100
});
gsap.from("#house", {
	scrollTrigger: {
		scrub: true
	},
	y: 50
});