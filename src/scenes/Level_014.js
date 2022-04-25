
// You can write more code here

/* START OF COMPILED CODE */

class Level_014 extends Phaser.Scene {

	constructor() {
		super("Level_014");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("level-007-asset-pack", "assets/level-007-asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// starfield_01
		this.add.image(512, 384, "starfield_01");

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 527, 128, 128);
		rectangle_1.scaleX = 8.02689592685811;
		rectangle_1.scaleY = 1.8911934900909593;
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3028324;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(929, 133, 30, 30);
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 6828205;
		ellipse_2.isStroked = true;
		ellipse_2.strokeColor = 11173599;

		// layer_title
		const layer_title = this.add.layer();

		// linear_gradient_01_1
		const linear_gradient_01_1 = this.add.image(903, 119, "linear_gradient_01");
		linear_gradient_01_1.scaleX = -8;
		linear_gradient_01_1.scaleY = 0.31278082529123086;
		linear_gradient_01_1.setOrigin(0, 0);
		linear_gradient_01_1.alphaTopRight = 0;
		linear_gradient_01_1.alphaBottomRight = 0;
		linear_gradient_01_1.tintTopLeft = 3835888;
		linear_gradient_01_1.tintTopRight = 3835888;
		linear_gradient_01_1.tintBottomLeft = 13122288;
		linear_gradient_01_1.tintBottomRight = 13122288;

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 1024, 768);
		rectangle.setOrigin(0, 0);
		rectangle.isStroked = true;
		rectangle.strokeColor = 13875698;
		rectangle.lineWidth = 3;

		// text_1_1
		const text_1_1 = this.add.text(840, 134, "", {});
		text_1_1.setOrigin(0, 0.5);
		text_1_1.text = "Menu";
		text_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_1
		const text_1_1_1_1 = this.add.text(928, 133, "", {});
		text_1_1_1_1.setOrigin(0.5, 0.5);
		text_1_1_1_1.text = "0";
		text_1_1_1_1.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// layer_top_buttons
		const layer_top_buttons = this.add.layer();

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
		text_1_1_1_1_1.text = "Filters - Shaders - 1";
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

		// roundedrectangle
		const roundedrectangle = this.add.roundedRectangle(959, 123, 50, 250);
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
		layer_top_bar.add(roundedrectangle);

		// btnGitHub
		const btnGitHub = new BtnGitHub(this, 984, 339);
		btnGitHub.scaleX = 0.5;
		btnGitHub.scaleY = 0.5;
		layer_top_bar.add(btnGitHub);

		// btnRefreshPage
		const btnRefreshPage = new BtnRefreshPage(this, 984, 219);
		btnRefreshPage.scaleX = 0.5;
		btnRefreshPage.scaleY = 0.5;
		layer_top_bar.add(btnRefreshPage);

		// btnFullScreen
		const btnFullScreen = new BtnFullScreen(this, 984, 159);
		btnFullScreen.scaleX = 0.5;
		btnFullScreen.scaleY = 0.5;
		layer_top_bar.add(btnFullScreen);

		// btnHome
		const btnHome = new BtnHome(this, 984, 279);
		btnHome.scaleX = 0.5;
		btnHome.scaleY = 0.5;
		layer_top_bar.add(btnHome);

		// rectangle_bottom_01
		const rectangle_bottom_01 = this.add.rectangle(101, 709, 810, 150);
		rectangle_bottom_01.scaleX = 0.9886865036951002;
		rectangle_bottom_01.scaleY = 0.39044618858559976;
		rectangle_bottom_01.setOrigin(0, 0);
		rectangle_bottom_01.isStroked = true;
		rectangle_bottom_01.strokeColor = 13875698;
		rectangle_bottom_01.lineWidth = 2;

		// satelit_02
		const satelit_02 = this.add.image(705, 279, "satelit 02");
		satelit_02.scaleX = 0.3;
		satelit_02.scaleY = 0.3;

		// satelit_01
		const satelit_01 = this.add.image(202, 183, "satelit 01");
		satelit_01.scaleX = 0.3;
		satelit_01.scaleY = -0.3;

