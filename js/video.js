var video;
var volumeDisplay
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.getElementById("player1"); 
	volumeDisplay = document.getElementById('volume'); // Corrected ID without '#'

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
    updateVolumeDisplay();
});
// Play video
// document.getElementById('#play').addEventListener("click", function() {
//     video.play();
//     updateVolumeDisplay();
// });

// Pause video
document.querySelector('#pause').addEventListener("click", function() {
    video.pause();
});

// Slow down video
document.querySelector('#slower').addEventListener("click", function() {
    video.playbackRate *= 0.5; 
    console.log(`New speed is ${video.playbackRate}`);
});

// Speed up video
document.querySelector('#faster').addEventListener("click", function() {
    video.playbackRate /= 0.5; // Increase speed to reverse the slow down
    console.log(`New speed is ${video.playbackRate}`);
});

// Skip ahead
document.querySelector('#skip').addEventListener("click", function() {
    if (video.currentTime + 10 > video.duration) {
        video.currentTime = 0; // Go back to the start if over duration
    } else {
        video.currentTime += 10; // Skip ahead 10 seconds
    }
    console.log(`Current location is ${video.currentTime}`);
});

//Mute button
document.getElementById('mute').addEventListener("click", function() {
	video.muted = !video.muted;
	this.textContent = video.muted ? "Unmute" : "Mute";
});

// Volume slider
document.getElementById('slider').addEventListener("input", function() {
	video.volume = this.value / 100;
	updateVolumeDisplay();
});

// Update volume display
function updateVolumeDisplay() {
	volumeDisplay.textContent = `${Math.round(video.volume * 100)}%`;
}

// Apply old school style
document.getElementById('vintage').addEventListener("click", function() {
    video.classList.add('oldSchool');
});

// Remove old school style
document.getElementById('orig').addEventListener("click", function() {
    video.classList.remove('oldSchool');
});







