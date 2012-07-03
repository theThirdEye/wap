window.onload = function(){
	wap_init();
	canvas_init();
	mouse_init();
}


var wap;
var bufferLoader;


	
function wap_init() {
	wap = new webkitAudioContext();
	bufferLoader = new BufferLoader(wap ,
			[
			"./sound/drums/bass.mp3"  ,
			"./sound/drums/snare.mp3"  ,
			"./sound/drums/tum_low.mp3"  ,
			"./sound/drums/tum_mid.mp3"  ,
			"./sound/drums/tum_high.mp3"  ,
			"./sound/drums/hihat_close.mp3"  ,
			"./sound/drums/hihat_open.mp3"  ,
			"./sound/drums/ride.mp3"  ,
			"./sound/drums/crash.mp3" 
			] ,
			function(){console.log("finish load.");});
	bufferLoader.load();
}


function wap_playSound(bufNum) {
	var source;
	source = wap.createBufferSource();
	source.buffer = bufferLoader.bufferList[bufNum];
	source.loop = false;
	source.connect(wap.destination);
	source.noteOn(wap.currentTime);

}



function wap_stopSound(source) {
	source.noteOff(0);
}



