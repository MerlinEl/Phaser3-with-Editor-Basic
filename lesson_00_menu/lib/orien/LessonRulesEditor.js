/**
 * @author       MerlinEl <merlin_el@hotmail.com>
 * @copyright    2022
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/** Static class */
 class LessonRulesEditor {
	
    static scrollablePanel = null;
    static _visible = false;
    static uiColors = {

        COLOR_PRIMARY   : 0x4e342e,
	    COLOR_LIGHT     : 0x7b5e57,
	    COLOR_DARK      : 0x260e04,
        COLOR_SELECTED  : 0xe91010
    }
    static lessonBackupData = "";
    static lessonData = {
		selectedCage:null,
        selectedCards:[],
        // template (data will be changed on readLessonSettings)
		name: 'Drag-And-Drop', // lesson type
		cards: [
			{ name: 'card_01' },
			{ name: 'card_02' },
			{ name: 'card_03' },
		],
		cages: [
			{ name: 'cage_01', cards: ['card_01', 'card_03']},
			{ name: 'cage_02', cards: ['card_02']},
			{ name: 'cage_03', cards: ['card_03']},
		],
        // internal methods
		getCageByName(cageName){
			return this.cages.find(item=>{
				return item.name == cageName;
			});
		},
		getCageCards(cageName){
			var cage = this.getCageByName(cageName);
			return cage ? cage.cards : [];
		},
		setCageCards(cageName, cardsName){
			var cage = this.getCageByName(cageName);
			if (cage) cage.cards = cardsName;
		},
		isCorrect(cardName, cageName){

			var cage = this.getCageByName(cageName);
			if (!cage) return false;
			return cage.cards.indexOf(cardName) != -1;
		},
        toString(){

            return JSON.stringify(this);
        },
        fromString(strData){
            
            var data = JSON.parse(strData); 
		    // console.dir(data);
            if (!data) return;
            this.name = data.name || "Drag-And-Drop";
            this.selectedCards = data.selectedCards || [];
            this.cards = data.cards || [];
            this.cages = data.cages || [];
            this.selectedCage = data.selectedCage || null;
            this.selectedCards = this.selectedCage?.cards || [];
            // console.dir(this);
        },
        fromScene(scene){

            var all_cards = scene.all_cards;
            var all_cages = scene.all_cages;
            // Ctrace("Cards and cages:")
            // console.dir(all_cages)
            this.cards = [];
            this.cages = [];
            all_cards.forEach(card=>{ 
                this.cards.push({'name':card.instanceName});
            })
            all_cages.forEach(cage=>{ 
                this.cages.push({'name':cage.instanceName, 'cards':[]});
            })
            // sort arrays alphabetically
            this.cards.sort((a, b)=>{return a.name.localeCompare(b.name)});
            this.cages.sort((a, b)=>{return a.name.localeCompare(b.name)});
            // pickup selections
            this.selectedCage = all_cages[0];
            this.selectedCards = [];
            // console.dir(this);
        }
	};
    static buildPanelFromData(scene, data){

        // Ctrace(this.name + " > buildPanelFromData > ...");
        const LRE = this;
		var createPanel = function (scene, data) {

			// layout with nested sizer (thanks to rexrainbow)
			var panelSizer =  scene.rexUI.add.sizer({
				orientation: 'x',
				space: { item: 10 },
				name: "ContainerPanel"  
			})
			.add(
				createTable(scene, data, 'cages'), // child
				{ expand: true }
			)
			.add(
				createTable(scene, data, 'cards'), // child
				{ expand: true }
			)

			var buttonSizer =  scene.rexUI.add.sizer({
				orientation: 'x',
				space: { item: 10 },
				name: "buttons" 
			})			
			.add(
				CreateButton(scene, 'Cancel', "btn_cancel", LRE.uiColors.COLOR_DARK),
			)
			.add(
				CreateButton(scene, 'Accept', "btn_accept",  LRE.uiColors.COLOR_DARK),
			)
			.add(
				CreateButton(scene, 'Save', "btn_save",  LRE.uiColors.COLOR_DARK),
			)

			var sizer = scene.rexUI.add.sizer({
				orientation: 'y',
				space: { item: 10 },
				name: data.name
			})
			.add(
				createHeader(scene, data), // child
				{ expand: true }
			)
			.add(
				panelSizer,
				{ expand: true }
			)
			.add(
				buttonSizer,
				{ expand: true }
			)
			return sizer;
		}

		var createHeader = function (scene, data) {
			var title = scene.rexUI.add.label({
				orientation: 'x',
				text: scene.add.text(0, 0, 'Rules Editor:'),
				name: "header-title"
			});
			return scene.rexUI.add.sizer({
				orientation: 'x',
				space: { left: 5, right: 5, top: 5, bottom: 5, item: 10 },
				name: "header"
			})
			.addBackground(
				scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, undefined).setStrokeStyle(2, LRE.uiColors.COLOR_LIGHT, 1)
			)
			.add(
				title, // child
				{ expand: true, align: 'left' }
			)
		};

		var createTable = function (scene, data, key) {
			var capKey = key.charAt(0).toUpperCase() + key.slice(1);
			var title = scene.rexUI.add.label({
				orientation: 'x',
				text: scene.add.text(0, 0, capKey),
				name: "table-title-"+key
			});

			var items = data[key];
			var rows = items.length;
			var table = scene.rexUI.add.gridSizer({
				column: 1,
				row: rows,
				// rowProportions: 1,
				space: { column: 0, row: 10 },
				name: key  // Search this name to get table back
			});

			var item, r, c;
			var iconSize = (rows === 1) ? 80 : 40;
			for (var i = 0, cnt = items.length; i < cnt; i++) {
				item = items[i];
				r = i % rows;
				c = (i - r) / rows;
				table.add(
					createIcon(scene, item, iconSize, iconSize),
					c,
					r,
					'top',
					0,
					true
				);
			}

			return scene.rexUI.add.sizer({
				orientation: 'y',
				space: { left: 10, right: 10, top: 10, bottom: 10, item: 10 },
				name: "table-"+key
			})
			.addBackground(
				scene.rexUI.add.roundRectangle(0, 0, 0, 0, 0, undefined).setStrokeStyle(2, LRE.uiColors.COLOR_LIGHT, 1)
			)
			.add(
				title, // child
				0, // proportion
				'left', // align
				0, // paddingConfig
				true // expand
			)
			.add(table, // child
				1, // proportion
				'center', // align
				0, // paddingConfig
				true // expand
			);
		}

		var createIcon = function (scene, item, iconWidth, iconHeight) {
			var label = scene.rexUI.add.label({
				orientation: 'y',
				icon: scene.rexUI.add.roundRectangle(0, 0, iconWidth, iconHeight, 5, LRE.uiColors.COLOR_LIGHT),
				text: scene.add.text(0, 0, item.name),
				space: { icon: 3 },
				name: item.name  
			});
			// define label functions
			label.select=()=>{
				var icon = label.getElement('icon');
				icon.setStrokeStyle(2, LRE.uiColors.COLOR_SELECTED);
			}
			label.deselect=()=>{
				var icon = label.getElement('icon');
				icon.setStrokeStyle();
			}
			label.isSelected=()=>{
				var icon = label.getElement('icon');
				return icon.isStroked;
			}
			return label;
		};
		var CreateButton = function (scene, text, id, backgroundColor) {
			return scene.rexUI.add.label({
				// orientation: 'y',
				name:id,
				background: scene.rexUI.add.roundRectangle(0, 0, 80, 20, 10, backgroundColor),
				text: scene.add.text(0, 0, text, {
					fontSize: '18px'
				}),

				space: {
					left: 4,
					right: 4,
					top: 4,
					bottom: 4
				}
			});
		}
		// PANEL ROOT
		var {width, height} = scene.game.config;
		var scrollablePanel = scene.rexUI.add.scrollablePanel({
			x: width / 2,
			y: height / 2,
			width: 350,
			height: 335,
			scrollMode: 0,

			background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 10, LRE.uiColors.COLOR_PRIMARY),

			panel: {
				child: createPanel(scene, data),

				mask: {
					padding: 1,
					// layer: this.add.layer()
				},
			},

			slider: {
				track: scene.rexUI.add.roundRectangle(0, 0, 20, 10, 10, LRE.uiColors.COLOR_DARK),
				thumb: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 13, LRE.uiColors.COLOR_LIGHT),
			},

			// scroller: true,
			scroller: {
				// pointerOutRelease: false
			},

			mouseWheelScroller: {
				focus: false,
				speed: 0.1
			},

			space: {
				left: 10,
				right: 10,
				top: 10,
				bottom: 10,
				panel: 10,
			}
		}).layout();
		var getContainer = function(itemName){

			// item-panel
			var panel = scrollablePanel.getElement('panel').children.find(item=>{

				return item.name == "ContainerPanel";
			});
			// item-table
			var table = panel.children.find(item=>{

				return item.name == "table-"+itemName;
			});
			// item-container
			return table.children.find(item=>{

				return item.name == itemName;
			})
		}
		var clearSelection = function(container){

			container.children.forEach( card=> {card.deselect()});
		}
        // select a cage with assigned cards
        var selectFirstItem = function(){
            
            var cagesContainer = getContainer("cages");
            var cardsContainer = getContainer("cards");
            clearSelection(cagesContainer);
            clearSelection(cardsContainer);
            var cage = cagesContainer.children[0];
            if (!cage) return;
            cage.getElement('icon').setStrokeStyle(2, LRE.uiColors.COLOR_SELECTED);
            var cardsName = data.getCageCards(cage.name);
            selectItems(cardsContainer, cardsName);
        }
		var selectItems = function(container, itemsName){

			container.children.forEach(card=> {

				if (itemsName.indexOf(card.name) > -1) { // select

					card.select();

				} else { //clear

					card.deselect();
				}
			});
		}
		var selectItem = function(container, child){

			// Ctrace("selectItem> container:{0} child:{1} isSelected:{2}", container.name, child.text, child.isSelected());
            // console.dir(child)
			// radio switch on cages
			if (container.name == 'cages'){

				selectItems(container, [child.name]);
				// restore cards selection from data
				data.selectedCards = data.getCageCards(child.name);
				// Ctrace("\tselected cards:{0}", data.selectedCards);
				var cardsContainer = getContainer("cards");
				// Ctrace("\tcardsContainer:{0}", cardsContainer);
				// console.dir(cardsContainer);
				//clearSelection(cardsContainer);
				selectItems(cardsContainer, data.selectedCards);

			} else { // select unselect cards

				// console.dir(bg);
				if (child.isSelected()){ // clear

					child.deselect();
					// remove child name from array
					data.selectedCards.splice(data.selectedCards.indexOf(child.name), 1);

				} else { // select

					child.select();
					// add child name to array
					data.selectedCards.push(child.name);
				}
			}
		}
		scrollablePanel.setChildrenInteractive({
            targets: [
                scrollablePanel.getByName('cages', true),
                scrollablePanel.getByName('cards', true),
				scrollablePanel.getByName('buttons', true),
            ]
        })
		.on('child.click', function (child) {
			// Ctrace("child.click:{0}", child.name);
            // console.dir(child)
			switch(child.name){
				
                case "btn_cancel": 
				    LRE.close(true);
				case "btn_accept": 
                    LRE.close();
				break;
				case "btn_save": 
                    LRE.close();
                    LRE.saveLessonSettings(data);
				break;
				default:selectItem(child.getParentSizer(), child);
			}
		})

        selectFirstItem(); // select first cage with assigned cards
		scrollablePanel.visible = false;
		this.scrollablePanel = scrollablePanel;
    }
    static saveLessonSettings(data){

		FileManager.saveFile("Lesson_001.json", data.toString());
	}
    static build(scene, strData){

		// Ctrace(this.name + " > lostrDataadLessonSettings > strData:{0}\n", strData);
        if (strData){
            
            // Ctrace(this.name + " > readLessonSettings > load data from file....");
            this.lessonData.fromString(strData);

        } else {

            // Ctrace(this.name + " > readLessonSettings > build data from scene....");
            this.lessonData.fromScene(scene);
        }
		// Ctrace(this.name + " > open > CREATE PANEL");
		this.buildPanelFromData(scene, this.lessonData);
	}
	// backup current settings
    static storeLessonData(){

        this.lessonBackupData = this.lessonData.toString();
    }
	// restore old settings
    static restoreLessonData(){

        this.lessonData.fromString(this.lessonBackupData);
    }
    static get visible(){
        
        return this._visible;
    }
    static set visible(state){
        
        this.scrollablePanel.visible = this._visible = state;
    }
    static open(scene){ 
        
        this.storeLessonData();
        if (this.scrollablePanel){
            // Ctrace(this.name + " > open > UPDATE PANEL DATA");
            var cageItems = this.scrollablePanel.getElement('#cages.items', true);
            var selCage = null;
            cageItems.forEach(cage=> {
                
                var bg = cage.getElement('icon');
                // Ctrace("cage:{0} stroked:{1}", cage.name, bg.isStroked)
                if (bg.isStroked) selCage = cage;    
            })
            // Ctrace("selected cage:{0}", selCage)
            if (selCage){
                // Ctrace("Selected Cage:{0}", selCage.name);
                var cardsName = this.lessonData.getCageCards(selCage.name);
                // Ctrace("Selected Cards:{0}", cardsName);
                var cardItems = this.scrollablePanel.getElement('#cards.items', true);
                cardItems.forEach(card=> {
                    
                    if (cardsName.indexOf(card.name) != -1){
                        
                        card.select();

                    } else {
                       
						card.deselect();
                    }
                })
            }
        }
		this.bringOnTop();
		this.visible = true;
    }
    static close(cancel){ 
        
        if (cancel) this.restoreLessonData();
        this.visible = false;
		this.sendToBack();
    }
	static bringOnTop(){
		// Collection.bringToSceneTop(this.scrollablePanel);
		// this.scrollablePanel.setDEpth(100);
		// this.scrollablePanel.depth = 100;
		// Ctrace("bringOnTop > depth:{0}", this.scrollablePanel.depth)
		// console.dir(this.scrollablePanel)
		// console.dir(this.scrollablePanel.children);

		// var scene = this.scrollablePanel.scene;
		// Ctrace("bringOnTop > scene:{0}", scene);
		// console.dir(scene);
		// this.scrollablePanel.scene.children.bringToTop(this.scrollablePanel);
		// var cardItems = this.scrollablePanel.getElement('#cards.items', true);
		// cardItems.forEach(card=> {
		// 	Ctrace("\tcard:{0}", card);
		// 	console.dir(card);
		// 	Collection.bringToTop(card);
		// 	//this.scrollablePanel.scene.children.bringToTop(card);
		// })
		//this.children.bringToTop(card.getData('layer'));
	}
	static sendToBack(){

		// this.scrollablePanel.depth = 0;
		//this.scrollablePanel.setDEpth(0);
		//Ctrace("sendToBack > depth:{0}", this.scrollablePanel.depth)
	}
    static isCorrectResult(cardName, cageName){

       return this.lessonData.isCorrect(cardName, cageName);
    }
 }