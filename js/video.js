var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

// Play video
document.getElementById('play').addEventListener('click', function() {
	video.play();
	console.log("Play Video");
});

// Pause video
document.getElementById('pause').addEventListener('click', function() {
	video.pause();
	console.log("Pause Video");
});

// Slow down video
document.getElementById('slower').addEventListener('click', function() {
	video.playbackRate *= 0.9; // Decrease speed by 10%
	console.log("New speed is " + video.playbackRate);
});

// Speed up video
document.getElementById('faster').addEventListener('click', function() {
	video.playbackRate /= 0.9; // Increase speed
	console.log("New speed is " + video.playbackRate);
});

// Skip ahead
document.getElementById('skip').addEventListener('click', function() {
	if(video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current location is " + video.currentTime);
});

// Mute/unmute video
document.getElementById('mute').addEventListener('click', function() {
	if(video.muted) {
		video.muted = false;
		this.textContent = "Mute";
	} else {
		video.muted = true;
		this.textContent = "Unmute";
	}
});

// Volume slider
document.getElementById('slider').addEventListener('input', function() {
	video.volume = this.value / 100;
	document.getElementById('volume').textContent = video.volume * 100 + '%';
	console.log("Volume is " + video.volume);
});

// Apply old school style
document.getElementById('vintage').addEventListener('click', function() {
	video.classList.add('oldSchool');
});

// Remove old school style
document.getElementById('orig').addEventListener('click', function() {
	video.classList.remove('oldSchool');
});

