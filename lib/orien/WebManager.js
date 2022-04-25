/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var WebManager = {

    /**
     * @param {String} folderName
     * @param {Number} localID
     * @param {String} urlPath
     */
    navigateToPageByName(folderName, localID, urlPath, debug = false){

        if (debug) Ctrace("NavigateToURL > pointerup > folderName:{0} localID:{1} urlPath:{2}", folderName, localID, urlPath);

        var url;
        if (urlPath) { // if url is given, loaw web page directly

            window.open(urlPath);
            return;
            
        } else {
            
            var host = window.location.hostname;
            if (host == "cestaslunce.cz"){ // online
                
                if (!folderName) return;
                switch(folderName){

                    case "Home": 
                        url = "/domains/"+host;
                    break;
                    case "Menu":
                        url = "/domains/"+host+"/testy/Phaser3";
                    break;
                    default:
                        url = '_lessons/' + folderName + "/index.html";
                }

            } else { // local

                if (!localID) return;
                url = "http://"+host+":"+localID+"/editor/external/";
            }
        }
        if (!debug) window.location.href = url;
		if (debug) Ctrace("WebManager > navigateToPageByName >\n\thost:{0}\n\turl:{1}", host, url);
    }
}

//call this for open folder in online editor
//url = "/domains/"+host+"/testy/Phaser3";

