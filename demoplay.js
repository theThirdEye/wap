var demoplayTimer;
var demoplayCount;



function demoplayLoop() {
	demoplayCount = 0;
	ryhthmLoopNum = 0;
	melodyLoopNum = 0;
	shuffleOn = false;

	clearInterval(demoplayTimer);
	demoplayTimer = setInterval("demoplay()",tempo*500/4);
}



function demoplayClearLoop() {
	clearInterval(demoplayTimer);
}



function demoplay() {
	switch(demoplayCount) {
		case 0: 
			pad[8].push(); 
			break;
		case 4:
			pad[8].push();
			break;
		case 8:
			pad[8].push();
			break;
		case 10:
			pad[8].push();
			pad[27].push();
			break;
		case 11:
			pad[27].push();
			break;
		case 12:
			pad[9].push();
			pad[18].push();
			break;
		case 15:
			pad[27].push();
			break;

		case 16:
			pad[20].push();
			pad[9].push();
			pad[18].push(); 
			break;
		case 17:
			pad[27].push();
			break;
		case 18:
			pad[20].push();
			pad[27].push();
			break;
		case 19: 
			pad[9].push();
			pad[18].push(); 
			break;
		case 20:
			pad[23].push();
			pad[27].push();
			break;
		case 21:
			pad[27].push();
			break;
		case 22:
			pad[20].push();
			pad[18].push();
			break;	
		case 23:
			pad[21].push();
			pad[18].push();
			break;
		case 24:
			break;
		case 25:
			pad[21].push();
			pad[18].push();
			break;
		case 26:
			pad[21].push();
			pad[27].push();
			break;
		case 27:
			break;
		case 28:
			pad[12].push();
			pad[22].push();
			pad[9].push();
			pad[18].push();
			break;
		case 29:
			pad[18].push();
			break;
		case 30:
			pad[23].push();
			pad[18].push();
			break;
		case 31:
			pad[18].push();
			break;

		case 32:
			pad[14].push();
			pad[23].push();
			pad[27].push();
			pad[9].push();
			break;
		case 33:
			break;
		case 34:
			pad[23].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 35:
			break;
		case 36:
			pad[23].push();
			pad[18].push();
			pad[8].push();
			break;
		case 37:
			break;
		case 38:
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 39:
			pad[20].push();
			pad[27].push();
			break;
		case 40:
			pad[11].push();
			pad[8].push();
			break;
		case 41:
			pad[20].push();
			pad[18].push();
			break;
		case 42:
			pad[20].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 43:
			break;
		case 44:
			pad[13].push();
			pad[19].push();
			pad[18].push();
			pad[8].push();
			break;
		case 45:
			pad[27].push();
			break;
		case 46:
			pad[20].push();
			pad[8].push();
			pad[26].push();
			break;
		case 47:
			pad[27].push();
			break;
		
		case 48:
			pad[14].push();
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[5].push();
			break;
		case 49:
			break;
		case 50:
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 51:
			break;
		case 52:
			pad[21].push();
			pad[18].push();
			pad[8].push();
			break;
		case 53:
			break;
		case 54:
			pad[21].push();
			pad[8].push();
			pad[26].push();
			break;
		case 55:
			pad[22].push();
			pad[27].push();
			break;
		case 56:
			pad[12].push();
			pad[8].push();
			break;
		case 57:
			pad[23].push();
			pad[18].push();
			break;
		case 58:
			pad[10].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 59:
			break;
		case 60:
			pad[13].push();
			pad[11].push();
			pad[18].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 61:
			pad[18].push();
			break;
		case 62:
			pad[22].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 63:
			pad[18].push();
			break;

		case 64:
			pad[14].push();
			pad[23].push();
			pad[27].push();
			pad[9].push();
			break;
		case 65:
			break;
		case 66:
			pad[23].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 67:
			break;
		case 68:
			pad[23].push();
			pad[18].push();
			pad[8].push();
			break;
		case 69:
			break;
		case 70:
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 71:
			pad[20].push();
			pad[27].push();
			break;
		case 72:
			pad[11].push();
			pad[8].push();
			break;
		case 73:
			pad[20].push();
			pad[18].push();
			break;
		case 74:
			pad[20].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 75:
			break;
		case 76:
			pad[13].push();
			pad[19].push();
			pad[18].push();
			pad[8].push();
			break;
		case 77:
			pad[27].push();
			break;
		case 78:
			pad[20].push();
			pad[8].push();
			pad[26].push();
			break;
		case 79:
			pad[27].push();
			break;
		
		case 80:
			pad[14].push();
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[5].push();
			break;
		case 81:
			break;
		case 82:
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 83:
			break;
		case 84:
			pad[21].push();
			pad[18].push();
			pad[8].push();
			break;
		case 85:
			break;
		case 86:
			pad[21].push();
			pad[8].push();
			pad[26].push();
			break;
		case 87:
			pad[22].push();
			pad[27].push();
			break;
		case 88:
			pad[12].push();
			pad[8].push();
			break;
		case 89:
			pad[23].push();
			pad[18].push();
			break;
		case 90:
			pad[10].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 91:
			break;
		case 92:
			pad[13].push();
			pad[11].push();
			pad[18].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 93:
			pad[18].push();
			break;
		case 94:
			pad[22].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 95:
			pad[18].push();
			break;




		case 96:
			pad[4].push();
			pad[2].push();
			pad[14].push();
			pad[24].push();
			pad[23].push();
			pad[27].push();
			pad[9].push();
			break;
		case 97:
			break;
		case 98:
			pad[23].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 99:
			pad[3].push();
			break;
		case 100:
			pad[7].push();
			pad[23].push();
			pad[18].push();
			pad[8].push();
			break;
		case 101:
			pad[4].push();
			break;
		case 102:
			pad[2].push();
			pad[24].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 103:
			pad[20].push();
			pad[27].push();
			break;
		case 104:
			pad[12].push();
			pad[8].push();
			break;
		case 105:
			pad[20].push();
			pad[18].push();
			break;
		case 106:
			pad[1].push();
			pad[24].push();
			pad[20].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 107:
			break;
		case 108:
			pad[0].push();
			pad[13].push();
			pad[15].push();
			pad[19].push();
			pad[18].push();
			pad[8].push();
			break;
		case 109:
			pad[27].push();
			break;
		case 110:
			pad[1].push();
			pad[20].push();
			pad[8].push();
			pad[26].push();
			break;
		case 111:
			pad[27].push();
			break;
		
		case 112:
			pad[0].push();
			pad[14].push();
			pad[24].push();
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[5].push();
			break;
		case 113:
			break;
		case 114:
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 115:
			pad[13].push();
			break;
		case 116:
			pad[21].push();
			pad[18].push();
			pad[8].push();
			break;
		case 117:
			break;
		case 118:
			pad[14].push();
			pad[24].push();
			pad[21].push();
			pad[8].push();
			pad[26].push();
			break;
		case 119:
			pad[22].push();
			pad[27].push();
			break;
		case 120:
			pad[12].push();
			pad[8].push();
			break;
		case 121:
			pad[23].push();
			pad[18].push();
			break;
		case 122:
			pad[25].push();
			pad[10].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 123:
			break;
		case 124:
			pad[1].push();
			pad[13].push();
			pad[15].push();
			pad[11].push();
			pad[18].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 125:
			pad[18].push();
			break;
		case 126:
			pad[2].push();
			pad[22].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 127:
			pad[18].push();
			break;

		case 128:
			pad[2].push();
			pad[4].push();
			pad[14].push();
			pad[24].push();
			pad[23].push();
			pad[27].push();
			pad[9].push();
			break;
		case 129:
			break;
		case 130:
			pad[23].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 131:
			pad[3].push();
			break;
		case 132:
			pad[7].push();
			pad[23].push();
			pad[18].push();
			pad[8].push();
			break;
		case 133:
			pad[4].push();
			break;
		case 134:
			pad[2].push();
			pad[24].push();
			pad[24].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 135:
			pad[20].push();
			pad[27].push();
			break;
		case 136:
			pad[11].push();
			pad[8].push();
			break;
		case 137:
			pad[20].push();
			pad[18].push();
			break;
		case 138:
			pad[1].push();
			pad[20].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 139:
			break;
		case 140:
			pad[0].push();
			pad[13].push();
			pad[15].push();
			pad[19].push();
			pad[18].push();
			pad[8].push();
			break;
		case 141:
			pad[27].push();
			break;
		case 142:
			pad[1].push();
			pad[20].push();
			pad[8].push();
			pad[26].push();
			break;
		case 143:
			pad[27].push();
			break;
		
		case 144:
			pad[2].push();
			pad[0].push();
			pad[14].push();
			pad[24].push();
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[5].push();
			break;
		case 145:
			break;
		case 146:
			pad[21].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 147:
			pad[3].push();
			pad[1].push();
			break;
		case 148:
			pad[21].push();
			pad[18].push();
			pad[8].push();
			break;
		case 149:
			break;
		case 150:
			pad[4].push();
			pad[2].push();
			pad[24].push();
			pad[21].push();
			pad[8].push();
			pad[26].push();
			break;
		case 151:
			pad[22].push();
			pad[27].push();
			break;
		case 152:
			pad[12].push();
			pad[8].push();
			break;
		case 153:
			pad[24].push();
			pad[23].push();
			pad[18].push();
			break;
		case 154:
			pad[10].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 155:
			break;
		case 156:
			pad[13].push();
			pad[15].push();
			pad[11].push();
			pad[18].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 157:
			pad[18].push();
			break;
		case 158:
			pad[22].push();
			pad[27].push();
			pad[8].push();
			pad[26].push();
			break;
		case 159:
			pad[18].push();
			break;

		case 160:
			pad[17].push();
			pad[16].push();


		case 177:
 			demoplayClearLoop();
			break;

	}

	demoplayCount++;
}
