const scroll = new LocomotiveScroll({
    el: document.querySelector('#data-scroll-container'),
    smooth: true,
    lerp: 0.05, 
    getSpeed: true,
    getDirection: true,
});

gsap.from(".nameGsap",{
    opacity:0,
    delay:1,
    duration:1,
    y:100,
    stagger:0.3,
   
})

gsap.from(".heading",{
    opacity:0,
    delay:1,
    duration:2,
    y:100,
    stagger:1,

})

let menu = document.querySelector(".menuBtn");
let navCon = document.querySelector(".navContainer");
let nav = document.querySelector("nav");
let isMenuOpen = false; // Renamed 'value' for better clarity

// Toggle menu visibility and height
menu.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent body click event from triggering
    isMenuOpen = !isMenuOpen;
    navCon.classList.toggle("navContainerHide");
    nav.style.height = isMenuOpen ? "400px" : "0";
});

// Hide menu when clicking outside
document.body.addEventListener("click", () => {
    if (isMenuOpen) {
        navCon.classList.add("navContainerHide");
        nav.style.height = "0";
        isMenuOpen = false;
    }
});






// =======================================================================
