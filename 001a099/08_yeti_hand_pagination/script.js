var
	pagContainer = document.getElementById('pagination-container'),
	pagIndicator = document.getElementById('indicator'),
	pagLinks = document.querySelectorAll('.pag-link'),
    	handSVG = document.getElementById('hand-svg'),
    	fingerBG = document.getElementById('finger-bg'),
    	fingerBorder = document.getElementById('finger-border'),
    	fingernail1 = document.getElementById('fingernail-1'),
    	fingernail2 = document.getElementById('fingernail-2'),
	numLinks, curLink,
    	pagContainerRect, svgRect, yDest, yDistance,
    	TL,
    	fingerBGB = "M320.8,119c-1-6.5-7-10.9-13.5-9.9l-0.1,0c-6.2,0.9-12.3,1.8-18.3,2.4c-6,0.6-11.8,1-17.6,1 c-5.8,0-11.6,0.1-17.4-0.9c-8-1.4-13.6-5.4-17.4-11c-3.1-4.5-5.1-10-6.3-15.9c-1-4.6-1.5-9.4-1.8-14.1c-0.4-6.4,0-12.8,1.5-19.1 c1.5-6.3,4.2-12.6,7.7-18.6l0.1-0.2c2.9-5,1.8-11.5-2.9-15.1c-5.1-4-12.4-3.1-16.4,2c-2.2,2.8-4.2,5.7-6.1,8.7 c-2.9,4.7-5.5,9.6-7.5,14.9c-3.4,8.7-5.5,18.1-5.9,27.5c-0.5,9.4,0.5,18.8,2.4,27.7c1.9,8.9,4.7,17.4,8.1,25.6l0,0.1 c0.3,0.7,0.6,1.4,1,2c1.5,2.7,3.6,4.8,6.1,6.4c2.3,7.2,17.1,12.4,17.1,12.4c6.7,0,13.4-0.1,20.2-0.5c6.8-0.4,13.6-1.1,20.4-2.3 c6.8-1.1,13.5-2.6,19.9-4.4c6.4-1.7,12.6-3.7,18.7-5.6C318.2,130.3,321.7,124.8,320.8,119z",
    	fingerBorderB = "M257.9 144.9c4.8-.4 11.5-2 16.3-2.8 6.8-1.1 13.5-2.6 19.9-4.4 6.4-1.7 12.6-3.7 18.7-5.6 5.4-1.7 9-7.2 8.1-13-1-6.5-7-10.9-13.5-9.9h-.1c-6.2.9-12.3 1.8-18.3 2.4-6 .6-11.8 1-17.6 1-5.8 0-11.6.1-17.4-.9-9.8-1.7-15.9-7.3-19.7-14.9-2.1-4.2-3.6-9.1-4.5-14.1-.7-3.9-1.2-8-1.4-12-.4-6.4 0-12.8 1.5-19.1 1.5-6.3 4.2-12.6 7.7-18.6l.1-.2c2.9-5 1.8-11.5-2.9-15.1-5.1-4-12.4-3.1-16.4 2-1.4 1.7-2.7 3.5-4 5.4-3.8 5.6-7.1 11.7-9.7 18.2-3.4 8.7-5.5 18.1-5.9 27.5-.4 7.1.1 14.1 1.1 20.9",
    	fingernail2B = "M229.6 17.5l-5.8 11.2c-.6 1.1-1.9 1.5-2.9.9l-2.5-1.3c-1.1-.6-1.5-1.9-.9-2.9l2.7-5.2c1.8-3.4 6-4.7 9.3-2.9.1 0 .1.1.1.2z",
    	fingernail1B = "M303.2 128.9l-.4-1.7c-.5-2.3.9-4.5 3.1-5l12.3-2.8c1.2 5.2-2 10.3-7.2 11.5l-3.5.8c-1.9.4-3.9-.8-4.3-2.8z"
;

function onPagLinkClick(e) {
	e.preventDefault();
	var time = 0;
	
	if(TL && TL.isActive()) {TL.kill();}
	TL = new TimelineMax({paused: true});
	
	svgRect = handSVG.getBoundingClientRect();

	if(svgRect.top > yDest) {
		TL
			.to(handSVG, .35, {rotation: 0, y: -44, ease: Quad.easeOut}, 0)
			.to(fingerBG, .4, {morphSVG: fingerBG, ease: Quad.easeOut}, ".25")
			.to(fingerBorder, .4, {morphSVG: fingerBorder, ease: Quad.easeOut}, ".25")
			.to(fingernail1, .4, {morphSVG: fingernail1, ease: Quad.easeOut}, ".25")
			.to(fingernail2, .4, {morphSVG: fingernail2, ease: Quad.easeOut}, ".25")
		;
		time = TL.duration();
	} else {
		TL
			.to(fingerBG, .25, {morphSVG: fingerBG, ease: Quad.easeOut}, 0)
			.to(fingerBorder, .25, {morphSVG: fingerBorder, ease: Quad.easeOut}, 0)
			.to(fingernail1, .25, {morphSVG: fingernail1, ease: Quad.easeOut}, 0)
			.to(fingernail2, .25, {morphSVG: fingernail2, ease: Quad.easeOut}, 0)
		;
	}
	
	TL
		.to(indicator, .5, {x: e.target.rect.left - pagContainerRect.left, ease: Quad.easeInOut}, time)
		.to(pagLinks[curLink], .2, {color: '#3a5e77', ease: Linear.easeNone}, time)
		.to(handSVG, .5, {x: e.target.rect.left - pagContainerRect.left - 251, ease: Quad.easeInOut}, time)
		.to(e.target, .2, {color: '#FFF', ease: Linear.easeNone}, time + .45)
		
		.to(fingerBG, .4, {morphSVG: fingerBGB, ease: Quad.easeOut}, time + .6)
		.to(fingerBorder, .4, {morphSVG: fingerBorderB, ease: Quad.easeOut}, time + .6)
		.to(fingernail1, .4, {morphSVG: fingernail1B, ease: Quad.easeOut}, time + .6)
		.to(fingernail2, .4, {morphSVG: fingernail2B, ease: Quad.easeOut}, time + .6)
		
		.to(handSVG, .5, {rotation: 0, y: yDistance, ease: Quad.easeIn}, "-=.25")
	;
	TL.play();
	curLink = e.target.num;
}

function initPagination() {
	numLinks = pagLinks.length;
	curLink = 0;
	for(var i = 0; i < numLinks; i++) {
		pagLinks[i].addEventListener('click', onPagLinkClick);
		pagLinks[i].rect = pagLinks[i].getBoundingClientRect();
		pagLinks[i].num = i;
	}
	
	pagContainerRect = pagContainer.getBoundingClientRect();
	svgRect = handSVG.getBoundingClientRect();
	yDest = svgRect.top - 44;
	yDistance = document.querySelector('footer').getBoundingClientRect().top - pagContainerRect.top;
	
	TweenMax.set(pagLinks[0], {color: "#FFF"});
	TweenMax.set(indicator, {autoAlpha: 1, x: pagLinks[0].rect.left - pagContainerRect.left});
	TweenMax.set(handSVG, {autoAlpha: 1, rotation: 0, x: pagLinks[0].rect.left - pagContainerRect.left - 253, y: yDistance});
	TweenMax.set(fingerBG, {morphSVG: fingerBGB});
	TweenMax.set(fingerBorder, {morphSVG: fingerBorderB});
	TweenMax.set(fingernail1, {morphSVG: fingernail1B});
	TweenMax.set(fingernail2, {morphSVG: fingernail2B});
	
}

console.clear();
initPagination();