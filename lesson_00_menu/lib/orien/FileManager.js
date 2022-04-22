/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var FileManager = {

    loadFont(name, url) {
        var newFont = new FontFace(name, `url(${url})`);
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            return error;
        });
    },
    /**
     * @param {string} fname "SplineData.json"
     * @param {string} data abc\ndef 
     */
    saveFile(fname, data){

        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(new Blob([data], {type: "text/plain;charset=utf-8"}));
        a.download = fname;
        a.click();
    },
    /**
     * param {string} extensions ".text, .json, .js"
     */
    readFile(scene, extensions = ".text"){
    
        var ie = document.createElement("input");
        ie.style.display="none";
        ie.type = "file";
        ie.name = "file-input";
        ie.title = "Open a Settings(Json) File:"
        ie.accept = extensions;
        ie.addEventListener('change', () => {
            if (ie.files) {
                var f = ie.files[0];
                var fr = new FileReader()
                fr.onload=function(){
                    
                    scene.events.emit("file-load-finished", fr.result);
                }
                fr.readAsText(f);
            }
        });
        ie.click();
    },
    /**
     * Store Data in LocalStorage under a Key
     * Use the HTNL5 LocalStorage API. (almost all browsers support it)
     */
    setLocalData(key, val){

      var localStorage = this.getLocalStorage();
      if( localStorage ){
        Ctrace("FileManager > setLocalData > key:{0} val:{1}", key, val);
        localStorage.setItem(key, val);
      }
    },
    /**
     * Retrive Data from LocalStorage under a Key
     * Use the HTNL5 LocalStorage API. (almost all browsers support it)
     */
    getLocalData(key){

      var localStorage = this.getLocalStorage();
      if( localStorage ){

        var data = localStorage.getItem(key);
        Ctrace("FileManager > getLocalData > data:{0}", data);
        console.dir(data);
        return data;
      }
      return null;
    },
    // Check if it is supported in your browser
    getLocalStorage(){
      try {
        return window['localStorage'];
      }
      catch (e) {
        return null;
      }
    }
}

/*
new FontFace("bitmicro01", "url(assets/BitMicro01.ttf)")
  .load()
  .then(function (loaded) {
    document.fonts.add(loaded);
    new Phaser.Game(config);
  })
  .catch(function (error) {
    return error;
  });
*/