document.addEventListener("DOMContentLoaded", function () {
    gsap.set(".navbar_component", { backgroundColor: "rgba(0, 0, 255, 0)" });

    let navbarTimeline = gsap.timeline({ paused: true });

    navbarTimeline.to(".navbar_background", { opacity: 1, duration: 0.25 });

    ScrollTrigger.create ({
        trigger: ".toolbar_component",
        start: "bottom top",
        end: "+=0",
        // markers: true,
        onEnter: () => navbarTimeline.play(),
        onEnterBack: () => navbarTimeline.reverse()
    });
});