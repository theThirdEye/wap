var mouse = { x: null, y: null };



function mouse_init() {
	registerMouseEvent();
}



function registerMouseEvent() {
	canvas.addEventListener("mousedown", function(e) {
			mouseDown(e);
			}, false);

	//canvas.addEventListener("mousemove", function(e) {
			//mouseMove(e);
	//		}, false);

	//canvas.addEventListener("mouseup"  , function(e) {
			//mouseUp(e);
	//		}, false);
}



function mouseDown(e) {
	var x, y;
	getMousePos(e);

	x = mouse.x;
	y = mouse.y;

	for(var i=0; i<PAD_NUM; i++) {
		if( pad[i].isInside(x, y) ){
			pad[i].push();
		}
	}

	if( demoplayer.isInside(x, y) ) {
		demoplayLoop();
	}

	changerLighting(x, y);

	if ( shuffleChanger.isInside(x, y) ) {
		shuffleOn = shuffleChanger.changer(shuffleOn);
	}
	shuffleChanger.switchOnOff(shuffleOn);
	shuffleChanger.drawChanger(shuffleOn);
}



function changerLighting(x, y){
	for(var i=0; i<RHYTHM_CHANGER_NUM; i++) {
		if ( rhythmChanger[i].isInside(x, y) ) {
			rhythmLoopNum = rhythmChanger[i].changer(rhythmLoopNum);
		}
	}
	for(var i=0; i<RHYTHM_CHANGER_NUM; i++) {
		rhythmChanger[i].switchOnOff(rhythmLoopNum);
		rhythmChanger[i].drawChanger(rhythmLoopNum);
	}

	for(var i=0; i<MELODY_CHANGER_NUM; i++) {
		if ( melodyChanger[i].isInside(x, y) ) {
			melodyLoopNum = melodyChanger[i].changer(melodyLoopNum);
		}
	}
	for(var i=0; i<MELODY_CHANGER_NUM; i++) {
		melodyChanger[i].switchOnOff(melodyLoopNum);
		melodyChanger[i].drawChanger(melodyLoopNum);
	}
}



function changeLightingWithPushKey(){

	for(var i=0; i<RHYTHM_CHANGER_NUM; i++) {
		rhythmChanger[i].switchOnOff(rhythmLoopNum);
		rhythmChanger[i].drawChanger(rhythmLoopNum);
	}
	for(var i=0; i<MELODY_CHANGER_NUM; i++) {
		melodyChanger[i].switchOnOff(melodyLoopNum);
		melodyChanger[i].drawChanger(melodyLoopNum);
	}
}



var getMousePos = function(e) {
	var rect = e.target.getBoundingClientRect();

	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;

	return mouse;
}



document.onkeydown = Keyboard;
function Keyboard(evt) {
	if(evt.ctrlKey) {
		switch(evt.which) {
			case 85: 
				tempo -= 1/120; 
				loopOut(timer);
				loopOut(keeper);
				loop();
				keeperLoop();
				break;

			case 68: 
				tempo += 1/120;
				loopOut(timer);
				loopOut(keeper);
				loop();	  
			    keeperLoop();	
				break;

			case 82:
				tempo = 1;
				loopOut(timer);
				loopOut(keeper);
				loop();
				keeperLoop();
				break;

			default: break;
		}
	}
	else {
		switch(evt.which) {
			case 81: pad[ 0].push(); break;
			case 87: pad[ 1].push(); break;
			case 69: pad[ 2].push(); break;
			case 82: pad[ 3].push(); break;
			case 84: pad[ 4].push(); break;
			case 89: pad[ 5].push(); break;
			case 85: pad[ 6].push(); break;
			case 73: pad[ 7].push(); break;
			case 79: pad[ 8].push(); break;
			case 80: pad[ 9].push(); break;

			case 65: pad[10].push(); break;
			case 83: pad[11].push(); break;
			case 68: pad[12].push(); break;
			case 70: pad[13].push(); break;
			case 71: pad[14].push(); break;
			case 72: pad[15].push(); break;
			case 74: pad[16].push(); break;
			case 75: pad[17].push(); break;
			case 76: pad[18].push(); break;

			case 90: pad[19].push(); break;
			case 88: pad[20].push(); break;
			case 67: pad[21].push(); break;
			case 86: pad[22].push(); break;
			case 66: pad[23].push(); break;
			case 78: pad[24].push(); break;
			case 77: pad[25].push(); break;
			case 188: pad[26].push(); break;
			case 190: pad[27].push(); break;

			case 50: 
				rhythmLoopNum = rhythmChanger[0].changer(rhythmLoopNum);
				changeLightingWithPushKey();
				break;
			case 51:
				rhythmLoopNum = rhythmChanger[1].changer(rhythmLoopNum);
				changeLightingWithPushKey();
				break;
			case 52:
				rhythmLoopNum = rhythmChanger[2].changer(rhythmLoopNum);
				changeLightingWithPushKey();
				break;
			case 53:
				rhythmLoopNum = rhythmChanger[3].changer(rhythmLoopNum);
				changeLightingWithPushKey();
				break;
			case 54:
				rhythmLoopNum = rhythmChanger[4].changer(rhythmLoopNum);
				changeLightingWithPushKey();
				 break;

			case 55:
				melodyLoopNum = melodyChanger[0].changer(melodyLoopNum);
				changeLightingWithPushKey();
				break;
			case 56:
				melodyLoopNum = melodyChanger[1].changer(melodyLoopNum);
				changeLightingWithPushKey();
				break;
			case 57:
				melodyLoopNum = melodyChanger[2].changer(melodyLoopNum);
				changeLightingWithPushKey();
				break;
			case 48:
				melodyLoopNum = melodyChanger[3].changer(melodyLoopNum);
				changeLightingWithPushKey();
				break;

			case 49:
				shuffleOn = shuffleChanger.changer(shuffleOn);
				shuffleChanger.switchOnOff(shuffleOn);
				shuffleChanger.drawChanger(shuffleOn);
				break;

			case 189:
				demoplayLoop();
				break;

			default: break;
		}
	}
}
