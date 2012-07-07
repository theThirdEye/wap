var ctx;
var canvas;
var pad;
var PAD_NUM = 27;
var rhythmChanger;
var RHYTHM_CHANGER_NUM = 5;
var melodyChanger;
var MELODY_CHANGER_NUM = 4;
var shuffleChanger;




/********************************KeyPadのクラス*************************************/
var Keypad = function(bufNum, x, y, width, height, r, g, b, key) {
	this.bufNum = bufNum;
	this.x = x;
	this.y = y;
	this.width  = width;
	this.height = height;
	this.color  = "rgba("+r+","+g+","+b+",";
	this.bufNum = bufNum;
	this.key = key;

	this.brightness;
	this.lighting = 0;
	this.switchOn = false;
};

//描画メソッド
Keypad.prototype.draw = function() {
	ctx.beginPath();
	ctx.clearRect(this.x-1, this.y-1, this.width+2, this.height+2);
	this.brightness = 0.2 + 0.8*(this.lighting/15);
	ctx.fillStyle = this.color + this.brightness +")";
	ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.strokeStyle = this.color + "0.9)";
	ctx.strokeRect(this.x, this.y, this.width, this.height);

	ctx.fillStyle = "rgba(255,255,255,1)";
	ctx.font = "11pt Times";
	ctx.fillText(this.key,this.x+this.width/2-3, this.y+this.height/2+3);
	ctx.closePath();
};

Keypad.prototype.drawChanger = function() {

	ctx.beginPath();
	ctx.clearRect(this.x-1, this.y-1, this.width+2, this.height+2);
	if(this.switchOn) this.brightness = 0.9;
	else this.brightness = 0.2;
	ctx.fillStyle = this.color + this.brightness +")";
	ctx.fillRect(this.x, this.y, this.width, this.height);
	ctx.strokeStyle = this.color + "0.9)";
	ctx.strokeRect(this.x, this.y, this.width, this.height);

	ctx.fillStyle = "rgba(255,255,255,1)";
	ctx.font = "11pt Times";
	ctx.fillText(this.key,this.x+this.width/2-3, this.y+this.height/2+3);
	ctx.closePath();
};


//内外判定メソッド
Keypad.prototype.isInside = function(x0, y0) {
	//padの左上端の座標
	var x1 = this.x;
	var y1 = this.y;
	//oadの右下端の座標
	var x2 = this.x + this.width;
	var y2 = this.y + this.height;

	if(x0>x1 && y0>y1 && x0<x2 && y0<y2) {
		return true;
	}
	else {
		return false;
	}
};



//padが押されたときの動作
Keypad.prototype.push = function() {
	this.lighting = 15;
	wap_playSound(this.bufNum);
};



Keypad.prototype.changer = function(num) {
	if(num == this.bufNum) {
		this.switchOn = false;
		return 0;
	}
	else {
		this.switchOn = true;
		return this.bufNum;
	}
};



Keypad.prototype.switchOnOff = function(num) {
	if(num == this.bufNum) {
		this.switchOn = true;
	}
	else {
		this.switchOn = false;
	}
};
/*********************************************************************************/



