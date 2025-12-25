window.addEventListener("load", () => {
  anime({
    targets: "#dust-paarticle path",
    translateY: [20, -120],
    direction: "alternate",
    easing: "easeInOutSine",
    duration: 6000,
    delay: anime.stagger(400),
    loop: true
  });
});
