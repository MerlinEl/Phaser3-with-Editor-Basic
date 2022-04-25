
// You can write more code here

/* START OF COMPILED CODE */

class Menu_002 extends Phaser.Scene {

	constructor() {
		super("Menu_002");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 1024, 768);
		rectangle.setOrigin(0, 0);
		rectangle.isStroked = true;
		rectangle.strokeColor = 13875698;
		rectangle.lineWidth = 3;

		// layer_01
		const layer_01 = this.add.layer();

		// linear_gradient_101
		const linear_gradient_101 = this.add.image(68, 119, "linear_gradient_01");
		linear_gradient_101.scaleX = 9.561243871939784;
		linear_gradient_101.scaleY = 0.31278082529123086;
		linear_gradient_101.setOrigin(0, 0);
		linear_gradient_101.alphaTopRight = 0;
		linear_gradient_101.alphaBottomRight = 0;
		linear_gradient_101.tintTopLeft = 3835888;
		linear_gradient_101.tintTopRight = 3835888;
		linear_gradient_101.tintBottomLeft = 13122288;
		linear_gradient_101.tintBottomRight = 13122288;
		layer_01.add(linear_gradient_101);

		// ellipse_101
		const ellipse_101 = this.add.ellipse(40, 133, 30, 30);
		ellipse_101.isFilled = true;
		ellipse_101.fillColor = 6828205;
		ellipse_101.isStroked = true;
		ellipse_101.strokeColor = 11173599;
		layer_01.add(ellipse_101);

		// text_201
		const text_201 = this.add.text(39, 133, "", {});
		text_201.setOrigin(0.5, 0.5);
		text_201.text = "14";
		text_201.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_01.add(text_201);

		// text_101
		const text_101 = this.add.text(75, 134, "", {});
		text_101.setOrigin(0, 0.5);
		text_101.text = "Filters - Shaders - 2";
		text_101.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_01.add(text_101);

		// layer_02
		const layer_02 = this.add.layer();

		// linear_gradient_102
		const linear_gradient_102 = this.add.image(68, 155, "linear_gradient_01");
		linear_gradient_102.scaleX = 9.561243871939784;
		linear_gradient_102.scaleY = 0.31278082529123086;
		linear_gradient_102.setOrigin(0, 0);
		linear_gradient_102.alphaTopRight = 0;
		linear_gradient_102.alphaBottomRight = 0;
		linear_gradient_102.tintTopLeft = 3835888;
		linear_gradient_102.tintTopRight = 3835888;
		linear_gradient_102.tintBottomLeft = 13122288;
		linear_gradient_102.tintBottomRight = 13122288;
		layer_02.add(linear_gradient_102);

		// ellipse_102
		const ellipse_102 = this.add.ellipse(40, 169, 30, 30);
		ellipse_102.isFilled = true;
		ellipse_102.fillColor = 6828205;
		ellipse_102.isStroked = true;
		ellipse_102.strokeColor = 11173599;
		layer_02.add(ellipse_102);

		// text_202
		const text_202 = this.add.text(39, 169, "", {});
		text_202.setOrigin(0.5, 0.5);
		text_202.text = "15";
		text_202.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_02.add(text_202);

		// text_102
		const text_102 = this.add.text(75, 170, "", {});
		text_102.setOrigin(0, 0.5);
		text_102.text = "Drag And Drop - With Logic";
		text_102.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_02.add(text_102);

		// layer_03
		const layer_03 = this.add.layer();

		// linear_gradient_103
		const linear_gradient_103 = this.add.image(68, 192, "linear_gradient_01");
		linear_gradient_103.scaleX = 9.561243871939784;
		linear_gradient_103.scaleY = 0.31278082529123086;
		linear_gradient_103.setOrigin(0, 0);
		linear_gradient_103.alphaTopRight = 0;
		linear_gradient_103.alphaBottomRight = 0;
		linear_gradient_103.tintTopLeft = 3835888;
		linear_gradient_103.tintTopRight = 3835888;
		linear_gradient_103.tintBottomLeft = 13122288;
		linear_gradient_103.tintBottomRight = 13122288;
		layer_03.add(linear_gradient_103);

		// ellipse_103
		const ellipse_103 = this.add.ellipse(40, 205, 30, 30);
		ellipse_103.isFilled = true;
		ellipse_103.fillColor = 6828205;
		ellipse_103.isStroked = true;
		ellipse_103.strokeColor = 11173599;
		layer_03.add(ellipse_103);

