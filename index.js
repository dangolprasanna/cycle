const menu = document.querySelector(".menu-btn"),
    hamburger = document.querySelector(".menu-btn__burger"),
    menuList = document.querySelector(".home-nav");

let showMenu = false;

menu.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    menuList.classList.toggle("open");
});

var tl = gsap.timeline();
tl.from("nav", {
    duration: 1,
    y: 20,
    stagger: 0.25,
    opacity: 0,
    ease: "ease"
});
tl.from(".home-main--container", {
        duration: 1,
        y: -20,
        stagger: 0.25,
        opacity: 0,
        ease: "ease",
    },
    "-=0.5");
tl.from(".home-main--grids", {
        duration: 1,
        opacity: 0,
        y: -20,
        ease: "ease-out",
    },
    "-=0.5");

tl.from(".home-aside", {
        opacity: 0,
        duration: 1,
        x: 100,
        ease: "power1"
    },
    "-=0.5"
);