//Canvasの初期化(window.onload関数群の1つ)
function canvas_init() {
	canvas = document.getElementById("canvas1");
	ctx    = canvas.getContext("2d");
	
	setInterval("lighting()", 50);	
	
	pad = new Array(PAD_NUM);
	pad[ 0] = new Keypad(28,  50, 250, 60, 60, 255, 0, 0, "q");
	pad[ 1] = new Keypad(29, 130, 250, 60, 60, 255, 0, 0, "w");
	pad[ 2] = new Keypad(30, 210, 250, 60, 60, 255, 0, 0, "e");
	pad[ 3] = new Keypad(31, 290, 250, 60, 60, 255, 0, 0, "r");
	pad[ 4] = new Keypad(32, 370, 250, 60, 60, 255, 0, 0, "t");
	pad[ 5] = new Keypad(1, 450, 250, 60, 60, 255, 255, 0, "y");
	pad[ 6] = new Keypad(5, 530, 250, 60, 60, 255, 255, 0, "u");
	pad[ 7] = new Keypad(15, 610, 250, 60, 60, 0, 255, 0, "i");
	pad[ 8] = new Keypad(16, 690, 250, 60, 60, 0, 255, 0, "o");
	pad[ 9] = new Keypad(17, 770, 250, 60, 60, 0, 255, 0, "p");
	
	pad[10] = new Keypad(23,  90, 330, 60, 60, 255, 0, 0, "a");
	pad[11] = new Keypad(24, 170, 330, 60, 60, 255, 0, 0, "s");
	pad[12] = new Keypad(25, 250, 330, 60, 60, 255, 0, 0, "d");
	pad[13] = new Keypad(26, 330, 330, 60, 60, 255, 0, 0, "f");
	pad[14] = new Keypad(27, 410, 330, 60, 60, 255, 0, 0, "g");
	pad[15] = new Keypad(0, 490, 330, 60, 60, 255, 255, 0, "h");
	pad[16] = new Keypad(12, 570, 330, 60, 60, 0, 0, 255, "j");
	pad[17] = new Keypad(13, 650, 330, 60, 60, 0, 0, 255, "k");
	pad[18] = new Keypad(14, 730, 330, 60, 60, 0, 0, 255, "l");

	pad[19] = new Keypad(18, 130, 410, 60, 60, 255, 0, 0, "z");
	pad[20] = new Keypad(19, 210, 410, 60, 60, 255, 0, 0, "x");
	pad[21] = new Keypad(20, 290, 410, 60, 60, 255, 0, 0, "c");
	pad[22] = new Keypad(21, 370, 410, 60, 60, 255, 0, 0, "v");
	pad[23] = new Keypad(22, 450, 410, 60, 60, 255, 0, 0, "b");
	pad[24] = new Keypad( 9, 530, 410, 60, 60, 0, 0, 255, "n");
	pad[25] = new Keypad(10, 610, 410, 60, 60, 0, 0, 255, "m");
	pad[26] = new Keypad(11, 690, 410, 60, 60, 0, 0, 255, ",");

	
	rhythmChanger = new Array(5);
	rhythmChanger[0] = new Keypad(1, 90, 170, 60, 60, 0, 255, 255, "2");
	rhythmChanger[1] = new Keypad(2, 170, 170, 60, 60, 0, 255, 255, "3");
	rhythmChanger[2] = new Keypad(3, 250, 170, 60, 60, 0, 255, 255, "4");
	rhythmChanger[3] = new Keypad(4, 330, 170, 60, 60, 0, 255, 255, "5");
	rhythmChanger[4] = new Keypad(5, 410, 170, 60, 60, 0, 255, 255, "6");

	melodyChanger = new Array(4);
	melodyChanger[0] = new Keypad(1, 490, 170, 60, 60, 255, 0, 255, "7");
	melodyChanger[1] = new Keypad(2, 570, 170, 60, 60, 255, 0, 255, "8");
	melodyChanger[2] = new Keypad(3, 650, 170, 60, 60, 255, 0, 255, "9");
	melodyChanger[3] = new Keypad(4, 730, 170, 60, 60, 255, 0, 255, "0");

	shuffleChanger = new Keypad(true, 10, 170, 60, 60, 255, 255, 255, "1");

	
	drawAllPads();
	
}



function lighting() {
	for(var i=0; i<PAD_NUM; i++) {
		if(pad[i].lighting != 0){
			pad[i].lighting--;
			pad[i].draw();
		}
	}
}



function drawAllPads() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//drawCanvasStroke();

	for(var i=0; i<PAD_NUM; i++) {
		pad[i].draw();
	}
	for(var i=0; i<RHYTHM_CHANGER_NUM; i++) {
		rhythmChanger[i].drawChanger();
	}
	for(var i=0; i<MELODY_CHANGER_NUM; i++) {
		melodyChanger[i].drawChanger();
	}

	shuffleChanger.drawChanger();	
}


function drawCanvasStroke() {
	ctx.beginPath();
	ctx.strokeStyle="rgb(255, 255, 255)";
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.closePath();
};





