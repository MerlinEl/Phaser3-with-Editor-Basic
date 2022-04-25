
// You can write more code here

/* START OF COMPILED CODE */

class Level_012 extends Phaser.Scene {

	constructor() {
		super("Level_012");

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
		text_1_1_1_1_1.text = "Bonus Animation - Path Editor 2";
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
		const guide_kvitek_001 = new Guide_Kvitek_001(this, 814, 289);
		this.add.existing(guide_kvitek_001);

		// layer_all_dots
		const layer_all_dots = this.add.layer();

		// dot_01
		const dot_01 = new Dot(this, 762, 319);
		layer_all_dots.add(dot_01);

		// dot_02
		const dot_02 = new Dot(this, 635, 408);
		layer_all_dots.add(dot_02);

		// dot_03
		const dot_03 = new Dot(this, 444, 245);
		layer_all_dots.add(dot_03);

		// dot_04
		const dot_04 = new Dot(this, 196, 379);
		layer_all_dots.add(dot_04);

		// dot_05
		const dot_05 = new Dot(this, 477, 519);
		layer_all_dots.add(dot_05);

		// btn_01
		const btn_01 = this.add.container(712, 672);

		// ellipse_01
		const ellipse_01 = this.add.ellipse(0, -1, 140, 80);
		ellipse_01.isFilled = true;
		ellipse_01.fillColor = 13970407;
		ellipse_01.isStroked = true;
		ellipse_01.lineWidth = 2;
		btn_01.add(ellipse_01);

		// text_01
		const text_01 = this.add.text(1, 2, "", {});
		text_01.setOrigin(0.5, 0.5);
		text_01.text = "Save";
		text_01.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_01.add(text_01);

		// btn_02
		const btn_02 = this.add.container(522, 672);

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
		text_02.text = "Load";
		text_02.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_02.add(text_02);

		// btn_03
		const btn_03 = this.add.container(332, 672);

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
		text_03.text = "Print";
		text_03.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_03.add(text_03);

		// btn_04
		const btn_04 = this.add.container(142, 672);

		// ellipse_04
		const ellipse_04 = this.add.ellipse(-1, -4, 140, 80);
		ellipse_04.isFilled = true;
		ellipse_04.fillColor = 13970407;
		ellipse_04.isStroked = true;
		ellipse_04.lineWidth = 2;
		btn_04.add(ellipse_04);

		// text_04
		const text_04 = this.add.text(0, -1, "", {});
		text_04.setOrigin(0.5, 0.5);
		text_04.text = "Play";
		text_04.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_04.add(text_04);

		// btn_05
		const btn_05 = this.add.container(905, 673);

		// ellipse_05
		const ellipse_05 = this.add.ellipse(-1, -4, 140, 80);
		ellipse_05.isFilled = true;
		ellipse_05.fillColor = 13970407;
		ellipse_05.isStroked = true;
		ellipse_05.lineWidth = 2;
		btn_05.add(ellipse_05);

		// text_05
		const text_05 = this.add.text(0, -1, "", {});
		text_05.setOrigin(0.5, 0.5);
		text_05.text = "Edit";
		text_05.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_05.add(text_05);

		// bonus_01
		const bonus_01 = new Bonus_01(this, 816, 152);
		this.add.existing(bonus_01);
		bonus_01.scaleX = 0.2;
		bonus_01.scaleY = 0.2;
		bonus_01.angle = 0;

		// satelit_01_tf
		const satelit_01_tf = this.add.text(522, 735, "", {});
		satelit_01_tf.setOrigin(0, 0.5);
		satelit_01_tf.text = "Save - Load and Edit works only at Local Server";
		satelit_01_tf.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

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

		// dot_01 (components)
		const dot_01ComponentBase = new ComponentBase(dot_01);
		dot_01ComponentBase.instanceName = "dot_01";
		dot_01ComponentBase.componentType = "Container";
		new DragAndDrop(dot_01);

		// dot_02 (components)
		const dot_02ComponentBase = new ComponentBase(dot_02);
		dot_02ComponentBase.instanceName = "dot_02";
		dot_02ComponentBase.componentType = "Container";
		new DragAndDrop(dot_02);

		// dot_03 (components)
		const dot_03ComponentBase = new ComponentBase(dot_03);
		dot_03ComponentBase.instanceName = "dot_03";
		dot_03ComponentBase.componentType = "Container";
		new DragAndDrop(dot_03);

		// dot_04 (components)
		const dot_04ComponentBase = new ComponentBase(dot_04);
		dot_04ComponentBase.instanceName = "dot_04";
		dot_04ComponentBase.componentType = "Container";
		new DragAndDrop(dot_04);

		// dot_05 (components)
		const dot_05ComponentBase = new ComponentBase(dot_05);
		dot_05ComponentBase.instanceName = "dot_05";
		dot_05ComponentBase.componentType = "Container";
		new DragAndDrop(dot_05);

		// btn_01 (components)
		const btn_01ComponentBase = new ComponentBase(btn_01);
		btn_01ComponentBase.instanceName = "btn_04_bonus";
		btn_01ComponentBase.componentType = "Container";
		const btn_01ClickButton = new ClickButton(btn_01);
		btn_01ClickButton.actionName = "spline-save-data";

		// btn_02 (components)
		const btn_02ComponentBase = new ComponentBase(btn_02);
		btn_02ComponentBase.instanceName = "btn_04_bonus";
		btn_02ComponentBase.componentType = "Container";
		const btn_02ClickButton = new ClickButton(btn_02);
		btn_02ClickButton.actionName = "spline-load-data";

		// btn_03 (components)
		const btn_03ComponentBase = new ComponentBase(btn_03);
		btn_03ComponentBase.instanceName = "btn_04_bonus";
		btn_03ComponentBase.componentType = "Container";
		const btn_03ClickButton = new ClickButton(btn_03);
		btn_03ClickButton.actionName = "spline-print-data";

		// btn_04 (components)
		const btn_04ComponentBase = new ComponentBase(btn_04);
		btn_04ComponentBase.instanceName = "btn_04_bonus";
		btn_04ComponentBase.componentType = "Container";
		const btn_04ClickButton = new ClickButton(btn_04);
		btn_04ClickButton.actionName = "guide-play-action";

		// btn_05 (components)
		const btn_05ComponentBase = new ComponentBase(btn_05);
		btn_05ComponentBase.instanceName = "btn_04_bonus";
		btn_05ComponentBase.componentType = "Container";
		const btn_05ClickButton = new ClickButton(btn_05);
		btn_05ClickButton.actionName = "bonus-edit-switch";

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;
		this.guide_kvitek_001 = guide_kvitek_001;
		this.layer_all_dots = layer_all_dots;
		this.text_04 = text_04;
		this.text_05 = text_05;
		this.bonus_01 = bonus_01;
		this.satelit_01_tf = satelit_01_tf;

		this.events.emit("scene-awake");
	}

	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;
	/** @type {Guide_Kvitek_001} */
	guide_kvitek_001;
	/** @type {Phaser.GameObjects.Layer} */
	layer_all_dots;
	/** @type {Phaser.GameObjects.Text} */
	text_04;
	/** @type {Phaser.GameObjects.Text} */
	text_05;
	/** @type {Bonus_01} */
	bonus_01;
	/** @type {Phaser.GameObjects.Text} */
	satelit_01_tf;

