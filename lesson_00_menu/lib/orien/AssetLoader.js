/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class AssetLoader {

    /** 
     * Loading - Reloading Scripts in "scripts-asset-pack.json"
     * @param {Phaser.Scene} scene
		AssetLoader.loadScriptsFromAsset(this);
		this.events.once("scripts-assets-loading-done", ()=>{
			// ...
		});
    */
    static loadScriptsFromAsset(scene){

        var forceLoad = this.needToClearCache();
        console.log(this.name + " > loadScriptsFromAsset > forceLoad:" + forceLoad);

		scene.load
		.json("scripts-asset-pack", "assets/scripts-asset-pack.json")
		.once("filecomplete-json-scripts-asset-pack", (key, type, levels) => {
			
            var cnt = levels.section1.files.length;
			levels.section1.files.forEach(f=>{

				// console.log("\tLoading script:" + f.key)
                var url = f.url + (forceLoad ? '?cachebust=' + Date.now() : "");
				scene.load
				.script(f.key, url)
				.once("filecomplete-script-" + f.key, (key, type, data) => {

					// console.log("\tdone:" + f.key);
                    cnt--;
                    if (cnt <=0){
                        // console.log("Preloaded!");
                        scene.events.emit("scripts-assets-loading-done");
                    }
				});
			})
		})
    }
    /** 
     * Loading - Reloading Scenes which is in "levels-asset-pack.json"
     * @param {Phaser.Scene} scene
    */
    static loadScenesFromAsset(scene){
		
        var forceLoad = this.needToClearCache();
        console.log(this.name + " > loadScenesFromAsset > forceLoad:" + forceLoad);

		scene.load
		.json("levels-asset-pack", "assets/levels-asset-pack.json")
		.once("filecomplete-json-levels-asset-pack", (key, type, levels) => {
			
			levels.section1.files.forEach(f=>{

				// Ctrace("\tLoading scene:{0}", f.key)
                var url = f.url + (forceLoad ? '?cachebust=' + Date.now() : "");
				scene.load
				.script(f.key, url)
				.once("filecomplete-script-" + f.key, (key, type, data) => {
					// Ctrace("\tadd scene:{0}", f.key); // reach this point only in preload state
					scene.game.scene.add(f.key, eval(f.key));
				});
			})
		})
	}
	/**
	 * Load Scene from Asset ( use this method at preload state )
	 * @used in Preload.js
	 * @param  {Phaser.Scene} scene
	 */
	static loadSceneFromFile(scene, levelName){
		
		var forceLoad = this.needToClearCache();
        console.log(this.name + " > loadSceneFromFile > scene:"+ levelName +" forceLoad:" + forceLoad);

		var url = "src/scenes/"+levelName+".js" + (forceLoad ? '?cachebust=' + Date.now() : "");
				
		scene.load
		.script(levelName, url)
		.once("filecomplete-script-" + levelName, (key, type, data) => {
			// Ctrace("\tadd scene:{0}", levelName); // reach this point only in preload state
			scene.scene.add(levelName, eval(levelName));
		})
	}
	/**
	 * Read state from index tag: 
	 * <options id="browser-options" clear_cache="true" ></options>
	 */
    static needToClearCache(){

        var options = document.getElementById('browser-options');
        return options.getAttribute("clear_cache") == "true";
    }
	/**
	 * Load Assets from assetList
	 * @param {Phaser.Scene} preloader
	 * @param {array} assetList
	 * @returns {void} 
	 * @eample AssetLoader.loadAssets(scene, ["sound-pack", "image-pack"]);
	*/
	static loadAssets(preloader, assetList){

		// Ctrace(this.name + " > loadAssets > assets:{0}", this.assetList.length);
		if (!assetList || assetList.length == 0) return;
		// Ctrace(this.name + " > loadAssets > assets:{0}", this.assetList.length);
		assetList.forEach(n=>{
			
			if (!this.isAssetLoaded(n)){
				
				Ctrace(this.name + " > loadAssets > asset:{0}", n);
				// console.dir(preloader) // Preloader
				preloader.load
				.pack({
					key: n,
					url: "./assets/" + n + ".json"
				})
				// .once("complete", (loader)=>{
				// 	Ctrace("\tPACK {0} WAS LOADED!", n)
				// 	preloader.events.emit("scene-assets-was-loaded");
				// 	console.dir(loader); // LoaderPlugin
				// })
			}			
		})
	}
	/**
	 * Check if Assets are allready loaded
	 */
	static isAssetsLoaded(assetList){

		var isLoaded = true;
		if (!assetList || assetList.length == 0) return isLoaded;
		assetList.forEach(assetName => {
			
			if (!this.isAssetLoaded(assetName)){
				
				isLoaded = false;
			} 
		})
		return isLoaded;
	}
	/** 
	 * @param {Phaser.Game} game
	 * @param {string} assetName
	 * @return {boolean}
	 */
	static isAssetLoaded(assetName){
		
		var jsonEntries = SceneManager.game.cache.json.entries.entries;
		// Ctrace(this.name + " > isAssetLoaded > jsonEntries:{0}", jsonEntries);
		// console.dir(jsonEntries);
		for (var n in jsonEntries){
			// Ctrace("\tsrc:{0} trgt:{1} match:{2}", assetName, n, n == assetName);
			if (assetName == n) return true;
		}
		return false;
	}
	/**
	 * @param {string} pluginName - "ninePatch"
	 * @example AssetLoader.registerPlugins(["ninePatch", "roundedRectangle"]);
	 */
	static registerPlugins(namesArray){

		namesArray.forEach(pluginName => {
			var fn = null;
			switch (pluginName){

				case "ninePatch":
					fn = function (x, y, width, height, key, frame) {
						return this.displayList.add(new NinePatch(this.scene, x, y, width, height, key, frame));
					};
				break;
				case "roundedRectangle":
					fn = function (x, y, width, height) {
						return this.displayList.add(new RoundedRectangle(this.scene, x, y, width, height));
					};
				break;
			}
			if (fn) Phaser.GameObjects.GameObjectFactory.register(pluginName, fn);
		})
	}
}