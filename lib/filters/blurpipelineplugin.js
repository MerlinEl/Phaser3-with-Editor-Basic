(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.blurpipelineplugin = factory());
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

    // https://www.shadertoy.com/view/XdfGDH
    var frag = `
      #ifdef GL_FRAGMENT_PRECISION_HIGH
      #define highmedp highp
      #else
      #define highmedp mediump
      #endif
      precision highmedp float;
      // Scene buffer
      uniform vec2 texSize;
      uniform sampler2D uMainSampler;
      uniform float blurX;
      uniform float blurY;
      uniform vec3 tintColor;
      vec4 blur2DA(sampler2D image, vec2 uv, vec2 texSize, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.3846153846) * direction;
        vec2 off2 = vec2(3.2307692308) * direction;
        color += texture2D(image, uv) * 0.2270270270;
        color += texture2D(image, uv + (off1 / texSize)) * 0.3162162162;
        color += texture2D(image, uv - (off1 / texSize)) * 0.3162162162;
        color += texture2D(image, uv + (off2 / texSize)) * 0.0702702703;
        color += texture2D(image, uv - (off2 / texSize)) * 0.0702702703;
        return color;
      }
      vec4 blur2DB(sampler2D image, vec2 uv, vec2 texSize, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.411764705882353) * direction;
        vec2 off2 = vec2(3.2941176470588234) * direction;
        vec2 off3 = vec2(5.176470588235294) * direction;
        color += texture2D(image, uv) * 0.1964825501511404;
        color += texture2D(image, uv + (off1 / texSize)) * 0.2969069646728344;
        color += texture2D(image, uv - (off1 / texSize)) * 0.2969069646728344;
        color += texture2D(image, uv + (off2 / texSize)) * 0.09447039785044732;
        color += texture2D(image, uv - (off2 / texSize)) * 0.09447039785044732;
        color += texture2D(image, uv + (off3 / texSize)) * 0.010381362401148057;
        color += texture2D(image, uv - (off3 / texSize)) * 0.010381362401148057;
        return color;
      }
      float normpdf(in float x, in float sigma){
        return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
      }
      vec4 blur2DC(sampler2D image , vec2 uv, vec2 texSize){
        vec3 c = texture2D(image, uv.xy / texSize.xy).rgb;
        //declare stuff
        const int mSize = 30;
        const int kSize = (mSize-1)/2;
        float kernel[mSize];
        vec3 final_colour = vec3(0.0);
        //create the 1-D kernel
        float sigma = 7.0;
        float Z = 0.0;
        for (int j = 0; j <= kSize; ++j){
        kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);
        }
        //get the normalization factor (as the gaussian has been clamped)
        for (int j = 0; j < mSize; ++j){
        Z += kernel[j];
        }
        //read out the texels
        for (int i=-kSize; i <= kSize; ++i){
          for (int j=-kSize; j <= kSize; ++j){
            final_colour += kernel[kSize+j]*kernel[kSize+i]*texture2D(image, (uv.xy+vec2(float(i),float(j))) / texSize.xy).rgb;
          }
        }
      return vec4(final_colour/(Z*Z), 1.0);
      }
      void main() {
        vec2 direction = vec2(blurX, blurY);
        vec2 uv = vec2(gl_FragCoord.xy / texSize.xy);
        gl_FragColor = vec4(vec3(1.0, 1.0, 1.0), 1.);
        //gl_FragColor = blur2DA(uMainSampler, uv, texSize.xy, direction);
        gl_FragColor = blur2DB(uMainSampler, uv, texSize.xy, direction);
        //gl_FragColor = blur2DC(uMainSampler, uv, texSize.xy);
      }`;

    var MAX_SAMPLES = 100;
    var MIN_SAMPLES = 1;
  
    var GetFrag = function GetFrag(quality) {
      if (quality === undefined) {
        quality = 0.1;
      }
      
      var samples = Math.max(quality * MAX_SAMPLES, MIN_SAMPLES);
      var angleStep = (Math.PI * 2 / samples).toFixed(7);
      return frag;//.replace(/\#\{angleStep\}/, angleStep);
    };
  
    var PostFXPipeline = Phaser.Renderer.WebGL.Pipelines.PostFXPipeline;
    var GetValue$1 = Phaser.Utils.Objects.GetValue;
    var IntegerToRGB = Phaser.Display.Color.IntegerToRGB;
    var Color = Phaser.Display.Color;
    var Quality = 0.4;
    var FragSrc = GetFrag(Quality);
  
    var BlurPostFxPipeline = /*#__PURE__*/function (_PostFXPipeline) {
      _inherits(BlurPostFxPipeline, _PostFXPipeline);
  
      var _super = _createSuper(BlurPostFxPipeline);
  
      function BlurPostFxPipeline(game) {
        var _this;
  
        _classCallCheck(this, BlurPostFxPipeline);
  
        _this = _super.call(this, {
          name: 'rexBlurPostFx',
          game: game,
          renderTarget: true,
          fragShader: FragSrc
        });
        _this.blurX = 0.5;
        _this.blurY = 0.5;
        _this.tint = false;
        _this._tintColor = new Color();
        return _this;
      }
  
      _createClass(BlurPostFxPipeline, [{
        key: "resetFromJSON",
        value: function resetFromJSON(o) {
          this.setBlurX(GetValue$1(o, 'blurX', 0.5));
          this.setBlurY(GetValue$1(o, 'blurY', 0.5));
          this.enableTint(GetValue$1(o, 'tint', false));
          this.setTintColor(GetValue$1(o, 'tintColor', 0xffffff));
          return this;
        }
      }, {
        key: "onPreRender",
        value: function onPreRender() {
          this.set1f('blurX', this.blurX);
          this.set1f('blurY', this.blurY);
          this.set1f('tint', this.tint);
          this.set3f('tintColor', this._tintColor.redGL, this._tintColor.greenGL, this._tintColor.blueGL);
          this.set2f('texSize', this.renderer.width, this.renderer.height);
        }
      }, {
        key: "setBlurX",
        value: function setBlurX(value) {
          this.blurX = value;
          return this;
        }
      }, {
        key: "setBlurY",
        value: function setBlurY(value) {
          this.blurY = value;
          return this;
        }
      }, {
        key: "enableTint",
        value: function enableTint(value) {
          this.tint = value;
          return this;
        }
      }, {
        key: "tintColor",
        get: function get() {
          return this._tintColor;
        },
        set: function set(value) {
          if (typeof value === 'number') {
            value = IntegerToRGB(value);
          }
  
          this._tintColor.setFromRGB(value);
        }
      }, {
        key: "setTintColor",
        value: function setTintColor(value) {
          this.tintColor = value;
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
  
      return BlurPostFxPipeline;
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
  
    var BlurPipelinePlugin = /*#__PURE__*/function (_BasePostFxPipelinePl) {
      _inherits(BlurPipelinePlugin, _BasePostFxPipelinePl);
  
      var _super = _createSuper(BlurPipelinePlugin);
  
      function BlurPipelinePlugin(pluginManager) {
        var _this;
  
        _classCallCheck(this, BlurPipelinePlugin);
  
        _this = _super.call(this, pluginManager);
  
        _this.setPostPipelineClass(BlurPostFxPipeline, 'rexBlurPostFx');
  
        return _this;
      }
  
      _createClass(BlurPipelinePlugin, [{
        key: "add",
        value: function add(gameObject, config) {
          this.setQuality(GetValue(config, 'quality', this.quality));
          return _get(_getPrototypeOf(BlurPipelinePlugin.prototype), "add", this).call(this, gameObject, config);
        }
      }, {
        key: "setQuality",
        value: function setQuality(value) {
          BlurPostFxPipeline.setQuality(value);
          return this;
        }
      }, {
        key: "quality",
        get: function get() {
          return BlurPostFxPipeline.getQuality();
        },
        set: function set(value) {
          this.setQuality(value);
        }
      }]);
  
      return BlurPipelinePlugin;
    }(BasePostFxPipelinePlugin);
  
    SetValue(window, 'RexPlugins.Pipelines.BlurPostFx', BlurPostFxPipeline);
  
    return BlurPipelinePlugin;
  
  })));
  