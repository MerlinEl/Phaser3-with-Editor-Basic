/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

// Append Static Class ro Orien Object
Orien.String = {
    
    /**
     * Generate string numbers 01, 02, 03... 10, 20...
     * @examples
        Orien.String.zeoBasedStrNum(10, 4);      // 0010
        Orien.String.zeoBasedStrNum(9, 4);       // 0009
        Orien.String.zeoBasedStrNum(123, 4);     // 0123
        Orien.String.zeoBasedStrNum(10, 4, '-'); // --10
     * @param {number} n Number
     * @param {number} c Zeros Count
     * @param {string} z Zeros Sybol 0 or "-" or "x" or...
     */
    zeoBasedStrNum(n, c, z) {
        z = z || '0';
        n = n + '';
        return n.length >= c ? n : new Array(c - n.length + 1).join(z) + n;
    }
}