/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * @class {Orien.SceneManager}
 */
class SceneManager {

	/** @type {Phaser.Structs.Size} */
	static windowSize = new Phaser.Structs.Size(1024, 768);

	/** @type {Phaser.Game} */
	game;

	/** @type {Phaser.Scenes.SceneManager} */
	sceneManager;
	
	/** @type {InteractiveSpline} */
	activeSpline;
	
	/** @type {string} */
	sceneName="";

	/** 
	 * Loads a scene using Preloader
	 * @param {Phaser.Scenes} scene
	 * @param {string} sceneName
	 * @returns {void}  
	 * @eample SceneManager.loadSceneByName(scene, "Level_003")
	*/
	static loadSceneByName(scene, sceneName){
// Ctrace("GAME:{0}", this.game)
		Ctrace('-----------------------------------------------------------------------------');	
		Ctrace(this.name + " > loadSceneByName > sceneName:{0}", sceneName);
		this.sceneName = sceneName;
		this.sceneManager = scene.scene; //Phaser.Scenes.SceneManager
		this.sceneManager.launch("Preloader");
		scene.scene.stop();
		//scene.pause();
	}
	static loadScene(preloader){

		this.preloader = preloader;
		// Ctrace(this.name + " > loadScene >:{0}", preloader);
		// console.dir(preloader)
		var isSeneLoaded = this.isSceneLoaded(this.sceneManager ,this.sceneName);
		if (isSeneLoaded){
			
			Ctrace(this.name + " > loadScene > sceneName:{0} isSeneLoaded:{1}", this.sceneName, isSeneLoaded);
			this.sceneManager.start(this.sceneName);

		} else {

			Ctrace(this.name + " > loadScene > sceneName:{0} isSeneLoaded:{1}", this.sceneName, isSeneLoaded);
			AssetLoader.loadSceneFromFile(preloader, this.sceneName);
			preloader.load.once(Phaser.Loader.Events.COMPLETE, () => {

				this.sceneManager.start(this.sceneName);
			})
		}
	}
	/** 
	 * Register preloder for display progress
	 * @param {Phaser.Scenes} scene
	 */
	static registerPreloader(scene){
		Ctrace(this.name + " > registerPreloader > START!");
		scene.load.on(Phaser.Loader.Events.PROGRESS, this.updatePreloaderProgress);
		scene.load.once(Phaser.Loader.Events.COMPLETE, ()=>{

			this.removePreloader();
			Ctrace(this.name + " > registerPreloader > DONE!");
		});
	}
	static updatePreloaderProgress(percentage){

		SceneManager.preloader.updateProgress(percentage);
	}
	static removePreloader(){

		SceneManager.preloader.scene.stop();
		//this.sceneManager.remove("Preloader");
	}
	static isSceneLoaded(sceneManager, sceneName){
		
		var s = this.getSceneByName(sceneManager, sceneName);
		return s ? s.scene.key == sceneName : false;
	}
	static getSceneByName(sceneManager, sceneName){

		return sceneManager.get(sceneName);
	}
	static isMobile(){
		//TODO
		return false;
	}
}




// DROPPED

// var scenes = scene.manager.scenes;
// for (var i = 0; i < scenes.length; i++){
	
// 	var s = scenes[i].scene;
// 	// Ctrace("\tA:{0} B:{1} match:{2}", s.key, sceneName, s.key == sceneName);
// 	if (s.key == sceneName) return s;
// }
// return null;
// this.destroy.all.unused(true)

// static Unload(scene, data)
// {
	
// 	/*Animations are loaded from JSON files that are linked to spritesheets, however
// 	  We don't want to be too picky about the order in which things are unloaded
// 	  so we can't guarantee those JSON files will still exist. Thus we need to get
// 	  the animation data from the scene so we can figure out which ones need to be
// 	  removed.*/
// 	var animationData = scene.anims.toJSON().anims;
	
// 	for(var i = 0; i < data.length; i++)
// 	{
		
// 		switch (data[i].type)
// 		{
			
// 			case "image":
// 				//Unload Images by removing from the textures cache
// 				scene.textures.remove(data[i].id); 
// 				break;
			
// 			case "spritesheet":
// 				//Spritesheets are composed of a texture and animation data, so we need to remove the texture
// 				scene.textures.remove(data[i].id); 

// 				//Pick out which animations correspond to this spritesheet so we can remove them
// 				var animations = animationData.filter(function(val)
// 				{
					
// 					/*Our naming convention is that Spritesheet "Key" is given animations
// 					  with keys matching the format "Key-AnimationName". Therefore if we
// 					  remove that spritesheet, we remove all of the animations corresponding
// 					  to it. If your naming convention is different, then modify as necessary.*/
// 					return (val.key.indexOf(data[i].id + "-") == 0);
					
// 				});
				
// 				for(var j = 0; j < animations.length; j++)
// 				{
					
// 					scene.anims.remove(animations[j].key);
					
// 				}
				
// 				break;
			
// 			case "json":
// 				//The cache member of a scene has a bunch of subcaches for most other assets, so remove from there as necessary
// 				scene.cache.json.remove(data[i].id); 
// 				break;
			
// 			case "sound":
// 				scene.cache.audio.remove(data[i].id);
// 				break;
			
// 			case "music":
// 				scene.cache.audio.remove(data[i].id);
// 				break;
			
// 		}
		
// 	}
	
// }



   	/*getScenePosition(item){

		var secenePos = {x:0, y:0};
		var parent = item.parentContainer;
		// Ctrace("parent:{0}", parent);
		while (parent){
			secenePos.x += parent.x;
			secenePos.y += parent.y;
			parent = item.parentContainer;
			// Ctrace("\tparent:{0}", parent);
		}
		return secenePos;
	}*/
	// getComponentRectangle(co){


	// }
	// shutDownSceneByName(game, scene_name){

	// 	Ctrace("shutDownSceneByName > scene:{0}", scene_name);
	// 	var targetScene;
	// 	game.scene.scenes.forEach(scene => {
	// 		Ctrace("\tlist scene:{0}", scene.constructor.name)
	// 		if (scene.constructor.name == scene_name) targetScene = scene;
	// 	})
	// 	if (targetScene) {

	// 		Ctrace("shutDownSceneByName > scene:{0}", targetScene.constructor.name)
	// 		console.dir(targetScene);
	// 		targetScene.events.shutdown();
	// 	}
	// }

	// enableSceneByName(game, scene_name, state){

	// 	Ctrace("enableSceneByName > game:{0} scene name:{1} state:{2}\n\tscenes:{3}", game, scene_name, state, game.scene.scenes);
	// 	var targetScene;
	// 	game.scene.scenes.forEach(scene => {
	// 		Ctrace("\tscene:{0}", scene.constructor.name)
	// 		if (scene.constructor.name == scene_name) targetScene = scene;
	// 	})
	// 	if (targetScene) state ? targetScene.events.on() : targetScene.events.off();
	// }
	
//if (this.sceneName == "Main") scene.restart("Main");
			//scene.restart(this.sceneName);
			// this.enableSceneByName(game, this.sceneName, true);
					// 	console.dir(currentScene);
		// 	currentScene.events.off();//.destroy();
 		// 	scene.start(this.sceneName);
		// Ctrace("NavigateToScene > scene:{0}", this.scene);
//this.shutDownSceneByName(game, currentScene.constructor.name);
			// console.dir(game.scene.scenes[0]);

			//scene.destroy.call(scene);