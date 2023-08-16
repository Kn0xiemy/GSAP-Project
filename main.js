$(document).ready(function() {
  var controller = new ScrollMagic.Controller();

  var parallax = new TimelineMax(); // parallax effect on the drop-page image
  parallax
    .to('.bg', 1, { scale: 1, x: "-50vw" })

  var scene = new ScrollMagic.Scene({
    triggerElement: '.parallax',
    triggerHook: 0,
    duration: '200%'
  })
  .setPin('.bg')
  .setTween(parallax)
  .addTo(controller);
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  y: 350,
  x: 700,
  duration: 1,
  transition: 2,
  opacity: 1,
  scrollTrigger: ".box",
})


gsap.to(".navbar", {
  transition: 3,
  opacity: 1,
  scrollTrigger: {
    trigger: ".navbar",
    start: "top center",
    end: "top 60%",
  }
})

ScrollTrigger.create({ // class switching with the navbar bottom corners transitioning with a curve
  transition: 3,
  trigger:".content",
  start: "top 20%",
  toggleClass: { targets: "nav", className: "navbar-color" },
})

gsap.to(".contact", {
  transition: 2,
  opacity: 1,
  scrollTrigger: {
    trigger: ".navbar",
    start: "top center",
    color: "white",
    opacity: 1,
    
  }
})

gsap.to(".about-header", {
  opacity: 1,
  transition: 2,
  scrollTrigger: {
    trigger: ".navbar",    
  }
})

// mountain fade-in animation, but the border radius also changes during the transition to make it more appealing

// + additionally, the grid of images disappears when not in focus of the viewport and restarts once focused again on screen

// also added a delay, to portray a smooth animation individually, as in giving out cards effect
gsap.to(".mountain", {
  y: 350,
  x: 800,
  duration: 1,
  transition: 2,
  opacity: 1,
  borderRadius: 50,
  delay: 0.3,
  scrollTrigger: {
    toggleActions: "restart reverse restart reverse",
    trigger: ".box",
    start: "top 40%",
    end: "top 1%",
    
  }
})

gsap.to(".mountainTwo", {
  y: 100,
  x: 800,
  duration: 1,
  transition: 2,
  opacity: 1,
  delay: 0.7,
  borderRadius: 50,
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart reverse restart reverse",
    start: "top 40%",
    end: "top 1%",
  }
})

gsap.to(".mountainThree", {
  y: 600,
  x: 800,
  duration: 1,
  transition: 2,
  opacity: 1,
  delay: 1,
  borderRadius: 50,
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart reverse restart reverse",
    start: "top 40%",
    end: "top 1%",
  }
})

gsap.to(".mountainFour", {
  y: 600,
  x: 1300,
  duration: 1,
  transition: 2,
  opacity: 1,
  delay: 1.4,
  borderRadius: 50,
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart reverse restart reverse",
    start: "top 40%",
    end: "top 1%",
  }
})

gsap.to(".mountainFive", {
  y: 350,
  x: 1300,
  duration: 1,
  transition: 2,
  opacity: 1,
  delay: 1.8,
  borderRadius: 50,
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart reverse restart reverse",
    start: "top 40%",
    end: "top 1%",
  }
})

gsap.to(".mountainSix", {
  y: 100,
  x: 1300,
  duration: 1,
  transition: 2,
  opacity: 1,
  borderRadius: 50,
  delay: 2,
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart reverse restart reverse",
    start: "top 40%",
    end: "top 1%",
  }
})

gsap.to(".message", {
  duration: 1,
  transition: 2,
  opacity: 1,
  borderRadius: 50,
  delay: 3.5,
  scrollTrigger: {
    trigger: ".box",
    toggleActions: "restart reverse restart reverse",
    start: "top 40%",
    end: "top 1%",
  }
})

gsap.to(".about-img",{ // last section img, which responds to the scrollbar speed and location - scrub 1 used as the higher values seem to be slower
  opacity: 1,
  borderRadius: 50,
  x: 700,
  y: 250,
  height:800,
  width: 1600,
  scrollTrigger: { // also changes size, depending on the viewport position of the scrollbar
    trigger: ".about",
    toggleActions: "restart reverse restart reverse",
    scrub: 1
  }
})

gsap.utils.toArray("span").forEach((span) => { // smooth text reveal on the messages, once in the viewport
  ScrollTrigger.create ({
    trigger: span,
    start: "top center",
    toggleClass: "active"
  })
})






