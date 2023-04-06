gsap.registerPlugin("ScrollTrigger");

let scene = gsap.timeline();
let intro_tl = gsap.timeline();
let part1_tl = gsap.timeline();
let part2_tl = gsap.timeline();
let part3_tl = gsap.timeline();
let part4_tl = gsap.timeline();
let part5_tl = gsap.timeline();
let outro_tl = gsap.timeline();

ScrollTrigger.create({
  trigger: "#container",
  pin: true,
  start: "top top",
  end: "+=5700"
});

gsap.set(".specs", {
  x: -160,
  opacity: 0
});
gsap.set(".chars", {
  x: 260
});
part2_tl.set(".models li", {
  opacity: 0
});
part3_tl.set(".specs dt", {
  opacity: 0
});
part3_tl.set(".specs dd", {
  opacity: 0
});
part4_tl.set(".chars h2", {
  opacity: 0
});
part4_tl.set(".chars dt", {
  opacity: 0
});
part4_tl.set(".chars dd", {
  opacity: 0
});

// TIMELINE: Intro
intro_tl
  .fromTo(
    "#wrapWin",
    {
      height: 80
    },
    {
      height: 800,
      duration: 0.1
    }
  )
  .fromTo(
    "#liberty",
    {
      scale: 0.8,
      y: -300
    },
    {
      scale: 1,
      y: 0,
      duration: 0.1
    }
  )
  .to("#logo", {
    scrollTrigger: {
      start: 300,
      end: 500,
      scrub: 0.5
    },
    y: -190,
    scale: 0.6,
    duration: 0.6,
    ease: "expo.out"
  })
  .to("#intro-h1", {
    scrollTrigger: {
      start: 500,
      end: 700,
      scrub: 0.5
    },
    scale: 0,
    duration: 0.6,
    ease: "expo.out"
  })
  .to("#intro-h3", {
    scrollTrigger: {
      start: 550,
      end: 750,
      scrub: 0.5
    },
    scale: 0,
    duration: 0.6,
    ease: "expo.out"
  });

// TIMELINE: Part 1
part1_tl
  .fromTo(
    "#liberty",
    {
      scale: 1,
      y: 0
    },
    {
      scale: 0.8,
      y: -300,
      duration: 1,
      ease: "sine.out",
      scrollTrigger: {
        start: 1000,
        end: 1200,
        scrub: 0.5
      }
    }
  )
  .from("#panel-h1", {
    scrollTrigger: {
      start: 1300,
      end: 1500,
      scrub: 0.5
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "sine.out"
  })
  .from(".models li", {
    scrollTrigger: {
      start: 1250,
      end: 1450,
      scrub: 1
    },
    opacity: 0,
    x: -20,
    duration: 1,
    stagger: 0.3,
    ease: "sine.out"
  })
  .from(".rotator", {
    scrollTrigger: {
      start: 1250,
      end: 1450,
      scrub: 1
    },
    opacity: 0,
    scale: 0,
    duration: 1,
    ease: "sine.out"
  });

// TIMELINE: Part 2
part2_tl
  .from("#panel-h1", {
    scrollTrigger: {
      start: 2000,
      end: 2200,
      scrub: 1
    },
    scale: 1,
    duration: 1,
    ease: "sine.out"
  })
  .fromTo(
    ".models li",
    {
      x: 0,
      opacity: 1
    },
    {
      x: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "sine.out",
      scrollTrigger: {
        start: 2000,
        end: 2200,
        scrub: 1
      }
    }
  )
  .from(".rotator", {
    scrollTrigger: {
      start: 2000,
      end: 2200,
      scrub: 1
    },
    scale: 1,
    duration: 1,
    ease: "sine.out"
  });

// TIMELINE: Part 3
part3_tl
  .fromTo(
    "#wrapWin",
    {
      height: 800
    },
    {
      scrollTrigger: {
        start: 2500,
        end: 2700,
        scrub: 1
      },
      height: 80,
      duration: 2,
      ease: "sine.out"
    }
  )
  .to("#liberty", {
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 1
    },
    x: 400,
    duration: 2,
    ease: "sine.out"
  })
  .to(".specs", {
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 1
    },
    opacity: 1,
    duration: 2,
    ease: "sine.out"
  })
  .from(".specs h2", {
    duration: 1,
    opacity: 0,
    x: -30,
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 1
    }
  })
  .from(".specs dt", {
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    x: -30,
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 2
    }
  })
  .from(
    ".specs dd",
    {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      x: -30,
      scrollTrigger: {
        start: 2600,
        end: 2800,
        scrub: 2
      }
    },
    "-=.5"
  )
  .from(
    ".specs dd",
    {
      duration: 1,
      opacity: 1,
      stagger: 0.3,
      x: 0,
      scrollTrigger: {
        start: 3200,
        end: 3400,
        scrub: 1
      }
    },
    "-=.5"
  )
  .from(".specs dt", {
    duration: 1,
    opacity: 1,
    stagger: 0.3,
    x: 0,
    scrollTrigger: {
      start: 3200,
      end: 3400,
      scrub: 1
    }
  })
  .from(".specs h2", {
    duration: 1,
    opacity: 1,
    x: 0,
    scrollTrigger: {
      start: 3200,
      end: 3400,
      scrub: 1
    }
  })
  .fromTo(
    "#liberty",
    {
      x: 400
    },
    {
      scrollTrigger: {
        start: 3500,
        end: 3800,
        scrub: 1
      },
      x: -360,
      duration: 3,
      ease: "sine.out"
    }
  );

