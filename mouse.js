var mouse = { x: null, y: null };

function mouse_init() {
	registerMouseEvent();
}

function registerMouseEvent() {
	canvas.addEventListener("mousedown", function(e) {
			mouseDown(e);
			}, false);

	canvas.addEventListener("mousemove", function(e) {
			//mouseMove(e);
			}, false);

	canvas.addEventListener("mouseup"  , function(e) {
			//mouseUp(e);
			}, false);
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
}


var getMousePos = function(e) {
	var rect = e.target.getBoundingClientRect();

	mouse.x = e.clientX - rect.left;
	mouse.y = e.clientY - rect.top;

	return mouse;
}

document.onkeydown = Keyboard;
function Keyboard(evt) {
	switch(evt.which) {
		case 67: pad[0].push(); break;
		case 86: pad[1].push(); break;
		case 66: pad[2].push(); break;
		case 78: pad[3].push(); break;
		case 77: pad[4].push(); break;
		case 70: pad[5].push(); break;
		case 71: pad[6].push(); break;
		case 72: pad[7].push(); break;
		case 74: pad[8].push(); break;
		default: break;
	}
}
