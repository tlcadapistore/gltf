"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[651],{522:(e,t,i)=>{i.r(t),i.d(t,{RenderDelegateInterface:()=>P,USDZLoader:()=>b,USDZ_LOGS:()=>O});var s=i(6348),a=i(4707),n=i(5433);class r{static uuidv4(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16))}}r.UUID=function(){const a=[];for(let e=0;e<256;e++)a[e]=(e<16?"0":"")+e.toString(16);return()=>{var e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0,s=4294967295*Math.random()|0;return a[255&e]+a[e>>8&255]+a[e>>16&255]+a[e>>24&255]+"-"+a[255&t]+a[t>>8&255]+"-"+a[t>>16&15|64]+a[t>>24&255]+"-"+a[63&i|128]+a[i>>8&255]+"-"+a[i>>16&255]+a[i>>24&255]+a[255&s]+a[s>>8&255]+a[s>>16&255]+a[s>>24&255]}}();var t=i(2718),o=i(651),l=i(7723),u=i(4955),c=i(4735),h=i(1695),d=i(428),m=i(6646),_=i(604),f=i(5216);class g{constructor(e,t){this._transform=l._.create(),this._attributes_facevarying={},this._attributes_vertex={},this._id=e,this._delegate=t}updateIndices(e){O&&console.log("updateIndices",e),this._indices=e}updatePoints(e){O&&console.log("updatePoints",e),this._attributes_vertex[c.p.POSITION]={data:e,dimension:3}}updateNormals(e){O&&console.log("updateNormals",e),this._attributes_vertex[c.p.NORMAL]={data:e,dimension:3}}updatePrimvar(e,t,i,s){O&&console.log("updatePrimvar",t,e,i,s);var a=p[e];a?"facevarying"===s?this._attributes_facevarying[a]=this._attributes_facevarying[a]||{data:t.slice(0),dimension:i}:"constant"!==s&&"vertex"===s&&(this._attributes_vertex[a]=this._attributes_vertex[a]||{data:t.slice(0),dimension:i}):console.warn("semantic not found",e)}setTransform(e){O&&console.log("setTransform",e),this._transform=e}setMaterial(e){O&&console.log("setMaterial",e),this._material=this._delegate.materials[e]}setDisplayColor(e,t){}commit(){O&&console.log("commit")}async getSceneNode(){if(!this._sceneNode){var e=[],t=Object.values(p),i=t.some(e=>this._attributes_facevarying[e]);for(const a of t){var s=this.getPrimitive(a,i);s&&e.push(new h.t({buffer:new d.f({data:s.data}),attributes:[{semantic:a,size:s.dimension}]}))}t=this._material?await this._material.getMaterial():new m.q;this._sceneNode=u.B.create(new _.Z({buffers:e,indexBuffer:!i&&this._indices?f.Y.fromData(this._indices):void 0}),t,this._id||""),this._sceneNode.transform.setFromMatrix(this._transform)}return this._sceneNode}getPrimitive(e,t){if(this._attributes_facevarying[e])return this._attributes_facevarying[e];var{data:i=null,dimension:s=3}=this._attributes_vertex[e]||{};if(i){if(this._indices&&t){var a=new Float32Array(this._indices.length*s);for(let t=0;t<this._indices.length;++t){var r=this._indices[t];for(let e=0;e<s;++e)a[t*s+e]=i[r*s+e]}return{data:a,dimension:s}}return{data:i,dimension:s}}}}const p={points:c.p.POSITION,normals:c.p.NORMAL,displayColor:c.p.COLOR,st:c.p.TEXCOORD_0,st1:c.p.TEXCOORD_1,st2:c.p.TEXCOORD_2,st3:c.p.TEXCOORD_3,st4:c.p.TEXCOORD_4,st5:c.p.TEXCOORD_5,st6:c.p.TEXCOORD_6,st7:c.p.TEXCOORD_7};var v=i(3629),x=i(999),w=i(1201),T=i(7054),I=i(6780),y=i(6407);class N{constructor(e,t){this._nodes={},this._surfaceNodeId="",this._inputs={},this._promises=[],this._material=new m.q,this._delegate=t}updateNode(e,t,i){this._nodes[t]=i,O&&console.log("updateNode",e,t,i)}async updateFinished(a,e){O&&console.log("updateFinished",a,e),this._textureFactory=new R(this._delegate.driver,this._delegate.fileName);for(const a of e)this._inputs[a.outputId]=this._inputs[a.outputId]||{},this._inputs[a.outputId][a.outputName]=a,"diffuseColor"!==a.outputName&&"normal"!==a.outputName||(this._surfaceNodeId=a.outputId);if(!this._surfaceNodeId)for(const a in this._nodes){const e=this._nodes[a];if(e.diffuseColor||void 0!==e.roughness||void 0!==e.metallic||void 0!==e.opacity){this._surfaceNodeId=a;break}}if(this._surfaceNodeId){const a=this._nodes[this._surfaceNodeId];void 0!==(null==a?void 0:a.opacity)&&a.opacity<1&&(this._material.baseColorAlpha=a.opacity,this._material.alphaMode=T.mM.BLEND),void 0!==a.opacityThreshold&&0<a.opacityThreshold&&(this._material.alphaMode=T.mM.MASK,this._material.alphaCutoff=a.opacityThreshold),Array.isArray(null==a?void 0:a.diffuseColor)&&(this._material.baseColorFactor=v.I.vec3_to_hex(a.diffuseColor)),void 0!==(null==a?void 0:a.metallic)&&(this._material.metallicFactor=a.metallic),void 0!==(null==a?void 0:a.roughness)&&(this._material.roughnessFactor=a.roughness),void 0!==(null==a?void 0:a.ior)&&(this._material.ior=a.ior),this.getTexture("diffuseColor",(e,t,i,s)=>{e&&(this._material.baseColorTextureInfo.texture=e),this._material.baseColorTextureInfo.channel=t,M(this._material.baseColorTextureInfo.transform,i);var e=this._inputs[this._surfaceNodeId];if(null!=e&&e.opacity&&this._material.alphaMode!==T.mM.MASK&&(this._material.alphaMode=T.mM.BLEND),!Array.isArray(null==a?void 0:a.diffuseColor)){const a=Array.isArray(s.scale)?s.scale:y.M.isValidNumber(s.scale)?[s.scale,s.scale,s.scale,1]:[1,1,1,1];a[0]=null!=(t=a[0])?t:1,a[1]=null!=(i=a[1])?i:1,a[2]=null!=(e=a[2])?e:1,a[3]=null!=(s=a[3])?s:1,this._material.baseColorFactor=v.I.vec3_to_hex(a)}}),this.getTexture("normal",(e,t,i,s)=>{e&&(this._material.normalTextureInfo.texture=e),this._material.normalTextureInfo.channel=t,M(this._material.normalTextureInfo.transform,i),Array.isArray(s.scale)&&s.scale.some(e=>2!==e)||Array.isArray(s.bias)&&s.bias.some(e=>-1!==e)}),this.getTexture("emissiveColor",(e,t,i)=>{e&&(this._material.emissiveTextureInfo.texture=e),this._material.emissiveTextureInfo.channel=t,M(this._material.emissiveTextureInfo.transform,i),this._material.emissiveFactor=16777215}),Promise.all([this.getTextureResult("metallic"),this.getTextureResult("roughness"),this.getTextureResult("occlusion")]).then(([e,t,i])=>{if(this.assignORMTextures(e,t,i),void 0===(null==a?void 0:a.metallic)&&(void 0!==(null==(i=null==e?void 0:e.texture)?void 0:i.scale)?this._material.metallicFactor=(Array.isArray(e.texture.scale)?e.texture.scale[2]:e.texture.scale)||1:this._material.metallicFactor=e?1:0),void 0===(null==a?void 0:a.roughness))if(void 0!==(null==(i=null==e?void 0:e.texture)?void 0:i.scale)){const a=null==t?void 0:t.texture.scale;a&&(this._material.roughnessFactor=(Array.isArray(a)?a[1]:a)||1)}else this._material.roughnessFactor=t?1:0})}}assignORMTextures(e,t,i){var s=e&&t;s&&(e.channel!==t.channel&&console.warn("Metallic and roughness texture channel mismatch",e,t),e.texture.wrapS===t.texture.wrapS&&e.texture.wrapT===t.texture.wrapT||console.warn("Metallic and roughness texture repeat mode mismatch",e,t));let a,r=null==e?void 0:e.source,o=null==t?void 0:t.source,n=r||o;var l=!e||"b"===e.rel.inputName,u=!t||"g"===t.rel.inputName,c=!i||"r"===i.rel.inputName;if((!s||r===o)&&l&&u||(i&&(null==i?void 0:i.source)===r&&i.texture.wrapS===((null==e?void 0:e.texture.wrapS)||(null==t?void 0:t.texture.wrapS))&&i.texture.wrapT===((null==e?void 0:e.texture.wrapT)||(null==t?void 0:t.texture.wrapT))?(n=this.packMetallicRoughnessTexture(e,t,i),a=n):n=this.packMetallicRoughnessTexture(e,t)),a=a||(c?null==i?void 0:i.source:this.packMetallicRoughnessTexture(void 0,void 0,i)),n){const i=e||t;i&&(this._material.metallicRoughnessTextureInfo.texture=I.x.from({source:n,...this.convertTextureParams(i.texture)}),this._material.metallicRoughnessTextureInfo.channel=i.channel,M(this._material.metallicRoughnessTextureInfo.transform,i.transform))}a&&i&&(this._material.occlusionTextureInfo.texture=a===n?this._material.metallicRoughnessTextureInfo.texture:I.x.from({source:a,...this.convertTextureParams(i.texture)}),this._material.occlusionTextureInfo.channel=i.channel,M(this._material.occlusionTextureInfo.transform,i.transform))}packMetallicRoughnessTexture(e,n,l){var u=[e,n,l].filter(e=>!(null==e||!e.source)),c=document.createElement("canvas"),u=(c.width=Math.max(...u.map(e=>e.source.width)),c.height=Math.max(...u.map(e=>e.source.height)),c.getContext("2d",{willReadFrequently:!0}));if(u){let t,i,s,a=0,r=0,o=0;var h=["r","g","b","a"],d=(null!=e&&e.source&&(u.drawImage(e.source,0,0,c.width,c.height),t=u.getImageData(0,0,c.width,c.height).data,-1===(a=h.indexOf(e.rel.inputName)))&&(console.warn("Metallic channel not found in texture",e.rel.inputName),a=0),null!=n&&n.source&&(u.drawImage(n.source,0,0,c.width,c.height),i=u.getImageData(0,0,c.width,c.height).data,-1===(r=h.indexOf(n.rel.inputName)))&&(console.warn("Roughness channel not found in texture",n.rel.inputName),r=0),null!=l&&l.source&&(u.drawImage(l.source,0,0,c.width,c.height),s=u.getImageData(0,0,c.width,c.height).data,-1===(o=h.indexOf(l.rel.inputName)))&&(console.warn("Occlusion channel not found in texture",l.rel.inputName),o=0),h.indexOf("r")),m=h.indexOf("g"),_=h.indexOf("b"),f=h.indexOf("a"),g=c.width*c.height,p=new Uint8ClampedArray(4*g);for(let e=0;e<4*g;e+=4)s&&(p[e+d]=s[e+o]),i&&(p[e+m]=i[e+r]),t&&(p[e+_]=t[e+a]),p[e+f]=255;return x.P.createCanvasFromData(p,c.width,c.height)}console.warn("Could not get canvas context")}getTexture(e,a){this.getTextureResult(e,(e,t,i,s)=>{e=e?I.x.from({source:e,...this.convertTextureParams(s)}):void 0;a(e,t,i,s)})}getTextureResult(e,n){var t;const l=null==(t=this._inputs[this._surfaceNodeId])?void 0:t[e],u=null==l?void 0:l.inputId,c=this._nodes[u];if(c){const e=new Promise(t=>{var e;const i=null==(e=null==(e=this._inputs[u])?void 0:e.st)?void 0:e.inputId,s=this._nodes[i],a=null==(e=null==(e=this._inputs[i])?void 0:e.in)?void 0:e.inputId,r=this._nodes[a],o="st"===(e=(null==r?void 0:r.varname)||"st")?0:0===(null==e?void 0:e.indexOf("st"))?Number(e.substring(2)):(console.warn("Unknown texture channel",e),0);if(!this._textureFactory)throw new Error("textureFactory not set");this._textureFactory.getImage(c.file).then(e=>{null!=n&&n(e,o,s,c),t({source:e,channel:o,texture:c,transform:s,rel:l})})});return this._promises.push(e),e}}convertTextureParams(e){return{name:n.P.getFileNameWithExtension(e.file)||"",flipY:!0,wrapS:this.convertWrap(e.wrapS),wrapT:this.convertWrap(e.wrapT),magFilter:"nearest"===e.magFilter?w.g.NEAREST:w.g.LINEAR,minFilter:"nearest"===e.minFilter?w.g.NEAREST:w.g.LINEAR_MIPMAP_LINEAR}}convertWrap(e){return"repeat"===e?w.g.REPEAT:"mirror"===e?w.g.MIRRORED_REPEAT:w.g.CLAMP_TO_EDGE}async getMaterial(){return await Promise.all(this._promises),this._material}}class R{constructor(e,t){this._images={},this._driver=e,this._baseName=t}getImage(o){return this._images[o]||(this._images[o]=new Promise(r=>{var e=o.startsWith("/")?o:this._baseName+`[${o}]`;this._driver.getFile(e,e=>{if(e){const t=n.P.getMimeType(n.P.getExtension(o)),i=new Blob([e.slice(0)],{type:t}),s=URL.createObjectURL(i),a=new Image;a.onload=()=>{r(a)},a.src=s}else console.warn("Unknown file: "+o),r(void 0)})})),this._images[o]}}function M(e,t){t&&(void 0!==t.rotation&&(e.rotation=t.rotation),t.scale&&e.setScale(t.scale),t.translation)&&e.setTranslation(t.translation)}const O="localhost"===window.location.hostname;class b extends t.a{constructor(){super({}),this.getModule()}async getModule(){if(b._module)return b._module;if(!b._modulePromise){const i="assets/modules/usdz";b._modulePromise=new Promise(async e=>{await s.W.loadScript(i+"/emHdBindings.js");var t=a.U.isIOS()?838860800:void 0;try{const s=await window.getUsdModule(void 0,i,t);await s.ready&&e(b._module=s)}catch(e){console.error("Failed loading USDZ module: "+e)}})}return b._modulePromise}async loadFile(e,t){return this._scene=await this.createUSDInstance(e)||this._scene,this}async createUSDInstance(e){var t=await this.getModule();if(t){var i=await n.P.readAsArraybuffer(e),e=n.P.getExtension(e.name),e=r.uuidv4()+"."+e,i=(t.FS.createDataFile("/",e,new Uint8Array(i),!0,!0,!0),new P(e,"")),t=new t.HdWebSyncDriver(i,e);i.setDriver(t),t.Draw();const s=new o.x,a=[];return Object.values(i.meshes).map(e=>{a.push(e.getSceneNode().then(e=>{s.add(e)}))}),await Promise.all(a),s}}}class P{constructor(e,t){this.fileName="",this._meshes={},this._materials={},this.fileName=e}setDriver(e){this.driver=e}createRPrim(e,t,i){O&&console.log("createRPrim: ",e,t,i);e=new g(t,this);return this._meshes[t]=e}createBPrim(e,t){O&&console.log("createBPrim",e,t)}createSPrim(e,t){if(O&&console.log("Creating SPrim: "+e+" "+t),"material"===e){const e=new N(t,this);return this._materials[t]=e}}CommitResources(){O&&console.log("CommitResources")}get meshes(){return this._meshes}get materials(){return this._materials}}},6348:(e,t,i)=>{i.d(t,{W:()=>s});class s{static async loadScript(i){var e;return this._scripts[i]||(e=document.createElement("script"),this._scripts[i]={script:e,loaded:!1},e.src=i),new Promise((e,t)=>{if(this._scripts[i].loaded)e();else{const t=this._scripts[i].script;t.addEventListener("load",()=>{this._scripts[i].loaded=!0,e()}),t.parentNode||document.body.appendChild(t)}})}}s._scripts={}}}]);