		// text_203
		const text_203 = this.add.text(39, 206, "", {});
		text_203.setOrigin(0.5, 0.5);
		text_203.text = "16";
		text_203.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_03.add(text_203);

		// text_103
		const text_103 = this.add.text(75, 208, "", {});
		text_103.setOrigin(0, 0.5);
		text_103.text = "Particles";
		text_103.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_03.add(text_103);

		// layer_04
		const layer_04 = this.add.layer();

		// linear_gradient_104
		const linear_gradient_104 = this.add.image(68, 228, "linear_gradient_01");
		linear_gradient_104.scaleX = 9.561243871939784;
		linear_gradient_104.scaleY = 0.31278082529123086;
		linear_gradient_104.setOrigin(0, 0);
		linear_gradient_104.alphaTopRight = 0;
		linear_gradient_104.alphaBottomRight = 0;
		linear_gradient_104.tintTopLeft = 3835888;
		linear_gradient_104.tintTopRight = 3835888;
		linear_gradient_104.tintBottomLeft = 13122288;
		linear_gradient_104.tintBottomRight = 13122288;
		layer_04.add(linear_gradient_104);

		// ellipse_104
		const ellipse_104 = this.add.ellipse(40, 242, 30, 30);
		ellipse_104.isFilled = true;
		ellipse_104.fillColor = 6828205;
		ellipse_104.isStroked = true;
		ellipse_104.strokeColor = 11173599;
		layer_04.add(ellipse_104);

		// text_204
		const text_204 = this.add.text(39, 242, "", {});
		text_204.setOrigin(0.5, 0.5);
		text_204.text = "17";
		text_204.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_04.add(text_204);

		// text_104
		const text_104 = this.add.text(75, 243, "", {});
		text_104.setOrigin(0, 0.5);
		text_104.text = "...";
		text_104.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_04.add(text_104);

		// layer_05
		const layer_05 = this.add.layer();

		// linear_gradient_105
		const linear_gradient_105 = this.add.image(68, 264, "linear_gradient_01");
		linear_gradient_105.scaleX = 9.561243871939784;
		linear_gradient_105.scaleY = 0.31278082529123086;
		linear_gradient_105.setOrigin(0, 0);
		linear_gradient_105.alphaTopRight = 0;
		linear_gradient_105.alphaBottomRight = 0;
		linear_gradient_105.tintTopLeft = 3835888;
		linear_gradient_105.tintTopRight = 3835888;
		linear_gradient_105.tintBottomLeft = 13122288;
		linear_gradient_105.tintBottomRight = 13122288;
		layer_05.add(linear_gradient_105);

		// ellipse_105
		const ellipse_105 = this.add.ellipse(40, 278, 30, 30);
		ellipse_105.isFilled = true;
		ellipse_105.fillColor = 6828205;
		ellipse_105.isStroked = true;
		ellipse_105.strokeColor = 11173599;
		layer_05.add(ellipse_105);

		// text_205
		const text_205 = this.add.text(39, 279, "", {});
		text_205.setOrigin(0.5, 0.5);
		text_205.text = "18";
		text_205.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_05.add(text_205);

		// text_105
		const text_105 = this.add.text(75, 280, "", {});
		text_105.setOrigin(0, 0.5);
		text_105.text = "...";
		text_105.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_05.add(text_105);

		// layer_06
		const layer_06 = this.add.layer();

		// linear_gradient_106
		const linear_gradient_106 = this.add.image(69, 300, "linear_gradient_01");
		linear_gradient_106.scaleX = 9.561243871939784;
		linear_gradient_106.scaleY = 0.31278082529123086;
		linear_gradient_106.setOrigin(0, 0);
		linear_gradient_106.alphaTopRight = 0;
		linear_gradient_106.alphaBottomRight = 0;
		linear_gradient_106.tintTopLeft = 3835888;
		linear_gradient_106.tintTopRight = 3835888;
		linear_gradient_106.tintBottomLeft = 13122288;
		linear_gradient_106.tintBottomRight = 13122288;
		layer_06.add(linear_gradient_106);

		// ellipse_106
		const ellipse_106 = this.add.ellipse(40, 315, 30, 30);
		ellipse_106.isFilled = true;
		ellipse_106.fillColor = 6828205;
		ellipse_106.isStroked = true;
		ellipse_106.strokeColor = 11173599;
		layer_06.add(ellipse_106);

