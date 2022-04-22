
// You can write more code here

/* START OF COMPILED CODE */

class Level_002 extends Phaser.Scene {

	constructor() {
		super("Level_002");

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

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 1024, 768);
		rectangle.setOrigin(0, 0);
		rectangle.isStroked = true;
		rectangle.strokeColor = 13875698;
		rectangle.lineWidth = 3;

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

		// all_color_buttons
		const all_color_buttons = this.add.layer();

		// color_palette_sprites0
		const color_palette_sprites0 = this.add.image(194, 526, "color_palette_sprites", 0);
		all_color_buttons.add(color_palette_sprites0);

		// color_palette_sprites1
		const color_palette_sprites1 = this.add.image(269, 525, "color_palette_sprites", 1);
		all_color_buttons.add(color_palette_sprites1);

		// color_palette_sprites2
		const color_palette_sprites2 = this.add.image(344, 526, "color_palette_sprites", 2);
		all_color_buttons.add(color_palette_sprites2);

		// color_palette_sprites3
		const color_palette_sprites3 = this.add.image(419, 526, "color_palette_sprites", 3);
		all_color_buttons.add(color_palette_sprites3);

		// color_palette_sprites4
		const color_palette_sprites4 = this.add.image(494, 526, "color_palette_sprites", 4);
		all_color_buttons.add(color_palette_sprites4);

		// color_palette_sprites5
		const color_palette_sprites5 = this.add.image(569, 526, "color_palette_sprites", 5);
		all_color_buttons.add(color_palette_sprites5);

		// color_palette_sprites6
		const color_palette_sprites6 = this.add.image(644, 526, "color_palette_sprites", 6);
		all_color_buttons.add(color_palette_sprites6);

		// color_palette_sprites7
		const color_palette_sprites7 = this.add.image(719, 526, "color_palette_sprites", 7);
		all_color_buttons.add(color_palette_sprites7);

		// color_palette_sprites8
		const color_palette_sprites8 = this.add.image(794, 526, "color_palette_sprites", 8);
		all_color_buttons.add(color_palette_sprites8);

		// all_color_shapes
		const all_color_shapes = this.add.layer();

		// rectangle_01_1
		const rectangle_01_1 = this.add.rectangle(220, 367, 128, 128);
		rectangle_01_1.isFilled = true;
		rectangle_01_1.isStroked = true;
		rectangle_01_1.strokeColor = 2894121;
		rectangle_01_1.lineWidth = 3;
		all_color_shapes.add(rectangle_01_1);

		// ellipse_01_1
		const ellipse_01_1 = this.add.ellipse(498, 367, 128, 128);
		ellipse_01_1.isFilled = true;
		ellipse_01_1.isStroked = true;
		ellipse_01_1.strokeColor = 2894121;
		ellipse_01_1.lineWidth = 3;
		all_color_shapes.add(ellipse_01_1);

		// triangle_01_1
		const triangle_01_1 = this.add.triangle(776, 367, 0, 128, 64, 0, 128, 128);
		triangle_01_1.isFilled = true;
		triangle_01_1.isStroked = true;
		triangle_01_1.strokeColor = 2894121;
		triangle_01_1.lineWidth = 3;
		all_color_shapes.add(triangle_01_1);

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
		text_1_1_1_1_1.text = "Change Selection And Color";
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

		// text_1_1 (components)
		const text_1_1NavigateToScene = new NavigateToScene(text_1_1);
		text_1_1NavigateToScene.hitAreaScaleY = 1.5;

		// color_palette_sprites0 (components)
		const color_palette_sprites0ComponentBase = new ComponentBase(color_palette_sprites0);
		color_palette_sprites0ComponentBase.instanceName = "btn_01";
		color_palette_sprites0ComponentBase.hexColor = "0xffffff";
		const color_palette_sprites0ClickButton = new ClickButton(color_palette_sprites0);
		color_palette_sprites0ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites0ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites0ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites1 (components)
		const color_palette_sprites1ComponentBase = new ComponentBase(color_palette_sprites1);
		color_palette_sprites1ComponentBase.instanceName = "btn_02";
		color_palette_sprites1ComponentBase.hexColor = "0x000000";
		const color_palette_sprites1ClickButton = new ClickButton(color_palette_sprites1);
		color_palette_sprites1ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites1ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites1ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites2 (components)
		const color_palette_sprites2ComponentBase = new ComponentBase(color_palette_sprites2);
		color_palette_sprites2ComponentBase.instanceName = "btn_03";
		color_palette_sprites2ComponentBase.hexColor = "0xb52229";
		const color_palette_sprites2ClickButton = new ClickButton(color_palette_sprites2);
		color_palette_sprites2ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites2ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites2ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites3 (components)
		const color_palette_sprites3ComponentBase = new ComponentBase(color_palette_sprites3);
		color_palette_sprites3ComponentBase.instanceName = "btn_04";
		color_palette_sprites3ComponentBase.hexColor = "0xe4adcc";
		const color_palette_sprites3ClickButton = new ClickButton(color_palette_sprites3);
		color_palette_sprites3ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites3ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites3ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites4 (components)
		const color_palette_sprites4ComponentBase = new ComponentBase(color_palette_sprites4);
		color_palette_sprites4ComponentBase.instanceName = "btn_5";
		color_palette_sprites4ComponentBase.hexColor = "0x805ca4";
		const color_palette_sprites4ClickButton = new ClickButton(color_palette_sprites4);
		color_palette_sprites4ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites4ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites4ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites5 (components)
		const color_palette_sprites5ComponentBase = new ComponentBase(color_palette_sprites5);
		color_palette_sprites5ComponentBase.instanceName = "btn_06";
		color_palette_sprites5ComponentBase.hexColor = "0x61aded";
		const color_palette_sprites5ClickButton = new ClickButton(color_palette_sprites5);
		color_palette_sprites5ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites5ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites5ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites6 (components)
		const color_palette_sprites6ComponentBase = new ComponentBase(color_palette_sprites6);
		color_palette_sprites6ComponentBase.instanceName = "btn_07";
		color_palette_sprites6ComponentBase.hexColor = "0x6ead50";
		const color_palette_sprites6ClickButton = new ClickButton(color_palette_sprites6);
		color_palette_sprites6ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites6ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites6ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites7 (components)
		const color_palette_sprites7ComponentBase = new ComponentBase(color_palette_sprites7);
		color_palette_sprites7ComponentBase.instanceName = "btn_08";
		color_palette_sprites7ComponentBase.hexColor = "0xfbf135";
		const color_palette_sprites7ClickButton = new ClickButton(color_palette_sprites7);
		color_palette_sprites7ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites7ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites7ClickButton.actionName = "colorize-active-shape";

