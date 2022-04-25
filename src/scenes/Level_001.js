
// You can write more code here

/* START OF COMPILED CODE */

class Level_001 extends Phaser.Scene {

	constructor() {
		super("Level_001");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// ellipse_2
		const ellipse_2 = this.add.ellipse(40, 133, 30, 30);
		ellipse_2.isFilled = true;
		ellipse_2.fillColor = 6828205;
		ellipse_2.isStroked = true;
		ellipse_2.strokeColor = 11173599;

		// layer_title
		const layer_title = this.add.layer();

		// linear_gradient_01_1
		const linear_gradient_01_1 = this.add.image(68, 119, "linear_gradient_01");
		linear_gradient_01_1.scaleX = 9.561243871939784;
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
		const text_1_1 = this.add.text(75, 134, "", {});
		text_1_1.setOrigin(0, 0.5);
		text_1_1.text = "Menu";
		text_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_1
		const text_1_1_1_1 = this.add.text(39, 133, "", {});
		text_1_1_1_1.setOrigin(0.5, 0.5);
		text_1_1_1_1.text = "0";
		text_1_1_1_1.setStyle({ "color": "#aa7edf", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// layer_shapes
		const layer_shapes = this.add.layer();

		// roundedrectangle_01
		const roundedrectangle_01 = this.add.roundedRectangle(67, 212, 100, 100);
		roundedrectangle_01.setOrigin(0, 0);
		roundedrectangle_01.fillColor = 1344078;
		roundedrectangle_01.isStroked = true;
		roundedrectangle_01.strokeColor = 714617;
		roundedrectangle_01.lineWidth = 2;
		roundedrectangle_01.radius = 20;
		roundedrectangle_01.isSingleRadius = false;
		roundedrectangle_01.radiusTL = 50;
		roundedrectangle_01.radiusTR = 10;
		roundedrectangle_01.radiusBL = 10;
		roundedrectangle_01.radiusBR = 50;
		roundedrectangle_01.shadowAlpha = 0;
		layer_shapes.add(roundedrectangle_01);

		// roundedrectangle_01_1
		const roundedrectangle_01_1 = this.add.roundedRectangle(209, 212, 200, 400);
		roundedrectangle_01_1.setOrigin(0, 0);
		roundedrectangle_01_1.fillColor = 8787382;
		roundedrectangle_01_1.isStroked = true;
		roundedrectangle_01_1.strokeColor = 15352060;
		roundedrectangle_01_1.lineWidth = 2;
		roundedrectangle_01_1.radius = 20;
		roundedrectangle_01_1.isSingleRadius = false;
		roundedrectangle_01_1.radiusTL = 50;
		roundedrectangle_01_1.radiusTR = 10;
		roundedrectangle_01_1.radiusBL = 10;
		roundedrectangle_01_1.radiusBR = 50;
		roundedrectangle_01_1.shadowAlpha = 0;
		layer_shapes.add(roundedrectangle_01_1);

		// roundedrectangle_01_1_1
		const roundedrectangle_01_1_1 = this.add.roundedRectangle(473, 209, 400, 40);
		roundedrectangle_01_1_1.setOrigin(0, 0);
		roundedrectangle_01_1_1.fillColor = 1854880;
		roundedrectangle_01_1_1.isStroked = true;
		roundedrectangle_01_1_1.strokeColor = 882644;
		roundedrectangle_01_1_1.lineWidth = 2;
		roundedrectangle_01_1_1.radius = 20;
		roundedrectangle_01_1_1.isSingleRadius = false;
		roundedrectangle_01_1_1.radiusTL = 24;
		roundedrectangle_01_1_1.radiusTR = 6;
		roundedrectangle_01_1_1.radiusBL = 6;
		roundedrectangle_01_1_1.radiusBR = 24;
		roundedrectangle_01_1_1.shadowAlpha = 0;
		layer_shapes.add(roundedrectangle_01_1_1);

		// roundedrectangle_01_1_2
		const roundedrectangle_01_1_2 = this.add.roundedRectangle(473, 275, 200, 100);
		roundedrectangle_01_1_2.setOrigin(0, 0);
		roundedrectangle_01_1_2.fillColor = 11804785;
		roundedrectangle_01_1_2.isStroked = true;
		roundedrectangle_01_1_2.strokeColor = 16357340;
		roundedrectangle_01_1_2.lineWidth = 2;
		roundedrectangle_01_1_2.radius = 20;
		roundedrectangle_01_1_2.isSingleRadius = false;
		roundedrectangle_01_1_2.radiusTL = 50;
		roundedrectangle_01_1_2.radiusTR = 10;
		roundedrectangle_01_1_2.radiusBL = 10;
		roundedrectangle_01_1_2.radiusBR = 50;
		roundedrectangle_01_1_2.shadowAlpha = 0;
		layer_shapes.add(roundedrectangle_01_1_2);

		// roundedrectangle_01_2
		const roundedrectangle_01_2 = this.add.roundedRectangle(69, 432, 100, 100);
		roundedrectangle_01_2.scaleY = -1;
		roundedrectangle_01_2.setOrigin(0, 0);
		roundedrectangle_01_2.fillColor = 1344078;
		roundedrectangle_01_2.isStroked = true;
		roundedrectangle_01_2.strokeColor = 714617;
		roundedrectangle_01_2.lineWidth = 2;
		roundedrectangle_01_2.radius = 20;
		roundedrectangle_01_2.isSingleRadius = false;
		roundedrectangle_01_2.radiusTL = 50;
		roundedrectangle_01_2.radiusTR = 10;
		roundedrectangle_01_2.radiusBL = 10;
		roundedrectangle_01_2.radiusBR = 50;
		roundedrectangle_01_2.shadowAlpha = 0;
		layer_shapes.add(roundedrectangle_01_2);

		// rectangle_01
		const rectangle_01 = this.add.rectangle(556, 477, 128, 128);
		rectangle_01.isFilled = true;
		rectangle_01.fillColor = 4022765;
		rectangle_01.isStroked = true;
		rectangle_01.strokeColor = 8501502;
		rectangle_01.lineWidth = 4;
		layer_shapes.add(rectangle_01);

		// ellipse_01
		const ellipse_01 = this.add.ellipse(729, 479, 128, 128);
		ellipse_01.isFilled = true;
		ellipse_01.fillColor = 14354954;
		ellipse_01.isStroked = true;
		ellipse_01.strokeColor = 16479862;
		ellipse_01.lineWidth = 3;
		layer_shapes.add(ellipse_01);

		// triangle_01
		const triangle_01 = this.add.triangle(899, 472, 0, 128, 64, 0, 128, 128);
		triangle_01.isFilled = true;
		triangle_01.fillColor = 974855;
		triangle_01.isStroked = true;
		triangle_01.strokeColor = 7995321;
		triangle_01.lineWidth = 3;
		layer_shapes.add(triangle_01);

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
		text_1_1_1_1_1.text = "Basic Shapes + RoundedRectangle Plugin";
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

		// text_1_1_1_1_1_1
		const text_1_1_1_1_1_1 = this.add.text(337, 643, "", {});
		text_1_1_1_1_1_1.setOrigin(0.5, 0.5);
		text_1_1_1_1_1_1.text = "TODO - Origin at center";
		text_1_1_1_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_top_bar.add(text_1_1_1_1_1_1);

		// text_1_1 (components)
		const text_1_1NavigateToScene = new NavigateToScene(text_1_1);
		text_1_1NavigateToScene.hitAreaScaleY = 2;

		// guapen (components)
		const guapenNavigateToURL = new NavigateToURL(guapen);
		guapenNavigateToURL.urlPath = "https://github.com/PhaserEditor2D";
		guapenNavigateToURL.hitAreaScaleX = 1.5;
		guapenNavigateToURL.hitAreaScaleY = 1.5;

		// dino (components)
		const dinoNavigateToURL = new NavigateToURL(dino);
		dinoNavigateToURL.folderName = "";
		dinoNavigateToURL.urlPath = "https://phasereditor2d.com";

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

		this.rectangle_01 = rectangle_01;
		this.ellipse_01 = ellipse_01;
		this.triangle_01 = triangle_01;
		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_01;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse_01;
	/** @type {Phaser.GameObjects.Triangle} */
	triangle_01;
	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;

	/* START-USER-CODE */

	// Write your code here
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
