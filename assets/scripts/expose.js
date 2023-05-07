// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  let volumeIconImg = document.querySelector("#volume-controls > img");
	let button = document.querySelector("#expose > button");
	let audio = document.querySelector("audio");
	let hornSelect = document.getElementById("horn-select");
	let hornImage = document.querySelector("#expose > img");
	let volumeLevel = document.querySelector("#volume");
  
  const confetti = new JSConfetti();
	
  const jointImgAud = () => {
    if(hornSelect.value === "select"){
      return;
    } else if (hornSelect.value === "air-horn") {
      hornImage.src = "./assets/images/air-horn.svg";
      audio.src = "./assets/audio/air-horn.mp3";
    } else if (hornSelect.value === "car-horn") {
      hornImage.src = "./assets/images/car-horn.svg";
      audio.src = "./assets/audio/car-horn.mp3";
    } else {
      hornImage.src = "./assets/images/party-horn.svg";
      audio.src = "./assets/audio/party-horn.mp3";
    }
	};

	const volLevel = () => {
    if (volume.value == 0) {
      volumeIconImg.src = "./assets/icons/volume-level-0.svg";
      volumeIconImg.alt = "Volume level 0";
    } else if (volume.value < 33) {
      volumeIconImg.src = "./assets/icons/volume-level-1.svg";
      volumeIconImg.alt = "Volume level 1";
    } else if (volume.value < 67) {
      volumeIconImg.src = "./assets/icons/volume-level-2.svg";
      volumeIconImg.alt = "Volume level 2";
    } else {
      volumeIconImg.src = "./assets/icons/volume-level-3.svg";
      volumeIconImg.alt = "Volume level 3";
    }
    audio.volume = volume.value / 100;
	};


	button.addEventListener("click", () => {
		audio.currentTime = 0;
    audio.play();
    if(hornSelect.value === "party-horn"){
      confetti.addConfetti();
    }
	});

	volumeLevel.addEventListener("input", volLevel);
	hornSelect.addEventListener("change", jointImgAud);

	jointImgAud();
	volLevel();
}