const scroll = new LocomotiveScroll({
    el: document.querySelector('#data-scroll-container'),
    smooth: true,
    lerp: 0.10, 
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

//for project ................
document.querySelector("#navProject").addEventListener("click", () => {
    const targetElementProject = document.querySelector(".projectPage"); // Replace with the target element
const targetProjectPosition = targetElementProject.getBoundingClientRect().top;
    scroll.scrollTo(targetProjectPosition);
});


// for bio..................

document.querySelector("#navBio").addEventListener('click',()=>{
    const targetElementBio = document.querySelector('.page4');
    const targetBioPosition = targetElementBio.getBoundingClientRect().top;

    scroll.scrollTo(targetBioPosition);
})


document.querySelector('#navSkill').addEventListener('click',()=>{
    const targetSkill = document.querySelector('.page2');
    const targetSillPosition = targetSkill.getBoundingClientRect().top;

    scroll.scrollTo(targetSillPosition);
})



document.querySelector('#navExp').addEventListener('click',()=>{
    const targetExp = document.querySelector('.experince');
    const targetExpPosition = targetExp.getBoundingClientRect().top;

    scroll.scrollTo(targetExpPosition );
})



document.querySelector('#navEdu').addEventListener('click',()=>{
    const targetEdu = document.querySelector('.bio-section');
    const targetEduPosition = targetEdu.getBoundingClientRect().top;

    scroll.scrollTo(targetEduPosition + 500 );
})



document.querySelector('#navCon').addEventListener('click',()=>{
    const targetCon = document.querySelector('#page3');
    const targetConPosition = targetCon.getBoundingClientRect().top;

    scroll.scrollTo(targetConPosition);
    
})