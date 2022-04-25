/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

// Append Static Class ro Orien Object
Orien.Math = {
    
    /**
     * Round decimal value to a specific place.
     * @example {function} McMath.roundToDecimals(1.521, 2); return: 1.52
     * @param	{number} num
     * @param	{number} to decimal places
     * @return	{number}
     */     
    roundToDecimals(num, to = 3) {
        
        var multi = Math.pow(10, to);
        var round_number = Math.round(num * multi);
        return round_number / multi;
    }
}