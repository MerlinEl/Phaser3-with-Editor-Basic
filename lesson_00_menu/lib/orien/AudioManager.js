/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var AudioManager = {

    audioLib:{},
    // create sounds library
    createLibrary(sound, soundNames){
        
        soundNames.forEach(sound_name =>{
        
            this.audioLib[sound_name] = sound.add(sound_name, {
                volume: 0.8,
                loop: false
            }) 
        })
    },
    // play sound by name (if is found)
    playAudio(sound_name){

        this.audioLib[sound_name]?.play();
    }
}

