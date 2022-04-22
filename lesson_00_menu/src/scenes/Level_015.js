
// You can write more code here

/* START OF COMPILED CODE */

class Level_015 extends Phaser.Scene {

	constructor() {
		super("Level_015");

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

		// text_113_1_1_2_1_3_2_1_1_1
		const text_113_1_1_2_1_3_2_1_1_1 = this.add.text(197, 734, "", {});
		text_113_1_1_2_1_3_2_1_1_1.setOrigin(0, 0.5);
		text_113_1_1_2_1_3_2_1_1_1.text = "Layer API";
		text_113_1_1_2_1_3_2_1_1_1.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "22px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		layer_bottom_bar.add(text_113_1_1_2_1_3_2_1_1_1);

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
		const cage_01 = new SimpleCage(this, 173, 316);
		this.add.existing(cage_01);

		// card_01
		const card_01 = new SimpleCard(this, 173, 505);
		this.add.existing(card_01);

		// cage_02
		const cage_02 = new SimpleCage(this, 493, 316);
		this.add.existing(cage_02);

		// card_02
		const card_02 = new SimpleCard(this, 493, 505);
		this.add.existing(card_02);

		// cage_03
		const cage_03 = new SimpleCage(this, 813, 316);
		this.add.existing(cage_03);

		// card_03
		const card_03 = new SimpleCard(this, 813, 505);
		this.add.existing(card_03);

		// btn_01
		const btn_01 = this.add.container(498, 679);

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
		text_01.text = "Edit";
		text_01.setStyle({ "color": "#f5dbf5ff", "fontFamily": "Arial", "fontSize": "40px", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff", "shadow.fill":true});
		btn_01.add(text_01);

		// text
		const text = this.add.text(83, 565, "", {});
		text.setOrigin(0, 0.5);
		text.text = "card_01";
		text.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_1
		const text_1 = this.add.text(405, 565, "", {});
		text_1.setOrigin(0, 0.5);
		text_1.text = "card_02";
		text_1.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_2
		const text_2 = this.add.text(727, 565, "", {});
		text_2.setOrigin(0, 0.5);
		text_2.text = "card_03";
		text_2.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_3
		const text_3 = this.add.text(727, 377, "", {});
		text_3.setOrigin(0, 0.5);
		text_3.text = "cage_03";
		text_3.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_4
		const text_4 = this.add.text(405, 377, "", {});
		text_4.setOrigin(0, 0.5);
		text_4.text = "cage_02";
		text_4.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// text_5
		const text_5 = this.add.text(83, 377, "", {});
		text_5.setOrigin(0, 0.5);
		text_5.text = "cage_01";
		text_5.setStyle({ "color": "#76aef0ff", "fontFamily": "Arial", "fontSize": "18px", "fontStyle": "italic", "stroke": "#8b8cb2", "strokeThickness":1,"shadow.offsetX":2,"shadow.offsetY":2,"shadow.color": "#1d5970ff" });

		// rexrainbow
		const rexrainbow = this.add.image(116, 734, "rexrainbow");
		rexrainbow.scaleX = 0.48353823088687675;
		rexrainbow.scaleY = 0.48353823088687675;

		// lists
		const all_cards = [card_01, card_02, card_03];
		const all_cages = [cage_03, cage_02, cage_01];

		// text_1_1 (components)
		const text_1_1NavigateToScene = new NavigateToScene(text_1_1);
		text_1_1NavigateToScene.hitAreaScaleY = 1.5;

		// text_113_1_1_2_1_3_2_1_1_1 (components)
		const text_113_1_1_2_1_3_2_1_1_1NavigateToURL = new NavigateToURL(text_113_1_1_2_1_3_2_1_1_1);
		text_113_1_1_2_1_3_2_1_1_1NavigateToURL.urlPath = "https://rexrainbow.github.io/phaser3-rex-notes/docs/site/layer/";
		text_113_1_1_2_1_3_2_1_1_1NavigateToURL.hitAreaScaleY = 2;

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
		cage_01DropZone.hitAreaScaleY = 1.6;

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

		// cage_02 (components)
		const cage_02ComponentBase = new ComponentBase(cage_02);
		cage_02ComponentBase.instanceName = "cage_02";
		cage_02ComponentBase.componentType = "Container";
		const cage_02DropZone = new DropZone(cage_02);
		cage_02DropZone.hitAreaScaleX = 1.4;
		cage_02DropZone.hitAreaScaleY = 1.6;

		// card_02 (prefab fields)
		card_02.cardText = "B";
		card_02.textColor = "0x0095cb";
		card_02.bgColor = "0xb7e089";

		// card_02 (components)
		const card_02ComponentBase = new ComponentBase(card_02);
		card_02ComponentBase.instanceName = "card_02";
		card_02ComponentBase.componentType = "Container";
		const card_02DragAndDrop = new DragAndDrop(card_02);
		card_02DragAndDrop.snapToZone = true;
		card_02DragAndDrop.returnBackOnMiss = true;
		card_02DragAndDrop.hitAreaScaleX = 1.4;
		card_02DragAndDrop.hitAreaScaleY = 1.4;

		// cage_03 (components)
		const cage_03ComponentBase = new ComponentBase(cage_03);
		cage_03ComponentBase.instanceName = "cage_03";
		cage_03ComponentBase.componentType = "Container";
		const cage_03DropZone = new DropZone(cage_03);
		cage_03DropZone.hitAreaScaleX = 1.4;
		cage_03DropZone.hitAreaScaleY = 1.6;

		// card_03 (prefab fields)
		card_03.cardText = "C";
		card_03.textColor = "0x0095cb";
		card_03.bgColor = "0xb7e089";

		// card_03 (components)
		const card_03ComponentBase = new ComponentBase(card_03);
		card_03ComponentBase.instanceName = "card_03";
		card_03ComponentBase.componentType = "Container";
		const card_03DragAndDrop = new DragAndDrop(card_03);
		card_03DragAndDrop.snapToZone = true;
		card_03DragAndDrop.returnBackOnMiss = true;
		card_03DragAndDrop.hitAreaScaleX = 1.4;
		card_03DragAndDrop.hitAreaScaleY = 1.4;

		// btn_01 (components)
		const btn_01ComponentBase = new ComponentBase(btn_01);
		btn_01ComponentBase.instanceName = "btn_edit_lesson";
		btn_01ComponentBase.componentType = "Container";
		const btn_01ClickButton = new ClickButton(btn_01);
		btn_01ClickButton.actionName = "show-rules-editor";

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;
		this.text_01 = text_01;
		this.all_cards = all_cards;
		this.all_cages = all_cages;

		this.events.emit("scene-awake");
	}

	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;
	/** @type {Phaser.GameObjects.Text} */
	text_01;
	/** @type {SimpleCard[]} */
	all_cards;
	/** @type {SimpleCage[]} */
	all_cages;

	/* START-USER-CODE */
	preload() {

		SceneManager.registerPreloader(this);
		this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'lib/plugins/rexuiplugin.js',
            sceneKey: 'rexUI'
        });  
		this.load.plugin('rexcontainerliteplugin', 'lib/plugins/rexcontainerliteplugin.js', true);
		this.load.text('LessonData', 'assets/settings/Lesson_001.json');
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
		this.initLesson();

		Ctrace(this.scene.key + " > create > DONE!");
	}
	
