"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[849],{4011:(t,r,n)=>{n.r(r),n.d(r,{DracoLoader:()=>e});var d,o=n(6348),c=n(1201),A=n(604),y=n(5216),I=n(1695),l=n(428),_=n(3829);class e{constructor(){this.drawMode=c.g.TRIANGLES,this._useWasm=!1}async decodeBuffer(e,a){return new Promise(async r=>{this._useWasm?await o.W.loadScript("assets/modules/draco/draco_wasm_wrapper.js"):(0,(await n.e(409).then(n.t.bind(n,6409,23))).default)({onModuleLoaded:t=>{t=this.decode(e,a,t);r(t)}})})}decode(r,t,e){const a=new e.DecoderBuffer;a.Init(t,t.byteLength);var n,o=new e.Decoder;if(o.GetEncodedGeometryType(a)!==e.TRIANGULAR_MESH)throw new Error("geometryType not supported!");if(n=new e.Mesh,!(t=o.DecodeBufferToMesh(a,n)).ok()||0==n.ptr){const r="Decoding failed: "+t.error_msg();throw console.error(r),e.destroy(o),e.destroy(n),new Error(r)}var s=n.num_faces(),i=[];for(const t of Object.keys(r.attributes)){const a=r.attributes[t],c=o.GetAttributeByUniqueId(n,a),A=this.addAttribute(e,o,n,t,c);i.push(A)}let T;if(this.drawMode===c.g.TRIANGLE_STRIP){const r=new e.DracoInt32Array;T=new Uint32Array(r.size());for(let t=0;t<r.size();++t)T[t]=r.GetValue(t);e.destroy(r)}else{T=new Uint32Array(3*s);const r=new e.DracoInt32Array;for(let t=0;t<s;++t){o.GetFaceFromMesh(n,t,r);const e=3*t;T[e]=r.GetValue(0),T[1+e]=r.GetValue(1),T[2+e]=r.GetValue(2)}e.destroy(r)}t=new A.Z({indexBuffer:y.Y.fromData(T),buffers:i});return e.destroy(n),e.destroy(o),t}addAttribute(t,r,e,a,n){var o=(s=n.data_type())===d.DT_FLOAT32?Float32Array:s===d.DT_FLOAT64?Float64Array:s===d.DT_INT8?Int8Array:s===d.DT_INT16?Int16Array:s===d.DT_INT32?Int32Array:s===d.DT_UINT8?Uint8Array:s===d.DT_UINT16?Uint16Array:s===d.DT_UINT32?Uint32Array:(console.warn("Unsupported draco data type: "+s),Float32Array);if(0===n.ptr)throw new Error("No attribute "+a);var s=n.num_components(),i=e.num_points()*s;let T;var c={};switch(o){case Float32Array:T=new t.DracoFloat32Array,r.GetAttributeFloatForAllPoints(e,n,T),c[a]=new Float32Array(i);break;case Int8Array:T=new t.DracoInt8Array,r.GetAttributeInt8ForAllPoints(e,n,T),c[a]=new Int8Array(i);break;case Int16Array:T=new t.DracoInt16Array,r.GetAttributeInt16ForAllPoints(e,n,T),c[a]=new Int16Array(i);break;case Int32Array:T=new t.DracoInt32Array,r.GetAttributeInt32ForAllPoints(e,n,T),c[a]=new Int32Array(i);break;case Uint8Array:T=new t.DracoUInt8Array,r.GetAttributeUInt8ForAllPoints(e,n,T),c[a]=new Uint8Array(i);break;case Uint16Array:T=new t.DracoUInt16Array,r.GetAttributeUInt16ForAllPoints(e,n,T),c[a]=new Uint16Array(i);break;case Uint32Array:T=new t.DracoUInt32Array,r.GetAttributeUInt32ForAllPoints(e,n,T),c[a]=new Uint32Array(i);break;default:throw new Error("Unexpected attribute type! "+o)}for(let t=0;t<i;++t)c[a][t]=T.GetValue(t);return t.destroy(T),new I.t({buffer:new l.f({data:c[a]}),attributes:[{componentType:_.oY.findComponentTypeForClass(o),size:s,semantic:a}]})}}(r=d=d||{})[r.DT_INVALID=0]="DT_INVALID",r[r.DT_INT8=1]="DT_INT8",r[r.DT_UINT8=2]="DT_UINT8",r[r.DT_INT16=3]="DT_INT16",r[r.DT_UINT16=4]="DT_UINT16",r[r.DT_INT32=5]="DT_INT32",r[r.DT_UINT32=6]="DT_UINT32",r[r.DT_INT64=7]="DT_INT64",r[r.DT_UINT64=8]="DT_UINT64",r[r.DT_FLOAT32=9]="DT_FLOAT32",r[r.DT_FLOAT64=10]="DT_FLOAT64",r[r.DT_BOOL=11]="DT_BOOL",r[r.DT_TYPES_COUNT=12]="DT_TYPES_COUNT"},6348:(t,r,e)=>{e.d(r,{W:()=>a});class a{static async loadScript(e){var t;return this._scripts[e]||(t=document.createElement("script"),this._scripts[e]={script:t,loaded:!1},t.src=e),new Promise((t,r)=>{if(this._scripts[e].loaded)t();else{const r=this._scripts[e].script;r.addEventListener("load",()=>{this._scripts[e].loaded=!0,t()}),r.parentNode||document.body.appendChild(r)}})}}a._scripts={}}}]);