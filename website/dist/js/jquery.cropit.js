!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?exports.cropit=b(require("jquery")):a.cropit=b(a.jQuery)}(this,function(a){return function(a){function b(d){if(c[d])return c[d].exports;var module=c[d]={exports:{},id:d,loaded:!1};return a[d].call(module.exports,module,module.exports,b),module.loaded=!0,module.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(module,exports,a){function b(a){return a&&a.__esModule?a:{default:a}}var c=Array.prototype.slice,d=a(1),e=b(d),f=a(2),g=b(f),h=a(4),i=a(6),j=function(a,b){return a.each(function(){var a=e.default.data(this,h.PLUGIN_KEY);a&&b(a)})},k=function(a,b,c){var d=a.first().data(h.PLUGIN_KEY);return d&&e.default.isFunction(d[b])?d[b](c):null},l={init:function(a){return this.each(function(){if(!e.default.data(this,h.PLUGIN_KEY)){var b=new g.default(e.default,this,a);e.default.data(this,h.PLUGIN_KEY,b)}})},destroy:function(){return this.each(function(){e.default.removeData(this,h.PLUGIN_KEY)})},isZoomable:function(){return k(this,"isZoomable")},export:function(a){return k(this,"getCroppedImageData",a)}},m=function(a,b){return j(a,function(a){a[b]()})},n=function(a,b,c){return(0,i.exists)(c)?j(a,function(a){a[b]=c}):a.first().data(h.PLUGIN_KEY)[b]};e.default.fn.cropit=function(a){return l[a]?l[a].apply(this,Array.prototype.slice.call(arguments,1)):["imageState","imageSrc","offset","previewSize","imageSize","zoom","initialZoom","exportZoom","minZoom","maxZoom"].indexOf(a)>=0?n.apply(void 0,[this].concat(c.call(arguments))):["rotateCW","rotateCCW","disable","reenable"].indexOf(a)>=0?m.apply(void 0,[this].concat(c.call(arguments))):l.init.apply(this,arguments)}},function(module,exports){module.exports=a},function(module,exports,a){function b(a){return a&&a.__esModule?a:{default:a}}function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var d=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),e=a(1),f=b(e),g=a(3),h=b(g),i=a(4),j=a(5),k=a(6),l=function(){function a(b,d,e){c(this,a),this.$el=(0,f.default)(d);var g=(0,j.loadDefaults)(this.$el);this.options=f.default.extend({},g,e),this.init()}return d(a,[{key:"init",value:function(){var a=this;this.image=new Image,this.preImage=new Image,this.image.onload=this.onImageLoaded.bind(this),this.preImage.onload=this.onPreImageLoaded.bind(this),this.image.onerror=this.preImage.onerror=function(){a.onImageError.call(a,i.ERRORS.IMAGE_FAILED_TO_LOAD)},this.$preview=this.options.$preview.css("position","relative"),this.$fileInput=this.options.$fileInput.attr({accept:"image/*"}),this.$zoomSlider=this.options.$zoomSlider.attr({min:0,max:1,step:.01}),this.previewSize={width:this.options.width||this.$preview.width(),height:this.options.height||this.$preview.height()},this.$image=(0,f.default)("<img />").addClass(i.CLASS_NAMES.PREVIEW_IMAGE).attr("alt","").css({transformOrigin:"top left",webkitTransformOrigin:"top left",willChange:"transform"}),this.$imageContainer=(0,f.default)("<div />").addClass(i.CLASS_NAMES.PREVIEW_IMAGE_CONTAINER).css({position:"absolute",overflow:"hidden",left:0,top:0,width:"100%",height:"100%"}).append(this.$image),this.$preview.append(this.$imageContainer),this.options.imageBackground&&(f.default.isArray(this.options.imageBackgroundBorderWidth)?this.bgBorderWidthArray=this.options.imageBackgroundBorderWidth:this.bgBorderWidthArray=[0,1,2,3].map(function(){return a.options.imageBackgroundBorderWidth}),this.$bg=(0,f.default)("<img />").addClass(i.CLASS_NAMES.PREVIEW_BACKGROUND).attr("alt","").css({position:"relative",left:this.bgBorderWidthArray[3],top:this.bgBorderWidthArray[0],transformOrigin:"top left",webkitTransformOrigin:"top left",willChange:"transform"}),this.$bgContainer=(0,f.default)("<div />").addClass(i.CLASS_NAMES.PREVIEW_BACKGROUND_CONTAINER).css({position:"absolute",zIndex:0,top:-this.bgBorderWidthArray[0],right:-this.bgBorderWidthArray[1],bottom:-this.bgBorderWidthArray[2],left:-this.bgBorderWidthArray[3]}).append(this.$bg),this.bgBorderWidthArray[0]>0&&this.$bgContainer.css("overflow","hidden"),this.$preview.prepend(this.$bgContainer)),this.initialZoom=this.options.initialZoom,this.imageLoaded=!1,this.moveContinue=!1,this.zoomer=new h.default,this.options.allowDragNDrop&&f.default.event.props.push("dataTransfer"),this.bindListeners(),this.options.imageState&&this.options.imageState.src&&this.loadImage(this.options.imageState.src)}},{key:"bindListeners",value:function(){this.$fileInput.on("change.cropit",this.onFileChange.bind(this)),this.$imageContainer.on(i.EVENTS.PREVIEW,this.onPreviewEvent.bind(this)),this.$zoomSlider.on(i.EVENTS.ZOOM_INPUT,this.onZoomSliderChange.bind(this)),this.options.allowDragNDrop&&(this.$imageContainer.on("dragover.cropit dragleave.cropit",this.onDragOver.bind(this)),this.$imageContainer.on("drop.cropit",this.onDrop.bind(this)))}},{key:"unbindListeners",value:function(){this.$fileInput.off("change.cropit"),this.$imageContainer.off(i.EVENTS.PREVIEW),this.$imageContainer.off("dragover.cropit dragleave.cropit drop.cropit"),this.$zoomSlider.off(i.EVENTS.ZOOM_INPUT)}},{key:"onFileChange",value:function(a){this.options.onFileChange(a),this.$fileInput.get(0).files&&this.loadFile(this.$fileInput.get(0).files[0])}},{key:"loadFile",value:function(a){var b=new FileReader;a&&a.type.match("image")?(b.readAsDataURL(a),b.onload=this.onFileReaderLoaded.bind(this),b.onerror=this.onFileReaderError.bind(this)):a&&this.onFileReaderError()}},{key:"onFileReaderLoaded",value:function(a){this.loadImage(a.target.result)}},{key:"onFileReaderError",value:function(){this.options.onFileReaderError()}},{key:"onDragOver",value:function(a){a.preventDefault(),a.dataTransfer.dropEffect="copy",this.$preview.toggleClass(i.CLASS_NAMES.DRAG_HOVERED,"dragover"===a.type)}},{key:"onDrop",value:function(a){var b=this;a.preventDefault(),a.stopPropagation(),Array.prototype.slice.call(a.dataTransfer.files,0).some(function(a){return!!a.type.match("image")&&(b.loadFile(a),!0)}),this.$preview.removeClass(i.CLASS_NAMES.DRAG_HOVERED)}},{key:"loadImage",value:function(a){var b=this;if(a)if(this.options.onImageLoading(),this.setImageLoadingClass(),0===a.indexOf("data"))this.preImage.src=a;else{var c=new XMLHttpRequest;c.onload=function(a){if(a.target.status>=300)return void b.onImageError.call(b,i.ERRORS.IMAGE_FAILED_TO_LOAD);b.loadFile(a.target.response)},c.open("GET",a),c.responseType="blob",c.send()}}},{key:"onPreImageLoaded",value:function(){if(this.shouldRejectImage({imageWidth:this.preImage.width,imageHeight:this.preImage.height,previewSize:this.previewSize,maxZoom:this.options.maxZoom,exportZoom:this.options.exportZoom,smallImage:this.options.smallImage}))return this.onImageError(i.ERRORS.SMALL_IMAGE),void(this.image.src&&this.setImageLoadedClass());this.image.src=this.preImage.src}},{key:"onImageLoaded",value:function(){this.rotation=0,this.setupZoomer(this.options.imageState&&this.options.imageState.zoom||this._initialZoom),this.options.imageState&&this.options.imageState.offset?this.offset=this.options.imageState.offset:this.centerImage(),this.options.imageState={},this.$image.attr("src",this.image.src),this.options.imageBackground&&this.$bg.attr("src",this.image.src),this.setImageLoadedClass(),this.imageLoaded=!0,this.options.onImageLoaded()}},{key:"onImageError",value:function(){this.options.onImageError.apply(this,arguments),this.removeImageLoadingClass()}},{key:"setImageLoadingClass",value:function(){this.$preview.removeClass(i.CLASS_NAMES.IMAGE_LOADED).addClass(i.CLASS_NAMES.IMAGE_LOADING)}},{key:"setImageLoadedClass",value:function(){this.$preview.removeClass(i.CLASS_NAMES.IMAGE_LOADING).addClass(i.CLASS_NAMES.IMAGE_LOADED)}},{key:"removeImageLoadingClass",value:function(){this.$preview.removeClass(i.CLASS_NAMES.IMAGE_LOADING)}},{key:"getEventPosition",value:function(a){if(a.originalEvent&&a.originalEvent.touches&&a.originalEvent.touches[0]&&(a=a.originalEvent.touches[0]),a.clientX&&a.clientY)return{x:a.clientX,y:a.clientY}}},{key:"onPreviewEvent",value:function(a){if(this.imageLoaded)return this.moveContinue=!1,this.$imageContainer.off(i.EVENTS.PREVIEW_MOVE),"mousedown"===a.type||"touchstart"===a.type?(this.origin=this.getEventPosition(a),this.moveContinue=!0,this.$imageContainer.on(i.EVENTS.PREVIEW_MOVE,this.onMove.bind(this))):(0,f.default)(document.body).focus(),a.stopPropagation(),!1}},{key:"onMove",value:function(a){var b=this.getEventPosition(a);return this.moveContinue&&b&&(this.offset={x:this.offset.x+b.x-this.origin.x,y:this.offset.y+b.y-this.origin.y}),this.origin=b,a.stopPropagation(),!1}},{key:"fixOffset",value:function(a){if(!this.imageLoaded)return a;var b={x:a.x,y:a.y};return this.options.freeMove||(this.imageWidth*this.zoom>=this.previewSize.width?b.x=Math.min(0,Math.max(b.x,this.previewSize.width-this.imageWidth*this.zoom)):b.x=Math.max(0,Math.min(b.x,this.previewSize.width-this.imageWidth*this.zoom)),this.imageHeight*this.zoom>=this.previewSize.height?b.y=Math.min(0,Math.max(b.y,this.previewSize.height-this.imageHeight*this.zoom)):b.y=Math.max(0,Math.min(b.y,this.previewSize.height-this.imageHeight*this.zoom))),b.x=(0,k.round)(b.x),b.y=(0,k.round)(b.y),b}},{key:"centerImage",value:function(){this.image.width&&this.image.height&&this.zoom&&(this.offset={x:(this.previewSize.width-this.imageWidth*this.zoom)/2,y:(this.previewSize.height-this.imageHeight*this.zoom)/2})}},{key:"onZoomSliderChange",value:function(){if(this.imageLoaded){this.zoomSliderPos=Number(this.$zoomSlider.val());var a=this.zoomer.getZoom(this.zoomSliderPos);a!==this.zoom&&(this.zoom=a)}}},{key:"enableZoomSlider",value:function(){this.$zoomSlider.removeAttr("disabled"),this.options.onZoomEnabled()}},{key:"disableZoomSlider",value:function(){this.$zoomSlider.attr("disabled",!0),this.options.onZoomDisabled()}},{key:"setupZoomer",value:function(a){this.zoomer.setup({imageSize:this.imageSize,previewSize:this.previewSize,exportZoom:this.options.exportZoom,maxZoom:this.options.maxZoom,minZoom:this.options.minZoom,smallImage:this.options.smallImage}),this.zoom=(0,k.exists)(a)?a:this._zoom,this.isZoomable()?this.enableZoomSlider():this.disableZoomSlider()}},{key:"fixZoom",value:function(a){return this.zoomer.fixZoom(a)}},{key:"isZoomable",value:function(){return this.zoomer.isZoomable()}},{key:"renderImage",value:function(){var a="\n      translate("+this.rotatedOffset.x+"px, "+this.rotatedOffset.y+"px)\n      scale("+this.zoom+")\n      rotate("+this.rotation+"deg)";this.$image.css({transform:a,webkitTransform:a}),this.options.imageBackground&&this.$bg.css({transform:a,webkitTransform:a})}},{key:"rotateCW",value:function(){this.shouldRejectImage({imageWidth:this.image.height,imageHeight:this.image.width,previewSize:this.previewSize,maxZoom:this.options.maxZoom,exportZoom:this.options.exportZoom,smallImage:this.options.smallImage})?this.rotation=(this.rotation+180)%360:this.rotation=(this.rotation+90)%360}},{key:"rotateCCW",value:function(){this.shouldRejectImage({imageWidth:this.image.height,imageHeight:this.image.width,previewSize:this.previewSize,maxZoom:this.options.maxZoom,exportZoom:this.options.exportZoom,smallImage:this.options.smallImage})?this.rotation=(this.rotation+180)%360:this.rotation=(this.rotation+270)%360}},{key:"shouldRejectImage",value:function(a){var b=a.imageWidth,c=a.imageHeight,d=a.previewSize,e=a.maxZoom,f=a.exportZoom;return"reject"===a.smallImage&&(b*e<d.width*f||c*e<d.height*f)}},{key:"getCroppedImageData",value:function(a){if(this.image.src){var b={type:"image/png",quality:.75,originalSize:!1,fillBg:"#fff"};a=f.default.extend({},b,a);var c=a.originalSize?1/this.zoom:this.options.exportZoom,d={width:this.zoom*c*this.image.width,height:this.zoom*c*this.image.height},e=(0,f.default)("<canvas />").attr({width:this.previewSize.width*c,height:this.previewSize.height*c}).get(0),g=e.getContext("2d");return"image/jpeg"===a.type&&(g.fillStyle=a.fillBg,g.fillRect(0,0,e.width,e.height)),g.translate(this.rotatedOffset.x*c,this.rotatedOffset.y*c),g.rotate(this.rotation*Math.PI/180),g.drawImage(this.image,0,0,d.width,d.height),e.toDataURL(a.type,a.quality)}}},{key:"disable",value:function(){this.unbindListeners(),this.disableZoomSlider(),this.$el.addClass(i.CLASS_NAMES.DISABLED)}},{key:"reenable",value:function(){this.bindListeners(),this.enableZoomSlider(),this.$el.removeClass(i.CLASS_NAMES.DISABLED)}},{key:"$",value:function(a){return this.$el?this.$el.find(a):null}},{key:"offset",set:function(a){a&&(0,k.exists)(a.x)&&(0,k.exists)(a.y)&&(this._offset=this.fixOffset(a),this.renderImage(),this.options.onOffsetChange(a))},get:function(){return this._offset}},{key:"zoom",set:function(a){if(a=this.fixZoom(a),this.imageLoaded){var b=this.zoom,c=this.previewSize.width/2-(this.previewSize.width/2-this.offset.x)*a/b,d=this.previewSize.height/2-(this.previewSize.height/2-this.offset.y)*a/b;this._zoom=a,this.offset={x:c,y:d}}else this._zoom=a;this.zoomSliderPos=this.zoomer.getSliderPos(this.zoom),this.$zoomSlider.val(this.zoomSliderPos),this.options.onZoomChange(a)},get:function(){return this._zoom}},{key:"rotatedOffset",get:function(){return{x:this.offset.x+(90===this.rotation?this.image.height*this.zoom:0)+(180===this.rotation?this.image.width*this.zoom:0),y:this.offset.y+(180===this.rotation?this.image.height*this.zoom:0)+(270===this.rotation?this.image.width*this.zoom:0)}}},{key:"rotation",set:function(a){this._rotation=a,this.imageLoaded&&this.setupZoomer()},get:function(){return this._rotation}},{key:"imageState",get:function(){return{src:this.image.src,offset:this.offset,zoom:this.zoom}}},{key:"imageSrc",get:function(){return this.image.src},set:function(a){this.loadImage(a)}},{key:"imageWidth",get:function(){return this.rotation%180==0?this.image.width:this.image.height}},{key:"imageHeight",get:function(){return this.rotation%180==0?this.image.height:this.image.width}},{key:"imageSize",get:function(){return{width:this.imageWidth,height:this.imageHeight}}},{key:"initialZoom",get:function(){return this.options.initialZoom},set:function(a){this.options.initialZoom=a,this._initialZoom="min"===a?0:"image"===a?1:0}},{key:"exportZoom",get:function(){return this.options.exportZoom},set:function(a){this.options.exportZoom=a,this.setupZoomer()}},{key:"minZoom",get:function(){return this.options.minZoom},set:function(a){this.options.minZoom=a,this.setupZoomer()}},{key:"maxZoom",get:function(){return this.options.maxZoom},set:function(a){this.options.maxZoom=a,this.setupZoomer()}},{key:"previewSize",get:function(){return this._previewSize},set:function(a){!a||a.width<=0||a.height<=0||(this._previewSize={width:a.width,height:a.height},this.$preview.css({width:this.previewSize.width,height:this.previewSize.height}),this.imageLoaded&&this.setupZoomer())}}]),a}();exports.default=l,module.exports=exports.default},function(module,exports){function a(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var b=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),c=function(){function c(){a(this,c),this.minZoom=this.maxZoom=1}return b(c,[{key:"setup",value:function(a){var b=a.imageSize,c=a.previewSize,d=a.exportZoom,e=a.maxZoom,f=a.minZoom,g=a.smallImage,h=c.width/b.width,i=c.height/b.height;this.minZoom="fit"===f?Math.min(h,i):Math.max(h,i),"allow"===g&&(this.minZoom=Math.min(this.minZoom,1)),this.maxZoom=Math.max(this.minZoom,e/d)}},{key:"getZoom",value:function(a){return this.minZoom&&this.maxZoom?a*(this.maxZoom-this.minZoom)+this.minZoom:null}},{key:"getSliderPos",value:function(a){return this.minZoom&&this.maxZoom?this.minZoom===this.maxZoom?0:(a-this.minZoom)/(this.maxZoom-this.minZoom):null}},{key:"isZoomable",value:function(){return this.minZoom&&this.maxZoom?this.minZoom!==this.maxZoom:null}},{key:"fixZoom",value:function(a){return Math.max(this.minZoom,Math.min(this.maxZoom,a))}}]),c}();exports.default=c,module.exports=exports.default},function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0});exports.PLUGIN_KEY="cropit";var a={PREVIEW:"cropit-preview",PREVIEW_IMAGE_CONTAINER:"cropit-preview-image-container",PREVIEW_IMAGE:"cropit-preview-image",PREVIEW_BACKGROUND_CONTAINER:"cropit-preview-background-container",PREVIEW_BACKGROUND:"cropit-preview-background",FILE_INPUT:"cropit-image-input",ZOOM_SLIDER:"cropit-image-zoom-input",DRAG_HOVERED:"cropit-drag-hovered",IMAGE_LOADING:"cropit-image-loading",IMAGE_LOADED:"cropit-image-loaded",DISABLED:"cropit-disabled"};exports.CLASS_NAMES=a;var b={IMAGE_FAILED_TO_LOAD:{code:0,message:"Image failed to load."},SMALL_IMAGE:{code:1,message:"Image is too small."}};exports.ERRORS=b;var c=function(a){return a.map(function(a){return a+".cropit"}).join(" ")},d={PREVIEW:c(["mousedown","mouseup","mouseleave","touchstart","touchend","touchcancel","touchleave"]),PREVIEW_MOVE:c(["mousemove","touchmove"]),ZOOM_INPUT:c(["mousemove","touchmove","change"])};exports.EVENTS=d},function(module,exports,a){Object.defineProperty(exports,"__esModule",{value:!0});var b=a(4),c={elements:[{name:"$preview",description:"The HTML element that displays image preview.",defaultSelector:"."+b.CLASS_NAMES.PREVIEW},{name:"$fileInput",description:"File input element.",defaultSelector:"input."+b.CLASS_NAMES.FILE_INPUT},{name:"$zoomSlider",description:"Range input element that controls image zoom.",defaultSelector:"input."+b.CLASS_NAMES.ZOOM_SLIDER}].map(function(a){return a.type="jQuery element",a.default="$imageCropper.find('"+a.defaultSelector+"')",a}),values:[{name:"width",type:"number",description:"Width of image preview in pixels. If set, it will override the CSS property.",default:null},{name:"height",type:"number",description:"Height of image preview in pixels. If set, it will override the CSS property.",default:null},{name:"imageBackground",type:"boolean",description:"Whether or not to display the background image beyond the preview area.",default:!1},{name:"imageBackgroundBorderWidth",type:"array or number",description:"Width of background image border in pixels.\n        The four array elements specify the width of background image width on the top, right, bottom, left side respectively.\n        The background image beyond the width will be hidden.\n        If specified as a number, border with uniform width on all sides will be applied.",default:[0,0,0,0]},{name:"exportZoom",type:"number",description:"The ratio between the desired image size to export and the preview size.\n        For example, if the preview size is `300px * 200px`, and `exportZoom = 2`, then\n        the exported image size will be `600px * 400px`.\n        This also affects the maximum zoom level, since the exported image cannot be zoomed to larger than its original size.",default:1},{name:"allowDragNDrop",type:"boolean",description:"When set to true, you can load an image by dragging it from local file browser onto the preview area.",default:!0},{name:"minZoom",type:"string",description:"This options decides the minimal zoom level of the image.\n        If set to `'fill'`, the image has to fill the preview area, i.e. both width and height must not go smaller than the preview area.\n        If set to `'fit'`, the image can shrink further to fit the preview area, i.e. at least one of its edges must not go smaller than the preview area.",default:"fill"},{name:"maxZoom",type:"number",description:"Determines how big the image can be zoomed. E.g. if set to 1.5, the image can be zoomed to 150% of its original size.",default:1},{name:"initialZoom",type:"string",description:"Determines the zoom when an image is loaded.\n        When set to `'min'`, image is zoomed to the smallest when loaded.\n        When set to `'image'`, image is zoomed to 100% when loaded.",default:"min"},{name:"freeMove",type:"boolean",description:"When set to true, you can freely move the image instead of being bound to the container borders",default:!1},{name:"smallImage",type:"string",description:"When set to `'reject'`, `onImageError` would be called when cropit loads an image that is smaller than the container.\n        When set to `'allow'`, images smaller than the container can be zoomed down to its original size, overiding `minZoom` option.\n        When set to `'stretch'`, the minimum zoom of small images would follow `minZoom` option.",default:"reject"}],callbacks:[{name:"onFileChange",description:"Called when user selects a file in the select file input.",params:[{name:"event",type:"object",description:"File change event object"}]},{name:"onFileReaderError",description:"Called when `FileReader` encounters an error while loading the image file."},{name:"onImageLoading",description:"Called when image starts to be loaded."},{name:"onImageLoaded",description:"Called when image is loaded."},{name:"onImageError",description:"Called when image cannot be loaded.",params:[{name:"error",type:"object",description:"Error object."},{name:"error.code",type:"number",description:"Error code. `0` means generic image loading failure. `1` means image is too small."},{name:"error.message",type:"string",description:"A message explaining the error."}]},{name:"onZoomEnabled",description:"Called when image the zoom slider is enabled."},{name:"onZoomDisabled",description:"Called when image the zoom slider is disabled."},{name:"onZoomChange",description:"Called when zoom changes.",params:[{name:"zoom",type:"number",description:"New zoom."}]},{name:"onOffsetChange",description:"Called when image offset changes.",params:[{name:"offset",type:"object",description:"New offset, with `x` and `y` values."}]}].map(function(a){return a.type="function",a})},d=function(a){var b={};return a&&c.elements.forEach(function(c){b[c.name]=a.find(c.defaultSelector)}),c.values.forEach(function(a){b[a.name]=a.default}),c.callbacks.forEach(function(a){b[a.name]=function(){}}),b};exports.loadDefaults=d,exports.default=c},function(module,exports){Object.defineProperty(exports,"__esModule",{value:!0});var a=function(a){return void 0!==a};exports.exists=a;var b=function(a){return+(Math.round(100*a)+"e-2")};exports.round=b}])});