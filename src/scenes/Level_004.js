
// You can write more code here

/* START OF COMPILED CODE */

class Level_004 extends Phaser.Scene {

	constructor() {
		super("Level_004");

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

		// text
		const text = this.add.text(39, 222, "", {});
		text.text = "DO";

		// text_1
		const text_1 = this.add.text(68, 517, "", {});
		text_1.text = "RE";

		// text_1_2
		const text_1_2 = this.add.text(329, 435, "", {});
		text_1_2.text = "MI";

		// text_1_2_1
		const text_1_2_1 = this.add.text(689, 351, "", {});
		text_1_2_1.text = "FA";

		// text_1_2_1_1
		const text_1_2_1_1 = this.add.text(875, 202, "", {});
		text_1_2_1_1.text = "SO";

		// text_1_2_1_1_1
		const text_1_2_1_1_1 = this.add.text(927, 306, "", {});
		text_1_2_1_1_1.text = "LA";

		// text_1_2_1_1_1_1
		const text_1_2_1_1_1_1 = this.add.text(868, 456, "", {});
		text_1_2_1_1_1_1.text = "SI";

		// guapen_1_1
		const guapen_1_1 = this.add.image(944, 495, "guapen");
		guapen_1_1.scaleX = 0.5;
		guapen_1_1.scaleY = 0.5;

		// guapen_1_1_1
		const guapen_1_1_1 = this.add.image(426, 525, "guapen");

		// guapen_1_1_1_1
		const guapen_1_1_1_1 = this.add.image(133, 315, "guapen");

		// guapen_1_1_1_2
		const guapen_1_1_1_2 = this.add.image(79, 501, "guapen");
		guapen_1_1_1_2.scaleX = 0.5;
		guapen_1_1_1_2.scaleY = 0.5;
		guapen_1_1_1_2.setOrigin(0, 0);

		// dino_1_1
		const dino_1_1 = this.add.image(731, 416, "dino");
		dino_1_1.scaleX = 0.5;
		dino_1_1.scaleY = 0.5;

		// guapen_1
		const guapen_1 = this.add.image(916, 349, "guapen");
		guapen_1.scaleX = 0.2;
		guapen_1.scaleY = 0.2;

		// dino_1
		const dino_1 = this.add.image(912.4852723802405, 236.7102230070672, "dino");
		dino_1.scaleX = 0.2;
		dino_1.scaleY = 0.2;

		// dino_1_1_1
		const dino_1_1_1 = this.add.image(783, 131, "dino");
		dino_1_1_1.scaleX = 0.5;
		dino_1_1_1.scaleY = 0.5;
		dino_1_1_1.setOrigin(1, 0);

		// dino_1_1_1_1
		const dino_1_1_1_1 = this.add.image(665, 599, "dino");
		dino_1_1_1_1.scaleX = 0.5;
		dino_1_1_1_1.scaleY = 0.5;
		dino_1_1_1_1.setOrigin(0, 0);

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
		text_1_1_1_1_1.text = "Click - Touch - Hit Area";
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

		// text_1_1 (components)
		const text_1_1NavigateToScene = new NavigateToScene(text_1_1);
		text_1_1NavigateToScene.hitAreaScaleY = 1.5;

		// guapen_1_1 (components)
		const guapen_1_1ComponentBase = new ComponentBase(guapen_1_1);
		guapen_1_1ComponentBase.instanceName = "img_si";
		const guapen_1_1ClickButton = new ClickButton(guapen_1_1);
		guapen_1_1ClickButton.hitAreaScaleY = 1.6;
		guapen_1_1ClickButton.actionName = "click-on-image";

		// guapen_1_1_1 (components)
		const guapen_1_1_1ComponentBase = new ComponentBase(guapen_1_1_1);
		guapen_1_1_1ComponentBase.instanceName = "img_mi";
		const guapen_1_1_1ClickButton = new ClickButton(guapen_1_1_1);
		guapen_1_1_1ClickButton.hitAreaScaleY = 1.5;
		guapen_1_1_1ClickButton.actionName = "click-on-image";

		// guapen_1_1_1_1 (components)
		const guapen_1_1_1_1ComponentBase = new ComponentBase(guapen_1_1_1_1);
		guapen_1_1_1_1ComponentBase.instanceName = "img_do";
		const guapen_1_1_1_1ClickButton = new ClickButton(guapen_1_1_1_1);
		guapen_1_1_1_1ClickButton.actionName = "click-on-image";

		// guapen_1_1_1_2 (components)
		const guapen_1_1_1_2ComponentBase = new ComponentBase(guapen_1_1_1_2);
		guapen_1_1_1_2ComponentBase.instanceName = "img_re";
		const guapen_1_1_1_2ClickButton = new ClickButton(guapen_1_1_1_2);
		guapen_1_1_1_2ClickButton.hitAreaScaleX = 2;
		guapen_1_1_1_2ClickButton.actionName = "click-on-image";

		// dino_1_1 (components)
		const dino_1_1ComponentBase = new ComponentBase(dino_1_1);
		dino_1_1ComponentBase.instanceName = "img_fa";
		const dino_1_1ClickButton = new ClickButton(dino_1_1);
		dino_1_1ClickButton.hitAreaScaleX = 2;
		dino_1_1ClickButton.hitAreaScaleY = 2;
		dino_1_1ClickButton.actionName = "click-on-image";

		// guapen_1 (components)
		const guapen_1ComponentBase = new ComponentBase(guapen_1);
		guapen_1ComponentBase.instanceName = "img_la";
		const guapen_1ClickButton = new ClickButton(guapen_1);
		guapen_1ClickButton.hitAreaScaleX = 1.5;
		guapen_1ClickButton.hitAreaScaleY = 1.5;
		guapen_1ClickButton.actionName = "click-on-image";

		// dino_1 (components)
		const dino_1ComponentBase = new ComponentBase(dino_1);
		dino_1ComponentBase.instanceName = "img_so";
		const dino_1ClickButton = new ClickButton(dino_1);
		dino_1ClickButton.hitAreaScaleX = 2;
		dino_1ClickButton.hitAreaScaleY = 2;
		dino_1ClickButton.actionName = "click-on-image";

		// dino_1_1_1 (components)
		const dino_1_1_1ComponentBase = new ComponentBase(dino_1_1_1);
		dino_1_1_1ComponentBase.instanceName = "img_fa1";
		const dino_1_1_1ClickButton = new ClickButton(dino_1_1_1);
		dino_1_1_1ClickButton.hitAreaScaleX = 1.2;
		dino_1_1_1ClickButton.hitAreaScaleY = 1.2;
		dino_1_1_1ClickButton.actionName = "click-on-image";

		// dino_1_1_1_1 (components)
		const dino_1_1_1_1ComponentBase = new ComponentBase(dino_1_1_1_1);
		dino_1_1_1_1ComponentBase.instanceName = "img_fa2";
		const dino_1_1_1_1ClickButton = new ClickButton(dino_1_1_1_1);
		dino_1_1_1_1ClickButton.hitAreaScaleX = 1.5;
		dino_1_1_1_1ClickButton.hitAreaScaleY = 1.5;
		dino_1_1_1_1ClickButton.actionName = "click-on-image";

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
		this.enableDebug(true);
		this.editorCreate();
		this.registerEvents();
		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.unregisterEvents();
			this.enableDebug(false);
		})
		Ctrace(this.scene.key + " > create > DONE!");
	}
	unregisterEvents(){

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > unregisterEvents > ...");
		this.events.off("button-action-clicked");
	}
	registerEvents(){

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > registerEvents > ...");	
		this.events.on("button-action-clicked", this.buttonActionClicked, this);

	}
	buttonActionClicked(go, action){

		// Ctrace("Level > buttonActionClicked > button:{0} action:{1}", go.instanceName, action);
        switch (action){

			case "click-on-image":
				Ctrace("Level > buttonActionClicked > button:{0} scale:[{1}, {2}]", go.instanceName, 
					Orien.Math.roundToDecimals(go.scaleX, 3), Orien.Math.roundToDecimals(go.scaleY, 3)
				);
			break;
		}
    }
	/** @param {boolean} state */
	enableDebug(state){

		DebugSettings.showArea = state;
		DebugSettings.showHitArea = state;
		DebugSettings.showOrigin = state;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