		// text_206
		const text_206 = this.add.text(39, 315, "", {});
		text_206.setOrigin(0.5, 0.5);
		text_206.text = "19";
		text_206.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_06.add(text_206);

		// text_106
		const text_106 = this.add.text(75, 315, "", {});
		text_106.setOrigin(0, 0.5);
		text_106.text = "...";
		text_106.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_06.add(text_106);

		// layer_07
		const layer_07 = this.add.layer();

		// linear_gradient_107
		const linear_gradient_107 = this.add.image(69, 337, "linear_gradient_01");
		linear_gradient_107.scaleX = 9.561243871939784;
		linear_gradient_107.scaleY = 0.31278082529123086;
		linear_gradient_107.setOrigin(0, 0);
		linear_gradient_107.alphaTopRight = 0;
		linear_gradient_107.alphaBottomRight = 0;
		linear_gradient_107.tintTopLeft = 3835888;
		linear_gradient_107.tintTopRight = 3835888;
		linear_gradient_107.tintBottomLeft = 13122288;
		linear_gradient_107.tintBottomRight = 13122288;
		layer_07.add(linear_gradient_107);

		// ellipse_107
		const ellipse_107 = this.add.ellipse(41, 351, 30, 30);
		ellipse_107.isFilled = true;
		ellipse_107.fillColor = 6828205;
		ellipse_107.isStroked = true;
		ellipse_107.strokeColor = 11173599;
		layer_07.add(ellipse_107);

		// text_207
		const text_207 = this.add.text(40, 352, "", {});
		text_207.setOrigin(0.5, 0.5);
		text_207.text = "20";
		text_207.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_07.add(text_207);

		// text_107
		const text_107 = this.add.text(76, 353, "", {});
		text_107.setOrigin(0, 0.5);
		text_107.text = "...";
		text_107.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_07.add(text_107);

		// layer_08
		const layer_08 = this.add.layer();

		// linear_gradient_108
		const linear_gradient_108 = this.add.image(70, 373, "linear_gradient_01");
		linear_gradient_108.scaleX = 9.561243871939784;
		linear_gradient_108.scaleY = 0.31278082529123086;
		linear_gradient_108.setOrigin(0, 0);
		linear_gradient_108.alphaTopRight = 0;
		linear_gradient_108.alphaBottomRight = 0;
		linear_gradient_108.tintTopLeft = 3835888;
		linear_gradient_108.tintTopRight = 3835888;
		linear_gradient_108.tintBottomLeft = 13122288;
		linear_gradient_108.tintBottomRight = 13122288;
		layer_08.add(linear_gradient_108);

		// ellipse_108
		const ellipse_108 = this.add.ellipse(41, 388, 30, 30);
		ellipse_108.isFilled = true;
		ellipse_108.fillColor = 6828205;
		ellipse_108.isStroked = true;
		ellipse_108.strokeColor = 11173599;
		layer_08.add(ellipse_108);

		// text_208
		const text_208 = this.add.text(40, 388, "", {});
		text_208.setOrigin(0.5, 0.5);
		text_208.text = "21";
		text_208.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_08.add(text_208);

		// text_108
		const text_108 = this.add.text(76, 388, "", {});
		text_108.setOrigin(0, 0.5);
		text_108.text = "...";
		text_108.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_08.add(text_108);

		// layer_09
		const layer_09 = this.add.layer();

		// linear_gradient_109
		const linear_gradient_109 = this.add.image(70, 409, "linear_gradient_01");
		linear_gradient_109.scaleX = 9.561243871939784;
		linear_gradient_109.scaleY = 0.31278082529123086;
		linear_gradient_109.setOrigin(0, 0);
		linear_gradient_109.alphaTopRight = 0;
		linear_gradient_109.alphaBottomRight = 0;
		linear_gradient_109.tintTopLeft = 3835888;
		linear_gradient_109.tintTopRight = 3835888;
		linear_gradient_109.tintBottomLeft = 13122288;
		linear_gradient_109.tintBottomRight = 13122288;
		layer_09.add(linear_gradient_109);

		// ellipse_109
		const ellipse_109 = this.add.ellipse(42, 423, 30, 30);
		ellipse_109.isFilled = true;
		ellipse_109.fillColor = 6828205;
		ellipse_109.isStroked = true;
		ellipse_109.strokeColor = 11173599;
		layer_09.add(ellipse_109);

