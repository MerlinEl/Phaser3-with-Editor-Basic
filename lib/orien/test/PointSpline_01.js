/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

class PointSpline_01 {

    allDots = [];
    allSplines = {};
    lineThicness = 3;
    lineColor = 0xffffff;
    handleColor = 0x00ff00;
    handleStrokeColor =0xff0000;
    isPlaying = false;
    activeBonus;
    /** 
     * @param {Phaser.Scene} scene
     * @param {Phaser.Structs.List<Phaser.GameObjects.GameObject>} allDots
     * @param {Phaser.GameObjects.GameObject} activeBonus
     */
    constructor(scene, allDots, activeBonus){
        
        Ctrace("PointSpline > registerDots > allDots:{0}", this.allDots.length);
        this.scene = scene;
        this.allDots = allDots;
        this.activeBonus = activeBonus;
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

        // add a ball in to path
        this.follower = { t: 0, vec: new Phaser.Math.Vector2() };
        // var timeEvent = this.scene.time.addEvent({

        //     delay:40,
        //     callback:function(){
        //         this.ballGraphics.clear();
        //         this.path.getPoint(this.follower.t, this.follower.vec);
        //         this.ballGraphics.fillStyle(0xff0000, .8); // alpha .8
        //         this.ballGraphics.fillCircle(this.follower.vec.x, this.follower.vec.y, 30);
        //     },
        //     callbackScope:this,
        //     loop:true    
        // })

        this.timeEvent = this.scene.time.addEvent({

            delay:40,
            callback:function(){
                this.path.getPoint(this.follower.t, this.follower.vec);
                this.activeBonus.setPosition(this.follower.vec.x, this.follower.vec.y);

                this.activeBonus.scaleX = this.follower.t; // 0 - 1
                this.activeBonus.scaleY = this.follower.t; // 0 - 1
            },
            callbackScope:this,
            loop:true    
        })

        //this.timeEvent.remove();
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
            Ctrace("PointSpline > initSpline > DOT PAIR in:{0} out:{1}", this.allDots[i].instanceName, this.allDots[i + 1].instanceName)
        }
    }
    updateSpline(handle){
        this.path = new Phaser.Curves.Path(this.allDots[0].x, this.allDots[0].y); // create first point
        // Ctrace("PointSpline > updateSpline > splines:{0}", this.allSplines.length);
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
    moveAlongPath(scene, path, follower){
 
        path.getPoint(follower.t, follower.vec);
        this.tween = scene.tweens.add({
            targets: follower,
            t: 1,
            ease: 'Sine.easeInOut',
            duration: 4000,
            yoyo: true,
            repeat: -1
        });
    }
    play(){

        if (this.isPlaying) return;
        this.isPlaying = true;
        this.timeEvent.loop = true;
        this.timeEvent.paused = false;
        this.moveAlongPath(this.scene, this.path, this.follower);
    }
    stop(){

        this.tween.restart();
        this.tween.stop();
        this.isPlaying = false;
    }
    printData(){

        var splineData = this.getSplineData();
        var strData = JSON.stringify(splineData);
        Ctrace("PointSpline > data:\n{0}", strData);
    }
    saveDataToFile(){

        var splineData = this.getSplineData();
        var strData = JSON.stringify(splineData);
        // Ctrace("PointSpline > saveData > data:\n{0}", strData);
        //this.scene.save.text(strData, 'assets/settings/SplineData.json');
        FileManager.saveFile("SplineData.json", strData);
    }
    loadDataFromFile(){

        this.scene.events.once("file-load-finished", function(data){

            // Ctrace("PointSpline > loadDataFromFile > data:\n{0}", data);  
            this.loadData();
            this.initHandles();
            this.updateSpline(); 

        }, this);
        FileManager.readFile(this.scene, ".json");
    }
    loadData(){

        var strData = this.scene.cache.text.get('SplineData');
        var jsonData = JSON.parse(strData);
        // Ctrace("PointSpline > loadData > data:\n{0}", strData);
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
    displayControls(state){


    }
    displaySpline(state){


    }
}