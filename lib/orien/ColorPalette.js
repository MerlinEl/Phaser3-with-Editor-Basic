/**
 * Static Class with many nice colors
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class ColorPalette {

    static appBackground = 0x874ecd;
    static palette = {
        taskColors: {

            "Done": 0x00ff00,
            "Error": 0xff0000,
            "In Progress": 0xff8000,
            "On Hold": 0xff00ff,
            "None": 0xc0c0c0
        },
        cardColors: {

            "blue": 0x99ccff,
            "green": 0xa2e083,
            "yellow": 0xffff8a,
            "pink": 0xffb0ca
        },
        pastelColors: {
            "violet": 0xC642DC,
            "purple": 0x927EF2,
            "blue": 0x46ABFE,
            "light-blue": 0x64DBFE,
            "green": 0x65FEB6,
            "yellow": 0xFBFE6C,
            "orange": 0xFE9462,
            "red": 0xFE5864,
            "pink": 0xFE8DFE
        },
        basicColors: {
            "white": 0xffffff,
            "gray": 0x676767,
            "black": 0x000000,
            "red": 0xdc0000,
            "red-orange": 0xe05d0e,
            "orange": 0xe68e1b,
            "yellow-orange": 0xf3d02d,
            "yellow": 0xfefc38,
            "yellow-green": 0xc5ff39,
            "green": 0x76cf2c,
            "blue-green": 0x5da7aa,
            "blue": 0x0e00d1,
            "blue-purple": 0x5e00fa,
            "purple": 0xa600d7,
            "red-purple": 0xb5009f
        },
        uiColors: {
            "white": 0xe9e9e9,
            "gray": 0xb1b1b1,
            "black": 0x8a8a8a,
            "red": 0xdc9f9f,
            "red-orange": 0xdebaa4,
            "orange": 0xe2c9aa,
            "yellow-orange": 0xe8deb1,
            "yellow": 0xedecb6,
            "yellow-green": 0xdeeeb7,
            "green": 0xc2dbae,
            "blue-green": 0xbdd1d2,
            "blue": 0xa29ed8,
            "blue-purple": 0xbca2e7,
            "purple": 0xcc9fda,
            "red-purple": 0xce9cc8
        }
    };
    /**
     * @param {string} paletteName
     * @param {string} colorName
     * @return {integer}
     * @example ColorPalette.getColor("uiColors", "blue-purple");
     */
    static getColor(paletteName, colorName) {

        // Ctrace("ColorPalette > getColor > paletteName:{0} colorName:{1}", paletteName, colorName);
        var p = ColorPalette.palette[paletteName];
        // Ctrace("ColorPalette > getColor > paletteName:{0} colorName:{1}", paletteName, colorName);
        if (!p) return undefined;
        return p[colorName];
    }
    /**
     * not tested, not used
     * @example ColorPalette.getRandomColor("uiColors");
     */
    static getRandomColor(paletteName) {
        var p = ColorPalette.palette[paletteName];
        if (!p) return undefined;
        var keys = Object.keys(p);
        return obj[keys[keys.length * Math.random() << 0]];
    }
    /**
     * clr: 0xce9cc8
     * val: 1 - 255
     */
    static darkenColor(clr, val) {
        return new Phaser.Display.Color.IntegerToColor(clr).darken(val).color;
    }

    /**
     * Convert one type of string color to another ( 0xff00ff <=> #ff00ff )
     * @example var clr = ColorPalette.stringColorAsType(this.textColor, "#");
     * @param {string} clrStr "0xff00ff" or "#ff00ff"
     * @param {string} prefix "0x" or "#""
     */
    static stringColorAsType(clrStr, prefix){

        var clr = clrStr.split("0x").pop().split("#").pop();
        return prefix + clr;
    }
};