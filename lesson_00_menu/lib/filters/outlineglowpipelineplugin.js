(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.outlineglowpipelineplugin = factory());
  }(this, (function () { 'use strict';
  
    function _typeof(obj) {
      "@babel/helpers - typeof";
  
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function (obj) {
          return typeof obj;
        };
      } else {
        _typeof = function (obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }
  
      return _typeof(obj);
    }
  
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
  
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
  
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
  
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
  
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
  
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  
      return _setPrototypeOf(o, p);
    }
  
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
  
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
  
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return self;
    }
  
    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
  
      return _assertThisInitialized(self);
    }
  
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
  
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
  
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
  
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
  
        return _possibleConstructorReturn(this, result);
      };
    }
  
    function _superPropBase(object, property) {
      while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
      }
  
      return object;
    }
  
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
      } else {
        _get = function _get(target, property, receiver) {
          var base = _superPropBase(target, property);
  
          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);
  
          if (desc.get) {
            return desc.get.call(receiver);
          }
  
          return desc.value;
        };
      }
  
      return _get(target, property, receiver || target);
    }
  
    // Reference: https://github.com/pixijs/pixi-filters/blob/master/filters/outline/src/outline.frag
    var frag =`
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      #define highmedp highp
      #else
      #define highmedp mediump
      #endif
      precision highmedp float;
      // Scene buffer
      uniform sampler2D uMainSampler;
      varying vec2 outTexCoord;
      // Effect parameters
      uniform vec2 texSize;
      uniform float thickness;
      uniform float levels;
      uniform vec3 outlineColor;
      const float DOUBLE_PI = 3.14159265358979323846264 * 2.;
      float normalProbabilityDensityFunction(in float x, in float sigma){
          return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
      }
      //https://stackoverflow.com/questions/69481402/how-to-make-smoother-borders-using-fragment-shader-in-opengl
      vec4 gaussianBlur(sampler2D image, vec2 uv){
          // The gaussian operator size
          // The higher this number, the better quality the outline will be
          // But this number is expensive! O(n2)
          const int matrixSize = 11;
          
          // How far apart (in UV coordinates) are each cell in the Gaussian Blur
          // Increase this for larger outlines!
          vec2 offset = vec2(0.005, 0.005);
          
          const int kernelSize = (matrixSize-1)/2;
          float kernel[matrixSize];
          
          // Create the 1-D kernel using a sigma
          float sigma = 7.0;
          for (int j = 0; j <= kernelSize; ++j)
          {
              kernel[kernelSize+j] = kernel[kernelSize-j] = normalProbabilityDensityFunction(float(j), sigma);
          }
          
          // Generate the normalization factor
          float normalizationFactor = 0.0;
          for (int j = 0; j < matrixSize; ++j)
          {
              normalizationFactor += kernel[j];
          }
          normalizationFactor = normalizationFactor * normalizationFactor;
          
          // Apply the kernel to the fragment
          vec4 outputColor = vec4(0.0);
          for (int i=-kernelSize; i <= kernelSize; ++i)
          {
              for (int j=-kernelSize; j <= kernelSize; ++j)
              {
                  float kernelValue = kernel[kernelSize+j]*kernel[kernelSize+i];
                  vec2 sampleLocation = uv.xy + vec2(float(i)*offset.x,float(j)*offset.y);
                  vec4 sample = texture2D(image, sampleLocation);
                  outputColor += kernelValue * sample;
              }
          }
          
          // Divide by the normalization factor, so the weights sum to 1
          outputColor = outputColor/(normalizationFactor*normalizationFactor);
          
          return outputColor;
      }
      void main() {
        
        vec4 front = texture2D(uMainSampler, outTexCoord);
        float maxAlpha = front.a;
        
        // process only transparent pixels
        if (maxAlpha < 0.001) {
          
          float glowPow = 0.7; // 0.1 - 1.0
          const float glowThickness = 20.0; //levels*1.0;
          vec3 resultColor = vec3(0.0, 0.0, 0.0);
          float glowAlpha = 1.0 / glowThickness * glowPow;
          float growOffset = 0.2;
      
          // draw all outlines
          for (float level = 0.; level < glowThickness; level++){
            
            // draw single outline
            vec2 mag = vec2(growOffset/texSize.x, growOffset/texSize.y);
            for (float angle = 0.; angle < DOUBLE_PI; angle += #{angleStep}) {
                
                vec2 offset = vec2(mag.x * cos(angle), mag.y * sin(angle));
                //vec4 curColor = gaussianBlur(uMainSampler, outTexCoord + offset);
                vec4 curColor = texture2D(uMainSampler, outTexCoord + offset);
                maxAlpha = max(maxAlpha, curColor.a * glowAlpha);
                growOffset += 0.2;
            }
            resultColor += front.rgb + (outlineColor.rgb * (1. - front.a)) * maxAlpha;
          }
          gl_FragColor = vec4(resultColor, maxAlpha);

        } else {
          gl_FragColor = front;
        }
      }`;

    var MAX_SAMPLES = 100;
    var MIN_SAMPLES = 1;
  
    var GetFrag = function GetFrag(quality) {
      if (quality === undefined) {
        quality = 0.1;
      }
      
      var samples = Math.max(quality * MAX_SAMPLES, MIN_SAMPLES);
      var angleStep = (Math.PI * 2 / samples).toFixed(7);
      return frag.replace(/\#\{angleStep\}/, angleStep);
    };
  
    var PostFXPipeline = Phaser.Renderer.WebGL.Pipelines.PostFXPipeline;
    var GetValue$1 = Phaser.Utils.Objects.GetValue;
    var IntegerToRGB = Phaser.Display.Color.IntegerToRGB;
    var Color = Phaser.Display.Color;
    var Quality = 0.1;
    var FragSrc = GetFrag(Quality);
  
    var OutlineGlowPostFxPipeline = /*#__PURE__*/function (_PostFXPipeline) {
      _inherits(OutlineGlowPostFxPipeline, _PostFXPipeline);
  
      var _super = _createSuper(OutlineGlowPostFxPipeline);
  
      function OutlineGlowPostFxPipeline(game) {
        var _this;
  
        _classCallCheck(this, OutlineGlowPostFxPipeline);
  
        _this = _super.call(this, {
          name: 'rexOutlineGlowPostFx',
          game: game,
          renderTarget: true,
          fragShader: FragSrc
        });
        _this.thickness = 0;
        _this.levels = 4;
        _this._outlineColor = new Color();
        return _this;
      }
  
      _createClass(OutlineGlowPostFxPipeline, [{
        key: "resetFromJSON",
        value: function resetFromJSON(o) {
          this.setThickness(GetValue$1(o, 'thickness', 3));
          this.setLevels(GetValue$1(o, 'levels', 4));
          this.setOutlineGlowColor(GetValue$1(o, 'outlineColor', 0xffffff));
          return this;
        }
      }, {
        key: "onPreRender",
        value: function onPreRender() {
          this.set1f('thickness', this.thickness);
          this.set1f('levels', this.levels);
          this.set3f('outlineColor', this._outlineColor.redGL, this._outlineColor.greenGL, this._outlineColor.blueGL);
          this.set2f('texSize', this.renderer.width, this.renderer.height);
        }
      }, {
        key: "setThickness",
        value: function setThickness(value) {
          this.thickness = value;
          return this;
        }
      }, {
        key: "setLevels",
        value: function setLevels(value) {
          this.levels = value;
          return this;
        }
      }, {
        key: "outlineColor",
        get: function get() {
          return this._outlineColor;
        },
        set: function set(value) {
          if (typeof value === 'number') {
            value = IntegerToRGB(value);
          }
  
          this._outlineColor.setFromRGB(value);
        }
      }, {
        key: "setOutlineGlowColor",
        value: function setOutlineGlowColor(value) {
          this.outlineColor = value;
          return this;
        }
      }], [{
        key: "setQuality",
        value: function setQuality(value) {
          if (Quality === value) {
            return;
          }
  
          Quality = value;
          FragSrc = GetFrag(value);
        }
      }, {
        key: "getQuality",
        value: function getQuality() {
          return Quality;
        }
      }]);
  
      return OutlineGlowPostFxPipeline;
    }(PostFXPipeline);
  
    var SpliceOne = Phaser.Utils.Array.SpliceOne;
  
    var BasePostFxPipelinePlugin = /*#__PURE__*/function (_Phaser$Plugins$BaseP) {
      _inherits(BasePostFxPipelinePlugin, _Phaser$Plugins$BaseP);
  
      var _super = _createSuper(BasePostFxPipelinePlugin);
  
      function BasePostFxPipelinePlugin() {
        _classCallCheck(this, BasePostFxPipelinePlugin);
  
        return _super.apply(this, arguments);
      }
  
      _createClass(BasePostFxPipelinePlugin, [{
        key: "setPostPipelineClass",
        value: function setPostPipelineClass(PostFxPipelineClass, postFxPipelineName) {
          this.PostFxPipelineClass = PostFxPipelineClass;
          this.postFxPipelineName = postFxPipelineName;
          return this;
        }
      }, {
        key: "start",
        value: function start() {
          var eventEmitter = this.game.events;
          eventEmitter.once('destroy', this.destroy, this);
          this.game.renderer.pipelines.addPostPipeline(this.postFxPipelineName, this.PostFxPipelineClass);
        }
      }, {
        key: "add",
        value: function add(gameObject, config) {
          if (config === undefined) {
            config = {};
          }
  
          gameObject.setPostPipeline(this.PostFxPipelineClass);
          var pipeline = gameObject.postPipelines[gameObject.postPipelines.length - 1];
          pipeline.resetFromJSON(config);
  
          if (config.name) {
            pipeline.name = config.name;
          }
  
          return pipeline;
        }
      }, {
        key: "remove",
        value: function remove(gameObject, name) {
          var PostFxPipelineClass = this.PostFxPipelineClass;
  
          if (name === undefined) {
            var pipelines = gameObject.postPipelines;
  
            for (var i = pipelines.length - 1; i >= 0; i--) {
              var instance = pipelines[i];
  
              if (instance instanceof PostFxPipelineClass) {
                instance.destroy();
                SpliceOne(pipelines, i);
              }
            }
          } else {
            var pipelines = gameObject.postPipelines;
  
            for (var i = 0, cnt = pipelines.length; i < cnt; i++) {
              var instance = pipelines[i];
  
              if (instance instanceof PostFxPipelineClass && instance.name === name) {
                instance.destroy();
                SpliceOne(pipelines, i);
              }
            }
          }
  
          return this;
        }
      }, {
        key: "get",
        value: function get(gameObject, name) {
          var PostFxPipelineClass = this.PostFxPipelineClass;
  
          if (name === undefined) {
            var result = [];
            var pipelines = gameObject.postPipelines;
  
            for (var i = 0, cnt = pipelines.length; i < cnt; i++) {
              var instance = pipelines[i];
  
              if (instance instanceof PostFxPipelineClass) {
                result.push(instance);
              }
            }
  
            return result;
          } else {
            var pipelines = gameObject.postPipelines;
  
            for (var i = 0, cnt = pipelines.length; i < cnt; i++) {
              var instance = pipelines[i];
  
              if (instance instanceof PostFxPipelineClass && instance.name === name) {
                return instance;
              }
            }
          }
        }
      }]);
  
      return BasePostFxPipelinePlugin;
    }(Phaser.Plugins.BasePlugin);
  
    var IsInValidKey = function IsInValidKey(keys) {
      return keys == null || keys === '' || keys.length === 0;
    };
  
    var GetEntry = function GetEntry(target, keys, defaultEntry) {
      var entry = target;
  
      if (IsInValidKey(keys)) ; else {
        if (typeof keys === 'string') {
          keys = keys.split('.');
        }
  
        var key;
  
        for (var i = 0, cnt = keys.length; i < cnt; i++) {
          key = keys[i];
  
          if (entry[key] == null || _typeof(entry[key]) !== 'object') {
            var newEntry;
  
            if (i === cnt - 1) {
              if (defaultEntry === undefined) {
                newEntry = {};
              } else {
                newEntry = defaultEntry;
              }
            } else {
              newEntry = {};
            }
  
            entry[key] = newEntry;
          }
  
          entry = entry[key];
        }
      }
  
      return entry;
    };
  
    var SetValue = function SetValue(target, keys, value) {
      // no object
      if (_typeof(target) !== 'object') {
        return;
      } // invalid key
      else if (IsInValidKey(keys)) {
        // don't erase target
        if (value == null) {
          return;
        } // set target to another object
        else if (_typeof(value) === 'object') {
          target = value;
        }
      } else {
        if (typeof keys === 'string') {
          keys = keys.split('.');
        }
  
        var lastKey = keys.pop();
        var entry = GetEntry(target, keys);
        entry[lastKey] = value;
      }
  
      return target;
    };
  
    var GetValue = Phaser.Utils.Objects.GetValue;
  
    var OutlineGlowPipelinePlugin = /*#__PURE__*/function (_BasePostFxPipelinePl) {
      _inherits(OutlineGlowPipelinePlugin, _BasePostFxPipelinePl);
  
      var _super = _createSuper(OutlineGlowPipelinePlugin);
  
      function OutlineGlowPipelinePlugin(pluginManager) {
        var _this;
  
        _classCallCheck(this, OutlineGlowPipelinePlugin);
  
        _this = _super.call(this, pluginManager);
  
        _this.setPostPipelineClass(OutlineGlowPostFxPipeline, 'rexOutlineGlowPostFx');
  
        return _this;
      }
  
      _createClass(OutlineGlowPipelinePlugin, [{
        key: "add",
        value: function add(gameObject, config) {
          this.setQuality(GetValue(config, 'quality', this.quality));
          return _get(_getPrototypeOf(OutlineGlowPipelinePlugin.prototype), "add", this).call(this, gameObject, config);
        }
      }, {
        key: "setQuality",
        value: function setQuality(value) {
          OutlineGlowPostFxPipeline.setQuality(value);
          return this;
        }
      }, {
        key: "quality",
        get: function get() {
          return OutlineGlowPostFxPipeline.getQuality();
        },
        set: function set(value) {
          this.setQuality(value);
        }
      }]);
  
      return OutlineGlowPipelinePlugin;
    }(BasePostFxPipelinePlugin);
  
    SetValue(window, 'RexPlugins.Pipelines.OutlineGlowPostFx', OutlineGlowPostFxPipeline);
  
    return OutlineGlowPipelinePlugin;
  
  })));
  