		// text_209
		const text_209 = this.add.text(41, 424, "", {});
		text_209.setOrigin(0.5, 0.5);
		text_209.text = "22";
		text_209.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_09.add(text_209);

		// text_109
		const text_109 = this.add.text(77, 425, "", {});
		text_109.setOrigin(0, 0.5);
		text_109.text = "...";
		text_109.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_09.add(text_109);

		// layer_10
		const layer_10 = this.add.layer();

		// linear_gradient_110
		const linear_gradient_110 = this.add.image(71, 445, "linear_gradient_01");
		linear_gradient_110.scaleX = 9.561243871939784;
		linear_gradient_110.scaleY = 0.31278082529123086;
		linear_gradient_110.setOrigin(0, 0);
		linear_gradient_110.alphaTopRight = 0;
		linear_gradient_110.alphaBottomRight = 0;
		linear_gradient_110.tintTopLeft = 3835888;
		linear_gradient_110.tintTopRight = 3835888;
		linear_gradient_110.tintBottomLeft = 13122288;
		linear_gradient_110.tintBottomRight = 13122288;
		layer_10.add(linear_gradient_110);

		// ellipse_110
		const ellipse_110 = this.add.ellipse(42, 460, 30, 30);
		ellipse_110.isFilled = true;
		ellipse_110.fillColor = 6828205;
		ellipse_110.isStroked = true;
		ellipse_110.strokeColor = 11173599;
		layer_10.add(ellipse_110);

		// text_210
		const text_210 = this.add.text(41, 460, "", {});
		text_210.setOrigin(0.5, 0.5);
		text_210.text = "23";
		text_210.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_10.add(text_210);

		// text_110
		const text_110 = this.add.text(77, 460, "", {});
		text_110.setOrigin(0, 0.5);
		text_110.text = "...";
		text_110.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_10.add(text_110);

		// layer_11
		const layer_11 = this.add.layer();

		// linear_gradient_111
		const linear_gradient_111 = this.add.image(71, 481, "linear_gradient_01");
		linear_gradient_111.scaleX = 9.561243871939784;
		linear_gradient_111.scaleY = 0.31278082529123086;
		linear_gradient_111.setOrigin(0, 0);
		linear_gradient_111.alphaTopRight = 0;
		linear_gradient_111.alphaBottomRight = 0;
		linear_gradient_111.tintTopLeft = 3835888;
		linear_gradient_111.tintTopRight = 3835888;
		linear_gradient_111.tintBottomLeft = 13122288;
		linear_gradient_111.tintBottomRight = 13122288;
		layer_11.add(linear_gradient_111);

		// ellipse_111
		const ellipse_111 = this.add.ellipse(42, 496, 30, 30);
		ellipse_111.isFilled = true;
		ellipse_111.fillColor = 6828205;
		ellipse_111.isStroked = true;
		ellipse_111.strokeColor = 11173599;
		layer_11.add(ellipse_111);

		// text_211
		const text_211 = this.add.text(41, 496, "", {});
		text_211.setOrigin(0.5, 0.5);
		text_211.text = "24";
		text_211.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_11.add(text_211);

		// text_111
		const text_111 = this.add.text(77, 496, "", {});
		text_111.setOrigin(0, 0.5);
		text_111.text = "Lesson_01";
		text_111.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_11.add(text_111);

		// layer_12
		const layer_12 = this.add.layer();

		// linear_gradient_112
		const linear_gradient_112 = this.add.image(71, 518, "linear_gradient_01");
		linear_gradient_112.scaleX = 9.561243871939784;
		linear_gradient_112.scaleY = 0.31278082529123086;
		linear_gradient_112.setOrigin(0, 0);
		linear_gradient_112.alphaTopRight = 0;
		linear_gradient_112.alphaBottomRight = 0;
		linear_gradient_112.tintTopLeft = 3835888;
		linear_gradient_112.tintTopRight = 3835888;
		linear_gradient_112.tintBottomLeft = 13122288;
		linear_gradient_112.tintBottomRight = 13122288;
		layer_12.add(linear_gradient_112);

		// ellipse_112
		const ellipse_112 = this.add.ellipse(42, 533, 30, 30);
		ellipse_112.isFilled = true;
		ellipse_112.fillColor = 6828205;
		ellipse_112.isStroked = true;
		ellipse_112.strokeColor = 11173599;
		layer_12.add(ellipse_112);

