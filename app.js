
const btnPlay = document.querySelector(".play") 
const video = document.querySelector(".video") 
const secVid = document.querySelector(".video second") 
const btnPause = document.querySelector(".pause") 
const btnNext = document.querySelector(".arrow-right")
const btnBack = document.querySelector(".arrow-left") 
const btnControl = document.querySelector(".control") 
const controlPanel = document.querySelector(".meditation-time") 
const btnShort = document.querySelector(".short") 
const btnMedium = document.querySelector(".medium") 
const btnLong = document.querySelector(".long") 

// Video sources:
const vids = [
	"./video/firstXS.mp4",
	"./video/secondXS.mp4",
	"./video/third.mp4",
	"./video/fourth.mp4",
]
let i = [1] 

// Function for playing/pausing meditation:
const playMeditation = () => {
	btnPlay.classList.toggle("pause") 
	if (btnPlay.classList.contains("pause")) {
		video.play() 
	} else {
		
		stopMeditation() 
	}
}

// Function for stopping meditation:
const stopMeditation = () => {
	video.pause() 
	btnPlay.classList.remove("pause") 
}

// Function for playing next meditation:
const nextMeditation = () => {
	if (i > 3) {
		
		video.src = vids[3] 
		return
	}
	stopMeditation() 
	video.src = vids[i] 
	i++ 
}

// Function for playing previous meditation:
const previousMeditation = () => {
	if (i < 1) {
		
		video.src = vids[i] 
		return
	}
	stopMeditation() 
	video.src = vids[i] 
	i-- 
}

// Function for showing/hiding the control panel:
const showControlPanel = () => {
	btnControl.classList.toggle("controlActive") 
	controlPanel.classList.toggle("btnActive") 
}

// Function for setting short meditation time (5 min):
const shortTime = () => {
	stopMeditation() 
	playMeditation() 
	setTimeout(stopMeditation, 30000) 
	btnShort.classList.add("activeTimer") 
	btnMedium.classList.remove("activeTimer") 
	btnLong.classList.remove("activeTimer") 
}

// Function for setting medium meditation time (15 min):
const mediumTime = () => {
	stopMeditation() 
	playMeditation() 
	setTimeout(stopMeditation, 900000) 
	btnMedium.classList.add("activeTimer") 
	btnLong.classList.remove("activeTimer") 
	btnShort.classList.remove("activeTimer") 
}

// Function for setting long meditation time (30 min):
const longTime = () => {
	stopMeditation() 
	playMeditation() 
	setTimeout(stopMeditation, 1800000) 
	btnLong.classList.add("activeTimer") 
	btnShort.classList.remove("activeTimer") 
	btnMedium.classList.remove("activeTimer") 
}

// Adding event listeners to DOM elements:
btnControl.addEventListener("click", showControlPanel) 
btnControl.addEventListener("mouseover", showControlPanel) 
btnPlay.addEventListener("click", playMeditation) 
btnNext.addEventListener("click", nextMeditation) 
btnBack.addEventListener("click", previousMeditation) 
btnShort.addEventListener("click", shortTime) 
btnMedium.addEventListener("click", mediumTime) 
btnLong.addEventListener("click", longTime) 
