var ctx;
var canvas;
var pad;
var PAD_NUM = 9;

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
};

//描画メソッド
Keypad.prototype.draw = function() {
	ctx.beginPath();
	ctx.fillStyle = this.color + "0.3)";
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
	wap_playSound(this.bufNum);
};
/*********************************************************************************/



//Canvasの初期化(window.onload関数群の1つ)
function canvas_init() {
	canvas = document.getElementById("canvas1");
	ctx    = canvas.getContext("2d");
	
	pad = new Array(PAD_NUM);
	pad[0] = new Keypad(0, 150, 400, 80, 80, 255, 0, 0, "c");
	pad[1] = new Keypad(1, 250, 400, 80, 80, 255, 0, 0, "v");
	pad[2] = new Keypad(2, 350, 400, 80, 80, 255, 0, 0, "b");
	pad[3] = new Keypad(3, 450, 400, 80, 80, 255, 0, 0, "n");
	pad[4] = new Keypad(4, 550, 400, 80, 80, 255, 0, 0, "m");
	pad[5] = new Keypad(5, 200, 300, 80, 80, 255, 0, 0, "f");
	pad[6] = new Keypad(6, 300, 300, 80, 80, 255, 0, 0, "g");
	pad[7] = new Keypad(7, 400, 300, 80, 80, 255, 0, 0, "h");
	pad[8] = new Keypad(8, 500, 300, 80, 80, 255, 0, 0, "j");
	drawAllPads();
	
}



function drawAllPads() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCanvasStroke();

	for(var i=0; i<PAD_NUM; i++) {
		pad[i].draw();
	}	
}


function drawCanvasStroke() {
	ctx.beginPath();
	ctx.strokeStyle="rgb(255, 255, 255)";
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
	ctx.closePath();
};





