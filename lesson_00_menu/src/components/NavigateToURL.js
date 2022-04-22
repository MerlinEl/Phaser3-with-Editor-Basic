
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class NavigateToURL extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__NavigateToURL"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {NavigateToURL} */
	static getComponent(gameObject) {
		return gameObject["__NavigateToURL"];
	}

	/** @type {} */
	gameObject;
	/** @type {string} */
	instanceName = "";
	/** @type {number} */
	localID = 3492;
	/** @type {string} */
	folderName = "folder_01";
	/** @type {string} */
	urlPath = "https://www.site.com";
	/** @type {number} */
	hitAreaScaleX = 1;
	/** @type {number} */
	hitAreaScaleY = 1;

	/* START-USER-CODE */

	awake() {

		var go = this.gameObject;
		// expose variable to parent object
		go.instanceName = this.instanceName;
		// make gameObject interactive
		InteractiveArea.setInteractive(go, {x:this.hitAreaScaleX, y:this.hitAreaScaleY}, "rectangle");
		// register events
		go.on("pointerdown", () => {

			this.scene.add.tween({
				targets: go,
				scaleX: "*=0.8",
				scaleY: "*=0.8",
				duration: 80,
				yoyo: true
			});
		})
		.on('pointerup', () => { 

			WebManager.navigateToPageByName(this.folderName, this.localID, this.urlPath);
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
/*
window.location
.hash: ""
.host: "127.0.0.1:3492"
.hostname: "127.0.0.1"
.href: "http://127.0.0.1:3492/editor/external/"
.origin: "http://127.0.0.1:3492"
.pathname: "/editor/external/"
.port: "3492"
.protocol: "http:"
*/