
window.addEventListener('load', function () {
	var config = {
 		width: 1024, //this.canvasWidth * window.devicePixelRatio,
        height: 768, //this.canvasHeight * window.devicePixelRatio,
		type: Phaser.AUTO, //Phaser.WEBGL
        backgroundColor: 0x000000, //ColorPalette.appBackground,
		resolution: window.devicePixelRatio,
		mipmapFilter: "LINEAR_MIPMAP_LINEAR",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},scene: [ Boot, Preload ]
	};
	Orien.game = new Phaser.Game(config);
});

class Boot extends Phaser.Scene {

	preload() {
		
		// Load scripts at runtime
		AssetLoader.loadScriptsFromAsset(this);
		this.events.once("scripts-assets-loading-done", ()=>{
			
			var clr = new Phaser.Display.Color.IntegerToRGB(ColorPalette.appBackground);
			Orien.game.config.backgroundColor.setFromRGB(clr);

			SceneManager.game = Orien.game;	
			FileManager.loadFont("Vijaya_CZ", "assets/fonts/vijaya_cz.ttf");
			Ctrace("Boot > preload scripts > DONE!");	

			// Register Plugins
			AssetLoader.registerPlugins(["ninePatch", "roundedRectangle"]);
		});	

        this.load.plugin('rexdropshadowpipelineplugin', 'lib/filters/rexdropshadowpipelineplugin.min.js', true);
        this.load.plugin('rexglowfilterpipelineplugin', 'lib/filters/rexglowfilterpipelineplugin.min.js', true);
		this.load.plugin('rexoutlinepipelineplugin', 'lib/filters/rexoutlinepipelineplugin.min.js', true);
		this.load.plugin('rexglowfilter2pipelineplugin', 'lib/filters/rexglowfilter2pipelineplugin.min.js', true);
		this.load.plugin('glowpipelineplugin', 'lib/filters/glowpipelineplugin.js', true);
		this.load.plugin('outlineglowpipelineplugin', 'lib/filters/outlineglowpipelineplugin.js', true);
		this.load.plugin('blurpipelineplugin', 'lib/filters/blurpipelineplugin.js', true);

		// Load preloader asset
		this.load.pack("preload-asset-pack", "assets/preload-asset-pack.json");

		// Settup game
		this.cameras.main.setRoundPixels(true); // decerase blur on texts and images

		// Start Preloader
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}

// this.game.canvas.getContext("canvas").imageSmoothingQuality = "high";
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// ctx.imageSmoothingQuality = 'high'; //"low", "medium", "high"

// Ctrace("canvas:{0} ctx:{1} c:{2}", canvas, ctx, this.game.canvas.getContext('2d'))

// this.load.baseURL = "https://www/domains/cestaslunce.cz/testy/Phaser3_Server/";
// this.load.setCORS("Anonymous");
// this.load.setCORS(true);
// this.load.setBaseURL("http://cestaslunce.cz/testy/Phaser3_Server/");

		