		// text_212
		const text_212 = this.add.text(41, 533, "", {});
		text_212.setOrigin(0.5, 0.5);
		text_212.text = "25";
		text_212.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_12.add(text_212);

		// text_112
		const text_112 = this.add.text(77, 533, "", {});
		text_112.setOrigin(0, 0.5);
		text_112.text = "Lesson_02";
		text_112.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_12.add(text_112);

		// layer_13
		const layer_13 = this.add.layer();

		// linear_gradient_113
		const linear_gradient_113 = this.add.image(71, 554, "linear_gradient_01");
		linear_gradient_113.scaleX = 9.561243871939784;
		linear_gradient_113.scaleY = 0.31278082529123086;
		linear_gradient_113.setOrigin(0, 0);
		linear_gradient_113.alphaTopRight = 0;
		linear_gradient_113.alphaBottomRight = 0;
		linear_gradient_113.tintTopLeft = 3835888;
		linear_gradient_113.tintTopRight = 3835888;
		linear_gradient_113.tintBottomLeft = 13122288;
		linear_gradient_113.tintBottomRight = 13122288;
		layer_13.add(linear_gradient_113);

		// ellipse_113
		const ellipse_113 = this.add.ellipse(42, 569, 30, 30);
		ellipse_113.isFilled = true;
		ellipse_113.fillColor = 6828205;
		ellipse_113.isStroked = true;
		ellipse_113.strokeColor = 11173599;
		layer_13.add(ellipse_113);

		// text_213
		const text_213 = this.add.text(41, 569, "", {});
		text_213.setOrigin(0.5, 0.5);
		text_213.text = "26";
		text_213.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_13.add(text_213);

		// text_113
		const text_113 = this.add.text(77, 569, "", {});
		text_113.setOrigin(0, 0.5);
		text_113.text = "Lesson_03";
		text_113.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_13.add(text_113);

		// layer_top_bar
		const layer_top_bar = this.add.layer();

		// ellipse
		const ellipse = this.add.ellipse(19, 21, 128, 128);
		ellipse.isFilled = true;
		ellipse.fillColor = 6828205;
		ellipse.isStroked = true;
		ellipse.strokeColor = 11173599;
		layer_top_bar.add(ellipse);

		// ellipse_1
		const ellipse_1 = this.add.ellipse(1000, 21, 128, 128);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 6828205;
		ellipse_1.isStroked = true;
		ellipse_1.strokeColor = 11173599;
		layer_top_bar.add(ellipse_1);

		// guapen
		const guapen = this.add.image(990, 39, "guapen");
		guapen.scaleX = 0.2;
		guapen.scaleY = 0.2;
		layer_top_bar.add(guapen);

		// dino
		const dino = this.add.image(39, 39, "dino");
		dino.scaleX = 0.27351126855200214;
		dino.scaleY = 0.27351126855200214;
		layer_top_bar.add(dino);

		// ellipse_3
		const ellipse_3 = this.add.ellipse(512, 66, 128, 128);
		ellipse_3.scaleX = 3.574798860543812;
		ellipse_3.scaleY = 0.48050780880489197;
		ellipse_3.isFilled = true;
		ellipse_3.fillColor = 6828205;
		ellipse_3.isStroked = true;
		ellipse_3.strokeColor = 11173599;
		layer_top_bar.add(ellipse_3);

		// text_1_1_1_1_1
		const text_1_1_1_1_1 = this.add.text(512, 78, "", {});
		text_1_1_1_1_1.setOrigin(0.5, 0.5);
		text_1_1_1_1_1.text = "Menu";
		text_1_1_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_top_bar.add(text_1_1_1_1_1);

		// linear_gradient_01_2
		const linear_gradient_01_2 = this.add.image(512, 33, "linear_gradient_01");
		linear_gradient_01_2.scaleX = -4;
		linear_gradient_01_2.scaleY = 0.2618162344206787;
		linear_gradient_01_2.setOrigin(0, 0);
		linear_gradient_01_2.alphaTopRight = 0;
		linear_gradient_01_2.alphaBottomRight = 0;
		linear_gradient_01_2.tintTopLeft = 3183606;
		linear_gradient_01_2.tintTopRight = 3183606;
		linear_gradient_01_2.tintBottomLeft = 13122288;
		linear_gradient_01_2.tintBottomRight = 13122288;
		layer_top_bar.add(linear_gradient_01_2);