		// ellipse_4
		const ellipse_4 = this.add.ellipse(473, 623, 128, 128);
		ellipse_4.scaleX = 3.798808720123937;
		ellipse_4.isFilled = true;
		ellipse_4.fillColor = 1462912;

		// ufo_01
		const ufo_01 = this.add.image(470, 495, "ufo_01");
		ufo_01.scaleX = 0.4;
		ufo_01.scaleY = 0.4;

		// text_113_1_1_2_1_3_2_1_1_1
		const text_113_1_1_2_1_3_2_1_1_1 = this.add.text(103, 724, "", {});
		text_113_1_1_2_1_3_2_1_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_1.text = "GLSL SANDBOX";
		text_113_1_1_2_1_3_2_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2_1_1_2_2
		const text_113_1_1_2_1_3_2_1_1_2_2 = this.add.text(393, 657, "", {});
		text_113_1_1_2_1_3_2_1_1_2_2.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_2_2.text = "touch - outline glow";
		text_113_1_1_2_1_3_2_1_1_2_2.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_113_1_1_2_1_3_2_1_1_1_1
		const text_113_1_1_2_1_3_2_1_1_1_1 = this.add.text(103, 750, "", {});
		text_113_1_1_2_1_3_2_1_1_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_1_1.text = "Convert GLSL code into Javascript";
		text_113_1_1_2_1_3_2_1_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text
		const text = this.add.text(644, 392, "", {});
		text.setOrigin(0, 0.5);
		text.text = "blur : vertical - horizontal";
		text.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_1
		const text_1 = this.add.text(88, 261, "", {});
		text_1.setOrigin(0, 0.5);
		text_1.text = "touch to switch shader :";
		text_1.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// satelit_01_tf
		const satelit_01_tf = this.add.text(276, 262, "", {});
		satelit_01_tf.setOrigin(0, 0.5);
		satelit_01_tf.text = "SpiralTime";
		satelit_01_tf.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_2
		const text_2 = this.add.text(727, 728, "", {});
		text_2.setOrigin(0, 0.5);
		text_2.text = "Dat GUI - Master";
		text_2.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_3
		const text_3 = this.add.text(728, 752, "", {});
		text_3.setOrigin(0, 0.5);
		text_3.text = "Dat GUI - API";
		text_3.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// satelit_04
		const satelit_04 = this.add.image(140, 424, "satelit 02");
		satelit_04.scaleX = 0.22781246169389724;
		satelit_04.scaleY = 0.22781246169389724;
		satelit_04.flipX = true;

		// satelit_05
		const satelit_05 = this.add.image(53, 676, "satelit 01");
		satelit_05.scaleX = 0.5990603170301406;
		satelit_05.scaleY = 0.5990603170301406;
		satelit_05.flipX = true;

		// satelit_03
		const satelit_03 = this.add.image(976, 488, "satelit 01");
		satelit_03.scaleX = 0.5990603170301406;
		satelit_03.scaleY = 0.5990603170301406;
		satelit_03.flipX = true;

