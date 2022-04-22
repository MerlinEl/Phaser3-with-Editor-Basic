
// You can write more code here

/* START OF COMPILED CODE */

class Level_009 extends Phaser.Scene {

	constructor() {
		super("Level_009");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("level-009-asset-pack", "assets/level-009-asset-pack.json");
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
		text_1_1_1_1_1.text = "Guide Animations and Sounds";
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

		// guide_kvitek_001
		const guide_kvitek_001 = new Guide_Kvitek_001(this, 503, 374);
		this.add.existing(guide_kvitek_001);

		// btn_01
		const btn_01 = this.add.container(148, 574);

		// ellipse_01
		const ellipse_01 = this.add.ellipse(2, -1, 140, 80);
		ellipse_01.isFilled = true;
		ellipse_01.fillColor = 13970407;
		ellipse_01.isStroked = true;
		ellipse_01.lineWidth = 2;
		btn_01.add(ellipse_01);

		// text_01
		const text_01 = this.add.text(3, 2, "", {});
		text_01.setOrigin(0.5, 0.5);
		text_01.text = "Yes";
		text_01.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_01.add(text_01);

		// btn_02
		const btn_02 = this.add.container(328, 597);

		// ellipse_02
		const ellipse_02 = this.add.ellipse(0, -1, 140, 80);
		ellipse_02.isFilled = true;
		ellipse_02.fillColor = 13970407;
		ellipse_02.isStroked = true;
		ellipse_02.lineWidth = 2;
		btn_02.add(ellipse_02);

		// text_02
		const text_02 = this.add.text(1, 2, "", {});
		text_02.setOrigin(0.5, 0.5);
		text_02.text = "No";
		text_02.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_02.add(text_02);

		// btn_03
		const btn_03 = this.add.container(508, 563);

		// ellipse_03
		const ellipse_03 = this.add.ellipse(0, -1, 140, 80);
		ellipse_03.isFilled = true;
		ellipse_03.fillColor = 13970407;
		ellipse_03.isStroked = true;
		ellipse_03.lineWidth = 2;
		btn_03.add(ellipse_03);

		// text_03
		const text_03 = this.add.text(1, 2, "", {});
		text_03.setOrigin(0.5, 0.5);
		text_03.text = "Done";
		text_03.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_03.add(text_03);

		// btn_04
		const btn_04 = this.add.container(688, 602);

		// ellipse_04
		const ellipse_04 = this.add.ellipse(0, -1, 140, 80);
		ellipse_04.isFilled = true;
		ellipse_04.fillColor = 13970407;
		ellipse_04.isStroked = true;
		ellipse_04.lineWidth = 2;
		btn_04.add(ellipse_04);

		// text_04
		const text_04 = this.add.text(1, 2, "", {});
		text_04.setOrigin(0.5, 0.5);
		text_04.text = "Bonus";
		text_04.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_04.add(text_04);

		// btn_05
		const btn_05 = this.add.container(859, 590);

		// ellipse_05
		const ellipse_05 = this.add.ellipse(0, -1, 140, 80);
		ellipse_05.isFilled = true;
		ellipse_05.fillColor = 13970407;
		ellipse_05.isStroked = true;
		ellipse_05.lineWidth = 2;
		btn_05.add(ellipse_05);

		// text_05
		const text_05 = this.add.text(1, 2, "", {});
		text_05.setOrigin(0.5, 0.5);
		text_05.text = "Idle";
		text_05.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_05.add(text_05);

		// text_1_1 (components)
		const text_1_1NavigateToScene = new NavigateToScene(text_1_1);
		text_1_1NavigateToScene.hitAreaScaleY = 1.5;

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

		// btn_01 (components)
		const btn_01ComponentBase = new ComponentBase(btn_01);
		btn_01ComponentBase.instanceName = "btn_01_good";
		btn_01ComponentBase.componentType = "Container";
		const btn_01ClickButton = new ClickButton(btn_01);
		btn_01ClickButton.actionName = "guide-play-action";

		// btn_02 (components)
		const btn_02ComponentBase = new ComponentBase(btn_02);
		btn_02ComponentBase.instanceName = "btn_02_bad";
		btn_02ComponentBase.componentType = "Container";
		const btn_02ClickButton = new ClickButton(btn_02);
		btn_02ClickButton.actionName = "guide-play-action";

		// btn_03 (components)
		const btn_03ComponentBase = new ComponentBase(btn_03);
		btn_03ComponentBase.instanceName = "btn_03_done";
		btn_03ComponentBase.componentType = "Container";
		const btn_03ClickButton = new ClickButton(btn_03);
		btn_03ClickButton.actionName = "guide-play-action";

		// btn_04 (components)
		const btn_04ComponentBase = new ComponentBase(btn_04);
		btn_04ComponentBase.instanceName = "btn_04_bonus";
		btn_04ComponentBase.componentType = "Container";
		const btn_04ClickButton = new ClickButton(btn_04);
		btn_04ClickButton.actionName = "guide-play-action";

		// btn_05 (components)
		const btn_05ComponentBase = new ComponentBase(btn_05);
		btn_05ComponentBase.instanceName = "btn_05_idle";
		btn_05ComponentBase.componentType = "Container";
		const btn_05ClickButton = new ClickButton(btn_05);
		btn_05ClickButton.actionName = "guide-play-action";

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;
		this.guide_kvitek_001 = guide_kvitek_001;

		this.events.emit("scene-awake");
	}

	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;
	/** @type {Guide_Kvitek_001} */
	guide_kvitek_001;

	/* START-USER-CODE */
	preload() {

		SceneManager.registerPreloader(this);
		this.editorPreload();
	}
	create() {

		Ctrace(this.scene.key + " > create > START!");
		this.editorCreate();
		this.registerEvents();
		var soundNames = [
			"snd_hello", "snd_yes_a", "snd_yes_b", "snd_yes_c", 
			"snd_done", "snd_no_a", "snd_no_b", "snd_no_c",
			"snd_bonus", "snd_fixed", "snd_yes", "snd_no" 
		];
		AudioManager.createLibrary(this.sound, soundNames);
		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.unregisterEvents();
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
		var guide = this.guide_kvitek_001;
        switch (action){

			case "guide-play-action":
				Ctrace("Level > buttonActionClicked > button:{0}", go.instanceName);
				var animName = go.instanceName.split("_").pop();
				guide.playAction(animName);
			break;
		}
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
