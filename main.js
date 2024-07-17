import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all.js";
import Lenis from "@studio-freight/lenis";
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
gsap.fromTo(
  ".about img",
  { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
  {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power1.out",
    duration: 1.5,
    scrollTrigger: {
      trigger: ".about__img",
      start: "center bottom",
      end: "bottom top",
      toggleActions: "play none none none",
    },
  }
);
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
gsap.from(".about__content p", {
  y: 500,
  scrollTrigger: {
    trigger: ".about__content h2",
    start: "top bottom",
    end: "50% 20%",
    scrub: true,
    toggleActions: "play none none none",
  },
});
// Obtén el elemento <p> con la clase "our-text"
const paragraph = document.querySelector(".work h2");

// Obtiene el contenido del párrafo
const textContent = paragraph.textContent;

// Crea un array de caracteres a partir del contenido
const charArray = Array.from(textContent);

// Crea un array de elementos <div> con la clase "char" y el contenido de cada caracter
const divArray = charArray.map((char) => {
  const divElement = document.createElement("div");
  divElement.classList.add("char");
  divElement.textContent = char;
  return divElement;
});

// Reemplaza el contenido del párrafo con los elementos <div>
paragraph.innerHTML = ""; // Limpia el contenido actual
divArray.forEach((div) => {
  paragraph.appendChild(div);
});

console.log("divArray", divArray);
gsap.fromTo(
  divArray,
  {
    y: 500,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".work",
      start: "10% bottom",
      end: "+=100vh 50%",
      scrub: true,
      toggleActions: "play none none none",
    },
    duration: 2,
    ease: "power4.out",
  }
);

gsap.from(".work__imgs__container img", {
  y: "300%",
  ease: "power4.out",
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".work",
    start: "20% bottom",
    end: "+=100vh 50%",
    scrub: 1.5,
    toggleActions: "play none none none",
  },
});
gsap.from(".about__content__services__service", {
  ease: "power4.out",
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".about__content__services__service",
    start: "-50% bottom",
    end: "50% 25%",
    scrub: true,
    toggleActions: "play none none none",
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