// TIMELINE: Part 4
part4_tl
  .from(".chars h2", {
    duration: 1,
    opacity: 0,
    x: 30,
    scrollTrigger: {
      start: 3800,
      end: 4000,
      scrub: 1
    }
  })
  .from(".chars dt", {
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    x: 30,
    scrollTrigger: {
      start: 3800,
      end: 4000,
      scrub: 2
    }
  })
  .from(
    ".chars dd",
    {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      x: 30,
      scrollTrigger: {
        start: 3800,
        end: 4000,
        scrub: 2
      }
    },
    "-=.5"
  );

// TIMELINE: Part 5
part5_tl
  .fromTo(
    ".chars h2",
    {
      opacity: 1,
      x: 0
    },
    {
      duration: 1,
      opacity: 0,
      x: 30,
      scrollTrigger: {
        start: 4200,
        end: 4400,
        scrub: 1
      }
    }
  )
  .fromTo(
    ".chars dt",
    {
      opacity: 1,
      x: 0
    },
    {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      x: 30,
      scrollTrigger: {
        start: 4200,
        end: 4400,
        scrub: 2
      }
    }
  )
  .fromTo(
    ".chars dd",
    {
      opacity: 1,
      x: 0
    },
    {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      x: 30,
      scrollTrigger: {
        start: 4200,
        end: 4400,
        scrub: 2
      }
    },
    "-=.5"
  )
  .fromTo(
    "#liberty",
    {
      x: -360
    },
    {
      scrollTrigger: {
        start: 4400,
        end: 4600,
        scrub: 1
      },
      x: 0,
      duration: 3,
      ease: "sine.out"
    }
  );

// TIMELINE: Outro
outro_tl
  .fromTo(
    "#wrapWin",
    {
      height: 80
    },
    {
      scrollTrigger: {
        start: 5000,
        end: 5200,
        scrub: 1
      },
      height: 800,
      duration: 2,
      ease: "sine.out"
    }
  )
  .fromTo(
    "#liberty",
    {
      scale: 0.8,
      y: -300
    },
    {
      scrollTrigger: {
        start: 5200,
        end: 5400,
        scrub: 1
      },
      x: 0,
      scale: 0.7,
      y: -340,
      duration: 3,
      ease: "sine.out"
    }
  )
  .from(".outro h2", {
    scrollTrigger: {
      start: 5300,
      end: 5400,
      scrub: 1
    },
    duration: 1,
    y: 30,
    opacity: 0
  })
  .from(".outro p", {
    scrollTrigger: {
      start: 5400,
      end: 5500,
      scrub: 1
    },
    duration: 1,
    y: 30,
    opacity: 0
  })
  .from(".outro button", {
    scrollTrigger: {
      start: 5500,
      end: 5600,
      scrub: 1
    },
    duration: 1,
    y: 30,
    opacity: 0
  });

// TIMELINE: Main
scene
  .set("#liberty", {
    x: 0
  })
  .add(intro_tl)
  .add(part1_tl)
  .add(part2_tl)
  .add(part3_tl)
  .add(part4_tl)
  .add(part5_tl)
  .add(outro_tl);