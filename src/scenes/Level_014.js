
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
		const text = this.add.text(627, 386, "", {});
		text.setOrigin(0, 0.5);
		text.text = "blur : vertical - horizontal";
		text.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_1
		const text_1 = this.add.text(136, 254, "", {});
		text_1.setOrigin(0, 0.5);
		text_1.text = "touch to switch shader :";
		text_1.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// satelit_01_tf
		const satelit_01_tf = this.add.text(324, 255, "", {});
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
		const text_4 = this.add.text(779, 585, "", {});
		text_4.setOrigin(0, 0.5);
		text_4.text = "touch - grayscale";
		text_4.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_5
		const text_5 = this.add.text(6, 526, "", {});
		text_5.setOrigin(0, 0.5);
		text_5.text = "touch noise simple - fractal";
		text_5.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_6
		const text_6 = this.add.text(209, 407, "", {});
		text_6.setOrigin(0, 0.5);
		text_6.text = "touch - plasma";
		text_6.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

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

		// btnHome
		const btnHome = new BtnHome(this, 984, 319);
		this.add.existing(btnHome);
		btnHome.scaleX = 0.5;
		btnHome.scaleY = 0.5;

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

		// satelit_06
		const satelit_06 = this.add.image(300, 344, "satelit 02");
		satelit_06.scaleX = 0.1389633463513522;
		satelit_06.scaleY = 0.1389633463513522;
		satelit_06.flipX = true;

		// text_13
		const text_13 = this.add.text(155, 686, "", {});
		text_13.setOrigin(0, 0.5);
		text_13.text = "touch - smooth outline";
		text_13.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// status_Icon_01
		const status_Icon_01 = new StatusIcon(this, 384, 688);
		this.add.existing(status_Icon_01);

		// status_Icon
		const status_Icon = new StatusIcon(this, 972, 585);
		this.add.existing(status_Icon);

		// status_Icon_1
		const status_Icon_1 = new StatusIcon(this, 602, 658);
		this.add.existing(status_Icon_1);

		// status_Icon_2
		const status_Icon_2 = new StatusIcon(this, 267, 528);
		this.add.existing(status_Icon_2);

		// status_Icon_3
		const status_Icon_3 = new StatusIcon(this, 375, 408);
		this.add.existing(status_Icon_3);

		// status_Icon_4
		const status_Icon_4 = new StatusIcon(this, 97, 256);
		this.add.existing(status_Icon_4);

		// status_Icon_5
		const status_Icon_5 = new StatusIcon(this, 881, 387);
		this.add.existing(status_Icon_5);

		// text_1_1 (components)
		const text_1_1NavigateToScene = new NavigateToScene(text_1_1);
		text_1_1NavigateToScene.hitAreaScaleY = 1.5;

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

		// btnGitHub (components)
		const btnGitHubComponentBase = new ComponentBase(btnGitHub);
		btnGitHubComponentBase.instanceName = "btn_github_01";
		btnGitHubComponentBase.colorize = true;
		btnGitHubComponentBase.hexColor = "0xaa7edf";
		btnGitHubComponentBase.componentType = "Button";
		const btnGitHubClickButton = new ClickButton(btnGitHub);
		btnGitHubClickButton.hitAreaScaleX = 1.8;
		btnGitHubClickButton.hitAreaScaleY = 1.8;

		// btnHome (components)
		const btnHomeComponentBase = new ComponentBase(btnHome);
		btnHomeComponentBase.instanceName = "btn_home_01";
		btnHomeComponentBase.colorize = true;
		btnHomeComponentBase.hexColor = "0xaa7edf";
		btnHomeComponentBase.componentType = "Button";
		const btnHomeClickButton = new ClickButton(btnHome);
		btnHomeClickButton.hitAreaScaleX = 1.8;
		btnHomeClickButton.hitAreaScaleY = 1.8;

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

		// status_Icon_01 (prefab fields)
		status_Icon_01.progressStatus = "On Hold";

		// status_Icon (prefab fields)
		status_Icon.progressStatus = "Done";

		// status_Icon_1 (prefab fields)
		status_Icon_1.progressStatus = "On Hold";

		// status_Icon_2 (prefab fields)
		status_Icon_2.progressStatus = "Done";

		// status_Icon_3 (prefab fields)
		status_Icon_3.progressStatus = "Done";

		// status_Icon_4 (prefab fields)
		status_Icon_4.progressStatus = "Done";

		// status_Icon_5 (prefab fields)
		status_Icon_5.progressStatus = "On Hold";

		this.satelit_02 = satelit_02;
		this.satelit_01 = satelit_01;
		this.ufo_01 = ufo_01;
		this.satelit_01_tf = satelit_01_tf;
		this.satelit_04 = satelit_04;
		this.satelit_05 = satelit_05;
		this.satelit_03 = satelit_03;
		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;
		this.satelit_06 = satelit_06;

		this.events.emit("scene-awake");
	}

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
	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;
	/** @type {Phaser.GameObjects.Image} */
	satelit_06;

	/* START-USER-CODE */
	time = 0.0;
	preload() {

		SceneManager.registerPreloader(this);
		this.editorPreload();

		// load shaders fragment code
		this.load.glsl('fireball', 'assets/shaders/shader0.frag');
		this.load.glsl('bundle', 'assets/shaders/bundle_001.glsl');
		this.load.glsl('gusain_blur', 'assets/shaders/gusain_blur1.frag');

		this.load.plugin('outlineglowpipelineplugin', 'lib/filters/outlineglowpipelineplugin.js', true);
		this.load.plugin('blurpipelineplugin', 'lib/filters/blurpipelineplugin.js', true);
		//this.load.plugin('outlinedotspipelineplugin', 'lib/filters/outlinedotspipelineplugin.js', true);

		this.load.glsl('fireball', 'assets/shaders/shader0.frag');

		// load filter pipelines
		AssetLoader.loadPipeline(this, "NoisePipeline");
		AssetLoader.loadPipeline(this, "PlasmaPipeline");
		AssetLoader.loadPipeline(this, "GrayscalePipeline");
		AssetLoader.loadPipeline(this, "SmoothOutlinePipeline");

		// init grayscale pipeline
		var game = this.game;

		//1.
		//Animated Dotted Outline Shader in Unity
		//https://lindenreidblog.com/2017/12/24/animated-dotted-outline-shader-in-unity/
		//2.
		//https://jcgt.org/published/0002/02/08/paper.pdf
		/*var AnimatedDashedOutline = new Phaser.Class({
			Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
			initialize:
			function AnimatedDashedOutline (game) {
				Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
					game: game,
					renderer: game.renderer,
					fragShader:`
					precision mediump float;
					uniform sampler2D dash_atlas;
					uniform float dash_index, dash_phase, dash_period;
					uniform float linelength, linewidth, antialias;
					uniform vec2 caps, texcoord;
					uniform vec4 color;
					// t = linewidth/2.0 - antialias;
					float cap( float type, float u, float v, float t ){
						// None
						if ( type < 0.5 ) discard;
						// Round
						else if ( abs(type - 1.0) < 0.5 ) return sqrt(u*u+v*v);
						// Triangle out
						else if ( abs(type - 2.0) < 0.5 ) return max(abs(v),(t+u-abs(v)));
						// Triangle in
						else if ( abs(type - 3.0) < 0.5 ) return (u+abs(v));
						// Square
						else if ( abs(type - 4.0) < 0.5 ) return max(u,v);
						// Butt
						else if ( abs(type - 5.0) < 0.5 ) return max(u+t,v);
						discard;
					}
					int main() {
						float w = linewidth;
						float freq = w*dash_period;
						float u = texcoord.x;
						float v = texcoord.y;
						float u_ = mod( u + w*dash_phase, freq );
						vec4 dash = texture2D(dash_atlas, vec2(u_/freq, dash_index));
						float dash_ref = dash.x;
						float dash_type = dash.y;
						float dash_start = (u - u_) + w * dash.z;
						float dash_stop = (u - u_) + w * dash.w;
						float line_start = 0.0;
						float line_stop = linelength;
						bool cross_start = (dash_start <= line_start) &&
						(dash_stop >= line_start);
						bool cross_stop = (dash_stop >= line_stop) &&
						(dash_start <= line_stop);
						float t = linewidth/2.0 - antialias;
						// Default distance to the line body (7)
						float d = abs(v);
						// Dash stop is before line start
						if( dash_stop <= line_start )
							discard;
						// Dash start is beyond line stop
						else if( dash_start >= line_stop )
							discard;
						// Dash is across line start and fragment before line start (1)
						else if( (u <= line_start) && (cross_start) )
							d = cap( caps.x, u, v, t);
							// Dash is across line stop and fragment after line stop (4)
							else if( (u >= line_stop) && (cross_stop) )
							d = cap( caps.y, u - line_stop, v, t );
							// Dash cap start (5)
						else if( dash_type < 0.0 )
							d = cap( caps.y, u-dash_ref, v, t );
							// Dash cap stop (6)
						else if( dash_type > 0.0 )
							d = cap( caps.x, dash_ref-u, v, t );
							// Antialias test
							d -= t;
						if( d < 0.0 ) {
							gl_FragColor = color;
						} else {
							d /= antialias;
							gl_FragColor = vec4(color.rgb, exp(-d*d)*color.a);
						}
					}`
				});
			} 
		});*/

		//TODO
		//GODOT GLOW
		//https://github.com/GDQuest/godot-shaders/blob/master/godot/Shaders/baked_sprite_glow.shader



		/*var AnimatedDashedOutline = new Phaser.Class({
			Extends: Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline,
			initialize:
			function AnimatedDashedOutline (game) {
				Phaser.Renderer.WebGL.Pipelines.SpriteFXPipeline.call(this, {
					game: game,
					renderer: game.renderer,
					fragShader:`
					precision mediump float;
					uniform sampler2D uMainSampler;
					uniform vec2 texSize;
					varying vec2 outTexCoord;

					bool Smooth = true;
					const float width = 3.0;
					vec4 outline_color = vec4(1.0, 0.0, 0.0, 1.0);
					int pixel_size = 4;
					void main() {

						vec2 unit = (1.0/float(pixel_size) ) / texSize;
						vec4 pixel_color = texture2D(uMainSampler, outTexCoord);
						if (pixel_color.a == 0.0) {
							pixel_color = outline_color;
							pixel_color.a = 0.0;
							for (float x = -ceil(width); x <= ceil(width); x++) {
								for (float y = -ceil(width); y <= ceil(width); y++) {
									if (texture2D(uMainSampler, outTexCoord + vec2(x*unit.x, y*unit.y)).a == 0.0 || (x==0.0 && y==0.0)) {
										continue;
									}
									if (Smooth) {
										pixel_color.a += outline_color.a / (pow(x,2.0)+pow(y,2.0)) * (1.0-pow(2.0, -width));
										if (pixel_color.a > 1.0) {
											pixel_color.a = 1.0;
										}
									} else {
										pixel_color.a = outline_color.a;
										return;
									}
								}
							}
						}
						gl_FragColor = pixel_color;
					}
					`
				});
			} 
		});
		game.renderer.pipelines.add('AnimatedDashedOutline', new AnimatedDashedOutline(game));*/
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
	update() {

		this.noisePipeline.time += 0.01;
		this.plasmaPipeline.time += 0.01;
	}
	initComponents() {
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
		this.addPlasmaShader(this.satelit_06);
		this.addSmoothOutline(this.satelit_05);
		this.addOutlineFilters(this.ufo_01);
		this.addGusainBlur(this.satelit_02);

		var shaderCache = this.sys.cache.shader
		Ctrace(this.scene.key + " > shaderCache:{0}", shaderCache)
		console.dir(shaderCache);

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
	addSmoothOutline(go) {

		this.game.renderer.pipelines.add('SmoothOutline', new SmoothOutlinePipeline(this.game));
		const pipeline = this.renderer.pipelines.get('SmoothOutline');
		go
			.setPipeline('SmoothOutline')
			.setInteractive()
			.on('pointerdown', function (pointer) {

				// Ctrace("Smooth:{0}", pipeline.smooth);
				if (pipeline.smooth) {

					this.pipeline.setSmooth(false);
					this.pipeline.setOutlineColor(0x04f404);
				}
				else {

					this.pipeline.setSmooth(true);
					this.pipeline.setOutlineColor(0xf4048c);
				}
			});
	}
	addPlasmaShader(go) {

		var plasmaPipeline = this.game.renderer.pipelines.add('Plasma', new PlasmaPipeline(this.game));
		plasmaPipeline.setTextureSize(go.displayWidth, go.displayHeight)
		// plasmaPipeline.setTextureSize(this.game.config.width, this.game.config.height);
		go
		.setPipeline('Plasma')
		.setInteractive()
			.on('pointerdown', function (pointer) {

				if (this.pipeline === plasmaPipeline) {

					this.resetPipeline();
				}
				else {

					this.setPipeline('Plasma');
				}
			});
		this.plasmaPipeline = plasmaPipeline;
	}
	addGusainBlur(go) {

		// const baseShader = new Phaser.Display.BaseShader('gusain_blur');
		// this.add.shader('gusain_blur', 0, 0, 400, 600)//.setOrigin(0).setMask(bitmask1).visible = false;
		var postFxPlugin = this.plugins.get('blurpipelineplugin');
		var postFxPipeline = postFxPlugin.add(go, {
			blurX: 0.5,
			blurY: 0.5,
			tint: false,
			tintColor: Phaser.Display.Color.GetColor32(255, 10, 0, 0.2)
		});
		var f1 = this.datGui.addFolder('Gussain Blur - Satelite');
		f1.add(postFxPipeline, 'blurX', 0.0, 10);
		f1.add(postFxPipeline, 'blurY', 0.0, 10);
		f1.add(postFxPipeline, 'tint', true, false);
		f1.addColor(postFxPipeline, 'tintColor');
		// f1.open();
	}
	addOutlineFilters(go) {

		var postFxPlugin = this.plugins.get('outlineglowpipelineplugin');
		Ctrace("pp")
		console.dir(postFxPlugin);
		go.setInteractive()
			.on('pointerdown', function (pointer) {

				if (!this.glowPipeline) {
					// Add postfx pipeline
					postFxPlugin.add(go, {
						thickness: 3,
						levels: 5,
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
	addOutlineFilters2(go) {

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
	addGrayscaleShader(go) {

		const grayscalePipeline = this.game.renderer.pipelines.add('Grayscale', new GrayscalePipeline(this.game));
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

				if (this.pipeline === grayscalePipeline) {

					this.resetPipeline();
					//grayscaleTween.stop();
				}
				else {

					this.setPipeline('Grayscale');
					// grayscaleTween.play();
				}
			});
	}
	addMultiShader(go, tf) {

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
			if (nextShaderName == "None") {

				//..
			} else {

				shader.setShader(nextShaderName);
			}
			tf.setText(nextShaderName);
		})
	}
	addNoiseShader(go) {

		this.game.renderer.pipelines.add('Noise', new NoisePipeline(this.game)); // add
		this.noisePipeline = this.renderer.pipelines.get('Noise'); // get
		//this.noisePipeline.fractal = true;
		this.noisePipeline.scale = 22.0;
		go
			.setPipeline('Noise')
			.setInteractive()
			.on('pointerdown', function () {
				this.pipeline.fractal = !this.pipeline.fractal; // fractal switch
			});
		var f1 = this.datGui.addFolder('Noise - Satelite');
		f1.add(this.noisePipeline, 'scale', 4.0, 100.0);
		f1.add(this.noisePipeline, 'fractal', true, false);
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
