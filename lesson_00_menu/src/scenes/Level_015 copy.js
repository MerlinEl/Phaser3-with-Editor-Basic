
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

		// lists
		const all_cards = [card_01, card_02, card_03];
		const all_cages = [cage_03, cage_02, cage_01];

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
		btn_01ComponentBase.instanceName = "btn_04_bonus";
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
		this.createRulesTable();
		this.loadLessonSettings(this, this.lessonData);
		this.initCards();
		Ctrace(this.scene.key + " > create > DONE!");
	}
	initCards(){
		var lessonData = this.lessonData;
		this.all_cards.forEach(card=>{

			card.onDragEnd = function(pointer, cage){
				
				var is_correct = lessonData.isCorrect(card.instanceName, cage.instanceName);
				Ctrace("card:{0} was dropped on cage:{1} is correct:{2}", 
					this.instanceName, cage.instanceName, is_correct
				)
				this.isCorrect = is_correct;
			}
		})
	}
	lessonData = {
		selectedCards:[],
		name: 'Drag-And-Drop',
		cards: [
			{ name: 'card_01' },
			{ name: 'card_02' },
			{ name: 'card_03' },
		],
		cages: [
			{ name: 'cage_01', cards: ['card_01', 'card_03']},
			{ name: 'cage_02', cards: ['card_02']},
			{ name: 'cage_03', cards: ['card_03']},
		],
		getCageByName(cageName){
			return this.cages.find(item=>{
				return item.name == cageName;
			});
		},
		getCageCards(cageName){
			var cage = this.getCageByName(cageName);
			return cage ? cage.cards : [];
		},
		setCageCards(cageName, cardsName){
			var cage = this.getCageByName(cageName);
			if (cage) cage.cards = cardsName;
		},
		isCorrect(cardName, cageName){

			var cage = this.getCageByName(cageName);
			if (!cage) return false;
			return cage.cards.indexOf(cardName) != -1;
		}
	};
	createRulesTable(){
		const COLOR_PRIMARY = 0x4e342e;
		const COLOR_LIGHT = 0x7b5e57;
		const COLOR_DARK = 0x260e04;
		var data = this.lessonData;
		var createPanel = function (scene, data) {

			// layout with nested sizer (thanks to rexrainbow)
			var panelSizer =  scene.rexUI.add.sizer({
				orientation: 'x',
				space: { item: 10 },
				name: "ContainerPanel"  
			})
			.add(
				createTable(scene, data, 'cages'), // child
				{ expand: true }
			)
			.add(
				createTable(scene, data, 'cards'), // child
				{ expand: true }
			)

			var buttonSizer =  scene.rexUI.add.sizer({
				orientation: 'x',
				space: { item: 10 },
				name: "buttons" 
			})			
			.add(
				CreateButton(scene, 'Cancel', "btn_cancel", COLOR_DARK),
			)
			.add(
				CreateButton(scene, 'Accept', "btn_accept",  COLOR_DARK),
			)

			var sizer = scene.rexUI.add.sizer({
				orientation: 'y',
				space: { item: 10 },
				name: data.name
			})
			.add(
				createHeader(scene, data), // child
				{ expand: true }
			)
			.add(
				panelSizer,
				{ expand: true }
			)
			.add(
				buttonSizer,
				{ expand: true }
			)
			return sizer;
		}

		var createHeader = function (scene, data) {
			var title = scene.rexUI.add.label({
				orientation: 'x',
				text: scene.add.text(0, 0, 'Rules Editor:'),
				name: "header-title"
			});
			return scene.rexUI.add.sizer({
				orientation: 'x',
				space: { left: 5, right: 5, top: 5, bottom: 5, item: 10 },
				name: "header"
			})
			.addBackground(
				scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, undefined).setStrokeStyle(2, COLOR_LIGHT, 1)
			)
			.add(
				title, // child
				{ expand: true, align: 'left' }
			)
		};

		var createTable = function (scene, data, key) {
			var capKey = key.charAt(0).toUpperCase() + key.slice(1);
			var title = scene.rexUI.add.label({
				orientation: 'x',
				text: scene.add.text(0, 0, capKey),
				name: "table-title-"+key
			});

			var items = data[key];
			var rows = items.length;
			var table = scene.rexUI.add.gridSizer({
				column: 1,
				row: rows,
				// rowProportions: 1,
				space: { column: 0, row: 10 },
				name: key  // Search this name to get table back
			});

			var item, r, c;
			var iconSize = (rows === 1) ? 80 : 40;
			for (var i = 0, cnt = items.length; i < cnt; i++) {
				item = items[i];
				r = i % rows;
				c = (i - r) / rows;
				table.add(
					createIcon(scene, item, iconSize, iconSize),
					c,
					r,
					'top',
					0,
					true
				);
			}

			return scene.rexUI.add.sizer({
				orientation: 'y',
				space: { left: 10, right: 10, top: 10, bottom: 10, item: 10 },
				name: "table-"+key
			})
			.addBackground(
				scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, undefined).setStrokeStyle(2, COLOR_LIGHT, 1)
			)
			.add(
				title, // child
				0, // proportion
				'left', // align
				0, // paddingConfig
				true // expand
			)
			.add(table, // child
				1, // proportion
				'center', // align
				0, // paddingConfig
				true // expand
			);
		}

		var createIcon = function (scene, item, iconWidth, iconHeight) {
			var label = scene.rexUI.add.label({
				orientation: 'y',
				icon: scene.rexUI.add.roundRectangle(0, 0, iconWidth, iconHeight, 5, COLOR_LIGHT),
				text: scene.add.text(0, 0, item.name),
				space: { icon: 3 },
				name: item.name
			});

			return label;
		};
		var CreateButton = function (scene, text, id, backgroundColor) {
			return scene.rexUI.add.label({
				// orientation: 'y',
				name:id,
				background: scene.rexUI.add.roundRectangle(0, 0, 80, 20, 10, backgroundColor),
				text: scene.add.text(0, 0, text, {
					fontSize: '18px'
				}),

				space: {
					left: 4,
					right: 4,
					top: 4,
					bottom: 4
				}
			});
		}
		// PANEL ROOT
		var {width, height} = this.game.config;
		var scrollablePanel = this.rexUI.add.scrollablePanel({
			x: width / 2,
			y: height / 2,
			width: 350,
			height: 335,
			scrollMode: 0,

			background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 10, COLOR_PRIMARY),

			panel: {
				child: createPanel(this, data),

				mask: {
					padding: 1,
					// layer: this.add.layer()
				},
			},

			slider: {
				track: this.rexUI.add.roundRectangle(0, 0, 20, 10, 10, COLOR_DARK),
				thumb: this.rexUI.add.roundRectangle(0, 0, 0, 0, 13, COLOR_LIGHT),
			},

			// scroller: true,
			scroller: {
				// pointerOutRelease: false
			},

			mouseWheelScroller: {
				focus: false,
				speed: 0.1
			},

			space: {
				left: 10,
				right: 10,
				top: 10,
				bottom: 10,
				panel: 10,
			}
		}).layout();
		var getContainer = function(itemName){

			// item-panel
			var panel = scrollablePanel.getElement('panel').children.find(item=>{

				return item.name == "ContainerPanel";
			});
			// item-table
			var table = panel.children.find(item=>{

				return item.name == "table-"+itemName;
			});
			// item-container
			return table.children.find(item=>{

				return item.name == itemName;
			})
		}
		var clearSelection = function(container){

			container.children.forEach( ch=> {

				ch.getElement('icon').setStrokeStyle();
			});
		}
		var selectItems = function(container, itemsName){

			container.children.forEach( ch=> {

				if (itemsName.indexOf(ch.name) > -1) { // select

					ch.getElement('icon').setStrokeStyle(2, 0xe91010);

				} else { //clear

					ch.getElement('icon').setStrokeStyle();	
				}
			});
		}
		var selectItem = function(container, child){

			// Ctrace("selectItem> container:{0} child:{1}", container.name, child.text);

			// radio switch on cages
			if (container.name == 'cages'){

				selectItems(container, [child.name]);
				// restore cards selection from data
				data.selectedCards = data.getCageCards(child.name);
				// Ctrace("\tselected cards:{0}", data.selectedCards);
				var cardsContainer = getContainer("cards");
				// Ctrace("\tcardsContainer:{0}", cardsContainer);
				console.dir(cardsContainer);
				//clearSelection(cardsContainer);
				selectItems(cardsContainer, data.selectedCards);

			} else { // select unselect cards

				var bg = child.getElement('icon');
				// console.dir(bg);
				if (bg.isStroked){ // clear

					bg.setStrokeStyle();
					// remove child name from array
					data.selectedCards.splice(data.selectedCards.indexOf(child.name), 1);

				} else { // select

					bg.setStrokeStyle(2, 0xe91010);
					// add child name to array
					data.selectedCards.push(child.name);
				}
			}
		}
		var saveLessonSettings = this.saveLessonSettings;
		var scene = this;
		scrollablePanel.setChildrenInteractive({
            targets: [
                scrollablePanel.getByName('cages', true),
                scrollablePanel.getByName('cards', true),
				scrollablePanel.getByName('buttons', true),
            ]
        })
		.on('child.click', function (child) {
			Ctrace("child.click:{0}", child.name);
			switch(child.name){

				case "btn_accept": 
				saveLessonSettings(scene, data);
				scrollablePanel.visible = false;
				break;
				case "btn_cancel": 
				scrollablePanel.visible = false;
				scene.restoreLessonData(JSON.parse(scene.backupLessonData));
				break;
				default:selectItem(child.getParentSizer(), child);
			}
		})
		scrollablePanel.visible = false;
		this.scrollablePanel = scrollablePanel;
	}
	saveLessonSettings(scene, lessonData){

		Ctrace(scene.key + " > saveLessonSettings >");
		console.dir(scene)
		// lessonData.selectedCards = lessonData.cages[0].cards; // make selection from first cage
		var strData = JSON.stringify(lessonData);
		FileManager.saveFile("Lesson_001.json", strData);
	}
	loadLessonSettings(scene, lessonData){

		Ctrace(scene.key + " > loadLessonSettings > ");
		console.dir(scene)
		var strData = this.cache.text.get('LessonData');
        var jsonData = JSON.parse(strData);
		// Ctrace("\tdata:\n{0}", strData);
		// console.dir(jsonData);
		scene.restoreLessonData(jsonData);
	}
	// TODO not works
	// restore data on user cancel editing
	storeLessonData(scene){

		scene.backupLessonData = JSON.stringify(this.lessonData);
	}
	restoreLessonData(data){

		if (!data) return;
		data.name = data.name || "Drag-And-Drop";
		data.selectedCards = data.selectedCards || [];
		data.cards = data.cards || [];
		data.cages = data.cages || [];	
	}
	buttonActionClicked(go, action){

		// Ctrace("Level > buttonActionClicked > button:{0} action:{1}", go.instanceName, action);
        switch (action){

			case "show-rules-editor":
				// Ctrace("Level > buttonActionClicked > button:{0} action{1}", go.instanceName, action);
				if (this.scrollablePanel.visible) {

					this.scrollablePanel.visible  = false;
					// this.scrollablePanel.depth = 0;

				} else {

					this.storeLessonData(this);
					this.loadLessonSettings(this, this.lessonData);
					// this.scrollablePanel.depth = 100;
					this.scrollablePanel.visible  = true;
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
