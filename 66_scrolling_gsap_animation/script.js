console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
gsap.defaults({ease: "none"});

let bodyEl = document.body;

function intro(){
  
  ///SHIP///
  
  let shipTofish = gsap.timeline();
  
  shipTofish
  .set("#esa",{opacity: 0})
  .from('#ship',{x: -100,duration: 2.5})
  .from("#top-hill",{x: -40, duration: 2},"<")
  // .from(bodyEl,{scale: 1.5, transformOrigin: "top", duration: 2.6},"<")
  .to("#esa",{opacity: 1 });
  

  let fishingAction = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top top",
    end: "bottom bottom",
    // markers: true,
  }})
  .set("#esa-rope", {drawSVG: 0}, 0)
  .from("#esa-rope", {drawSVG: 0}, 0)
  .to("#esa",{y:2020},0);

  ///SMOKE///
  
  let smoke = gsap.timeline({repeat: -1,});

 smoke.from(".ship-smoke",{
    duration: 2,
    scale: 0,
    transformOrigin: "center center",
    stagger:{each: 0.6},
  })
  .to(".ship-smoke",{
   opacity: 0
 });
  
  ///MOON///
  
  let moon = gsap.timeline();
  
  moon
    .set('.moon-el',{
    scale: 0.2,
    opacity: 0,
    transformOrigin: "center center", 
  })
    .from(".moon-main",{
    duration: 2,
    transformOrigin: "center center", 
    scale: 0.2,
  },0)
  .to(".moon-el",{
    scale:1,
    opacity: 1,
    transformOrigin: "center center", 
    duration: 2,
    stagger: {
      each: 0.2
    }
  },0);
  

}
intro();


///Fishes///

function fishesMove() {
  
  let x = 0;
  let mx = 0;
  let xDis = 80;
  let topBtm = "top bottom";
  
  let bFishesTop = gsap.timeline({scrollTrigger: {
    trigger: "#small-fishes-right", start: topBtm}});
    let bFishesMid = gsap.timeline({scrollTrigger: {
    trigger: "#small-fishes-left", start: topBtm}});
  let sFishesTop = gsap.timeline({scrollTrigger: {
    trigger: "#small-fishes-right1, #small-fishes-right2", start: topBtm}});
  
    let sFishesBtm = gsap.timeline({scrollTrigger: {
    trigger: "#small-fishes-left1", start: topBtm}});
  


for (let i = 0; i < 15; i++) {
  x += xDis;
  mx -= xDis; 

    bFishesTop
      .set("#small-fishes-right",{x: -200})
      .set('.b-fishes-top',{x: x })
      .to('.b-fishes-top',{
      x: x + xDis,
      ease: "power3.out",
      duration: 1,
      delay:0.5,
    stagger:{each: 0.01 }
  });
  
      bFishesMid
      .set("#small-fishes-left",{x: 0})
      .set('.b-fishes-mid',{x: mx })
      .to('.b-fishes-mid',{
      x: mx - xDis,
      ease: "power3.out",
      duration: 1,
      delay:0.5,
    stagger:{each: 0.01 }
  });
  
    sFishesTop
    .set("#small-fishes-right1, #small-fishes-right2",{x: -600})
    .set('.s-fishes-top, .s-fishes-mid ',{x: x })
    .to('.s-fishes-top, .s-fishes-mid',{
    x: x + xDis,
    ease: "power2.out",
    duration: 1.2,
    delay:0.6,
  stagger:{each: 0.01 }
  });
  
  sFishesBtm
    .set("#small-fishes-left1",{x: 400})
    .set('.s-fishes-btm',{x: mx })
    .to('.s-fishes-btm',{
    x: mx - xDis,
    ease: "power3.out",
    duration: 1.5,
    delay:0.7,
  stagger:{each: 0.02 }
  });
  
};

  
} 

fishesMove();


//Y-Fishes///

// y-fish-left1

  gsap.set("#y-fish-left1, #y-fish-left",{
  rotation: 30,
  transformOrigin: "right"
});

  gsap.set("#y-fish-right",{
  rotation: -30,
  transformOrigin: "left"
});

let yFish1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#y-fish-left1",
    scrub: true,
    start: "bottom bottom",
    end: "+=600",
    // markers: true,
  }})
.to("#y-fish-left1",{
  rotation: -30,
  transformOrigin: "right"
});

let yFish2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#y-fish-left",
    scrub: true,
    start: "bottom bottom-=100",
    end: "+=650",
  }})
.to("#y-fish-left",{
  rotation: -30,
  transformOrigin: "right"
});

let yFish3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#y-fish-right",
    scrub: true,
    start: "bottom bottom-=100",
    end: "+=500",
  }})
.to("#y-fish-right",{
  rotation: 30,
  transformOrigin: "left"
});

///ROCK ON SIDES///

gsap.to("#rock-left-w, #rock-right-w, #rock-right-w1", {
  yPercent: 10,
  ease: "none",
  scrollTrigger: {
    scrub: true
  }, 
});

gsap.to("#rock-right-b1, #rock-right-b, #rock-left-b", {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    scrub: true
  }, 
});

///TAKO///

let tako = gsap.timeline();

