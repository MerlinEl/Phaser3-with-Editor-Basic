// version: 1.0.0
class RoundedRectangle extends Phaser.GameObjects.Graphics {
    x = 0;
    y = 0;
    width = 100;
    height = 100;
    fillColor = 0xffffff;
    isFilled = true;
    fillAlpha = 1;
    isStroked = false;
    strokeColor = 0xffffff;
    strokeAlpha = 1;
    lineWidth = 1;
    radius = 20;
    isSingleRadius = true;
    radiusTL = 20;
    radiusTR = 20;
    radiusBL = 20;
    radiusBR = 20;
    shadowColor = 0;
    shadowAlpha = 0;
    shadowOffsetX = 0;
    shadowOffsetY = 0;
    shadowRadius = -1;
    originX = 0.5;
    originY = 0.5;
    constructor(scene, x, y, width, height) {

        super(scene, { x: x, y: y });

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // console.dir(this)

        scene.events.once("update", () => this.redraw());
    }
    redraw() {
        this.clear();
        if (this.isFilled || this.isStroked) {
            let x = this.shadowOffsetX < 0 ? -this.shadowOffsetX : 0;
            let y = this.shadowOffsetY < 0 ? -this.shadowOffsetY : 0;
            let w = this.shadowOffsetX < 0 ? this.width + this.shadowOffsetX : this.width - this.shadowOffsetX;
            let h = this.shadowOffsetY < 0 ? this.height + this.shadowOffsetY : this.height - this.shadowOffsetY;
            if (this.shadowOffsetX !== 0 && this.shadowOffsetY !== 0 && this.shadowAlpha !== 0) {
                this.fillStyle(this.shadowColor, this.shadowAlpha);
                this.fillRoundedRect(x + this.shadowOffsetX, y + this.shadowOffsetY, w, h, this.shadowRadius === -1 ? this.getRadius() : this.shadowRadius);
            }
            if (this.isFilled) {
                this.fillStyle(this.fillColor, this.fillAlpha);
                if (this.isStroked) {
                    x += this.lineWidth / 2;
                    y += this.lineWidth / 2;
                    w -= this.lineWidth;
                    h -= this.lineWidth;
                }
                this.fillRoundedRect(x, y, w, h, this.getRadius());
            }
            if (this.isStroked) {
                this.lineStyle(this.lineWidth, this.strokeColor, this.strokeAlpha);
                this.strokeRoundedRect(x, y, w, h, this.getRadius());
            }
        }
        //this.setOrigin(this.originX, this.originY);
    }
    getRadius() {

        return this.isSingleRadius ? this.radius : { tl: this.radiusTL, tr: this.radiusTR, bl: this.radiusBL, br: this.radiusBR };
    }
    /**
     * TODO Not Works
     * Sets the origin of this Graphics.
     *
     * The values are given in the range 0 to 1.
     *
     * @method Phaser.GameObjects.Components.Origin#setOrigin
     * @since 3.0.0
     *
     * @param {number} [x=0.5] - The horizontal origin value.
     * @param {number} [y=x] - The vertical origin value. If not defined it will be set to the value of `x`.
     *
     * @return {this} This Graphics instance.
     */
    setOrigin(x, y) {

        if (x === undefined) { x = 0.5; }
        if (y === undefined) { y = x; }

        this.originX = x;
        this.originY = y;

        // TODO
        // https://github.com/photonstorm/phaser/blob/59fbcc5ca3f45388b833b07f94aefbc25cd1e24e/src/gameobjects/components/Origin.js
        // console.log(this.originX)
        // console.log(this.originY)

        return this.updateDisplayOrigin();
    }
    /**
    * TODO Not Works
    * Updates the Display Origin cached values internally stored on this Graphics.
    * You don't usually call this directly, but it is exposed for edge-cases where you may.
    *
    * @method Phaser.GameObjects.Components.Origin#updateDisplayOrigin
    * @since 3.0.0
    *
    * @return {this} This Graphics instance.
    */
    updateDisplayOrigin() {

        this.displayOriginX = this.originX * this.width;
        this.displayOriginY = this.originY * this.height;
        return this;
    }
}
