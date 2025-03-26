gsap.registerPlugin(Observer, SplitText, DrawSVGPlugin, MotionPathPlugin, ScrollTrigger, CustomEase);

CustomEase.create('yButterfly', '.17,.17,.43,1');
CustomEase.create('butterflyShow', '.17,.17,.46,1');
CustomEase.create('butterflyDown', '.53,0,.49,1');
CustomEase.create('butterflyUp', '.73,0,.41,1');
CustomEase.create('yButterflyDown', '.68,0,.43,1');
CustomEase.create('butterflyHide', '.68,0,0,1');
CustomEase.create('clip', '.57,0,.43,1');

window.addEventListener('load', function() {
  let hoverActive = false;

  function initSplitText(elements) {
    const textWrappers = document.querySelectorAll(elements);
    if (!textWrappers.length) return false;
    new SplitText(elements, { type: 'lines', linesClass: 'fade-overflow' });

    textWrappers.forEach(textWrapper => {
      textWrapper.querySelectorAll('.fade-overflow').forEach((letterWrapp) => {
        const letter = letterWrapp.innerHTML;
        letterWrapp.innerText = '';
        letterWrapp.innerHTML = `<div class='fade-el'>${letter}</div>`;
      });
    });
  }

  initSplitText('.split');

  const sections = gsap.utils.toArray('.banner-slide');
  const wrap = gsap.utils.wrap(0, sections.length);
  const tree = document.querySelector('.banner-tree');
  const wings = document.querySelector('.wings');

  let currentIndex = 0;

  const tlAnimation = gsap.timeline({
    defaults: { duration: 1.2 },
    scrollTrigger: {
      trigger: 'main',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onEnter: () => {
        hoverActive = false;
      },
      onLeave: () => {
        window.scrollTo(0, 0);
      },
    },
  });

  function gotoSection(index) {
    index = wrap(index);

    const currentSection = sections[currentIndex];
    const textCurrent = currentSection.querySelectorAll('.fade-overflow');
    const nextSection = sections[index];
    const textNext = nextSection.querySelectorAll('.fade-overflow');

    tlAnimation
      .to(currentSection, {
      scale: 0.7,
      alpha: 0,
      ease: 'power0.easeIn',
    })
      .to(textCurrent, {
      y: -350,
      stagger: {
        each: 0.02,
        from: 'start',
      },
      ease: 'power0.easeIn',
    }, '<')
      .to(tree, {
      scale: index > 0 ? 2.4 : 1,
      yPercent: index > 0 ? 125 : 0,
      duration: 0.8,
    }, '<')
      .to(wings, {
      alpha: 0,
      duration: 0.8,
    }, '<')
      .fromTo(textNext, {
      y: 400,
    }, {
      y: 0,
      stagger: {
        each: 0.02,
        from: 'start',
      },
      ease: 'power1.easeOut',
    }, '<0.4')
      .fromTo([nextSection], {
      scale: 0.7,
      alpha: 0,
    }, {
      scale: 1,
      alpha: 1,
      ease: 'power1.easeOut',
    }, '<');

    currentIndex = index;
  }

  function treeAnimation() {
    tlAnimation
      .to('.banner-text', {
      y: '150%',
      alpha: 0,
      duration: 0.8,
    })
      .to(tree, {
      scale: 1,
      yPercent: 0,
      duration: 0.8,
    }, '<')
      .to(tree, {
      alpha: 0,
      duration: 0.4,
    }, '>-=0.15')
      .set('.tree svg', {
      display: 'block',
    }, '<-=0.1')
      .fromTo('.tree-svg__bottom',
              {
      drawSVG: '0%',
      strokeWidth: 33,
    },
              {
      drawSVG: '100%',
      strokeWidth: 33,
      duration: 0.5,
    }, '<'
             )
      .fromTo('.tree-svg__top', {
      drawSVG: '0%',
      strokeWidth: 33,
    }, {
      drawSVG: '100%',
      strokeWidth: 33,
      duration: 0.5,
    })
      .fromTo('.tree-svg__left', {
      drawSVG: '0%',
      strokeWidth: 33,
      rotate: '25deg',
      transformOrigin: 'bottom right',
    }, {
      drawSVG: '75%',
      strokeWidth: 33,
      rotate: '25deg',
      transformOrigin: 'bottom right',
      duration: 0.5,
    }, '<')
      .fromTo('.tree-svg__right', {
      drawSVG: '0%',
      strokeWidth: 33,
      rotate: '-25deg',
      transformOrigin: 'bottom left',
    }, {
      drawSVG: '75%',
      strokeWidth: 33,
      rotate: '-25deg',
      transformOrigin: 'bottom left',
      duration: 0.5,
    }, '<')
      .fromTo('.tree-svg__right-top', {
      drawSVG: '0%',
      strokeWidth: 33,
      rotate: '-13deg',
      transformOrigin: 'bottom left',
    }, {
      drawSVG: '85%',
      strokeWidth: 33,
      rotate: '-13deg',
      transformOrigin: 'bottom left',
      duration: 0.5,
    }, '<')
      .fromTo('.tree-svg__left-top', {
      drawSVG: '0%',
      strokeWidth: 33,
      rotate: '13deg',
      transformOrigin: 'bottom right',
    }, {
      drawSVG: '85%',
      strokeWidth: 33,
      rotate: '13deg',
      transformOrigin: 'bottom right',
      duration: 0.5,
    }, '<')
      .to('.tree-svg__branches', {
      drawSVG: '100%',
      strokeWidth: 3,
      rotate: '0',
      duration: 0.5,
    })
      .to('.tree-svg__bottom', {
      strokeWidth: 3,
      duration: 0.5,
    }, '<')
      .to('.tree-circle', {
      scale: 0.65,
      duration: 0.5,
    }, '<')
      .set('.tree-circle__big', {
      boxShadow: '0 0 0 200px var(--color-fat-tuesday)',
    }, '<')
      .to('.tree-circle__big', {
      boxShadow: '0 0 0 1px var(--color-fat-tuesday)',
      ease: 'power1.easeIn',
      duration: 0.5,
    }, '<')
      .set('.tree-circle__small', {
      boxShadow: '0 0 0 200px var(--color-fat-tuesday)',
    }, '<')
      .to('.tree-circle__small', {
      boxShadow: '0 0 0 3px var(--color-fat-tuesday)',
      ease: 'power1.easeIn',
      duration: 0.5,
    }, '<')
      .to('.tree-circle__big', {
      scale: 1,
      duration: 0.4,
    })
      .fromTo('.tree-name', {
      y: '-100%',
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
    }, '<')
      .fromTo('.tree-title span', {
      y: '100%',
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
    })
      .to('.tree-ball', {
      alpha: 1,
      scale: 1,
      duration: 0.4,
    }, '<')
      .call(function () {
      hoverActive = true;
    })
      .to('.tree-wings', {
      y: '-100%',
      alpha: 1,
      ease: 'yButterfly',
      duration: 0.8,
    }, '<-=1.5')
      .set('.tree-wings__top-left', {
      rotate: '-15deg',
    }, '<0.1')
      .to('.tree-wings__top-left', {
      rotate: '10deg',
      ease: 'butterflyShow',
      duration: 0.7,
    }, '<')
      .set('.tree-wings__top-right', {
      rotate: '15deg',
    }, '<')
      .to('.tree-wings__top-right', {
      rotate: '-10deg',
      ease: 'butterflyShow',
      duration: 0.7,
    }, '<')
      .set('.tree-wings__bottom-left', {
      rotate: '-20deg',
    }, '<')
      .to('.tree-wings__bottom-left', {
      rotate: '15deg',
      ease: 'butterflyShow',
      duration: 0.7,
    }, '<')
      .set('.tree-wings__bottom-right', {
      rotate: '20deg',
    }, '<')
      .to('.tree-wings__bottom-right', {
      rotate: '-15deg',
      ease: 'butterflyShow',
      duration: 0.7,
    }, '<')
      .to('.tree-wings__top-left', {
      rotate: 0,
      ease: 'butterflyDown',
      duration: 0.74,
    }, '>')
      .to('.tree-wings__top-right', {
      rotate: 0,
      ease: 'butterflyDown',
      duration: 0.74,
    }, '<')
      .to('.tree-wings__bottom-left', {
      rotate: 0,
      ease: 'butterflyDown',
      duration: 0.56,
    }, '<')
      .to('.tree-wings__bottom-right', {
      rotate: 0,
      ease: 'butterflyDown',
      duration: 0.56,
    }, '<')
      .addPause('+=0.5')
      .to('.tree-wings__top-left', {
      rotate: '28deg',
      ease: 'butterflyUp',
      duration: 0.55,
    })
      .to('.tree-wings__top-right', {
      rotate: '-28deg',
      ease: 'butterflyUp',
      duration: 0.55,
    }, '<')
      .to('.tree-wings', {
      y: '-90%',
      alpha: 1,
      duration: 0.54,
    }, '<0.03')
      .to('.tree-wings__bottom-left', {
      rotate: '33deg',
      ease: 'yButterflyDown',
      duration: 0.54,
    }, '<')
      .to('.tree-wings__bottom-right', {
      rotate: '-33deg',
      ease: 'yButterflyDown',
      duration: 0.54,
    }, '<')
      .to('.tree-name', {
      y: '-100%',
      opacity: 0,
      duration: 0.4,
    })
      .to('.tree-wings', {
      y: '-180%',
      alpha: 1,
      ease: 'butterflyUp',
      duration: 0.8,
    }, '<')
      .to('.tree-wings__top-left', {
      rotate: '-30deg',
      ease: 'butterflyHide',
      duration: 0.8,
    }, '<')
      .to('.tree-wings__top-right', {
      rotate: '30deg',
      ease: 'butterflyHide',
      duration: 0.8,
    }, '<')
      .to('.tree-wings__bottom-left', {
      rotate: '-21deg',
      ease: 'butterflyHide',
      duration: 0.8,
    }, '<')
      .to('.tree-wings__bottom-right', {
      rotate: '21deg',
      ease: 'butterflyHide',
      duration: 0.8,
    }, '<')

      .set('.banner', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    }, '<0.1')
      .to('.banner', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'clip',
      duration: 0.8,
    }, '<')
      .set('.tree', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    }, '<')
      .to('.tree', {
      clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
      ease: 'clip',
      duration: 0.8,
    }, '<')
      .set('.wings', {
      opacity: 1,
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    }, '<')
      .to('.wings', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      ease: 'clip',
      duration: 0.8,
    }, '<')
      .set('.banner-title .fade-overflow', {
      y: '150%',
      opacity: 0,
    }, '<')
      .to('.banner-title .fade-overflow', {
      y: '0%',
      opacity: 1,
      duration: 1,
    }, '<')
      .to('.banner-title', {
      opacity: 1,
      scale: 1,
      stagger: {
        each: 0.1,
        from: 'start',
      },
      duration: 1,
    }, '<')
      .set('.banner-tree', {
      scale: 1.3,
    }, '<')
      .to('.banner-tree', {
      scale: 1,
      opacity: 1,
      duration: 1,
    }, '<');
  }

  sections.forEach((element, index) => {
    if (index != sections.length - 1) {
      gotoSection(index + 1);
    }
  });

  treeAnimation();

  document.querySelector('.header-logo').addEventListener('click', (e) => {
    e.preventDefault();
    location.reload();
  });

  const tlCircles = gsap.timeline({
    paused: true,
  }).fromTo('.tree-circle__big', {
    boxShadow: '0 0 0 1px rgb(52 31 55)',
  }, {
    duration: 0.4,
    ease: 'power1.outIn',
    boxShadow: '0 0 0 3px rgb(52 31 55)',
  })
  .fromTo('.tree-circle__small', {
    boxShadow: '0 0 0 3px rgb(52 31 55)',
  }, {
    duration: 0.4,
    ease: 'power1.outIn',
    boxShadow: '0 0 0 1px rgb(52 31 55)',
  }, '<');

  document.querySelectorAll('.tree-title').forEach((element) => {
    const elementPosition = element.getAttribute('data-position');

    const timelineHover = gsap.timeline({
      paused: true,
    });

    let endSmallPos = 0.125, endBigPos = 0.535;

    if (elementPosition.includes('-top')) {
      endSmallPos = 0.155;
      endBigPos = 0.58;
    } else if (elementPosition.includes('top')) {
      endSmallPos = 0.175;
      endBigPos = 0.597;
    }

    timelineHover
      .to(`.tree-title[data-position="${elementPosition}"]`, {
      duration: 0.4,
      ease: 'power1.inOut',
      scale: 1.33,
      y: '-=30%',
    })
      .to(`.tree-ball[data-position="${elementPosition}"] .tree-ball__1`, {
      duration: 0.4,
      ease: 'power1.inOut',
      scale: 2.25,
    }, '<')
      .to(`.tree-svg__branches[data-position="${elementPosition}"]`, {
      duration: 0.4,
      ease: 'power1.inOut',
      strokeWidth: 9,
    }, '<')
      .set(`.tree-ball[data-position="${elementPosition}"] .tree-ball__2`, {
      opacity: 1,
    })
      .set(`.tree-ball[data-position="${elementPosition}"] .tree-ball__3`, {
      opacity: 1,
    })
      .to(`.tree-title[data-position="${elementPosition}"] .tree-title__decor.left`, {
      duration: 0.4,
      ease: 'power1.inOut',
      alpha: 1,
      x: '-100%',
    })
      .to(`.tree-title[data-position="${elementPosition}"] .tree-title__decor.right`, {
      duration: 0.4,
      ease: 'power1.inOut',
      alpha: 1,
      x: '100%',
    }, '<')
      .to(`.tree-ball[data-position="${elementPosition}"] .tree-ball__2`, {
      duration: 0.7,
      ease: 'power1.inOut',
      motionPath: {
        path: `.tree-svg__branches[data-position="${elementPosition}"]`,
        align: `.tree-svg__branches[data-position="${elementPosition}"]`,
        autoRotate: true,
        alignOrigin: [1, 0.5],
        start: 1,
        end: endSmallPos,
      },
    }, '<')
      .to(`.tree-ball[data-position="${elementPosition}"] .tree-ball__3`, {
      duration: 0.4,
      ease: 'power1.inOut',
      motionPath: {
        path: `.tree-svg__branches[data-position="${elementPosition}"]`,
        align: `.tree-svg__branches[data-position="${elementPosition}"]`,
        autoRotate: true,
        alignOrigin: [1, 0.5],
        start: 1,
        end: endBigPos,
      },
    }, '<0.3');

    element.addEventListener('mouseover', () => {
      if (hoverActive) {
        timelineHover.play();
        tlCircles.play();
      }
    });

    element.addEventListener('mouseout', () => {
      timelineHover.reverse();
      tlCircles.reverse();
    });

    document.querySelector(`.tree-ball[data-position="${elementPosition}"]`).addEventListener('mouseover', () => {
      if (hoverActive) {
        timelineHover.play();
      }
    });

    document.querySelector(`.tree-ball[data-position="${elementPosition}"]`).addEventListener('mouseout', () => {
      timelineHover.reverse();
    });
  });
  
  const tlSound = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: -1,
  })
  .to('.sound-item:nth-child(even)', {
    height: '0.15rem',
    duration: 0.5,    
  });
  
  const tlSound2 = gsap.timeline({
    paused: true,
    yoyo: true,
    repeat: -1,
  })
  .to('.sound-item:nth-child(odd)', {
    height: '0.10rem',
    duration: 0.45,
  })
  
  const audio = document.querySelector('#audio');
  
  document.querySelector('.sound').addEventListener('click', function() {
    if (this.classList.contains('active')) {
      tlSound.pause();
      tlSound2.pause();
      this.classList.remove('active');
      audio.pause();
    } else {
      tlSound.resume();
      tlSound2.resume();
      this.classList.add('active');
      audio.play();
    }
  });
});