	/* START-USER-CODE */
	preload() {

		SceneManager.registerPreloader(this);
		this.editorPreload();
		this.load.text('SplineData', 'assets/settings/SplineData.json');
		this.load.atlas('flares', 'assets/particles/flares_01.png', 'assets/particles/flares_01.json');

	}
	create() {

		Ctrace(this.scene.key + " > create > START!");
		this.editorCreate();
		this.registerEvents();
		this.events.once(Phaser.Scenes.Events.SHUTDOWN, () => {
			this.unregisterEvents();
		})
		// DebugSettings.showHitArea = true;
		AudioManager.createLibrary(this.sound, ["snd_bonus"]);

		// animate red circle along path
		Ctrace(this.key + " > dots:{0}", this.layer_all_dots.list.length);
		this.layer_all_dots.list.forEach(dot=>{
			// pickup instance name (base awake is to late)
			dot.instanceName = ComponentBase.getComponent(dot).instanceName;
		})
		SceneManager.activeSpline = new InteractiveSpline(this, this.layer_all_dots.list, this.bonus_01);
		Ctrace(this.scene.key + " > create > DONE!");
	}
	unregisterEvents(){

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > unregisterEvents > ...");
		this.events.off("button-action-clicked", this.buttonActionClicked, this);
	}
	registerEvents(){

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > registerEvents > ...");	
		this.events.on("button-action-clicked", this.buttonActionClicked, this);
		var text_04 = this.text_04;
		this.events.once("spline-animation-complete", function(){

			text_04.text = "Play";
			SceneManager.activeSpline.isPlaying = false;
		})
	}
	buttonActionClicked(go, action){

		// Ctrace("Level > buttonActionClicked > button:{0} action:{1}", go.instanceName, action);
        switch (action){

			case "guide-play-action":
				Ctrace("Level > buttonActionClicked > button:{0} action{1}", go.instanceName, action);
				if (!SceneManager.activeSpline.isPlaying){

					this.text_04.text = "Stop";
					this.guide_kvitek_001.playAction("bonus");
					this.time.addEvent({
						delay: 2000,
						callback: ()=>{SceneManager.activeSpline.play();},
						loop: false
					})
				} else {

					this.text_04.text = "Play"; 
					SceneManager.activeSpline.stop();
				}
			break;

			case "spline-print-data":
				Ctrace("Level > buttonActionClicked > button:{0} action:{1}", go.instanceName, action);
				SceneManager.activeSpline.printData();
			break;

			case "spline-load-data":
				Ctrace("Level > buttonActionClicked > button:{0} action:{1}", go.instanceName, action);
				SceneManager.activeSpline.loadDataFromFile();
			break;

			case "spline-save-data":
				Ctrace("Level > buttonActionClicked > button:{0} action:{1}", go.instanceName, action);
				SceneManager.activeSpline.saveDataToFile();
			break;
			case "bonus-edit-switch":
				Ctrace("Level > buttonActionClicked > button:{0} action:{1} editMode:{2}", go.instanceName, action, SceneManager.activeSpline.editMode);
				if (SceneManager.activeSpline.editMode){

					this.text_05.text = "Edit"; 
					SceneManager.activeSpline.editMode = false;

				} else {

					this.text_05.text = "Lock"; 
					SceneManager.activeSpline.editMode = true;
				}
			break;
		}
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here