		// text_4
		const text_4 = this.add.text(835, 586, "", {});
		text_4.setOrigin(0, 0.5);
		text_4.text = "touch - grayscale";
		text_4.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_5
		const text_5 = this.add.text(40, 509, "", {});
		text_5.setOrigin(0, 0.5);
		text_5.text = "touch - noise";
		text_5.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_6
		const text_6 = this.add.text(167, 677, "", {});
		text_6.setOrigin(0, 0.5);
		text_6.text = "touch - plasma";
		text_6.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_8
		const text_8 = this.add.text(153, 512, "", {});
		text_8.setOrigin(0, 0.5);
		text_8.tintTopLeft = 16477248;
		text_8.tintTopRight = 16477248;
		text_8.tintBottomLeft = 16477248;
		text_8.tintBottomRight = 16477248;
		text_8.text = "TODO";
		text_8.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_7
		const text_7 = this.add.text(295, 678, "", {});
		text_7.setOrigin(0, 0.5);
		text_7.tintTopLeft = 16477248;
		text_7.tintTopRight = 16477248;
		text_7.tintBottomLeft = 16477248;
		text_7.tintBottomRight = 16477248;
		text_7.text = "TODO";
		text_7.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_9
		const text_9 = this.add.text(850, 392, "", {});
		text_9.setOrigin(0, 0.5);
		text_9.tintTopLeft = 16477248;
		text_9.tintTopRight = 16477248;
		text_9.tintBottomLeft = 16477248;
		text_9.tintBottomRight = 16477248;
		text_9.text = "TODO";
		text_9.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_10
		const text_10 = this.add.text(561, 659, "", {});
		text_10.setOrigin(0, 0.5);
		text_10.tintTopLeft = 16477248;
		text_10.tintTopRight = 16477248;
		text_10.tintBottomLeft = 16477248;
		text_10.tintBottomRight = 16477248;
		text_10.text = "TODO";
		text_10.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_11
		const text_11 = this.add.text(980, 588, "", {});
		text_11.setOrigin(0, 0.5);
		text_11.tintTopLeft = 16477248;
		text_11.tintTopRight = 16477248;
		text_11.tintBottomLeft = 16477248;
		text_11.tintBottomRight = 16477248;
		text_11.text = "OK";
		text_11.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_12
		const text_12 = this.add.text(373, 263, "", {});
		text_12.setOrigin(0, 0.5);
		text_12.tintTopLeft = 16477248;
		text_12.tintTopRight = 16477248;
		text_12.tintBottomLeft = 16477248;
		text_12.tintBottomRight = 16477248;
		text_12.text = "OK";
		text_12.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_1_1 (components)
		const text_1_1NavigateToScene = new NavigateToScene(text_1_1);
		text_1_1NavigateToScene.hitAreaScaleY = 1.5;

		// btnGitHub (components)
		const btnGitHubComponentBase = new ComponentBase(btnGitHub);
		btnGitHubComponentBase.instanceName = "btn_github_01";
		btnGitHubComponentBase.colorize = true;
		btnGitHubComponentBase.hexColor = "0xaa7edf";
		btnGitHubComponentBase.componentType = "Button";
		new ClickButton(btnGitHub);

		// btnRefreshPage (components)
		const btnRefreshPageComponentBase = new ComponentBase(btnRefreshPage);
		btnRefreshPageComponentBase.instanceName = "btn_reload_page_01";
		btnRefreshPageComponentBase.colorize = true;
		btnRefreshPageComponentBase.hexColor = "0xaa7edf";
		btnRefreshPageComponentBase.componentType = "Button";
		new ClickButton(btnRefreshPage);

		// btnFullScreen (components)
		const btnFullScreenComponentBase = new ComponentBase(btnFullScreen);
		btnFullScreenComponentBase.instanceName = "btn_fullscreen_switch_01";
		btnFullScreenComponentBase.colorize = true;
		btnFullScreenComponentBase.hexColor = "0xaa7edf";
		btnFullScreenComponentBase.componentType = "SwitchButton";
		new SwitchButton(btnFullScreen);

		// btnHome (components)
		const btnHomeComponentBase = new ComponentBase(btnHome);
		btnHomeComponentBase.instanceName = "btn_home_01";
		btnHomeComponentBase.colorize = true;
		btnHomeComponentBase.hexColor = "0xaa7edf";
		btnHomeComponentBase.componentType = "SwitchButton";
		new ClickButton(btnHome);

