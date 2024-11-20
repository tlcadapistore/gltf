"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[877],{1285:(e,t,s)=>{s.r(t),s.d(t,{OBJLoader:()=>g});var t=s(2718),n=s(604),r=s(428),o=s(1695),a=s(5433),h=s(4735),l=s(4955),u=s(2263),i=s(6646),m=s(999),c=s(3629),d=s(1201),p=s(6039),_=s(6780);class f extends t.a{constructor(e){super({}),this._materialData=[],this._result={},this._propParsers={ns:(e,t)=>{e.shine=Number(t)},ka:(e,t)=>{e.ambient=this.parseVec3(t)},kd:(e,t)=>{e.diffuse=this.parseVec3(t)},ks:(e,t)=>{e.specular=this.parseVec3(t)},ke:(e,t)=>{e.emissive=this.parseVec3(t)},map_kd:(e,t)=>{e.diffuseMap=t},map_bump:(e,t)=>{e.normalMap=t},bump:(e,t)=>{e.normalMap=t},map_ns:(e,t)=>{e.specularHighlightMap=t}},this._objLoader=e}async loadFile(e,s){return new Promise(t=>{var e=s.find(e=>"mtl"===a.P.getExtension(e.name));e?a.P.readAsText(e,e=>{this.parse(e),this.createMaterials(s),t(this)}):t(this)})}createMaterials(e){this._result={};for(const s of this._materialData){var t={name:s.name,metallicFactor:0};if(s.emissive&&(t.emissiveFactor=c.I.vec3_to_hex(s.emissive)),s.diffuse&&(t.baseColorFactor=c.I.vec3_to_hex(s.diffuse)),t.baseColorTexture=this.getTexture(s.diffuseMap,e),t.normalTexture=this.getTexture(s.normalMap,e),t.metallicRoughnessTexture=this.getMetallicRoughnessTexture(s.specularHighlightMap,e),s.specular){const e=(s.specular[0]+s.specular[1]+s.specular[2])/3;t.roughnessFactor=1-e}t.metallicRoughnessTexture&&(t.roughnessFactor=1),this._result[s.name]=new i.q(t)}}getMetallicRoughnessTexture(e,s){var t=this.getTexturesSource(e,s);if(t){const e=URL.createObjectURL(t),s=new p.l({texture:_.x.from({name:a.P.getFileNameWithExtension(t.name),source:e,wrapS:d.g.REPEAT,wrapT:d.g.REPEAT,onLoad:()=>{this._objLoader.invalidate()}})}),r=new Image;return r.onload=()=>{var e=document.createElement("canvas"),t=(e.width=r.naturalWidth,e.height=r.naturalHeight,e.getContext("2d"));t&&(t.drawImage(r,0,0),t=m.P.mapPixels(e,e=>{e[0]=0,e[2]=0}))&&(s.texture.image.setMediaSource(t),this._objLoader.invalidate())},r.src=e,s}}getTexturesSource(t,e){if(t)return t=t.replace(/-\w+\s+\S+\s*/g,"").trim(),e.find(e=>e.name===t)||void 0}getTexture(e,t){e=this.getTexturesSource(e,t);if(e)return new p.l({texture:_.x.from({name:a.P.getFileNameWithExtension(e.name),source:URL.createObjectURL(e),wrapS:d.g.REPEAT,wrapT:d.g.REPEAT,onLoad:()=>{this._objLoader.invalidate()}})})}parse(e){var t;for(t of e.split("\n"))t=t.trim(),this.parseLine(t);this.completeMaterial()}parseLine(e){if(0===e.indexOf("newmtl")){this.completeMaterial();var t=e.split("newmtl ")[1]||"";this._material={name:t,ambient:void 0,diffuse:void 0,specular:void 0,emissive:void 0,shine:void 0,diffuseMap:void 0,normalMap:void 0,specularHighlightMap:void 0}}else if(this._material){var t=e.split(" "),s=t[0];if(s){const e=this._propParsers[s.toLowerCase()];e&&(s=t.slice(1).join(" ")||"")&&e(this._material,s.trim())}}else console.warn("MTLLoader: No material selected!")}parseVec3(e){return(e||"").split(" ").map(e=>Number(e))}completeMaterial(){this._material&&(this._materialData.push(this._material),this._material=void 0)}get result(){return this._result}}var v=s(3829);class g extends t.a{constructor(e){super({...e,createIndexBuffer:!0}),this._array=[],this._nextStart=0,this._vertexCount=0,this._v=["start"],this._vn=["start"],this._vt=["start"],this._materials={},this._defaultMaterial=new i.q({baseColorFactor:11513775,metallicFactor:0,roughnessFactor:.75}),this._nodes=[],this._currentNode=this.createNode()}createNode(){return{name:"",materialName:"",geometry:{position:!0,uv:!1,normal:!1},start:0}}loadFile(t,s){return new Promise(async e=>{this._scene.name=t.name,this.loadMaterials(s).then(async()=>{await this.loadObj(t),e(this)})})}async loadObj(e){return new Promise(t=>{a.P.readAsText(e,e=>{this.parse(e),t()})})}async loadMaterials(r){return new Promise(async(e,t)=>{var s=await new f(this).loadFile(null,r);s?(this._materials=s.result,e(s)):e(null)})}parse(e){var t;for(t of e.split("\n"))t=t.trim(),this.parseLine(t);0===this._nodes.length&&this.completeNode(),this.createNodes(),this.completeLoad()}parseLine(e){var e=e.split(" "),t=e[0],e=e.slice(1).join(" ").trim();"v"===t?this.parseV(e):"vt"===t?this.parseVT(e):"vn"===t?this.parseVN(e):"f"===t?this.parseF(e):"usemtl"===t?this.newMaterial(e):"g"===t&&this.parseG(e)}newMaterial(e){this.completeNode(),this._currentNode.materialName=e}parseG(e=""){this.completeNode(),this._currentNode.name=e}completeNode(){var e;this._vertexCount>this._nextStart&&(!(e=this._nodes[this._nodes.length-1])||e.start<this._vertexCount)&&(this._currentNode.start=this._nextStart,this._nodes.push(this._currentNode),this._nextStart=this._vertexCount,this._currentNode=this.createNode())}createNodes(){this.createBuffer();let t=0;var s=new l.B({name:this._scene.name});this._scene.add(s);for(let e=0;e<this._nodes.length;++e){var r=this._nodes[e],a=this._nodes[e+1],a=(a?a.start:this._vertexCount)-r.start,i=this._materials[r.materialName]||this._defaultMaterial,a=this.createGeometry(r,a,t),r=new l.B({name:r.name,renderNodes:[new u.j({geometry:a,material:i})]});s.add(r),t+=a.vertexCount*a.buffers[0].byteStride}}createBuffer(){this._buffer=new r.f({data:new Float32Array(this._array)})}createGeometry(e,t,s){var e=e.geometry,r=v._Z[d.g.FLOAT];let a=3*r;e.normal&&(a+=3*r),e.uv&&(a+=2*r);var i=[{semantic:h.p.POSITION,size:3,byteOffset:s,byteStride:a}];if(s+=3*r,e.normal&&(i.push({semantic:h.p.NORMAL,size:3,byteOffset:s,byteStride:a}),s+=3*r),e.uv&&(i.push({semantic:h.p.TEXCOORD_0,size:2,byteOffset:s,byteStride:a}),s+=2*r),this._buffer)return new n.Z({buffers:[new o.t({buffer:this._buffer,attributes:i})],start:0,count:t});throw new Error("Buffer not created!")}parseV(e){e=this.parseNumbers(e);this._v.push([e[0],e[1],e[2]])}parseVT(e){e=this.parseNumbers(e);this._vt.push([e[0],String(1-Number(e[1]))])}parseVN(e){e=this.parseNumbers(e);this._vn.push([e[0],e[1],e[2]])}parseF(e){const t=this.parseNumbers(e),s=this.parseFace(t),r=s[0];for(let e=1;e<s.length-1;e++){const t=s[e],a=s[e+1];this.addTriangle(r[0],t[0],a[0],r[1],t[1],a[1],r[2],t[2],a[2])}}parseNumbers(e){var t=[],s=e.split(" ");for(let e=0;e<s.length;++e){var r=s[e].trim();""!==r&&t.push(r)}return t}addTriangle(e,t,s,r,a,i,n,o,h){this.addVertex(e,n,r),this.addVertex(t,o,a),this.addVertex(s,h,i)}addVertex(e,t,s){e=this._v[e],t=this._vn[t],s=this._vt[s],this._array.push(e[0],e[1],e[2]),t&&(this._currentNode.geometry.normal=!0,this._array.push(t[0],t[1],t[2])),s&&(this._currentNode.geometry.uv=!0,this._array.push(s[0],s[1])),this._vertexCount++}parseFace(t){var s=[];for(let e=0;e<t.length;++e){var r=t[e].trim().split("/");s.push(r)}return s}}}}]);