		// color_palette_sprites8 (components)
		const color_palette_sprites8ComponentBase = new ComponentBase(color_palette_sprites8);
		color_palette_sprites8ComponentBase.instanceName = "btn_09";
		color_palette_sprites8ComponentBase.hexColor = "0xd87328";
		const color_palette_sprites8ClickButton = new ClickButton(color_palette_sprites8);
		color_palette_sprites8ClickButton.hitAreaScaleX = 1.8;
		color_palette_sprites8ClickButton.hitAreaScaleY = 2.2;
		color_palette_sprites8ClickButton.actionName = "colorize-active-shape";

		// rectangle_01_1 (components)
		const rectangle_01_1ComponentBase = new ComponentBase(rectangle_01_1);
		rectangle_01_1ComponentBase.instanceName = "shp_rectangle_01";
		rectangle_01_1ComponentBase.colorize = true;
		rectangle_01_1ComponentBase.hexColor = "0xff0000";
		rectangle_01_1ComponentBase.componentType = "Shape";
		const rectangle_01_1MarkableShape = new MarkableShape(rectangle_01_1);
		rectangle_01_1MarkableShape.markHexColor = "0xffffff";

		// ellipse_01_1 (components)
		const ellipse_01_1ComponentBase = new ComponentBase(ellipse_01_1);
		ellipse_01_1ComponentBase.instanceName = "shp_circle_01";
		ellipse_01_1ComponentBase.colorize = true;
		ellipse_01_1ComponentBase.hexColor = "0x00ff00";
		ellipse_01_1ComponentBase.componentType = "Shape";
		const ellipse_01_1MarkableShape = new MarkableShape(ellipse_01_1);
		ellipse_01_1MarkableShape.isMarked = true;
		ellipse_01_1MarkableShape.markHexColor = "0xffffff";

		// triangle_01_1 (components)
		const triangle_01_1ComponentBase = new ComponentBase(triangle_01_1);
		triangle_01_1ComponentBase.instanceName = "shp_triangle_01";
		triangle_01_1ComponentBase.colorize = true;
		triangle_01_1ComponentBase.hexColor = "0x0000ff";
		triangle_01_1ComponentBase.componentType = "Shape";
		const triangle_01_1MarkableShape = new MarkableShape(triangle_01_1);
		triangle_01_1MarkableShape.markHexColor = "0xffffff";

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

		this.all_color_buttons = all_color_buttons;
		this.all_color_shapes = all_color_shapes;
		this.rectangle_01_1 = rectangle_01_1;
		this.ellipse_01_1 = ellipse_01_1;
		this.triangle_01_1 = triangle_01_1;
		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	all_color_buttons;
	/** @type {Phaser.GameObjects.Layer} */
	all_color_shapes;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_01_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	ellipse_01_1;
	/** @type {Phaser.GameObjects.Triangle} */
	triangle_01_1;
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
		this.events.off('shape-markable-clicked');
		this.events.off("button-action-clicked");	
	}
	registerEvents() {

		if (DebugSettings.showSceneEvents) Ctrace(this.scene.key + " > registerEvents > ...");
		this.events.on('shape-markable-clicked', this.shapesMarkSwitch, this);
		this.events.on("button-action-clicked", this.buttonActionClicked, this);	
	}
	buttonActionClicked(button, action){

		// Ctrace("Level > buttonActionClicked > button:{0} action:{1}", button, action);
        switch (action){

			case "colorize-active-shape":
				// Ctrace("button color:{0}", button.hexColor);
				var active_shape  = button.scene.getActiveShape();
				if (active_shape) active_shape.fillColor = button.hexColor || 0xffffff;
			break;
		}
    }
	/** @param {Shape} shape */
	shapesMarkSwitch(shape){
		// Ctrace("Level > shapesMarkSwitch > shape:{0} isMarked:{1}", shape.instanceName, shape.isMarked);
		// console.dir(shape);
		if (!shape.isMarked) { // unmark are not allowed (always one shape must be marked)
			shape.setMarked(true);
			return;
		}
		this.all_color_shapes.list.forEach(function (s) {
			if (s.instanceName != shape.instanceName){
				// unmark rest
				s.setMarked(false);
			}	
		})
	}
	getActiveShape(){

		var active_shape;
		this.all_color_shapes.list.forEach(function (s) {
			if (s.isMarked) active_shape = s
		})
		return active_shape;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
