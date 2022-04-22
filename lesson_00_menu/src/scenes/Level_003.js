
// You can write more code here

/* START OF COMPILED CODE */

class Level_003 extends Phaser.Scene {

	constructor() {
		super("Level_003");

		/* START-USER-CTR-CODE */
		Ctrace("Constructor:{0}", this)
		console.dir(this);

		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("level-003-asset-pack", "assets/level-003-asset-pack.json");
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

		// ellipse_1_1_1
		const ellipse_1_1_1 = this.add.ellipse(19, 762, 128, 128);
		ellipse_1_1_1.isFilled = true;
		ellipse_1_1_1.fillColor = 6828205;
		ellipse_1_1_1.isStroked = true;
		ellipse_1_1_1.strokeColor = 11173599;
		layer_bottom_bar.add(ellipse_1_1_1);

		// ellipse_1_1
		const ellipse_1_1 = this.add.ellipse(1000, 762, 128, 128);
		ellipse_1_1.isFilled = true;
		ellipse_1_1.fillColor = 6828205;
		ellipse_1_1.isStroked = true;
		ellipse_1_1.strokeColor = 11173599;
		layer_bottom_bar.add(ellipse_1_1);

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
		text_1_1_1_1_1.text = "Loading Images - Preloader";
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

		// layer_images_01
		const layer_images_01 = this.add.layer();

		// slunce_01
		const slunce_01 = this.add.image(136, 223, "slunce_01");
		slunce_01.scaleX = 0.3733464808268985;
		slunce_01.scaleY = 0.3733464808268985;
		layer_images_01.add(slunce_01);

		// duha_01
		const duha_01 = this.add.image(337, 340, "duha 01");
		layer_images_01.add(duha_01);

		// hihlik_a_dederon
		const hihlik_a_dederon = this.add.image(686, 441, "hihlik a dederon");
		hihlik_a_dederon.scaleX = 0.24298187483987924;
		hihlik_a_dederon.scaleY = 0.24298187483987924;
		hihlik_a_dederon.setOrigin(0, 0);
		layer_images_01.add(hihlik_a_dederon);

		// u_itelka_cel_l
		const u_itelka_cel_l = this.add.image(557, 449, "Učitelka_celál");
		layer_images_01.add(u_itelka_cel_l);

		// vcely_na_plastvi
		const vcely_na_plastvi = this.add.image(686, 133, "vcely na plastvi");
		vcely_na_plastvi.scaleX = 0.24280360254299618;
		vcely_na_plastvi.scaleY = 0.24280360254299618;
		vcely_na_plastvi.setOrigin(0, 0);
		layer_images_01.add(vcely_na_plastvi);

		// vetrnik_cukrovi
		const vetrnik_cukrovi = this.add.image(936, 203, "vetrnik cukrovi");
		vetrnik_cukrovi.scaleX = 0.14520000643925923;
		vetrnik_cukrovi.scaleY = 0.14520000643925923;
		layer_images_01.add(vetrnik_cukrovi);

		// tulipany_zlute
		const tulipany_zlute = this.add.image(627, 667, "tulipany zlute");
		tulipany_zlute.scaleX = 0.21512861092017868;
		tulipany_zlute.scaleY = 0.21512861092017868;
		layer_images_01.add(tulipany_zlute);

		// jezek_spi
		const jezek_spi = this.add.image(686, 278, "jezek spi");
		jezek_spi.scaleX = 0.2552494465955001;
		jezek_spi.scaleY = 0.2552494465955001;
		jezek_spi.setOrigin(0, 0);
		layer_images_01.add(jezek_spi);

		// snehulaci_tanci
		const snehulaci_tanci = this.add.image(686, 587, "snehulaci tanci");
		snehulaci_tanci.scaleX = 0.2578152059082043;
		snehulaci_tanci.scaleY = 0.2578152059082043;
		snehulaci_tanci.setOrigin(0, 0);
		layer_images_01.add(snehulaci_tanci);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(685, 132, 196, 136);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isStroked = true;
		rectangle_1.lineWidth = 2;
		layer_images_01.add(rectangle_1);

		// rectangle_1_1
		const rectangle_1_1 = this.add.rectangle(685, 279, 196, 153);
		rectangle_1_1.setOrigin(0, 0);
		rectangle_1_1.isStroked = true;
		rectangle_1_1.lineWidth = 2;
		layer_images_01.add(rectangle_1_1);

		// rectangle_1_1_1
		const rectangle_1_1_1 = this.add.rectangle(686, 440, 196, 136);
		rectangle_1_1_1.setOrigin(0, 0);
		rectangle_1_1_1.isStroked = true;
		rectangle_1_1_1.lineWidth = 2;
		layer_images_01.add(rectangle_1_1_1);

		// rectangle_1_1_1_1
		const rectangle_1_1_1_1 = this.add.rectangle(685, 586, 196, 155);
		rectangle_1_1_1_1.setOrigin(0, 0);
		rectangle_1_1_1_1.isStroked = true;
		rectangle_1_1_1_1.lineWidth = 2;
		layer_images_01.add(rectangle_1_1_1_1);

		// jaderna_elektrarna_Dukovany
		const jaderna_elektrarna_Dukovany = this.add.image(232, 645, "jaderna elektrarna Dukovany");
		jaderna_elektrarna_Dukovany.scaleX = 0.416441997803483;
		jaderna_elektrarna_Dukovany.scaleY = 0.416441997803483;
		layer_images_01.add(jaderna_elektrarna_Dukovany);

		// rectangle_1_1_1_1_1
		const rectangle_1_1_1_1_1 = this.add.rectangle(66, 540, 333, 210);
		rectangle_1_1_1_1_1.setOrigin(0, 0);
		rectangle_1_1_1_1_1.isStroked = true;
		rectangle_1_1_1_1_1.lineWidth = 2;
		layer_images_01.add(rectangle_1_1_1_1_1);

		// eva_hraje_na_ktaru
		const eva_hraje_na_ktaru = this.add.image(98, 476, "Eva hraje na ktaru");
		eva_hraje_na_ktaru.scaleX = 0.27855244173390176;
		eva_hraje_na_ktaru.scaleY = 0.27855244173390176;
		layer_images_01.add(eva_hraje_na_ktaru);

		// u_itelka
		const u_itelka = this.add.image(362, 573, "Učitelka");
		u_itelka.scaleX = 0.7190226006377805;
		u_itelka.scaleY = 0.7190226006377805;
		layer_images_01.add(u_itelka);

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

		this.btnRefreshPage = btnRefreshPage;
		this.btnFullScreen = btnFullScreen;

		this.events.emit("scene-awake");
	}

	/** @type {BtnRefreshPage} */
	btnRefreshPage;
	/** @type {BtnFullScreen} */
	btnFullScreen;

	/* START-USER-CODE */

	// Write your code here
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
