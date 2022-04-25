
// You can write more code here

/* START OF COMPILED CODE */

class Level_005 extends Phaser.Scene {

	constructor() {
		super("Level_005");

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
		text_1_1_1_1_1.text = "Drag and Drop";
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

		// cage_01
		const cage_01 = new SimpleCage(this, 190, 371);
		this.add.existing(cage_01);

		// cage_02
		const cage_02 = new SimpleCage(this, 470, 371);
		this.add.existing(cage_02);
		cage_02.scaleX = 0.8;
		cage_02.scaleY = 0.8;

		// cage_03
		const cage_03 = new SimpleCage(this, 750, 371);
		this.add.existing(cage_03);
		cage_03.scaleX = 0.5;
		cage_03.scaleY = 0.5;

		// card_01
		const card_01 = new SimpleCard(this, 193, 573);
		this.add.existing(card_01);

		// card_02
		const card_02 = new SimpleCard(this, 473, 573);
		this.add.existing(card_02);
		card_02.scaleX = 0.8;
		card_02.scaleY = 0.8;

		// card_03
		const card_03 = new SimpleCard(this, 706, 573);
		this.add.existing(card_03);
		card_03.scaleX = 0.5;
		card_03.scaleY = 0.5;

		// card_03_1
		const card_03_1 = new SimpleCard(this, 892, 573);
		this.add.existing(card_03_1);
		card_03_1.scaleX = 0.5;
		card_03_1.scaleY = 0.5;

		// text_1_1_1
		const text_1_1_1 = this.add.text(850, 629, "", {});
		text_1_1_1.setOrigin(0, 0.5);
		text_1_1_1.text = "is locked";
		text_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_2
		const text_1_1_1_2 = this.add.text(99, 666, "", {});
		text_1_1_1_2.setOrigin(0, 0.5);
		text_1_1_1_2.text = "return on mis";
		text_1_1_1_2.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_2_1
		const text_1_1_1_2_1 = this.add.text(398, 642, "", {});
		text_1_1_1_2_1.setOrigin(0, 0.5);
		text_1_1_1_2_1.text = "return on mis";
		text_1_1_1_2_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_2_1_1
		const text_1_1_1_2_1_1 = this.add.text(640, 623, "", {});
		text_1_1_1_2_1_1.setOrigin(0, 0.5);
		text_1_1_1_2_1_1.text = "lay enywhere";
		text_1_1_1_2_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_2_2
		const text_1_1_1_2_2 = this.add.text(78, 286, "", {});
		text_1_1_1_2_2.setOrigin(0, 0.5);
		text_1_1_1_2_2.text = "drop area 1.4 %";
		text_1_1_1_2_2.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_2_2_1
		const text_1_1_1_2_2_1 = this.add.text(78, 489, "", {});
		text_1_1_1_2_2_1.setOrigin(0, 0.5);
		text_1_1_1_2_2_1.text = "hit area 1.4 %";
		text_1_1_1_2_2_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_2_2_2
		const text_1_1_1_2_2_2 = this.add.text(364, 300, "", {});
		text_1_1_1_2_2_2.setOrigin(0, 0.5);
		text_1_1_1_2_2_2.text = "drop area 1.2 %";
		text_1_1_1_2_2_2.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

		// text_1_1_1_2_2_1_1
		const text_1_1_1_2_2_1_1 = this.add.text(364, 503, "", {});
		text_1_1_1_2_2_1_1.setOrigin(0, 0.5);
		text_1_1_1_2_2_1_1.text = "hit area 1.2 %";
		text_1_1_1_2_2_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});

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

		// cage_01 (components)
		const cage_01ComponentBase = new ComponentBase(cage_01);
		cage_01ComponentBase.instanceName = "cage_01";
		cage_01ComponentBase.componentType = "Container";
		const cage_01DropZone = new DropZone(cage_01);
		cage_01DropZone.hitAreaScaleX = 1.4;
		cage_01DropZone.hitAreaScaleY = 1.4;

		// cage_02 (prefab fields)
		cage_02.fgColor = "0x3399cc";

		// cage_02 (components)
		const cage_02ComponentBase = new ComponentBase(cage_02);
		cage_02ComponentBase.instanceName = "cage_02";
		cage_02ComponentBase.componentType = "Container";
		const cage_02DropZone = new DropZone(cage_02);
		cage_02DropZone.hitAreaScaleX = 1.2;
		cage_02DropZone.hitAreaScaleY = 1.2;

		// cage_03 (prefab fields)
		cage_03.fgColor = "0xb7e089";

		// cage_03 (components)
		const cage_03ComponentBase = new ComponentBase(cage_03);
		cage_03ComponentBase.instanceName = "cage_03";
		cage_03ComponentBase.componentType = "Container";
		new DropZone(cage_03);

		// card_01 (prefab fields)
		card_01.cardText = "A";
		card_01.textColor = "0x0095cb";
		card_01.bgColor = "0xb7e089";

		// card_01 (components)
		const card_01ComponentBase = new ComponentBase(card_01);
		card_01ComponentBase.instanceName = "card_01";
		card_01ComponentBase.componentType = "Container";
		const card_01DragAndDrop = new DragAndDrop(card_01);
		card_01DragAndDrop.snapToZone = true;
		card_01DragAndDrop.returnBackOnMiss = true;
		card_01DragAndDrop.hitAreaScaleX = 1.4;
		card_01DragAndDrop.hitAreaScaleY = 1.4;

		// card_02 (prefab fields)
		card_02.cardText = "B";
		card_02.textColor = "0xff5c0d";
		card_02.bgColor = "0x3399cc";

		// card_02 (components)
		const card_02ComponentBase = new ComponentBase(card_02);
		card_02ComponentBase.instanceName = "card_02";
		card_02ComponentBase.componentType = "Container";
		const card_02DragAndDrop = new DragAndDrop(card_02);
		card_02DragAndDrop.snapToZone = true;
		card_02DragAndDrop.returnBackOnMiss = true;
		card_02DragAndDrop.hitAreaScaleX = 1.2;
		card_02DragAndDrop.hitAreaScaleY = 1.2;

		// card_03 (prefab fields)
		card_03.cardText = "C";
		card_03.textColor = "0x005300";
		card_03.bgColor = "0xb7e089";

		// card_03 (components)
		const card_03ComponentBase = new ComponentBase(card_03);
		card_03ComponentBase.instanceName = "card_03";
		card_03ComponentBase.componentType = "Container";
		const card_03DragAndDrop = new DragAndDrop(card_03);
		card_03DragAndDrop.snapToZone = true;

		// card_03_1 (prefab fields)
		card_03_1.cardText = "C";
		card_03_1.textColor = "0x005300";
		card_03_1.bgColor = "0xff7c0d";

		// card_03_1 (components)
		const card_03_1ComponentBase = new ComponentBase(card_03_1);
		card_03_1ComponentBase.instanceName = "card_03";
		card_03_1ComponentBase.isLocked = true;
		card_03_1ComponentBase.componentType = "Container";
		const card_03_1DragAndDrop = new DragAndDrop(card_03_1);
		card_03_1DragAndDrop.snapToZone = true;
		card_03_1DragAndDrop.returnBackOnMiss = true;

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
	unregisterEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > unregisterEvents > ...");
		//this.events.off('trail-to')
	}
	registerEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > registerEvents > ...");
		//this.events.on('trail-to', this.method);
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
