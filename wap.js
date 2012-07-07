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
			"./sound/drums/bass.mp3" ,
			"./sound/drums/snare.mp3" ,
			"./sound/drums/tum_low.mp3" ,
			"./sound/drums/tum_mid.mp3" ,
			"./sound/drums/tum_high.mp3" ,
			"./sound/drums/hihat_close.mp3" ,
			"./sound/drums/hihat_open.mp3" ,
			"./sound/drums/ride.mp3" ,
			"./sound/drums/crash.mp3" ,
			"./okinawa/bon.mp3"  ,
			"./okinawa/tan.mp3"  ,
			"./okinawa/sui.mp3"  ,
			"./okinawa/ha.mp3"  ,
			"./okinawa/syan.mp3",
			"./okinawa/kyu.mp3",
			"./okinawa/hiyasasa.mp3"  ,	
			"./okinawa/haiya.mp3"  ,
			"./okinawa/haiya_all.mp3" ,
			"./okinawa/E0.mp3",
			"./okinawa/F0.mp3",
			"./okinawa/G0.mp3",
			"./okinawa/B0.mp3",
			"./okinawa/C1.mp3",
			"./okinawa/E1.mp3",
			"./okinawa/F1.mp3",
			"./okinawa/G1.mp3",
			"./okinawa/B1.mp3",
		   	"./okinawa/C2.mp3",
			"./okinawa/E2.mp3",
			"./okinawa/F2.mp3",
			"./okinawa/G2.mp3",
			"./okinawa/B2.mp3",
			"./okinawa/C3.mp3"
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
function wap_playSoundWithTime(bufNum,late) {
	var source;
	source = wap.createBufferSource();
	source.buffer = bufferLoader.bufferList[bufNum];
	source.loop = false;
	source.connect(wap.destination);
	source.noteOn(wap.currentTime + late);

}
var tempo = 1;


function loopElement(){
    wap_playSoundWithTime(5,tempo*0);
    wap_playSoundWithTime(5,tempo*0.5);
    wap_playSoundWithTime(5,tempo*1.0);
    wap_playSoundWithTime(5,tempo*1.5);
    wap_playSoundWithTime(0,tempo*0);
    wap_playSoundWithTime(1,tempo*0.5);
    wap_playSoundWithTime(0,tempo*1.0);
    wap_playSoundWithTime(0,tempo*1.25);
    wap_playSoundWithTime(1,tempo*1.5);
}
var timer;

function loop(newTempo){
    tempo = newTempo;
    if(timer){
        clearInterval(timer);
    }
    timer = setInterval("loopElement()",tempo*2000);
}

function wap_stopSound(source) {
	source.noteOff(0);
}
