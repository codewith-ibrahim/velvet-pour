 AOS.init({
    once: false,         
    duration: 1000,
    delay: 200,
    offset: 100,        
  });
  
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
