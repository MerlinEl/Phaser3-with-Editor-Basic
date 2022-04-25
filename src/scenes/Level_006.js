
// You can write more code here

/* START OF COMPILED CODE */

class Level_006 extends Phaser.Scene {

	constructor() {
		super("Level_006");

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
		text_1_1_1_1_1.text = "Shuffle";
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

		// layer_all_cards
		const layer_all_cards = this.add.layer();

		// card_01
		const card_01 = new SimpleCard(this, 217, 305);
		layer_all_cards.add(card_01);

		// card_01_1
		const card_01_1 = new SimpleCard(this, 492, 305);
		layer_all_cards.add(card_01_1);

		// card_01_2
		const card_01_2 = new SimpleCard(this, 764, 305);
		layer_all_cards.add(card_01_2);

		// card_01_3
		const card_01_3 = new SimpleCard(this, 764, 463);
		layer_all_cards.add(card_01_3);

		// card_01_4
		const card_01_4 = new SimpleCard(this, 217, 463);
		layer_all_cards.add(card_01_4);

		// card_01_5
		const card_01_5 = new SimpleCard(this, 492, 463);
		layer_all_cards.add(card_01_5);

		// container_btn_shuffle
		const container_btn_shuffle = this.add.container(495, 649);

		// ellipse_4
		const ellipse_4 = this.add.ellipse(0, 1, 200, 128);
		ellipse_4.isFilled = true;
		ellipse_4.fillColor = 13970407;
		ellipse_4.isStroked = true;
		ellipse_4.lineWidth = 2;
		container_btn_shuffle.add(ellipse_4);

		// text_1_1_1_2
		const text_1_1_1_2 = this.add.text(0, 1, "", {});
		text_1_1_1_2.setOrigin(0.5, 0.5);
		text_1_1_1_2.text = "SHUFFLE";
		text_1_1_1_2.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		container_btn_shuffle.add(text_1_1_1_2);

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

		// card_01 (prefab fields)
		card_01.cardText = "A";
		card_01.textColor = "0x005200";
		card_01.bgColor = "0x00c400";

		// card_01 (components)
		const card_01ComponentBase = new ComponentBase(card_01);
		card_01ComponentBase.instanceName = "card_01";
		card_01ComponentBase.componentType = "Container";
		const card_01DragAndDrop = new DragAndDrop(card_01);
		card_01DragAndDrop.hitAreaScaleX = 1.1;
		card_01DragAndDrop.hitAreaScaleY = 1.2;

		// card_01_1 (prefab fields)
		card_01_1.cardText = "B";
		card_01_1.textColor = "0x005200";
		card_01_1.bgColor = "0x00c400";

		// card_01_1 (components)
		const card_01_1ComponentBase = new ComponentBase(card_01_1);
		card_01_1ComponentBase.instanceName = "card_02";
		card_01_1ComponentBase.componentType = "Container";
		const card_01_1DragAndDrop = new DragAndDrop(card_01_1);
		card_01_1DragAndDrop.hitAreaScaleX = 1.1;
		card_01_1DragAndDrop.hitAreaScaleY = 1.2;

		// card_01_2 (prefab fields)
		card_01_2.cardText = "C";
		card_01_2.textColor = "0x005200";
		card_01_2.bgColor = "0x00c400";

		// card_01_2 (components)
		const card_01_2ComponentBase = new ComponentBase(card_01_2);
		card_01_2ComponentBase.instanceName = "card_03";
		card_01_2ComponentBase.componentType = "Container";
		const card_01_2DragAndDrop = new DragAndDrop(card_01_2);
		card_01_2DragAndDrop.hitAreaScaleX = 1.1;
		card_01_2DragAndDrop.hitAreaScaleY = 1.2;

		// card_01_3 (prefab fields)
		card_01_3.cardText = "F";
		card_01_3.textColor = "0x4d3c21";
		card_01_3.bgColor = "0xdda055";

		// card_01_3 (components)
		const card_01_3ComponentBase = new ComponentBase(card_01_3);
		card_01_3ComponentBase.instanceName = "card_06";
		card_01_3ComponentBase.componentType = "Container";
		const card_01_3DragAndDrop = new DragAndDrop(card_01_3);
		card_01_3DragAndDrop.hitAreaScaleX = 1.1;
		card_01_3DragAndDrop.hitAreaScaleY = 1.2;

		// card_01_4 (prefab fields)
		card_01_4.cardText = "D";
		card_01_4.textColor = "0x4d3c21";
		card_01_4.bgColor = "0xdda055";

		// card_01_4 (components)
		const card_01_4ComponentBase = new ComponentBase(card_01_4);
		card_01_4ComponentBase.instanceName = "card_04";
		card_01_4ComponentBase.componentType = "Container";
		const card_01_4DragAndDrop = new DragAndDrop(card_01_4);
		card_01_4DragAndDrop.hitAreaScaleX = 1.1;
		card_01_4DragAndDrop.hitAreaScaleY = 1.2;

		// card_01_5 (prefab fields)
		card_01_5.cardText = "E";
		card_01_5.textColor = "0x4d3c21";
		card_01_5.bgColor = "0xdda055";

		// card_01_5 (components)
		const card_01_5ComponentBase = new ComponentBase(card_01_5);
		card_01_5ComponentBase.instanceName = "card_05";
		card_01_5ComponentBase.componentType = "Container";
		const card_01_5DragAndDrop = new DragAndDrop(card_01_5);
		card_01_5DragAndDrop.hitAreaScaleX = 1.1;
		card_01_5DragAndDrop.hitAreaScaleY = 1.2;

		// container_btn_shuffle (components)
		const container_btn_shuffleComponentBase = new ComponentBase(container_btn_shuffle);
		container_btn_shuffleComponentBase.instanceName = "btn_shuffle";
		container_btn_shuffleComponentBase.componentType = "Container";
		const container_btn_shuffleClickButton = new ClickButton(container_btn_shuffle);
		container_btn_shuffleClickButton.actionName = "shuffle-cards";

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;
		this.layer_all_cards = layer_all_cards;

		this.events.emit("scene-awake");
	}

	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;
	/** @type {Phaser.GameObjects.Layer} */
	layer_all_cards;

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

			case "shuffle-cards":
				Ctrace("Level > buttonActionClicked > button:{0}", go.instanceName);
				Collection.shuffleGameObjectsInLayer(this.layer_all_cards);
			break;
		}
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
