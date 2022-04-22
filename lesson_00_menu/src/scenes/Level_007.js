
// You can write more code here

/* START OF COMPILED CODE */

class Level_007 extends Phaser.Scene {

	constructor() {
		super("Level_007");

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
		const satelit_01 = this.add.image(189, 269, "satelit 01");
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

		// star_01
		const star_01 = this.add.image(813, 652, "star_01");

		// star_01_1
		const star_01_1 = this.add.image(251, 501, "star_01");
		star_01_1.scaleX = 0.2;
		star_01_1.scaleY = 0.2;

		// star_01_1_1
		const star_01_1_1 = this.add.image(129, 481, "star_01");
		star_01_1_1.scaleX = 0.6;
		star_01_1_1.scaleY = 0.6;

		// star_01_1_2
		const star_01_1_2 = this.add.image(948, 578, "star_01");
		star_01_1_2.scaleX = 0.3;
		star_01_1_2.scaleY = 0.3;

		// star_01_1_3
		const star_01_1_3 = this.add.image(74, 455, "star_01");
		star_01_1_3.scaleX = 0.3;
		star_01_1_3.scaleY = 0.3;

		// star_01_1_2_1
		const star_01_1_2_1 = this.add.image(868, 464, "star_01");
		star_01_1_2_1.scaleX = 0.3;
		star_01_1_2_1.scaleY = 0.3;

		// star_01_1_4
		const star_01_1_4 = this.add.image(704, 532, "star_01");
		star_01_1_4.scaleX = 0.2;
		star_01_1_4.scaleY = 0.2;

		// text_113_1_1_2_1_3
		const text_113_1_1_2_1_3 = this.add.text(334, 752, "", {});
		text_113_1_1_2_1_3.setOrigin(0, 0.5);
		text_113_1_1_2_1_3.text = "Filters:";
		text_113_1_1_2_1_3.setStyle({ "color": "#3f89e0ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_1
		const text_113_1_1_2_1_3_1 = this.add.text(419, 752, "", {});
		text_113_1_1_2_1_3_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_1.text = "Preview";
		text_113_1_1_2_1_3_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_1_1
		const text_113_1_1_2_1_3_1_1 = this.add.text(540, 752, "", {});
		text_113_1_1_2_1_3_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_1_1.text = "Api Doc";
		text_113_1_1_2_1_3_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2
		const text_113_1_1_2_1_3_2 = this.add.text(662, 752, "", {});
		text_113_1_1_2_1_3_2.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2.text = "Source";
		text_113_1_1_2_1_3_2.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2_1
		const text_113_1_1_2_1_3_2_1 = this.add.text(109, 752, "", {});
		text_113_1_1_2_1_3_2_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1.text = "PixiJS: ";
		text_113_1_1_2_1_3_2_1.setStyle({ "color": "#3f89e0ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2_2
		const text_113_1_1_2_1_3_2_2 = this.add.text(214, 752, "", {});
		text_113_1_1_2_1_3_2_2.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_2.text = "Source";
		text_113_1_1_2_1_3_2_2.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2_1_1
		const text_113_1_1_2_1_3_2_1_1 = this.add.text(108, 724, "", {});
		text_113_1_1_2_1_3_2_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1.text = "Phaser 3:";
		text_113_1_1_2_1_3_2_1_1.setStyle({ "color": "#3f89e0ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2_1_1_1
		const text_113_1_1_2_1_3_2_1_1_1 = this.add.text(214, 724, "", {});
		text_113_1_1_2_1_3_2_1_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_1.text = "Pipleines";
		text_113_1_1_2_1_3_2_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2_1_1_2
		const text_113_1_1_2_1_3_2_1_1_2 = this.add.text(195, 340, "", {});
		text_113_1_1_2_1_3_2_1_1_2.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_2.text = "glow rex";
		text_113_1_1_2_1_3_2_1_1_2.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_113_1_1_2_1_3_2_1_1_2_1
		const text_113_1_1_2_1_3_2_1_1_2_1 = this.add.text(678, 400, "", {});
		text_113_1_1_2_1_3_2_1_1_2_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_2_1.text = "drop shadow";
		text_113_1_1_2_1_3_2_1_1_2_1.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_113_1_1_2_1_3_2_1_1_2_1_1
		const text_113_1_1_2_1_3_2_1_1_2_1_1 = this.add.text(743, 561, "", {});
		text_113_1_1_2_1_3_2_1_1_2_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_2_1_1.text = "mouse over glow";
		text_113_1_1_2_1_3_2_1_1_2_1_1.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_113_1_1_2_1_3_2_1_1_2_2
		const text_113_1_1_2_1_3_2_1_1_2_2 = this.add.text(374, 657, "", {});
		text_113_1_1_2_1_3_2_1_1_2_2.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_2_2.text = "outline + mouse over glow";
		text_113_1_1_2_1_3_2_1_1_2_2.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_113_1_1_2_1_3_2_1_1_1_1
		const text_113_1_1_2_1_3_2_1_1_1_1 = this.add.text(479, 724, "", {});
		text_113_1_1_2_1_3_2_1_1_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_1_1.text = "Demos";
		text_113_1_1_2_1_3_2_1_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_113_1_1_2_1_3_2_1_1_1_1_1
		const text_113_1_1_2_1_3_2_1_1_1_1_1 = this.add.text(335, 724, "", {});
		text_113_1_1_2_1_3_2_1_1_1_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_1_1_1.text = "Plugin list";
		text_113_1_1_2_1_3_2_1_1_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text
		const text = this.add.text(63, 528, "", {});
		text.setOrigin(0, 0.5);
		text.text = "mouse over outline";
		text.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// star
		const star = this.add.image(222, 571, "star_01");
		star.scaleX = 0.3431623589839018;
		star.scaleY = 0.3431623589839018;

		// star_1
		const star_1 = this.add.image(63, 584, "star_01");
		star_1.scaleX = 0.4662234039966859;
		star_1.scaleY = 0.4662234039966859;

		// star_2
		const star_2 = this.add.image(215, 470, "star_01");
		star_2.scaleX = 0.3;
		star_2.scaleY = 0.3;

		// moon_01
		const moon_01 = this.add.ellipse(489, 180, 40, 40);
		moon_01.isFilled = true;
		moon_01.fillColor = 14023416;
		moon_01.isStroked = true;
		moon_01.strokeColor = 16448974;
		moon_01.strokeAlpha = 2;

		// text_1
		const text_1 = this.add.text(449, 221, "", {});
		text_1.setOrigin(0, 0.5);
		text_1.text = "glow pixi";
		text_1.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// lists
		const stars_02 = [star_01_1_2, star_01, star_01_1_4, star_01_1_2_1];
		const stars_01 = [star_01_1_1, star_01_1, star_01_1_3, star_2, star, star_1];

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

		// text_113_1_1_2_1_3_1 (components)
		const text_113_1_1_2_1_3_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_1);
		text_113_1_1_2_1_3_1NavigateToURL.folderName = "";
		text_113_1_1_2_1_3_1NavigateToURL.urlPath = "https://filters.pixijs.download/main/demo/index.html";
		text_113_1_1_2_1_3_1NavigateToURL.hitAreaScaleY = 2;

		// text_113_1_1_2_1_3_1_1 (components)
		const text_113_1_1_2_1_3_1_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_1_1);
		text_113_1_1_2_1_3_1_1NavigateToURL.folderName = "";
		text_113_1_1_2_1_3_1_1NavigateToURL.urlPath = "https://filters.pixijs.download/main/demo/index.html";

		// text_113_1_1_2_1_3_2 (components)
		const text_113_1_1_2_1_3_2NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2);
		text_113_1_1_2_1_3_2NavigateToURL.folderName = "";
		text_113_1_1_2_1_3_2NavigateToURL.urlPath = "https://github.com/pixijs/filters";
		text_113_1_1_2_1_3_2NavigateToURL.hitAreaScaleY = 2;

		// text_113_1_1_2_1_3_2_2 (components)
		const text_113_1_1_2_1_3_2_2NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2_2);
		text_113_1_1_2_1_3_2_2NavigateToURL.folderName = "";
		text_113_1_1_2_1_3_2_2NavigateToURL.urlPath = "https://github.com/pixijs/pixijs";
		text_113_1_1_2_1_3_2_2NavigateToURL.hitAreaScaleY = 2;

		// text_113_1_1_2_1_3_2_1_1_1 (components)
		const text_113_1_1_2_1_3_2_1_1_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2_1_1_1);
		text_113_1_1_2_1_3_2_1_1_1NavigateToURL.urlPath = "https://github.com/rexrainbow/phaser3-rex-notes/tree/master/dist";
		text_113_1_1_2_1_3_2_1_1_1NavigateToURL.hitAreaScaleY = 2;

		// text_113_1_1_2_1_3_2_1_1_1_1 (components)
		const text_113_1_1_2_1_3_2_1_1_1_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2_1_1_1_1);
		text_113_1_1_2_1_3_2_1_1_1_1NavigateToURL.urlPath = "https://codepen.io/rexrainbow/pens/public";
		text_113_1_1_2_1_3_2_1_1_1_1NavigateToURL.hitAreaScaleY = 2;

		// text_113_1_1_2_1_3_2_1_1_1_1_1 (components)
		const text_113_1_1_2_1_3_2_1_1_1_1_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2_1_1_1_1_1);
		text_113_1_1_2_1_3_2_1_1_1_1_1NavigateToURL.urlPath = "https://rexrainbow.github.io/phaser3-rex-notes/docs/site/plugin-list/";
		text_113_1_1_2_1_3_2_1_1_1_1_1NavigateToURL.hitAreaScaleY = 2;

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;
		this.satelit_02 = satelit_02;
		this.satelit_01 = satelit_01;
		this.ufo_01 = ufo_01;
		this.moon_01 = moon_01;
		this.stars_02 = stars_02;
		this.stars_01 = stars_01;

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
	/** @type {Phaser.GameObjects.Ellipse} */
	moon_01;
	/** @type {Phaser.GameObjects.Image[]} */
	stars_02;
	/** @type {Phaser.GameObjects.Image[]} */
	stars_01;

