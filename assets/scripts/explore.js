// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //Decalre variables
  //Decalre variables
  const button = document.querySelector("#explore > button");
  const voiceSelect = document.getElementById("voice-select");
  const image = document.querySelector("#explore > img");
  const textToSpeak = document.getElementById("text-to-speak");

  let voices = speechSynthesis.getVoices();
  //For loop through voices and add them to the dropdown
  for (let i = 0; i < voices.length; i++) {
    let option = document.createElement("option");
    option.textContent = voices[i].name;
    option.value = voices[i].name;
    voiceSelect.appendChild(option);
  }
  //When the button is clicked, speak the text
  button.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    //Find the selected voice
    utterance.voice = voices.find((voice) => voice.name === voiceSelect.value);
    //Speak the text
    speechSynthesis.speak(utterance);
  });
  //Animation of smiley face "talking" by
  //having mouth open while text being spoken
  const mouthTalk = () => {
    let src = image.src = "./assets/images/smiling.png";
    if (speechSynthesis.speaking) {
      src = "./assets/images/smiling-open.png";
    }
    image.setAttribute("src", src);
    requestAnimationFrame(mouthTalk);

  }
  mouthTalk();

}