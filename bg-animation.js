window.addEventListener("load", () => {
  anime({
    targets: "#dust-paarticle *",
    translateY: [
      { value: -20, duration: 2000 },
      { value: 20, duration: 2000 }
    ],
    easing: "easeInOutSine",
    loop: true,
    delay: anime.stagger(50)
  });
});