		// linear_gradient_01
		const linear_gradient_01 = this.add.image(512, 33, "linear_gradient_01");
		linear_gradient_01.scaleX = 4;
		linear_gradient_01.scaleY = 0.2618162344206787;
		linear_gradient_01.setOrigin(0, 0);
		linear_gradient_01.alphaTopRight = 0;
		linear_gradient_01.alphaBottomRight = 0;
		linear_gradient_01.tintTopLeft = 3183606;
		linear_gradient_01.tintTopRight = 3183606;
		linear_gradient_01.tintBottomLeft = 13122288;
		linear_gradient_01.tintBottomRight = 13122288;
		layer_top_bar.add(linear_gradient_01);

		// text_title
		const text_title = this.add.text(512, 46, "", {});
		text_title.setOrigin(0.5, 0.5);
		text_title.text = "Phaser 3 - HTML5";
		text_title.setStyle({ "color": "#f5dbf5ff", "fontFamily": "vijaya_cz", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#5e41a2ff", "shadow.fill":true});
		layer_top_bar.add(text_title);

		// arrow_right_01
		const arrow_right_01 = this.add.text(899, 44, "", {});
		arrow_right_01.scaleX = 0.8;
		arrow_right_01.scaleY = 1.5;
		arrow_right_01.setOrigin(0.5, 0.5);
		arrow_right_01.text = "➤";
		arrow_right_01.setStyle({ "color": "#e570e5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#543080", "strokeThickness":2,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#4f3273ff", "shadow.fill":true});
		layer_top_bar.add(arrow_right_01);

		// arrow_left_01
		const arrow_left_01 = this.add.text(120, 44, "", {});
		arrow_left_01.scaleX = -0.8;
		arrow_left_01.scaleY = 1.5;
		arrow_left_01.setOrigin(0.5, 0.5);
		arrow_left_01.text = "➤";
		arrow_left_01.setStyle({ "color": "#e570e5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#543080", "strokeThickness":2,"shadow.offsetX":-2,"shadow.offsetY":2,"shadow.color": "#4f3273ff", "shadow.fill":true});
		layer_top_bar.add(arrow_left_01);

		// layer_bottom_bar
		const layer_bottom_bar = this.add.layer();

		// ellipse_1_1
		const ellipse_1_1 = this.add.ellipse(1000, 762, 128, 128);
		ellipse_1_1.isFilled = true;
		ellipse_1_1.fillColor = 6828205;
		ellipse_1_1.isStroked = true;
		ellipse_1_1.strokeColor = 11173599;
		layer_bottom_bar.add(ellipse_1_1);

		// ellipse_1_1_1
		const ellipse_1_1_1 = this.add.ellipse(19, 762, 128, 128);
		ellipse_1_1_1.isFilled = true;
		ellipse_1_1_1.fillColor = 6828205;
		ellipse_1_1_1.isStroked = true;
		ellipse_1_1_1.strokeColor = 11173599;
		layer_bottom_bar.add(ellipse_1_1_1);

		// text_page_number_01
		const text_page_number_01 = this.add.text(1000, 746, "", {});
		text_page_number_01.setOrigin(0.5, 0.5);
		text_page_number_01.text = "0";
		text_page_number_01.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#5e41a2ff", "shadow.fill":true});
		layer_bottom_bar.add(text_page_number_01);

		// layer_status_icons
		const layer_status_icons = this.add.layer();

		// status_Icon_01
		const status_Icon_01 = new StatusIcon(this, 826, 136);
		layer_status_icons.add(status_Icon_01);

		// status_Icon_01_1
		const status_Icon_01_1 = new StatusIcon(this, 826, 172);
		layer_status_icons.add(status_Icon_01_1);

		// status_Icon_01_2
		const status_Icon_01_2 = new StatusIcon(this, 826, 208);
		layer_status_icons.add(status_Icon_01_2);

		// status_Icon_01_3
		const status_Icon_01_3 = new StatusIcon(this, 826, 244);
		layer_status_icons.add(status_Icon_01_3);

		// status_Icon_01_4
		const status_Icon_01_4 = new StatusIcon(this, 826, 280);
		layer_status_icons.add(status_Icon_01_4);

		// status_Icon_01_5
		const status_Icon_01_5 = new StatusIcon(this, 826, 316);
		layer_status_icons.add(status_Icon_01_5);

		// status_Icon_01_6
		const status_Icon_01_6 = new StatusIcon(this, 826, 352);
		layer_status_icons.add(status_Icon_01_6);

		// status_Icon_01_7
		const status_Icon_01_7 = new StatusIcon(this, 826, 388);
		layer_status_icons.add(status_Icon_01_7);

		// status_Icon_01_8
		const status_Icon_01_8 = new StatusIcon(this, 826, 424);
		layer_status_icons.add(status_Icon_01_8);

		// status_Icon_01_9
		const status_Icon_01_9 = new StatusIcon(this, 826, 460);
		layer_status_icons.add(status_Icon_01_9);

		// status_Icon_01_10
		const status_Icon_01_10 = new StatusIcon(this, 826, 496);
		layer_status_icons.add(status_Icon_01_10);

		// status_Icon_01_11
		const status_Icon_01_11 = new StatusIcon(this, 826, 532);
		layer_status_icons.add(status_Icon_01_11);

		// status_Icon_01_12
		const status_Icon_01_12 = new StatusIcon(this, 826, 568);
		layer_status_icons.add(status_Icon_01_12);

		// roundedrectangle
		const roundedrectangle = this.add.roundedRectangle(959, 126, 50, 300);
		roundedrectangle.setOrigin(0, 0);
		roundedrectangle.fillColor = 6828205;
		roundedrectangle.isStroked = true;
		roundedrectangle.strokeColor = 11173599;
		roundedrectangle.radius = 20;
		roundedrectangle.radiusTL = 20;
		roundedrectangle.radiusTR = 20;
		roundedrectangle.radiusBL = 20;
		roundedrectangle.radiusBR = 20;
		roundedrectangle.shadowAlpha = 0;

		// btnGitHub
		const btnGitHub = new BtnGitHub(this, 984, 399);
		this.add.existing(btnGitHub);
		btnGitHub.scaleX = 0.5;
		btnGitHub.scaleY = 0.5;

		// btnRefreshPage
		const btnRefreshPage = new BtnRefreshPage(this, 984, 239);
		this.add.existing(btnRefreshPage);
		btnRefreshPage.scaleX = 0.5;
		btnRefreshPage.scaleY = 0.5;

		// btnFullScreen
		const btnFullScreen = new BtnFullScreen(this, 984, 159);
		this.add.existing(btnFullScreen);
		btnFullScreen.scaleX = 0.5;
		btnFullScreen.scaleY = 0.5;

		// btnHome
		const btnHome = new BtnHome(this, 984, 319);
		this.add.existing(btnHome);
		btnHome.scaleX = 0.5;
		btnHome.scaleY = 0.5;

		// text_101 (components)
		const text_101NavigateToScene = new NavigateToScene(text_101);
		text_101NavigateToScene.sceneName = "Level_014";
		text_101NavigateToScene.hitAreaScaleY = 1.5;

		// text_102 (components)
		const text_102NavigateToScene = new NavigateToScene(text_102);
		text_102NavigateToScene.sceneName = "Level_015";
		text_102NavigateToScene.hitAreaScaleY = 1.5;

		// text_111 (components)
		const text_111NavigateToURL = new NavigateToURL(text_111);
		text_111NavigateToURL.folderName = "lesson_01";
		text_111NavigateToURL.urlPath = "";
		text_111NavigateToURL.hitAreaScaleX = 1.2;
		text_111NavigateToURL.hitAreaScaleY = 1.5;

		// guapen (components)
		const guapenNavigateToURL = new NavigateToURL(guapen);
		guapenNavigateToURL.urlPath = "https://github.com/PhaserEditor2D";
		guapenNavigateToURL.hitAreaScaleX = 1.5;
		guapenNavigateToURL.hitAreaScaleY = 1.5;

		// dino (components)
		const dinoNavigateToURL = new NavigateToURL(dino);
		dinoNavigateToURL.folderName = "";
		dinoNavigateToURL.urlPath = "https://phasereditor2d.com";

		// arrow_right_01 (components)
		const arrow_right_01NavigateToScene = new NavigateToScene(arrow_right_01);
		arrow_right_01NavigateToScene.sceneName = "";
		arrow_right_01NavigateToScene.hitAreaScaleX = 2;

		// arrow_left_01 (components)
		const arrow_left_01NavigateToScene = new NavigateToScene(arrow_left_01);
		arrow_left_01NavigateToScene.hitAreaScaleX = 2;

		// status_Icon_01 (prefab fields)
		status_Icon_01.progressStatus = "On Hold";

		// status_Icon_01_1 (prefab fields)
		status_Icon_01_1.progressStatus = "Done";

		// status_Icon_01_2 (prefab fields)
		status_Icon_01_2.progressStatus = "None";

		// status_Icon_01_3 (prefab fields)
		status_Icon_01_3.progressStatus = "None";

		// status_Icon_01_4 (prefab fields)
		status_Icon_01_4.progressStatus = "None";

		// status_Icon_01_5 (prefab fields)
		status_Icon_01_5.progressStatus = "None";

		// status_Icon_01_6 (prefab fields)
		status_Icon_01_6.progressStatus = "None";

		// status_Icon_01_7 (prefab fields)
		status_Icon_01_7.progressStatus = "None";

		// status_Icon_01_8 (prefab fields)
		status_Icon_01_8.progressStatus = "None";

		// status_Icon_01_9 (prefab fields)
		status_Icon_01_9.progressStatus = "None";

		// status_Icon_01_10 (prefab fields)
		status_Icon_01_10.progressStatus = "None";

		// status_Icon_01_11 (prefab fields)
		status_Icon_01_11.progressStatus = "None";

		// status_Icon_01_12 (prefab fields)
		status_Icon_01_12.progressStatus = "None";

		// btnGitHub (components)
		const btnGitHubComponentBase = new ComponentBase(btnGitHub);
		btnGitHubComponentBase.instanceName = "btn_github_01";
		btnGitHubComponentBase.colorize = true;
		btnGitHubComponentBase.hexColor = "0xaa7edf";
		btnGitHubComponentBase.componentType = "Button";
		const btnGitHubClickButton = new ClickButton(btnGitHub);
		btnGitHubClickButton.hitAreaScaleX = 1.8;
		btnGitHubClickButton.hitAreaScaleY = 1.8;

		// btnRefreshPage (components)
		const btnRefreshPageComponentBase = new ComponentBase(btnRefreshPage);
		btnRefreshPageComponentBase.instanceName = "btn_reload_page_01";
		btnRefreshPageComponentBase.colorize = true;
		btnRefreshPageComponentBase.hexColor = "0xaa7edf";
		btnRefreshPageComponentBase.componentType = "Button";
		const btnRefreshPageClickButton = new ClickButton(btnRefreshPage);
		btnRefreshPageClickButton.hitAreaScaleX = 1.8;
		btnRefreshPageClickButton.hitAreaScaleY = 1.8;

		// btnFullScreen (components)
		const btnFullScreenComponentBase = new ComponentBase(btnFullScreen);
		btnFullScreenComponentBase.instanceName = "btn_fullscreen_switch_01";
		btnFullScreenComponentBase.colorize = true;
		btnFullScreenComponentBase.hexColor = "0xaa7edf";
		btnFullScreenComponentBase.componentType = "SwitchButton";
		const btnFullScreenSwitchButton = new SwitchButton(btnFullScreen);
		btnFullScreenSwitchButton.hitAreaScaleX = 1.8;
		btnFullScreenSwitchButton.hitAreaScaleY = 1.8;

		// btnHome (components)
		const btnHomeComponentBase = new ComponentBase(btnHome);
		btnHomeComponentBase.instanceName = "btn_home_01";
		btnHomeComponentBase.colorize = true;
		btnHomeComponentBase.hexColor = "0xaa7edf";
		btnHomeComponentBase.componentType = "Button";
		const btnHomeClickButton = new ClickButton(btnHome);
		btnHomeClickButton.hitAreaScaleX = 1.8;
		btnHomeClickButton.hitAreaScaleY = 1.8;

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;

		this.events.emit("scene-awake");
	}

	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;

	/* START-USER-CODE */
	preload() {

		SceneManager.registerPreloader(this);
	}
	create() {

		Ctrace(this.scene.key + " > create > START!");
		this.editorCreate();
		this.registerEvents();
		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.unregisterEvents();
		})
		Ctrace(this.scene.key + " > create > DONE!");
	}
	unregisterEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > unregisterEvents > ...");
		//this.events.off('trail-to')
	}
	registerEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > registerEvents > ...");
		//this.events.on('trail-to', this.method);
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
