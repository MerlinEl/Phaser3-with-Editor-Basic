/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class InteractiveSpline {

    allDots = [];
    allSplines = {};
    lineThicness = 3;
    lineColor = 0xffffff;
    handleColor = 0x00ff00;
    handleStrokeColor =0xff0000;
    isPlaying = false;
    followerObject;
    /** 
     * @param {Phaser.Scene} scene
     * @param {Phaser.Structs.List<Dot>} dots
     * @param {Phaser.GameObjects.GameObject} followerObject
     */
    constructor(scene, dots, followerObject){
        
        Ctrace("InteractiveSpline > registerDots > dots:{0}", dots.length);
        this.scene = scene;
        this.allDots = dots;
        this.followerObject = followerObject;
        this.init();
    }
    init(){
        
        // sort all dots by index order 1,2,3,....
        this.allDots.sort(function(a, b) {
            return a.index - b.index;
        });

        // add graphics layers
        this.splineGraphics = this.scene.add.graphics();
        this.ballGraphics =  this.scene.add.graphics();

        //Collection.bringToSceneTopMulti(scene, this.allDots);
        this.loadData();
        this.initSpline();
        this.initHandles();
        this.updateSpline();
        this.addFollower();
        this.editMode = false;
    }
    initHandles(){
        this.allDots.forEach(dot=>{

            dot.drawHandles();
        })
    }
    initSpline(){ // first and last point is with single handle
        
        // build splines > take one handle of each DOT
        this.allSplines = [];
        for(let i = 0; i < this.allDots.length-1; i++){
            this.allSplines.push({ // spline
                index:i,
                name:"spline_" + Orien.String.zeoBasedStrNum(i, 4),
                dotIn:this.allDots[i], 
                dotOut:this.allDots[i + 1]}
            );
            Ctrace("InteractiveSpline > initSpline > DOT PAIR in:{0} out:{1}", this.allDots[i].instanceName, this.allDots[i + 1].instanceName)
        }
    }
    updateSpline(handle){
        this.path = new Phaser.Curves.Path(this.allDots[0].x, this.allDots[0].y); // create first point
        // Ctrace("InteractiveSpline > updateSpline > splines:{0}", this.allSplines.length);
        this.allSplines.forEach(spline => {

            // get slpine params
            var startPoint = spline.dotIn.pos;
            var endPoint = spline.dotOut.pos;

            // this.path.lineTo(endPoint.x, endPoint.y); // straight line for debug only

            var controlPoint1 = this.localToGlobal(startPoint, spline.dotIn.handleB.pos);
            var controlPoint2 = this.localToGlobal(endPoint, spline.dotOut.handleA.pos);

            // Create Spline
            var curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);
            // append curve in to path
            this.path.add(curve);
        });

        this.splineGraphics.clear();
        this.splineGraphics.lineStyle(this.lineThicness, this.lineColor, 1);
        this.path.draw(this.splineGraphics);

        if (handle && handle.componentType == "handle") handle.drawLine();
    }
    localToGlobal(parentPoint, childPoint){

        return {
           x:Math.round(parentPoint.x + childPoint.x),      
           y:Math.round(parentPoint.y + childPoint.y),
        }
    }
    addFollower(){

        var go = this.followerObject;
        //go.visible = false;

        // setup folower start values
        this.follower = { 
            t: 0, // current time
            s: 0, // current scale
            vec: new Phaser.Math.Vector2(), // current position on path 
            offset: 90 // rotation ofset in degrees
        };
        
        // add calback to timer
        this.timeEvent = this.scene.time.addEvent({

            delay:40, // refresh rate
            callback:function(){
                
                // Move To Path
                this.path.getPoint(this.follower.t, this.follower.vec);
                go.setPosition(this.follower.vec.x, this.follower.vec.y);
                
                // Scale To
                go.scaleX = this.follower.s; // 0 - max scale are set-up in tween
                go.scaleY = this.follower.s; // 0 - max scale are set-up in tween
                
                // Rotate To Path
                var nextPoint = this.path.getPoint(
                    this.follower.t + 0.1 <= 1 ? this.follower.t + 0.1 : 1
                );
                go.rotation = Math.atan2(
                    nextPoint.y - this.follower.vec.y, 
                    nextPoint.x - this.follower.vec.x
                ) + Phaser.Math.DegToRad(this.follower.offset);

                //Ctrace("run") // debug test if timer is on - off
            },
            callbackScope:this,
            loop:true
        })
        this.timeEvent.paused = true;
        go.setPosition(this.follower.vec.x, this.follower.vec.y);
    }
    moveAlongPath(){

        var go = this.followerObject;
        if (!go) return;
        go.visible = true;
        go.alpha = 1; // set alpha to 1
        go.play(); // start gameObject internal animation
        var timeEvent = this.timeEvent;
        this.path.getPoint(this.follower.t, this.follower.vec);
        this.tween = go.scene.tweens.add({
            targets: this.follower,
            t: 1, // max time
            s: 1, // max scale
            ease: 'Linear', //'Sine.easeInOut'
            duration: 4000,
            yoyo: false,
            repeat: 0,
            onComplete: function(){
                
                go.playEffect(1400).events.once("effect-complete", function(){

                    Ctrace("InteractiveSpline > moveAlongPath > Bonus Finished!");
                    go.scene.events.emit("spline-animation-complete");
                    // tween.remove();
                    this.isPlaying = false;
                });
                // stop move go along path
                timeEvent.loop = false;
                timeEvent.paused = true;
                // stop gameObject internal animation
                go.stop();
                go.showFlare();
                // timeEvent.remove(); // stop move object along path
            }
        });
    }
    play(){

        if (this.isPlaying) return;
        this.isPlaying = true;
        this.timeEvent.loop = true;
        this.timeEvent.paused = false;
        this.tween?.restart();
        this.moveAlongPath();
    }
    stop(){

        this.tween.stop();
        this.isPlaying = false;
    }
    printData(){

        var splineData = this.getSplineData();
        var strData = JSON.stringify(splineData);
        Ctrace("InteractiveSpline > data:\n{0}", strData);
    }
    saveDataToFile(){

        var splineData = this.getSplineData();
        var strData = JSON.stringify(splineData);
        // Ctrace("InteractiveSpline > saveData > data:\n{0}", strData);
        //this.scene.save.text(strData, 'assets/settings/SplineData.json');
        FileManager.saveFile("SplineData.json", strData);
    }
    loadDataFromFile(){

        this.scene.events.once("file-load-finished", function(data){

            // Ctrace("InteractiveSpline > loadDataFromFile > data:\n{0}", data);  
            this.loadData();
            this.initHandles();
            this.updateSpline(); 

        }, this);
        FileManager.readFile(this.scene, "SplineData.json");
    }
    loadData(){

        var strData = this.scene.cache.text.get('SplineData');
        var jsonData = JSON.parse(strData);
        // Ctrace("InteractiveSpline > loadData > data:\n{0}", strData);
        // console.dir(jsonData);
        this.setSplineData(jsonData);
    }
    setSplineData(data){

        this.allDots.forEach(dot => {
            
            var dotData = data[dot.instanceName];
            if (dotData){

                dot.pos = dotData.dotPos
                dot.handleA.setPos(dotData.handleAPos); 
                dot.handleB.setPos(dotData.handleBPos);
            }
        })
    }
    getSplineData(){

        var splineData = {};
        this.allDots.forEach((dot)=>{

            var data = {
                dotPos:dot.pos,
                handleAPos:dot.handleA.pos,
                handleBPos:dot.handleB.pos
            }
            splineData[dot.instanceName] = data;
        });
        return splineData;
    }
    get editMode(){
        
        return this.splineGraphics.visible;
    }
    set editMode(state){
Ctrace("InteractiveSpline > editMode > state:{0}", state);
        this.splineGraphics.visible = state;
        this.allDots.forEach((dot)=>{dot.visible = state;});
    }
}