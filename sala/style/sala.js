// Obtener elementos del DOM
const localVideo = document.querySelector(".local-video");
const remoteVideo = document.querySelector(".remote-video");
const endCallBtn = document.querySelector(".end-call-btn");

// Simular videollamada (usando video local)
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    localVideo.srcObject = stream;
  })
  .catch((error) => {
    console.error("Error al obtener el stream:", error);
  });

// Evento para finalizar la llamada
endCallBtn.addEventListener("click", () => {
  // Detener el video local
  localVideo.srcObject.getTracks().forEach((track) => {
    track.stop();
  });

  // Ocultar los videos
  localVideo.style.display = "none";
  remoteVideo.style.display = "none";

  // Mostrar mensaje de finalización de llamada
  alert("Llamada Finalizada");
});