	initLesson(){

		this.LRE = LessonRulesEditor;
		this.LRE.build(this, this.cache.text.get('LessonData'));
		this.editorPanelContainer = this.add.rexContainerLite(100, 100);
		this.editorPanelContainer.add(this.LRE.scrollablePanel);
		this.editorPanelContainer.setAlpha(0.95);
		this.initCards();
	}
	initCards(){

		var scene = this;
		this.all_cards.forEach(card=>{
			card.onDragStart = function(pointer, dragX, dragY){
				// console.dir(pointer)
				this.checkAs(["none"]);
			}
			card.onDragEnd = function(pointer, cage){

				var is_correct = scene.LRE.isCorrectResult(card.instanceName, cage.instanceName);
				Ctrace("dragEnd > card:{0} depth:{1}", card.instanceName, card.depth)
				// Ctrace("card:{0} was dropped on cage:{1} is correct:{2}", 
				// 	this.instanceName, cage.instanceName, is_correct
				// )
				if (is_correct){

					this.checkAs(["good"]); //["good", "lock"]

				} else {

					this.checkAs(["bad"]);
				}
				//this.isCorrect = is_correct; // set card isCorrect state
			}
		})
	}
	buttonActionClicked(go, action){

		// Ctrace("Level > buttonActionClicked > button:{0} action:{1}", go.instanceName, action);
        var scene = this;
		switch (action){

			case "show-rules-editor":
				// Ctrace("Level > buttonActionClicked > button:{0} action:{1} visible:{2}", 
				// 	go.instanceName, action, scene.LRE.visible
				// );
				// console.dir(scene.LRE)
				if (scene.LRE.visible) {
// Ctrace("CLOSE")
					scene.LRE.close();
					this.editorPanelContainer.setDepth(0);
					
				} else {
// Ctrace("OPEN")					
					this.editorPanelContainer.setDepth(100);
					scene.LRE.open(scene);
				}
			break;
		}
	}
	unregisterEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > unregisterEvents > ...");
		//this.events.off('trail-to')
	}
	registerEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > registerEvents > ...");
		this.events.on("button-action-clicked", this.buttonActionClicked, this);
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
