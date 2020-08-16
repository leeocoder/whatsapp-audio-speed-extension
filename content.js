//Verify if the header is loaded
const interval = setInterval(() => {
  //Select the button to change speed
  const headerPerfil = document.querySelector("div._1MXsz");
  if (headerPerfil) {
    console.log(headerPerfil);
    clearInterval(interval);
  }
  //Create a button
  const button = document.createElement("button");
  button.classList.add("btnChanger");
  button.innerHTML = "2x";

  //Add event's button
  button.addEventListener("click", () => {
    const audios = document.querySelectorAll("audio");
    audios.forEach((audio) => {
      audio.playbackRate = 2;
    });
  });

  //Add Button to change speed
  headerPerfil.appendChild(button);
}, 1000);
