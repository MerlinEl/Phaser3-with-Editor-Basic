
// You can write more code here

/* START OF COMPILED CODE */

class BtnRefreshPage extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 32, y ?? 32);

		// skinUp
		const skinUp = scene.add.image(0, 0, "restart", 0);
		this.add(skinUp);

		// skinDown
		const skinDown = scene.add.image(0, 0, "restart", 1);
		this.add(skinDown);

		// hitArea
		const hitArea = scene.add.rectangle(0, 0, 80, 80);
		this.add(hitArea);

		this.skinUp = skinUp;
		this.skinDown = skinDown;
		this.hitArea = hitArea;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Image} */
	skinUp;
	/** @type {Phaser.GameObjects.Image} */
	skinDown;
	/** @type {Phaser.GameObjects.Rectangle} */
	hitArea;

	/* START-USER-CODE */
	onPressed(){
	}
	onReleased(){

		window.location.reload();

		// manual cache clear > chrome > chrome://settings/siteData

		//main.js?cachebust=randomizedvalue

		// var debug = false;
		// var options = document.getElementById('browser-options');
		// Ctrace("BtnRefreshPage > options:{0}", options);
		// Ctrace("BtnRefreshPage > options.value:{0} enabled:{1}", options.getAttribute("clear_cache"), options.getAttribute("clear_cache") == "true");
		// console.dir(options);
		// if (options.getAttribute("clear_cache") == "true") {

		// 	/** @type {HTMLCollection} */
		// 	var elements = document.getElementsByTagName('script');
		// 	var scripts = Array.from(elements);
		// 	// Ctrace("BtnRefreshPage > scripts:{0}", scripts);
		// 	// console.dir(scripts);
		// 	var rep = /.*\?.*/;
		// 	scripts.forEach(s=>{
		// 		var src = s.src;
		// 		if (src !== "") {
		// 			if (debug) Ctrace("BtnRefreshPage > script:{0} src:{1}", s, src);
		// 			if (rep.test(src)) {
		// 				s.src = src + '&' + Date.now();
		// 			}
		// 			else {
		// 				//s.src = src + '?' + Date.now();
		// 				s.src = src + '?cachebust=' + Date.now();
		// 			}
		// 			if(debug) Ctrace("\tsrc:{0}", s.src);
		// 		}
		// 	})
		// }
		// if(!debug){		
		// 	window.history.go(0);
		// 	window.location.href = window.location.href;
		// 	// setTimeout(() => window.location.reload());
		// 	//window.history.forward(1); //javascript empty cache and hard reload
		// 	// window.location.reload();
		// }

		// const ifr = document.createElement('iframe');
		// ifr.src = "/forcereload?path=/src/components";
		// ifr.classList.add("hidden-iframe");
		// document.body.appendChild(ifr);
		// if (!window.location.hash) {
		// 	window.location.hash = "#reloading";
		// 	window.location.reload();
		// } else {
		// 	window.location.hash = "#reloaded";
		// }
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