	/* START-USER-CODE */
	preload() {

		SceneManager.registerPreloader(this);
		this.editorPreload();
	}
	create() {

		Ctrace(this.scene.key + " > create > START!");
		this.editorCreate();
		this.registerEvents();
		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.unregisterEvents();
		})
		this.initComponets();
		Ctrace(this.scene.key + " > create > DONE!");
	}
	initComponets(){

		//import { GUI } from 'dat.gui'

		this.datGui = new dat.GUI({ autoPlace: false });
		// Manual GUI position
		document.getElementById('gui-container').appendChild(this.datGui.domElement);
		this.datGui.close();


		this.addShadowFilter(this.satelit_02);
		this.addGlowFilter(this.satelit_01);
		this.addGlowFilter2(this.moon_01);
		this.addGlowFilters(this.stars_02);
		this.addOutlineFilters(this.stars_01);

		// add outline filter
		// another way https://github.com/pixijs/filters/blob/main/filters/outline/src/OutlineFilter.ts
		var outlinePipeline = this.addOutlineFilter(this.ufo_01);
		// add glow filter
		var glowPipeline = this.addGlowFilter3(this.ufo_01);
		var hilightTween = this.tweens.add({
            targets: glowPipeline,
			alpha:1,
            duration: 1000,
            yoyo: true,
            repeat: -1,
            ease: "Power2",// "Sine.easeInOut"
			paused:true
        });

		// change pointer on mouse ower
		this.ufo_01.setInteractive({ cursor: 'url(assets/cursors/SmoothHand.cur), pointer' })
		.on("pointerover", ()=>{
			this.ufo_01.setTint(0xff8bff);
			this.ufo_01.setScale(this.ufo_01.scaleX + 0.01);
			outlinePipeline.outlineColor = 0xff8888;
			hilightTween.play();
			// this.glowPipeline = this.addGlowFilter3(this.ufo_01);

		})
		.on("pointerout", ()=>{
			this.ufo_01.clearTint();
			this.ufo_01.setScale(this.ufo_01.scaleX - 0.01);
			outlinePipeline.outlineColor = Phaser.Display.Color.GetColor(23, 238, 216);
			hilightTween.stop();
			hilightTween.restart();
			//this.glowPipeline.remove(this.ufo_01);
		})
	}
	addGlowFilter3(go){

		var postFxPlugin = this.plugins.get('glowpipelineplugin');
		var postFxPipeline = postFxPlugin
		.add(go, {
			blur: 8,
			alpha: 0,
			glowColor: Phaser.Display.Color.GetColor(255, 184, 0),
			pixelWidth : 1,
			pixelHeight : 1
		});

		var f1 = this.datGui.addFolder('Glow - UFO');
		f1.addColor(postFxPipeline, 'glowColor');
		f1.add(postFxPipeline, 'alpha', 0, 1);
		f1.add(postFxPipeline, 'blur', 0, 30);
		f1.add(postFxPipeline, 'pixelWidth', 0, 20);
		f1.add(postFxPipeline, 'pixelHeight', 0, 20);

		return postFxPipeline;
	}
	addGlowFilter2(go){

        var postFxPlugin = this.plugins.get('rexglowfilter2pipelineplugin');
		var postFxPipeline = postFxPlugin
			.add(go, {
				outerStrength: 3,
				innerStrength: 3,
				glowColor: Phaser.Display.Color.GetColor(32,217,242)
			});

		var f1 = this.datGui.addFolder('Glow - Moon');
        f1.add(postFxPipeline, 'outerStrength', 0, 10);
		f1.add(postFxPipeline, 'innerStrength', 0, 10);
		f1.addColor(postFxPipeline, 'glowColor');
		// f1.add(postFxPipeline, 'quality', 0.1, 1);
		// f1.open();
// postFxPlugin.setQuality(0.5);
// scene.plugins.get('rexOutlinePipeline').remove(gameObject);


		// quality : 0 ~ 1, default is 0.1.
		// 0.1 : 10 sample points.
		// 0.08 : 8 sample points.
		// 1 : 100 sample points.
	}
	addOutlineFilters(goArray){

		var postFxPlugin = this.plugins.get('rexoutlinepipelineplugin');
		goArray.forEach( go => {

            go
			.setInteractive()
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
        })
	}
	addOutlineFilter(go){

        var postFxPlugin = this.plugins.get('rexoutlinepipelineplugin');
        var postFxPipeline = postFxPlugin
            .add(go, {
                thickness: 2.4,
				// quality: 0.1,
                outlineColor: Phaser.Display.Color.GetColor(23, 238, 216)
            });

		var f1 = this.datGui.addFolder('Outline - UFO');
        f1.add(postFxPipeline, 'thickness', 1, 10);
        // f1.add(postFxPipeline, 'quality', 0.1, 1);
        f1.addColor(postFxPipeline, 'outlineColor');
		return postFxPipeline;
	}
	addShadowFilter(go){

        var postFxPlugin = this.plugins.get('rexdropshadowpipelineplugin');
        var postFxPipeline = postFxPlugin
            .add(go, {
                distance: 21,
                angle: -23,
                shadowColor: Phaser.Display.Color.GetColor(9, 9, 42),
                alpha: 0.6
            });

		var f1 = this.datGui.addFolder('Drop Shadow Right Satelite');
        f1.add(postFxPipeline, 'distance', 0, 30);
        f1.add(postFxPipeline, 'angle', -360, 360);
        f1.addColor(postFxPipeline, 'shadowColor');
        f1.add(postFxPipeline, 'alpha', 0, 1);
        f1.add(postFxPipeline, 'blur', 0, 30);
        f1.add(postFxPipeline, 'pixelWidth', 0, 20);
        f1.add(postFxPipeline, 'pixelHeight', 0, 20);
		// f1.open();
	}
	addGlowFilter(go){

        var postFxPlugin = this.plugins.get('rexglowfilterpipelineplugin');
		var postFxPipeline = postFxPlugin
			.add(go, {
				intensity: 0.05,
			});

		var f1 = this.datGui.addFolder('Glow - Left Satelite');
        f1.add(postFxPipeline, 'intensity', 0, 0.1);
		// f1.open();	
	}
	addGlowFilters(goArray){

        var postFxPlugin = this.plugins.get('rexglowfilterpipelineplugin');
		var postFxPipeline;
        goArray.forEach( go => {

            go
			.setInteractive()
			.on('pointerover', function () {
				// Add postfx pipeline
				postFxPipeline = postFxPlugin.add(go);

				go.glowTask = go.scene.tweens.add({
					targets: postFxPipeline,
					intensity: 0.02,
					ease: 'Linear',
					duration: Phaser.Math.Between(500, 1000),
					repeat: -1,
					yoyo: true
				});
			})
			.on('pointerout', function () {
				// Remove postfx pipeline
				postFxPlugin.remove(go);
				go.glowTask.stop();
				go.glowTask = null;
			})
        })
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
