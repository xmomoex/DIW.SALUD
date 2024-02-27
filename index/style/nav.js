function openNav() {
  document.getElementById("menu-mobile").style.width = "100%";
}
function closeNav() {
  document.getElementById("menu-mobile").style.width = "0%";
}

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".content", { delay: 200, origin: "top" });
sr.reveal(".boton", { delay: 200, origin: "left" });
sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".ayuda", { delay: 200, origin: "left" });
sr.reveal(".menu", { delay: 200, origin: "left" });
sr.reveal(".sesion", { delay: 200, origin: "left" });