		// text_113_1_1_2_1_3_2_1_1_1 (components)
		const text_113_1_1_2_1_3_2_1_1_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2_1_1_1);
		text_113_1_1_2_1_3_2_1_1_1NavigateToURL.urlPath = "https://glslsandbox.com/";
		text_113_1_1_2_1_3_2_1_1_1NavigateToURL.hitAreaScaleY = 2;

		// text_113_1_1_2_1_3_2_1_1_1_1 (components)
		const text_113_1_1_2_1_3_2_1_1_1_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2_1_1_1_1);
		text_113_1_1_2_1_3_2_1_1_1_1NavigateToURL.urlPath = "https://realhe.ro/fragment-converter/";
		text_113_1_1_2_1_3_2_1_1_1_1NavigateToURL.hitAreaScaleY = 2;

		// text_2 (components)
		const text_2NavigateToURL = new NavigateToURL(text_2);
		text_2NavigateToURL.urlPath = "https://github.com/dataarts/dat.gui";
		text_2NavigateToURL.hitAreaScaleY = 2;

		// text_3 (components)
		const text_3NavigateToURL = new NavigateToURL(text_3);
		text_3NavigateToURL.urlPath = "https://github.com/dataarts/dat.gui/blob/master/API.md";
		text_3NavigateToURL.hitAreaScaleY = 2;

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;
		this.satelit_02 = satelit_02;
		this.satelit_01 = satelit_01;
		this.ufo_01 = ufo_01;
		this.satelit_01_tf = satelit_01_tf;
		this.satelit_04 = satelit_04;
		this.satelit_05 = satelit_05;
		this.satelit_03 = satelit_03;

		this.events.emit("scene-awake");
	}

	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;
	/** @type {Phaser.GameObjects.Image} */
	satelit_02;
	/** @type {Phaser.GameObjects.Image} */
	satelit_01;
	/** @type {Phaser.GameObjects.Image} */
	ufo_01;
	/** @type {Phaser.GameObjects.Text} */
	satelit_01_tf;
	/** @type {Phaser.GameObjects.Image} */
	satelit_04;
	/** @type {Phaser.GameObjects.Image} */
	satelit_05;
	/** @type {Phaser.GameObjects.Image} */
	satelit_03;

	/* START-USER-CODE */
	time = 0.0;
	preload() {

		SceneManager.registerPreloader(this);
		this.editorPreload();

		// load shaders fragment code
		this.load.glsl('fireball', 'assets/shaders/shader0.frag');
		this.load.glsl('bundle', 'assets/shaders/bundle_001.glsl');
		this.load.glsl('gusain_blur', 'assets/shaders/gusain_blur1.frag');

		// init grayscale pipeline
		var game = this.game;
		var GrayscalePipeline = new Phaser.Class({
			Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
			initialize:
			function GrayscalePipeline (game) {
				Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
					game: game,
					renderer: game.renderer,
					fragShader:`
						precision mediump float;
						uniform sampler2D uMainSampler;
						varying vec2 outTexCoord;
						void main(void) {
						vec4 color = texture2D(uMainSampler, outTexCoord);
						float gray = dot(color.rgb, vec3(0.299, 0.587, 0.114));
						if (color.a < 0.5) discard; // discard transparent pixels
						gl_FragColor = vec4(vec3(gray), 1.0);
						}`
				});
			} 
		});
		game.renderer.pipelines.add('Grayscale', new GrayscalePipeline(game));

		// init noise pipeline
		var NoisePipeline = new Phaser.Class({
			Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
			initialize:
			function NoisePipeline (game) {
				Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
					game: game,
					renderer: game.renderer,
					fragShader:`
					precision mediump float;
					uniform float uTime;
					uniform sampler2D uMainSampler;
					varying vec2 outTexCoord;
					// Yuldashev Mahmud Effect took from shaderToy mahmud9935@gmail.com
					float snoise(vec3 uv, float res){

						const vec3 s = vec3(1e0, 1e2, 1e3);
						uv *= res;
						vec3 uv0 = floor(mod(uv, res))*s;
						vec3 uv1 = floor(mod(uv+vec3(1.), res))*s;
						vec3 f = fract(uv); f = f*f*(3.0-2.0*f);
						vec4 v = vec4(uv0.x+uv0.y+uv0.z, uv1.x+uv0.y+uv0.z,
						uv0.x+uv1.y+uv0.z, uv1.x+uv1.y+uv0.z);
						vec4 r = fract(sin(v*1e-1)*1e3);
						float r0 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
						r = fract(sin((v + uv1.z - uv0.z)*1e-1)*1e3);
						float r1 = mix(mix(r.x, r.y, f.x), mix(r.z, r.w, f.x), f.y);
						return mix(r0, r1, f.z)*2.-1.;
					}

					void main( void ) {

						vec4 front = texture2D(uMainSampler, outTexCoord);
						if (front.a > 0.5){ // skip transparent pixels

							vec2 p = -.5 + gl_FragCoord.xy / outTexCoord.xy;
							p.x *= outTexCoord.x/outTexCoord.y;

							float color = 3.0 - (3.*length(2.*p));
							vec3 coord = vec3(atan(p.x,p.y)/6.2832+.5, length(p)*.4, .5);

							for(int i = 1; i <= 7; i++) {
								float power = pow(2.0, float(i));
								color += (1.5 / power) * snoise(coord + vec3(0.,-uTime*.05, uTime*.01), power*16.);
							}
							gl_FragColor = vec4( color, pow(max(color,0.),2.)*0.4, pow(max(color,0.),3.)*0.15 , 1.0);
						}
					}`
				});
			} 
		});
		this.noisePipeline = game.renderer.pipelines.add('Noise', new NoisePipeline(game));
		// noisePipeline.set2f('outTexCoord', game.config.width, game.config.height);

		// init plasma pipeline
		var PlasmaPipeline = new Phaser.Class({
				Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
				initialize:
				function PlasmaPipeline (game) {
					Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
						game: game,
						renderer: game.renderer,
						fragShader: `
						precision mediump float;
						uniform sampler2D uMainSampler;
						uniform vec2 uResolution;
						uniform float uTime;

						varying vec2 outTexCoord;
						varying vec4 outTint;

						vec4 plasma()
						{
							vec2 pixelPos = gl_FragCoord.xy / uResolution * 20.0;
							float freq = 0.8;
							float value =
								sin(uTime + pixelPos.x * freq) +
								sin(uTime + pixelPos.y * freq) +
								sin(uTime + (pixelPos.x + pixelPos.y) * freq) +
								cos(uTime + sqrt(length(pixelPos - 0.5)) * freq * 2.0);

							return vec4(
								cos(value),
								sin(value),
								sin(value * 3.14 * 2.0),
								cos(value)
							);
						}

						void main(){

							vec4 texture = texture2D(uMainSampler, outTexCoord);
							texture *= vec4(outTint.rgb * outTint.a, outTint.a);
							gl_FragColor = texture * plasma();
						}`,
					uniforms: [
						'uProjectionMatrix',
						'uViewMatrix',
						'uModelMatrix',
						'uMainSampler',
						'uResolution',
						'uTime'
					]
				});
			} 
		});
		this.plasmaPipeline = game.renderer.pipelines.add('Plasma', new PlasmaPipeline(game));
		// this.plasmaPipeline.set2f('uResolution', game.config.width, game.config.height);
	}
	create() {

		Ctrace(this.scene.key + " > create > START!");
		this.editorCreate();
		this.registerEvents();
		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.unregisterEvents();
		})
		Ctrace(this.scene.key + " > create > DONE!");
		this.initComponents();
	}
	update(){

		this.noisePipeline.set1f('uTime', this.time);
		this.plasmaPipeline.set1f('uTime', this.time);
		this.time += 0.05;
		if (this.time > 1000000000.0) this.time = 0; // prevent elndless rising value ;-)
	}
	initComponents(){
		// https://rexrainbow.github.io/phaser3-rex-notes/docs/site/shader/?msclkid=9f541c5dbd9411ecaed12be4f1542ad8
		// var shader = scene.add.shader(key, x, y, width, height, textures);
		// textures : Optional array of texture keys to bind to the iChannel0, iChannel1, iChannel2, iChannel3 uniforms.
		// shader.setChannel0('satelit_02');

		this.datGui = new dat.GUI({ autoPlace: false });
		// Manual GUI position
		document.getElementById('gui-container').appendChild(this.datGui.domElement);
		// this.datGui.close();

		this.addNoiseShader(this.satelit_04);
		this.addMultiShader(this.satelit_01, this.satelit_01_tf);
		this.addGrayscaleShader(this.satelit_03);
		this.addPlasmaShader(this.satelit_05);

		var shaderCache = this.sys.cache.shader
		Ctrace(this.scene.key + " > shaderCache:{0}", shaderCache)
		console.dir(shaderCache);

		this.addOutlineFilters(this.ufo_01);
		this.addGusainBlur(this.satelit_02);

		// const baseShader = new Phaser.Display.BaseShader('fireball');
		//shader.add('fireball', 0, 0, 400, 600);
		//this.add.shader('fireball', 0, 0, 400, 600).setOrigin(0).setMask(bitmask1).visible = false;

		// let { width, height } = this.sys.game.canvas;
		// Ctrace("initComponents:{0}", width)
		// var s2 = this.make.shader({
		// 	key: 'fireball',
		// 	x: 0,
		// 	y: 0,
		// 	width: 800,
		// 	height: 800,
		// 	add: true
		// }).setOrigin(0);//.setPosition(width, height);
		//shader.setRenderToTexture('satelit_01');

		//const bitmask1 = this.satelit_01.createBitmapMask();
		//const shader = this.add.shader('SpiralTime', 0, 0, 512, 512, []).setMask(bitmask1);


		//var s0 = this.add.shader('fireball', 0, 0, 400, 600).setOrigin(0).setMask(bitmask1);
		// var s1 = this.add.shader('Stripes', 0, 0, 400, 600).setOrigin(0).setMask(bitmask1);
		// var s2 = this.add.shader('Marble', 0, 0, 400, 600).setOrigin(0).setMask(bitmask1);
		// var s2 = this.add.shader('SpiralTime', 0, 400, 600, 600).setOrigin(0).setMask(bitmask1);


		//const baseShader = new Phaser.Display.BaseShader('BufferShader', fragmentShader);
        //const shader = this.add.shader(baseShader, 400, 300, 800, 600).setMask(bitmask1);

		// const baseShader1 = new Phaser.Display.BaseShader('BufferShader1', fragmentShader7);
        // const baseShader2 = new Phaser.Display.BaseShader('BufferShader2', fragmentShader3);
        // const baseShader3 = new Phaser.Display.BaseShader('BufferShader3', fragmentShader6);
		// shader.setShader(baseShader1);

		// Ctrace(this.key + " > initComponents:");
		// console.dir(Phaser.Renderer.WebGL.Pipelines);
		// var current_shader_index = 0;
		// var shaders = [baseShader1, baseShader2, baseShader3]
		// this.input.on('pointerup', function (pointer) {


		// }
	}
	addPlasmaShader(go){

		var plasmaPipeline = this.plasmaPipeline;
		plasmaPipeline.set2f('outTexCoord', this.game.config.width, this.game.config.height);
		go.setInteractive()
		.on('pointerdown', function (pointer) {

			if (this.pipeline === plasmaPipeline){

				this.resetPipeline();
			}
			else {

				this.setPipeline('Plasma');
			}
		});
	}
	addGusainBlur(go){

		// const baseShader = new Phaser.Display.BaseShader('gusain_blur');
		// this.add.shader('gusain_blur', 0, 0, 400, 600)//.setOrigin(0).setMask(bitmask1).visible = false;
		var postFxPlugin = this.plugins.get('blurpipelineplugin');
		var postFxPipeline = postFxPlugin.add(go, {
			blurX: 0.5,
			blurY: 0.5,
			tint: false,
			tintColor: Phaser.Display.Color.GetColor32(255, 10, 0, 0.2)
		});
		var f1 = this.datGui.addFolder('Gussain Blur - Satelite Right');
        f1.add(postFxPipeline, 'blurX', 0.0, 10);
		f1.add(postFxPipeline, 'blurY', 0.0, 10);
		f1.add(postFxPipeline, 'tint', true, false);
		f1.addColor(postFxPipeline, 'tintColor');
		// f1.open();
	}
	addOutlineFilters(go){

		var postFxPlugin = this.plugins.get('outlineglowpipelineplugin');
		Ctrace("pp")
		console.dir(postFxPlugin);
		go.setInteractive()
		.on('pointerdown', function (pointer) {

			if (!this.glowPipeline){
				// Add postfx pipeline
				postFxPlugin.add(go, {
					thickness: 3,
					levels:5,
					outlineColor: Phaser.Display.Color.GetColor32(255, 0, 0, 0.2)
				});

				/*postFxPlugin.add(go, {
					thickness: 3,
					outlineColor: Phaser.Display.Color.GetColor32(255, 0, 0, 0.2)
				});

				// Cascade 2nd outline
				postFxPlugin.add(go, {
					thickness: 5,
					outlineColor: Phaser.Display.Color.GetColor32(255, 0, 0, 0.2)
				});

				// Cascade 3nd outline
				postFxPlugin.add(go, {
					thickness: 7,
					outlineColor: Phaser.Display.Color.GetColor32(255, 0, 0, 0.2)
				});

				// Cascade 4nd outline
				postFxPlugin.add(go, {
					thickness: 12,
					outlineColor: Phaser.Display.Color.GetColor32(255, 0, 0, 0.2)
				});*/

				go.glowPipeline = true;
			}
			else {
				// Remove all outline post-fx pipelines
				postFxPlugin.remove(go);
				go.glowPipeline = false;
			}
		});

		// postFxPlugin.setQuality(0.5);
		// quality : 0 ~ 1, default is 0.1.
		// 0.1 : 10 sample points.
		// 0.08 : 8 sample points.
		// 1 : 100 sample points.
	}
	addOutlineFilters2(go){

		var postFxPlugin = this.plugins.get('outlineglowpipelineplugin');
		go.setInteractive()
		.on('pointerover', function () {
			// Add postfx pipeline
			postFxPlugin.add(go, {
				thickness: 3,
				outlineColor: 0xff8a50
			});

			// Cascade 2nd outline
			postFxPlugin.add(go, {
				thickness: 5,
				outlineColor: 0xc41c00
			});
		})
		.on('pointerout', function () {
			// Remove all outline post-fx pipelines
			postFxPlugin.remove(go);
		})
	}
	addGrayscaleShader(go){

		const grayscalePipeline = this.renderer.pipelines.get('Grayscale');;
		// var grayscaleTween = this.tweens.add({
		// 	targets: grayscalePipeline,
		// 	delay: 2000,
		// 	repeatDelay: 2000,
		// 	gray: 0,
		// 	yoyo: true,
		// 	repeat: -1,
		// 	paused: true
		// });
		go.setInteractive()
		.on('pointerdown', function (pointer) {

			if (this.pipeline === grayscalePipeline){

				this.resetPipeline();
				//grayscaleTween.stop();
			}
			else {

				this.setPipeline('Grayscale');
				// grayscaleTween.play();
			}
		});
	}
	addMultiShader(go, tf){

		const bitmask1 = go.createBitmapMask();
		const shader = this.add.shader(
			'SpiralTime', 
			go.x, 
			go.y, 
			800, //go.width, 
			800, //go.height//,
			//['satelit_01']
		).setOrigin(0.5).setMask(bitmask1);

		Ctrace("initComponents:")
		console.dir(shader)

		var sycleArr = new McArray([
			'Warp',  
			'Fireball', 
			'Particles', 
			'Rainbow Spiral', 
			'Hilights',
			'Colorful Voronoi',
			'Colorful Waves',
			'Blobs',
			'Rainbow',
			'Noise',
			'SpiralTime'
		]);
		go.setInteractive().on('pointerup', function (pointer) {

			//if (shader.uniforms.iChannel0.textureKey === 'metal')
			//shader.setChannel0('satelit_02');
			var nextShaderName = sycleArr.getNext();
			Ctrace("nextShaderName:{0}", nextShaderName)
			if ( nextShaderName == "None" ){

				//..
			} else {

				shader.setShader(nextShaderName);
			}
			tf.setText(nextShaderName);
		})
	}
	addNoiseShader(go){

		var noisePipeline = this.noisePipeline;
		noisePipeline.set2f('outTexCoord', go.width, go.height);

		// noisePipeline.set1f("uTime", 0.5);
		// this.tweens.add({
		// 	targets: noisePipeline,
		// 	uTime: 1,
		// 	ease: 'Linear',
		// 	duration: Phaser.Math.Between(500, 1000),
		// 	repeat: -1,
		// 	yoyo: true
		// });

		go.setInteractive()
		.on('pointerdown', function (pointer) {

			if (this.pipeline === noisePipeline){

				this.resetPipeline();
			}
			else {

				this.setPipeline('Noise');
			}
		});
	}
	unregisterEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > unregisterEvents > ...");
		document.getElementById('gui-container').removeChild(this.datGui.domElement);
		this.datGui.destroy();
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
