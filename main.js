import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all.js";
import Lenis from "@studio-freight/lenis";

function updateSize() {
  pageHeight = window.innerHeight;
  pageWidth = window.innerWidth;
}

updateSize();
window.addEventListener("resize", updateSize);
// Scroll to top on init

if (history.scrollRestoration) {
  history.scrollRestoration = "manual";
} else {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}
window.scrollTo(0, 0);
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
document.documentElement.scrollTop = 0; // Para navegadores modernos
document.body.scrollTop = 0; // Para navegadores más antiguos

// Lenis
const lenis = new Lenis({
  duration: 0.5,
  lerp: 0.1,
  wheelMultiplier: 0.5,
  wrapper: document.body,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
lenis.stop();
// GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
gsap.to(window, {
  duration: 0.05,
  scrollTo: 0,
  ease: "power4.out",
});
gsap.to("body", {
  height: "100vh",
  overflow: "hidden",
  duration: 0,
});
gsap.to("main h1", {
  y: "-100vh",
  duration: 8,
  scrollTrigger: {
    trigger: ".main img",
    start: "top top",
    end: "bottom 10%",
    scrub: 1,
    ease: "linear",
  },
});
gsap.to(".about__container:first-child .about__img img", {
  y: "-15%",
  scrollTrigger: {
    trigger: ".about__container:first-child .about__img",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".about__container:last-child .about__img img", {
  y: "-15%",
  scrollTrigger: {
    trigger: ".about__container:last-child .about__img",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from(".about__content h2", {
  x: -500,
  scrollTrigger: {
    trigger: ".about__content h2",
    start: "top bottom",
    end: "10% 20%",
    scrub: true,
    toggleActions: "play none none none",
  },
});
gsap.from(".about__container:first-child .about__content__quote", {
  x: 500,
  scrollTrigger: {
    trigger: ".about__container:first-child .about__content h2",
    start: "top bottom",
    end: "50% 20%",
    scrub: true,
    toggleActions: "play none none none",
  },
});
gsap.from(".about__container:last-child .about__content__quote", {
  x: "100%",
  scrollTrigger: {
    trigger: ".about__container:last-child .about__content",
    start: "top bottom",
    end: "50% 20%",
    scrub: true,
  },
});
//loader
function startLoader() {
  let counterElement = document.querySelector(".count p");
  let currentValue = 0;
  function updatCounter() {
    if (currentValue < 100) {
      let increment = Math.floor(Math.random() * 10) + 1;
      currentValue = Math.min(currentValue + increment, 100);
      counterElement.textContent = currentValue;

      let delay = Math.floor(Math.random() * 200) + 25;
      setTimeout(updatCounter, delay);
    }
  }
  updatCounter();
}

gsap.from(".captions__container__caption:first-child", {
  ease: "power4.out",
  y: "200px",
  stagger: 0.05,
  opacity: 0,
  scrollTrigger: {
    trigger: ".captions__container__caption:first-child",
    scrub: true,
  },
});
gsap.from(".captions__container__caption:nth-child(2)", {
  ease: "power4.out",
  y: "200px",
  stagger: 0.05,
  opacity: 0,
  scrollTrigger: {
    trigger: ".captions__container__caption:nth-child(2)",
    scrub: true,
  },
});
gsap.from(".captions__container__caption:nth-child(3)", {
  ease: "power4.out",
  y: "200px",
  stagger: 0.05,
  opacity: 0,
  scrollTrigger: {
    trigger: ".captions__container__caption:nth-child(3)",
    scrub: true,
  },
});
startLoader();
gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.5 });
gsap.to(".mli6", { opacity: 0, delay: 3.5, duration: 0.5 });
gsap.to(".pre-loader", {
  scale: 0.5,
  ease: "power4.inOut",
  delay: 3,
  duration: 2,
});
gsap.to(".loader", {
  height: "0",
  ease: "power4.inOut",
  duration: 1.5,
  delay: 3.75,
});
gsap.to(".loader-bg", {
  height: "0",
  ease: "power4.inOut",
  duration: 1.5,
  delay: 4,
});
gsap.to("body", {
  height: "100%",
  overflow: "auto",
  delay: 5,
  onComplete: () => lenis.start(),
});
gsap.from(".main h1", {
  opacity: 0,
  duration: 1.25,
  delay: 5.25,
});
gsap.to(".pre-loader", {
  zIndex: "-1",
  delay: 5,
  duration: 2,
});
gsap.to(".loader", {
  ease: "power4.inOut",
  duration: 1.5,
  zIndex: "-1",
  delay: 5,
});
gsap.to(".loader-bg", {
  ease: "power4.inOut",
  duration: 1.5,
  zIndex: "-1",
  delay: 5,
});
gsap.from(".work__imgs__container img", {
  y: "300%",
  ease: "power4.out",
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".work__imgs__container",
    start: "20% bottom",
    end: "+=100vh 50%",
    scrub: 1.5,
  },
});
gsap.from(".captions__title h2", {
  y: "150%",
  duration: 0.25,
  scrollTrigger: {
    trigger: ".captions__title",
    scrub: true,
  },
});

gsap.from(".work__titleContainer h2", {
  opacity: 0,
  duration: 0.25,
  scrollTrigger: {
    trigger: ".work__titleContainer",
    scrub: true,
  },
});
gsap.from(".work__titleContainer button", {
  opacity: 0,
  duration: 0.25,
  scrollTrigger: {
    trigger: ".work__titleContainer",
    scrub: true,
  },
});