tako
.to(".tako-mouth",{x: -30},0)
.to("#tako-right-eye, #tako-left-eye",{x: -10},0)
.from("#tako-hi",{
  scale: 0,
  transformOrigin: "right bottom"
},0)
.to('#tako',{
  y: 50,
  repeat: -1,
  duration: 3,
  yoyo: true
},0);

ScrollTrigger.create({
  trigger: "#tako",
  animation: tako,
  start: "top center",
  end: "top 100px",
  // markers: true
  });

let takoLegs = gsap.timeline({repeat: -1, yoyo: true,
   defaults: {
     duration:2,
     ease: "power2.in"
   }
});

takoLegs
.to(".tako-legs",{drawSVG: 60, y:30})
.to('.tako-legs',{drawSVG: 100, y:0});

///KURAGE///

gsap.set("#kurage",{
  y:100
});

gsap.to(".kurage-legs",{
  y: -10,
  repeat: -1,
  yoyo: true,
  duration: 10,
  drawSVG: 90,
  stagger:{
    each: 0.2
  }
});


gsap.to("#kurage",{
  y:150,
  repeat: -1,
  yoyo: true,
  duration: 5,
  ease: "power1.inOut"
});

///IKA///
gsap.to(".ika-legs",{
  drawSVG: 40,
  repeat: -1,
  yoyo: true,
  duration: 2,
  ease: "power2.in",
  delay: 1
});

gsap.to("#ika",{
  y:-600,
  duration: 20,
  ease: " elastic. out( 1, 0.3)"
})




///FUGU///

let fugu = document.querySelector('#fugu');

fugu.addEventListener("mouseenter", function(){
  fuguTl.play();
});

let fuguTl = gsap.timeline({paused: true, 
                            defaults: {
                               ease: "power4.in"
                            } });

fuguTl
  .to('#fugu-body, #fugu-body1',{scale: 1.3, transformOrigin: "center center", })
  .to('#fugu-mouth',{scale: 1.3, x: -15, transformOrigin: "center center" },0)
  .to('#fugu-eye',{scale: 2, x: -10 },0)
  .to('#fugu-fin',{ x: 10 },0);



///Starfish////


gsap.to(".star",{
  duration: 3,
  rotation: 20,
  transformOrigin: "center center",
  repeat: -1,
  yoyo: true
})


///SUB//

gsap.from("#sub-tube",{
  drawSVG: 29,
  repeat: -1,
  yoyo: true,
  duration: 2
});

gsap.from("#sub-small-glass",{
  x: 21,
  repeat: -1,
  yoyo: true,
  duration: 2
});


let kaeruAnim = gsap.timeline();


  gsap.set("#kaeru",{
  y:100
});

kaeruAnim
  .to("#kaeru",{
  y:0,
  ease: "power4.in",
  duration: 1
})
.from("#kaeru-mouth",{
  scale: 0.2,
  duration:0.7,
  transformOrigin: "center"
})
.from("#k-eye-p1, #k-eye-p",{
  x: -3,
  duration: 2
});

ScrollTrigger.create({
  trigger: "#sub",
  animation: kaeruAnim,
  start: "top center+=150",
  // end: "top 100px",
  // markers: true
  });

  ///CHIN///

gsap.from("#chin1, #chin2, #chin3, #chin4",{
  y:  20,
  stagger:{
    each: 0.3
  },
  repeat: -1,
  yoyo: true
})


///TRE///

let tre = document.querySelector('#tre');

tre.addEventListener("mouseenter", function(){
  treTl.restart();
});

// tre.addEventListener("mouseenter", function(){
//   treTl.play();
// });


let treTl = gsap.timeline({paused: true});

treTl
  .to('#tre',{
    rotation: -10,
    transformOrigin: "center bottom",
    ease: "elastic. out( 1, 0.3)",
    repeat: 5,
  yoyo: true,
  duration: 0.1
})

///WATER///

let waterTl = gsap.timeline({repeat: -1, yoyo: true, ease: "power1.inOut"});



waterTl
.to('.water-btm',{x:20, duration: 3},0)
.to('.water-mid',{x:-30, duration: 3},0)
.to('.water-top',{x:-40, duration: 4},0)
.to(".water-btw",{x:-30, duration: 2},0);


//BUBBLES//

let bub1 = gsap.timeline();
// let bub2 = gsap.timeline();

gsap.to('#bubbles4, #bubbles1',{x:-100, repeat: -1, yoyo: true, duration: 2, ease: "power1.inOut",});

bub1
  .set("#bubbles4, #bubbles1",{
  y: 500,
  opacity: 0.8,
})
  .to("#bubbles4, #bubbles1", {
  opacity: 0,
  y: -200,
  scale:0.8,
  duration: 15, 
  repeat: -1,
  ease: "power1.inOut",
  // motionPath:{
  //   path: "#bub-line",
  //   align: "#bub-line",
  //   alignOrigin: [0.5, 0.5],
  //   start: 0.5,
  //   end: 0.9
  // }
});


// bub2
//   .to("#bubbles1", {
//   opacity: 0,
//   scale:0.7,
//   duration: 18, 
//   repeat: -1,
//   repeatDelay: 4,
//   ease: "power1.inOut",
//   motionPath:{
//     path: "#bub-line2",
//     align: "#bub-line2",
//     alignOrigin: [0.5, 0.5],
//     start: 0.5,
//     end: 0.9
//   }
// });