"use strict";(self["webpackChunktest_project"]=self["webpackChunktest_project"]||[]).push([[443],{9897:function(e,t,n){n.r(t),n.d(t,{default:function(){return Kk}});var r={};n.r(r),n.d(r,{FirebaseError:function(){return j},SDK_VERSION:function(){return Rt},_DEFAULT_ENTRY_NAME:function(){return vt},_addComponent:function(){return _t},_addOrOverwriteComponent:function(){return Tt},_apps:function(){return It},_clearComponents:function(){return At},_components:function(){return bt},_getProvider:function(){return St},_registerComponent:function(){return Et},_removeServiceInstance:function(){return kt},deleteApp:function(){return Lt},getApp:function(){return Ot},getApps:function(){return Pt},initializeApp:function(){return xt},onLog:function(){return Ft},registerVersion:function(){return Mt},setLogLevel:function(){return Vt}});var i=n(6252),s=n(9963),o=n(3577);const a=e=>((0,i.dD)("data-v-7d3cbffc"),e=e(),(0,i.Cn)(),e),c={class:"about"},u={id:"app"},l=a((()=>(0,i._)("label",null,"名前",-1))),h=a((()=>(0,i._)("label",null,"メッセージ",-1))),d={style:{"margin-left":"100px"}};function f(e,t,n,r,a,f){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",u,[l,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>a.userName=e)},null,512),[[s.nr,a.userName]]),h,(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>a.message=e)},null,512),[[s.nr,a.message]]),(0,i._)("button",{onClick:t[2]||(t[2]=(...e)=>f.sendMessage&&f.sendMessage(...e))},"送信"),(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.messageList,((e,t,n)=>((0,i.wg)(),(0,i.iD)("li",{key:n},[(0,i.Uk)((0,o.zw)(e.user_name)+" ",1),(0,i._)("span",d,(0,o.zw)(e.message),1)])))),128))])])])}n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const p=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},m=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},g={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(p(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):m(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},y=function(e){const t=p(e);return g.encodeByteArray(t,!0)},v=function(e){return y(e).replace(/\./g,"")},w=function(e){try{return g.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&b(n)&&(e[n]=I(e[n],t[n]));return e}function b(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function T(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function E(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function S(){return"object"===typeof self&&self.self===self}function k(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function A(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function N(){return!E()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function D(){try{return"object"===typeof indexedDB}catch(e){return!1}}function R(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function x(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=()=>x().__FIREBASE_DEFAULTS__,P=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:""}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},L=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&w(e[1]);return t&&JSON.parse(t)},M=()=>{try{return O()||P()||L()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},F=()=>{var e;return null===(e=M())||void 0===e?void 0:e.config},V=e=>{var t;return null===(t=M())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[v(JSON.stringify(n)),v(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B="FirebaseError";class j extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=B,Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,G.prototype.create)}}class G{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?K(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new j(r,o,n);return a}}function K(e,t){return e.replace($,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const $=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function W(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function H(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Q(n)&&Q(s)){if(!H(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Q(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Y(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function J(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function X(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t){const n=new ee(e,t);return n.subscribe.bind(n)}class ee{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=te(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=ne),void 0===r.error&&(r.error=ne),void 0===r.complete&&(r.complete=ne);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function te(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function ne(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function re(e){return e&&e._delegate?e._delegate:e}class ie{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new U;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(ce(e))try{this.getOrInitializeService({instanceIdentifier:se})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=se){return this.instances.has(e)}getOptions(e=se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(AT){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ae(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(AT){}return n||null}normalizeInstanceIdentifier(e=se){return this.component?this.component.multipleInstances?e:se:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function ae(e){return e===se?void 0:e}function ce(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const le=[];var he;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(he||(he={}));const de={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},fe=he.INFO,pe={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},me=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=pe[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ge{constructor(e){this.name=e,this._logLevel=fe,this._logHandler=me,this._userLogHandler=null,le.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?de[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}function ye(e){le.forEach((t=>{t.setLogLevel(e)}))}function ve(e,t){for(const n of le){let r=null;t&&t.level&&(r=de[t.level]),n.userLogHandler=null===e?null:(t,n,...i)=>{const s=i.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:he[n].toLowerCase(),message:s,args:i,type:t.name})}}}const we=(e,t)=>t.some((t=>e instanceof t));let Ie,be;function _e(){return Ie||(Ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Te(){return be||(be=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ee=new WeakMap,Se=new WeakMap,ke=new WeakMap,Ae=new WeakMap,Ce=new WeakMap;function Ne(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Le(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Ee.set(t,e)})).catch((()=>{})),Ce.set(t,e),t}function De(e){if(Se.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));Se.set(e,t)}let Re={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Se.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ke.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Le(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function xe(e){Re=e(Re)}function Oe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Te().includes(e)?function(...t){return e.apply(Me(this),t),Le(Ee.get(this))}:function(...t){return Le(e.apply(Me(this),t))}:function(t,...n){const r=e.call(Me(this),t,...n);return ke.set(r,t.sort?t.sort():[t]),Le(r)}}function Pe(e){return"function"===typeof e?Oe(e):(e instanceof IDBTransaction&&De(e),we(e,_e())?new Proxy(e,Re):e)}function Le(e){if(e instanceof IDBRequest)return Ne(e);if(Ae.has(e))return Ae.get(e);const t=Pe(e);return t!==e&&(Ae.set(e,t),Ce.set(t,e)),t}const Me=e=>Ce.get(e);function Fe(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Le(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Le(o.result),e.oldVersion,e.newVersion,Le(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const Ve=["get","getKey","getAll","getAllKeys","count"],Ue=["put","add","delete","clear"],qe=new Map;function Be(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(qe.get(t))return qe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Ue.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!Ve.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return qe.set(t,s),s}xe((e=>({...e,get:(t,n,r)=>Be(t,n)||e.get(t,n,r),has:(t,n)=>!!Be(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class je{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(Ge(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function Ge(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const Ke="@firebase/app",$e="0.9.0",ze=new ge("@firebase/app"),We="@firebase/app-compat",He="@firebase/analytics-compat",Qe="@firebase/analytics",Ye="@firebase/app-check-compat",Je="@firebase/app-check",Xe="@firebase/auth",Ze="@firebase/auth-compat",et="@firebase/database",tt="@firebase/database-compat",nt="@firebase/functions",rt="@firebase/functions-compat",it="@firebase/installations",st="@firebase/installations-compat",ot="@firebase/messaging",at="@firebase/messaging-compat",ct="@firebase/performance",ut="@firebase/performance-compat",lt="@firebase/remote-config",ht="@firebase/remote-config-compat",dt="@firebase/storage",ft="@firebase/storage-compat",pt="@firebase/firestore",mt="@firebase/firestore-compat",gt="firebase",yt="9.15.0",vt="[DEFAULT]",wt={[Ke]:"fire-core",[We]:"fire-core-compat",[Qe]:"fire-analytics",[He]:"fire-analytics-compat",[Je]:"fire-app-check",[Ye]:"fire-app-check-compat",[Xe]:"fire-auth",[Ze]:"fire-auth-compat",[et]:"fire-rtdb",[tt]:"fire-rtdb-compat",[nt]:"fire-fn",[rt]:"fire-fn-compat",[it]:"fire-iid",[st]:"fire-iid-compat",[ot]:"fire-fcm",[at]:"fire-fcm-compat",[ct]:"fire-perf",[ut]:"fire-perf-compat",[lt]:"fire-rc",[ht]:"fire-rc-compat",[dt]:"fire-gcs",[ft]:"fire-gcs-compat",[pt]:"fire-fst",[mt]:"fire-fst-compat","fire-js":"fire-js",[gt]:"fire-js-all"},It=new Map,bt=new Map;function _t(e,t){try{e.container.addComponent(t)}catch(n){ze.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tt(e,t){e.container.addOrOverwriteComponent(t)}function Et(e){const t=e.name;if(bt.has(t))return ze.debug(`There were multiple attempts to register component ${t}.`),!1;bt.set(t,e);for(const n of It.values())_t(n,e);return!0}function St(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function kt(e,t,n=vt){St(e,t).clearInstance(n)}function At(){bt.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nt=new G("app","Firebase",Ct);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ie("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=yt;function xt(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:vt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!==typeof i||!i)throw Nt.create("bad-app-name",{appName:String(i)});if(n||(n=F()),!n)throw Nt.create("no-options");const s=It.get(i);if(s){if(H(n,s.options)&&H(r,s.config))return s;throw Nt.create("duplicate-app",{appName:i})}const o=new ue(i);for(const c of bt.values())o.addComponent(c);const a=new Dt(n,r,o);return It.set(i,a),a}function Ot(e=vt){const t=It.get(e);if(!t&&e===vt)return xt();if(!t)throw Nt.create("no-app",{appName:e});return t}function Pt(){return Array.from(It.values())}async function Lt(e){const t=e.name;It.has(t)&&(It.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Mt(e,t,n){var r;let i=null!==(r=wt[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ze.warn(e.join(" "))}Et(new ie(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}function Ft(e,t){if(null!==e&&"function"!==typeof e)throw Nt.create("invalid-log-argument");ve(e,t)}function Vt(e){ye(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="firebase-heartbeat-database",qt=1,Bt="firebase-heartbeat-store";let jt=null;function Gt(){return jt||(jt=Fe(Ut,qt,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Bt)}}}).catch((e=>{throw Nt.create("idb-open",{originalErrorMessage:e.message})}))),jt}async function Kt(e){try{const t=await Gt();return t.transaction(Bt).objectStore(Bt).get(zt(e))}catch(t){if(t instanceof j)ze.warn(t.message);else{const e=Nt.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});ze.warn(e.message)}}}async function $t(e,t){try{const n=await Gt(),r=n.transaction(Bt,"readwrite"),i=r.objectStore(Bt);return await i.put(t,zt(e)),r.done}catch(n){if(n instanceof j)ze.warn(n.message);else{const e=Nt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});ze.warn(e.message)}}}function zt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=1024,Ht=2592e6;class Qt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Yt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Ht})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Yt(),{heartbeatsToSend:t,unsentEntries:n}=Jt(this._heartbeatsCache.heartbeats),r=v(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Yt(){const e=new Date;return e.toISOString().substring(0,10)}function Jt(e,t=Wt){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Zt(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!D()&&R().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Kt(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return $t(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return $t(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Zt(e){return v(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(e){Et(new ie("platform-logger",(e=>new je(e)),"PRIVATE")),Et(new ie("heartbeat",(e=>new Qt(e)),"PRIVATE")),Mt(Ke,$e,e),Mt(Ke,$e,"esm2017"),Mt("fire-js","")}en("");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e,t){this._delegate=e,this.firebase=t,_t(e,new ie("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),Lt(this._delegate))))}_getService(e,t=vt){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=vt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){_t(this._delegate,e)}_addOrOverwriteComponent(e){Tt(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},rn=new G("app-compat","Firebase",nn);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sn(e){const t={},n={__esModule:!0,initializeApp:o,app:s,registerVersion:Mt,setLogLevel:Vt,onLog:Ft,apps:null,SDK_VERSION:Rt,INTERNAL:{registerComponent:c,removeApp:i,useAsService:u,modularAPIs:r}};function i(e){delete t[e]}function s(e){if(e=e||vt,!z(t,e))throw rn.create("no-app",{appName:e});return t[e]}function o(r,i={}){const s=xt(r,i);if(z(t,s.name))return t[s.name];const o=new e(s,n);return t[s.name]=o,o}function a(){return Object.keys(t).map((e=>t[e]))}function c(t){const r=t.name,i=r.replace("-compat","");if(Et(t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[i])throw rn.create("invalid-app-argument",{appName:r});return e[i]()};void 0!==t.serviceProps&&I(o,t.serviceProps),n[i]=o,e.prototype[i]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[i]:null}function u(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:a}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){const e=sn(tn);function t(t){I(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:on,extendNamespace:t,createSubscribe:Z,ErrorFactory:G,deepExtend:I}),e}const an=on(),cn=new ge("@firebase/app-compat"),un="@firebase/app-compat",ln="0.2.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hn(e){Mt(un,ln,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(S()&&void 0!==self.firebase){cn.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&cn.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const dn=an;hn();var fn="firebase",pn="9.15.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
dn.registerVersion(fn,pn,"app-compat");function mn(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},yn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vn(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function wn(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const In=vn,bn=wn,_n=new G("auth","Firebase",wn()),Tn=new ge("@firebase/auth");function En(e,...t){Tn.logLevel<=he.ERROR&&Tn.error(`Auth (${Rt}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(e,...t){throw Nn(e,...t)}function kn(e,...t){return Nn(e,...t)}function An(e,t,n){const r=Object.assign(Object.assign({},bn()),{[t]:n}),i=new G("auth","Firebase",r);return i.create(t,{appName:e.name})}function Cn(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Sn(e,"argument-error"),An(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nn(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return _n.create(e,...t)}function Dn(e,t,...n){if(!e)throw Nn(t,...n)}function Rn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw En(t),new Error(t)}function xn(e,t){e||Rn(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=new Map;function Pn(e){xn(e instanceof Function,"Expected a class definition");let t=On.get(e);return t?(xn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,On.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Fn(){return"http:"===Vn()||"https:"===Vn()}function Vn(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(Fn()||k()||"connection"in navigator))||navigator.onLine}function qn(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.shortDelay=e,this.longDelay=t,xn(t>e,"Short delay should be less than long delay!"),this.isMobile=T()||A()}get(){return Un()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(e,t){xn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},$n=new Bn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Wn(e,t,n,r,i={}){return Hn(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Y(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Gn.fetch()(Yn(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Hn(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kn),t);try{const t=new Jn(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Xn(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Xn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Xn(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Xn(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw An(e,a,o);Sn(e,a)}}catch(i){if(i instanceof j)throw i;Sn(e,"network-request-failed")}}async function Qn(e,t,n,r,i={}){const s=await Wn(e,t,n,r,i);return"mfaPendingCredential"in s&&Sn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Yn(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?jn(e.config,i):`${e.config.apiScheme}://${i}`}class Jn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(kn(this.auth,"network-request-failed"))),$n.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xn(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kn(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(e,t){return Wn(e,"POST","/v1/accounts:delete",t)}async function er(e,t){return Wn(e,"POST","/v1/accounts:update",t)}async function tr(e,t){return Wn(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rr(e,t=!1){const n=re(e),r=await n.getIdToken(t),i=sr(r);Dn(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"===typeof i.firebase?i.firebase:void 0,o=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:i,token:r,authTime:nr(ir(i.auth_time)),issuedAtTime:nr(ir(i.iat)),expirationTime:nr(ir(i.exp)),signInProvider:o||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function ir(e){return 1e3*Number(e)}function sr(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return En("JWT malformed, contained fewer than 3 sections"),null;try{const e=w(n);return e?JSON.parse(e):(En("Failed to decode base64 JWT payload"),null)}catch(i){return En("Caught error parsing JWT payload as JSON",null===i||void 0===i?void 0:i.toString()),null}}function or(e){const t=sr(e);return Dn(t,"internal-error"),Dn("undefined"!==typeof t.exp,"internal-error"),Dn("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ar(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof j&&cr(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function cr({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ar(e,tr(n,{idToken:r}));Dn(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?pr(s.providerUserInfo):[],a=fr(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lr(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function dr(e){const t=re(e);await hr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fr(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function pr(e){return e.map((e=>{var{providerId:t}=e,n=mn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(e,t){const n=await Hn(e,{},(async()=>{const n=Y({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Yn(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Gn.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Dn(e.idToken,"internal-error"),Dn("undefined"!==typeof e.idToken,"internal-error"),Dn("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):or(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Dn(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await mr(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new gr;return n&&(Dn("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Dn("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Dn("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gr,this.toJSON())}_performRefresh(){return Rn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e,t){Dn("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class vr{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=mn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ur(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ar(this,this.stsTokenManager.getToken(this.auth,e));return Dn(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rr(this,e)}reload(){return dr(this)}_assign(e){this!==e&&(Dn(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Dn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await hr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ar(this,Zn(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:I,providerData:b,stsTokenManager:_}=t;Dn(v&&_,e,"internal-error");const T=gr.fromJSON(this.name,_);Dn("string"===typeof v,e,"internal-error"),yr(l,e.name),yr(h,e.name),Dn("boolean"===typeof w,e,"internal-error"),Dn("boolean"===typeof I,e,"internal-error"),yr(d,e.name),yr(f,e.name),yr(p,e.name),yr(m,e.name),yr(g,e.name),yr(y,e.name);const E=new vr({uid:v,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:I,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new gr;r.updateFromServerResponse(t);const i=new vr({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await hr(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}wr.type="NONE";const Ir=wr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(e,t,n){return`firebase:${e}:${t}:${n}`}class _r{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=br(this.userKey,r.apiKey,i),this.fullPersistenceKey=br("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new _r(Pn(Ir),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Pn(Ir);const s=br(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=vr._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(AT){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(AT){}}))),new _r(i,e,n)):new _r(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ar(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Er(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nr(t))return"Blackberry";if(Dr(t))return"Webos";if(Sr(t))return"Safari";if((t.includes("chrome/")||kr(t))&&!t.includes("edge/"))return"Chrome";if(Cr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function Er(e=_()){return/firefox\//i.test(e)}function Sr(e=_()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function kr(e=_()){return/crios\//i.test(e)}function Ar(e=_()){return/iemobile/i.test(e)}function Cr(e=_()){return/android/i.test(e)}function Nr(e=_()){return/blackberry/i.test(e)}function Dr(e=_()){return/webos/i.test(e)}function Rr(e=_()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xr(e=_()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function Or(e=_()){var t;return Rr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Pr(){return C()&&10===document.documentMode}function Lr(e=_()){return Rr(e)||Cr(e)||Dr(e)||Nr(e)||/windows phone/i.test(e)||Ar(e)}function Mr(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e,t=[]){let n;switch(e){case"Browser":n=Tr(_());break;case"Worker":n=`${Tr(_())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Rt}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Br(this),this.idTokenSubscription=new Br(this),this.beforeStateQueue=new Vr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_n,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pn(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await _r.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Dn(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hr(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?re(e):null;return t&&Dn(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Dn(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Pn(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new G("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pn(e)||this._popupRedirectResolver;Dn(t,this,"argument-error"),this.redirectPersistenceManager=await _r.create(this,[Pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Dn(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Dn(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function qr(e){return re(e)}class Br{constructor(e){this.auth=e,this.observer=null,this.addObserver=Z((e=>this.observer=e))}get next(){return Dn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function jr(e,t,n){const r=qr(e);Dn(r._canInitEmulator,r,"emulator-config-failed"),Dn(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Gr(t),{host:o,port:a}=Kr(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zr()}function Gr(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Kr(e){const t=Gr(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:$r(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:$r(t)}}}function $r(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function zr(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,t){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(e,t){return Wn(e,"POST","/v1/accounts:resetPassword",zn(e,t))}async function Qr(e,t){return Wn(e,"POST","/v1/accounts:update",t)}async function Yr(e,t){return Wn(e,"POST","/v1/accounts:update",zn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(e,t){return Qn(e,"POST","/v1/accounts:signInWithPassword",zn(e,t))}async function Xr(e,t){return Wn(e,"POST","/v1/accounts:sendOobCode",zn(e,t))}async function Zr(e,t){return Xr(e,t)}async function ei(e,t){return Xr(e,t)}async function ti(e,t){return Xr(e,t)}async function ni(e,t){return Xr(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(e,t){return Qn(e,"POST","/v1/accounts:signInWithEmailLink",zn(e,t))}async function ii(e,t){return Qn(e,"POST","/v1/accounts:signInWithEmailLink",zn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si extends Wr{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new si(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new si(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Jr(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ri(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Qr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ii(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi(e,t){return Qn(e,"POST","/v1/accounts:signInWithIdp",zn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="http://localhost";class ci extends Wr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Sn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=mn(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ci(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return oi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,oi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oi(e,t)}buildRequest(){const e={requestUri:ai,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Y(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(e,t){return Wn(e,"POST","/v1/accounts:sendVerificationCode",zn(e,t))}async function li(e,t){return Qn(e,"POST","/v1/accounts:signInWithPhoneNumber",zn(e,t))}async function hi(e,t){const n=await Qn(e,"POST","/v1/accounts:signInWithPhoneNumber",zn(e,t));if(n.temporaryProof)throw Xn(e,"account-exists-with-different-credential",n);return n}const di={["USER_NOT_FOUND"]:"user-not-found"};async function fi(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return Qn(e,"POST","/v1/accounts:signInWithPhoneNumber",zn(e,n),di)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Wr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new pi({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new pi({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return li(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return hi(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return fi(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new pi({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gi(e){const t=J(X(e))["link"],n=t?J(X(t))["deep_link_id"]:null,r=J(X(e))["deep_link_id"],i=r?J(X(r))["link"]:null;return i||r||n||t||e}class yi{constructor(e){var t,n,r,i,s,o;const a=J(X(e)),c=null!==(t=a["apiKey"])&&void 0!==t?t:null,u=null!==(n=a["oobCode"])&&void 0!==n?n:null,l=mi(null!==(r=a["mode"])&&void 0!==r?r:null);Dn(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(i=a["continueUrl"])&&void 0!==i?i:null,this.languageCode=null!==(s=a["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(o=a["tenantId"])&&void 0!==o?o:null}static parseLink(e){const t=gi(e);try{return new yi(t)}catch(AT){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vi{constructor(){this.providerId=vi.PROVIDER_ID}static credential(e,t){return si._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=yi.parseLink(t);return Dn(n,"argument-error"),si._fromEmailAndCode(e,n.code,n.tenantId)}}vi.PROVIDER_ID="password",vi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii extends wi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class bi extends Ii{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return Dn("providerId"in t&&"signInMethod"in t,"argument-error"),ci._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return Dn(e.idToken||e.accessToken,"argument-error"),ci._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return bi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return bi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new bi(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Ii{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _i.credential(e.oauthAccessToken)}catch(AT){return null}}}_i.FACEBOOK_SIGN_IN_METHOD="facebook.com",_i.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ci._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ti.credential(t,n)}catch(AT){return null}}}Ti.GOOGLE_SIGN_IN_METHOD="google.com",Ti.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ei extends Ii{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch(AT){return null}}}Ei.GITHUB_SIGN_IN_METHOD="github.com",Ei.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Si="http://localhost";class ki extends Wr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return oi(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,oi(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oi(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new ki(n,i):null}static _create(e,t){return new ki(e,t)}buildRequest(){return{requestUri:Si,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="saml.";class Ci extends wi{constructor(e){Dn(e.startsWith(Ai),"argument-error"),super(e)}static credentialFromResult(e){return Ci.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ci.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=ki.fromJSON(e);return Dn(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return ki._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Ii{constructor(){super("twitter.com")}static credential(e,t){return ci._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ni.credential(t,n)}catch(AT){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Di(e,t){return Qn(e,"POST","/v1/accounts:signUp",zn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.TWITTER_SIGN_IN_METHOD="twitter.com",Ni.PROVIDER_ID="twitter.com";class Ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await vr._fromIdTokenResponse(e,n,r),s=xi(n),o=new Ri({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=xi(n);return new Ri({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function xi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(e){var t;const n=qr(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ri({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Di(n,{returnSecureToken:!0}),i=await Ri._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends j{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Pi(e,t,n,r)}}function Li(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pi._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(e,t){const n=re(e);await Ui(!0,n,t);const{providerUserInfo:r}=await er(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),i=Mi(r||[]);return n.providerData=n.providerData.filter((e=>i.has(e.providerId))),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Vi(e,t,n=!1){const r=await ar(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ri._forOperation(e,"link",r)}async function Ui(e,t,n){await hr(t);const r=Mi(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";Dn(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ar(e,Li(r,i,t,e),n);Dn(s.idToken,r,"internal-error");const o=sr(s.idToken);Dn(o,r,"internal-error");const{sub:a}=o;return Dn(e.uid===a,r,"user-mismatch"),Ri._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&Sn(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(e,t,n=!1){const r="signIn",i=await Li(e,r,t),s=await Ri._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ji(e,t){return Bi(qr(e),t)}async function Gi(e,t){const n=re(e);return await Ui(!1,n,t.providerId),Vi(n,t)}async function Ki(e,t){return qi(re(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(e,t){return Qn(e,"POST","/v1/accounts:signInWithCustomToken",zn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(e,t){const n=qr(e),r=await $i(n,{token:t,returnSecureToken:!0}),i=await Ri._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Hi._fromServerResponse(e,t):Sn(e,"internal-error")}}class Hi extends Wi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Hi(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(e,t,n){var r;Dn((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),Dn("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Dn(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(Dn(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yi(e,t,n){const r=re(e),i={requestType:"PASSWORD_RESET",email:t};n&&Qi(r,i,n),await ei(r,i)}async function Ji(e,t,n){await Hr(re(e),{oobCode:t,newPassword:n})}async function Xi(e,t){await Yr(re(e),{oobCode:t})}async function Zi(e,t){const n=re(e),r=await Hr(n,{oobCode:t}),i=r.requestType;switch(Dn(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Dn(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Dn(r.mfaInfo,n,"internal-error");default:Dn(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Wi._fromServerResponse(qr(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function es(e,t){const{data:n}=await Zi(re(e),t);return n.email}async function ts(e,t,n){const r=qr(e),i=await Di(r,{returnSecureToken:!0,email:t,password:n}),s=await Ri._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function ns(e,t,n){return ji(re(e),vi.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(e,t,n){const r=re(e),i={requestType:"EMAIL_SIGNIN",email:t};Dn(n.handleCodeInApp,r,"argument-error"),n&&Qi(r,i,n),await ti(r,i)}function is(e,t){const n=yi.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function ss(e,t,n){const r=re(e),i=vi.credentialWithLink(t,n||Mn());return Dn(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),ji(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(e,t){return Wn(e,"POST","/v1/accounts:createAuthUri",zn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(e,t){const n=Fn()?Mn():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:i}=await os(re(e),r);return i||[]}async function cs(e,t){const n=re(e),r=await e.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};t&&Qi(n.auth,i,t);const{email:s}=await Zr(n.auth,i);s!==e.email&&await e.reload()}async function us(e,t,n){const r=re(e),i=await e.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:t};n&&Qi(r.auth,s,n);const{email:o}=await ni(r.auth,s);o!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(e,t){return Wn(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=re(e),i=await r.getIdToken(),s={idToken:i,displayName:t,photoUrl:n,returnSecureToken:!0},o=await ar(r,ls(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ds(e,t){return ps(re(e),t,null)}function fs(e,t){return ps(re(e),null,t)}async function ps(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ar(e,Qr(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=sr(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new gs(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new vs(s,i);case"github.com":return new ws(s,i);case"google.com":return new Is(s,i);case"twitter.com":return new bs(s,i,e.screenName||null);case"custom":case"anonymous":return new gs(s,null);default:return new gs(s,r,i)}}class gs{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class ys extends gs{constructor(e,t,n,r){super(e,t,n),this.username=r}}class vs extends gs{constructor(e,t){super(e,"facebook.com",t)}}class ws extends ys{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class Is extends gs{constructor(e,t){super(e,"google.com",t)}}class bs extends ys{constructor(e,t,n){super(e,"twitter.com",t,n)}}function _s(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ms(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new Ts("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ts("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return Ts._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return Ts._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=qr(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Wi._fromServerResponse(n,e)));Dn(r.mfaPendingCredential,n,"internal-error");const s=Ts._fromMfaPendingCredential(r.mfaPendingCredential);return new Es(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Ri._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return Dn(t.user,n,"internal-error"),Ri._forOperation(t.user,t.operationType,o);default:Sn(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Ss(e,t){var n;const r=re(e),i=t;return Dn(t.customData.operationType,r,"argument-error"),Dn(null===(n=i.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),Es._fromError(r,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e,t){return Wn(e,"POST","/v2/accounts/mfaEnrollment:start",zn(e,t))}function As(e,t){return Wn(e,"POST","/v2/accounts/mfaEnrollment:finalize",zn(e,t))}function Cs(e,t){return Wn(e,"POST","/v2/accounts/mfaEnrollment:withdraw",zn(e,t))}class Ns{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Wi._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new Ns(e)}async getSession(){return Ts._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await ar(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken(),r=await ar(this.user,Cs(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(r);try{await this.user.reload()}catch(i){if("auth/user-token-expired"!==(null===i||void 0===i?void 0:i.code))throw i}}}const Ds=new WeakMap;function Rs(e){const t=re(e);return Ds.has(t)||Ds.set(t,Ns._fromUser(t)),Ds.get(t)}const xs="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xs,"1"),this.storage.removeItem(xs),Promise.resolve(!0)):Promise.resolve(!1)}catch(AT){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(){const e=_();return Sr(e)||Rr(e)}const Ls=1e3,Ms=10;class Fs extends Os{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ps()&&Mr(),this.fallbackToPolling=Lr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Pr()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Ms):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Ls)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fs.type="LOCAL";const Vs=Fs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends Os{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Us.type="SESSION";const qs=Us;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new js(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Bs(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gs(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */js.receivers=[];class Ks{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Gs("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(){return window}function zs(e){$s().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){return"undefined"!==typeof $s()["WorkerGlobalScope"]&&"function"===typeof $s()["importScripts"]}async function Hs(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(AT){return null}}function Qs(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ys(){return Ws()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="firebaseLocalStorageDb",Xs=1,Zs="firebaseLocalStorage",eo="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function no(e,t){return e.transaction([Zs],t?"readwrite":"readonly").objectStore(Zs)}function ro(){const e=indexedDB.deleteDatabase(Js);return new to(e).toPromise()}function io(){const e=indexedDB.open(Js,Xs);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Zs,{keyPath:eo})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Zs)?t(n):(n.close(),await ro(),t(await io()))}))}))}async function so(e,t,n){const r=no(e,!0).put({[eo]:t,value:n});return new to(r).toPromise()}async function oo(e,t){const n=no(e,!1).get(t),r=await new to(n).toPromise();return void 0===r?null:r.value}function ao(e,t){const n=no(e,!0).delete(t);return new to(n).toPromise()}const co=800,uo=3;class lo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await io()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>uo)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ws()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=js._getInstance(Ys()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hs(),!this.activeServiceWorker)return;this.sender=new Ks(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Qs()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(AT){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await io();return await so(e,xs,"1"),await ao(e,xs),!0}catch(AT){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>so(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>oo(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ao(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=no(e,!1).getAll();return new to(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),co)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}lo.type="LOCAL";const ho=lo;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fo(e,t){return Wn(e,"POST","/v2/accounts/mfaSignIn:start",zn(e,t))}function po(e,t){return Wn(e,"POST","/v2/accounts/mfaSignIn:finalize",zn(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(e){return(await Wn(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function yo(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=kn("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",go().appendChild(r)}))}function vo(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=500,Io=6e4,bo=1e12;class _o{constructor(e){this.auth=e,this.counter=bo,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new To(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||bo;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||bo;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||bo;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class To{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;Dn(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=Eo(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),Io)}),wo))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Eo(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So=vo("rcb"),ko=new Bn(3e4,6e4),Ao="https://www.google.com/recaptcha/api.js?";class Co{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=$s().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return Dn(No(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve($s().grecaptcha):new Promise(((n,r)=>{const i=$s().setTimeout((()=>{r(kn(e,"network-request-failed"))}),ko.get());$s()[So]=()=>{$s().clearTimeout(i),delete $s()[So];const s=$s().grecaptcha;if(!s)return void r(kn(e,"internal-error"));const o=s.render;s.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(s)};const s=`${Ao}?${Y({onload:So,render:"explicit",hl:t})}`;yo(s).catch((()=>{clearTimeout(i),r(kn(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=$s().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function No(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Do{async load(e){return new _o(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="recaptcha",xo={theme:"light",type:"image"};class Oo{constructor(e,t=Object.assign({},xo),n){this.parameters=t,this.type=Ro,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=qr(n),this.isInvisible="invisible"===this.parameters.size,Dn("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;Dn(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Do:new Co,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){Dn(!this.parameters.sitekey,this.auth,"argument-error"),Dn(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Dn("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=$s()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){Dn(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Dn(Fn()&&!Ws(),this.auth,"internal-error"),await Po(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await mo(this.auth);Dn(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Dn(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Po(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=pi._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Mo(e,t,n){const r=qr(e),i=await Uo(r,t,re(n));return new Lo(i,(e=>ji(r,e)))}async function Fo(e,t,n){const r=re(e);await Ui(!1,r,"phone");const i=await Uo(r.auth,t,re(n));return new Lo(i,(e=>Gi(r,e)))}async function Vo(e,t,n){const r=re(e),i=await Uo(r.auth,t,re(n));return new Lo(i,(e=>Ki(r,e)))}async function Uo(e,t,n){var r;const i=await n.verify();try{let s;if(Dn("string"===typeof i,e,"argument-error"),Dn(n.type===Ro,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Dn("enroll"===t.type,e,"internal-error");const n=await ks(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Dn("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Dn(n,e,"missing-multi-factor-info");const o=await fo(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await ui(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function qo(e,t){await Vi(re(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.providerId=Bo.PROVIDER_ID,this.auth=qr(e)}verifyPhoneNumber(e,t){return Uo(this.auth,e,re(t))}static credential(e,t){return pi._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Bo.credentialFromTaggedObject(t)}static credentialFromError(e){return Bo.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?pi._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jo(e,t){return t?Pn(t):(Dn(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bo.PROVIDER_ID="phone",Bo.PHONE_SIGN_IN_METHOD="phone";class Go extends Wr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ko(e){return Bi(e.auth,new Go(e),e.bypassAuthState)}function $o(e){const{auth:t,user:n}=e;return Dn(n,t,"internal-error"),qi(n,new Go(e),e.bypassAuthState)}async function zo(e){const{auth:t,user:n}=e;return Dn(n,t,"internal-error"),Vi(n,new Go(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ko;case"linkViaPopup":case"linkViaRedirect":return zo;case"reauthViaPopup":case"reauthViaRedirect":return $o;default:Sn(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Bn(2e3,1e4);async function Qo(e,t,n){const r=qr(e);Cn(e,t,wi);const i=jo(r,n),s=new Xo(r,"signInViaPopup",t,i);return s.executeNotNull()}async function Yo(e,t,n){const r=re(e);Cn(r.auth,t,wi);const i=jo(r.auth,n),s=new Xo(r.auth,"reauthViaPopup",t,i,r);return s.executeNotNull()}async function Jo(e,t,n){const r=re(e);Cn(r.auth,t,wi);const i=jo(r.auth,n),s=new Xo(r.auth,"linkViaPopup",t,i,r);return s.executeNotNull()}class Xo extends Wo{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Xo.currentPopupAction&&Xo.currentPopupAction.cancel(),Xo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Dn(e,this.auth,"internal-error"),e}async onExecution(){xn(1===this.filter.length,"Popup operations only handle one event");const e=Gs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(kn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(kn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(kn(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ho.get())};e()}}Xo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zo="pendingRedirect",ea=new Map;class ta extends Wo{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ea.get(this.auth._key());if(!e){try{const t=await na(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ea.set(this.auth._key(),e)}return this.bypassAuthState||ea.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function na(e,t){const n=aa(t),r=oa(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function ra(e,t){return oa(e)._set(aa(t),"true")}function ia(){ea.clear()}function sa(e,t){ea.set(e._key(),t)}function oa(e){return Pn(e._redirectPersistence)}function aa(e){return br(Zo,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(e,t,n){return ua(e,t,n)}async function ua(e,t,n){const r=qr(e);Cn(e,t,wi);const i=jo(r,n);return await ra(i,r),i._openRedirect(r,t,"signInViaRedirect")}function la(e,t,n){return ha(e,t,n)}async function ha(e,t,n){const r=re(e);Cn(r.auth,t,wi);const i=jo(r.auth,n);await ra(i,r.auth);const s=await ga(r);return i._openRedirect(r.auth,t,"reauthViaRedirect",s)}function da(e,t,n){return fa(e,t,n)}async function fa(e,t,n){const r=re(e);Cn(r.auth,t,wi);const i=jo(r.auth,n);await Ui(!1,r,t.providerId),await ra(i,r.auth);const s=await ga(r);return i._openRedirect(r.auth,t,"linkViaRedirect",s)}async function pa(e,t){return await qr(e)._initializationPromise,ma(e,t,!1)}async function ma(e,t,n=!1){const r=qr(e),i=jo(r,t),s=new ta(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ga(e){const t=Gs(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=6e5;class va{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!ba(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ia(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(kn(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ya&&this.cachedEventUids.clear(),this.cachedEventUids.has(wa(e))}saveEventToCache(e){this.cachedEventUids.add(wa(e)),this.lastProcessedEventTime=Date.now()}}function wa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ia({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function ba(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ia(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _a(e,t={}){return Wn(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ea=/^https?/;async function Sa(e){if(e.config.emulator)return;const{authorizedDomains:t}=await _a(e);for(const n of t)try{if(ka(n))return}catch(AT){}Sn(e,"unauthorized-domain")}function ka(e){const t=Mn(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Ea.test(n))return!1;if(Ta.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Bn(3e4,6e4);function Ca(){const e=$s().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Na(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ca(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ca(),n(kn(e,"network-request-failed"))},timeout:Aa.get()})}if(null===(i=null===(r=$s().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=$s().gapi)||void 0===s?void 0:s.load)){const t=vo("iframefcb");return $s()[t]=()=>{gapi.load?o():n(kn(e,"network-request-failed"))},yo(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Da=null,e}))}let Da=null;function Ra(e){return Da=Da||Na(e),Da}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=new Bn(5e3,15e3),Oa="__/auth/iframe",Pa="emulator/auth/iframe",La={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ma=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fa(e){const t=e.config;Dn(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?jn(t,Pa):`https://${e.config.authDomain}/${Oa}`,r={apiKey:t.apiKey,appName:e.name,v:Rt},i=Ma.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Y(r).slice(1)}`}async function Va(e){const t=await Ra(e),n=$s().gapi;return Dn(n,e,"internal-error"),t.open({where:document.body,url:Fa(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:La,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=kn(e,"network-request-failed"),s=$s().setTimeout((()=>{r(i)}),xa.get());function o(){$s().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qa=500,Ba=600,ja="_blank",Ga="http://localhost";class Ka{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function $a(e,t,n,r=qa,i=Ba){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ua),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_().toLowerCase();n&&(a=kr(u)?ja:n),Er(u)&&(t=t||Ga,c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(Or(u)&&"_self"!==a)return za(t||"",a),new Ka(null);const h=window.open(t||"",a,l);Dn(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Ka(h)}function za(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="__/auth/handler",Ha="emulator/auth/handler";function Qa(e,t,n,r,i,s){Dn(e.config.authDomain,e,"auth-domain-config-required"),Dn(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Rt,eventId:i};if(t instanceof wi){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",W(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Ii){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${Ya(e)}?${Y(a).slice(1)}`}function Ya({config:e}){return e.emulator?jn(e,Ha):`https://${e.authDomain}/${Wa}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja="webStorageSupport";class Xa{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qs,this._completeRedirectFn=ma,this._overrideRedirectResult=sa}async _openPopup(e,t,n,r){var i;xn(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Qa(e,t,n,Mn(),r);return $a(e,s,Gs())}async _openRedirect(e,t,n,r){return await this._originValidation(e),zs(Qa(e,t,n,Mn(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(xn(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Va(e),n=new va(e);return t.register("authEvent",(t=>{Dn(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Ja,{type:Ja},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Ja];void 0!==i&&t(!!i),Sn(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sa(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Lr()||Sr()||Rr()}}const Za=Xa;class ec{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rn("unexpected MultiFactorSessionType")}}}class tc extends ec{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tc(e)}_finalizeEnroll(e,t,n){return As(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return po(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nc{constructor(){}static assertion(e){return tc._fromCredential(e)}}nc.FACTOR_ID="phone";var rc="@firebase/auth",ic="0.21.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Dn(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ac(e){Et(new ie("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{Dn(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),Dn(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fr(e)},a=new Ur(t,r,i);return Ln(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),Et(new ie("auth-internal",(e=>{const t=qr(e.getProvider("auth").getImmediate());return(e=>new sc(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Mt(rc,ic,oc(e)),Mt(rc,ic,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=300;V("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function uc(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ac("Browser");const lc=2e3;async function hc(e,t,n){var r;const{BuildInfo:i}=uc();xn(t.sessionId,"AuthEvent did not contain a session ID");const s=await gc(t.sessionId),o={};return Rr()?o["ibi"]=i.packageName:Cr()?o["apn"]=i.packageName:Sn(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,Qa(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function dc(e){const{BuildInfo:t}=uc(),n={};Rr()?n.iosBundleId=t.packageName:Cr()?n.androidPackageName=t.packageName:Sn(e,"operation-not-supported-in-this-environment"),await _a(e,n)}function fc(e){const{cordova:t}=uc();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,xr()?"_blank":"_system","location=yes"),n(i)}))}))}async function pc(e,t,n){const{cordova:r}=uc();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(kn(e,"redirect-cancelled-by-user"))}),lc))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Cr()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function mc(e){var t,n,r,i,s,o,a,c,u,l;const h=uc();Dn("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Dn("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Dn("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Dn("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Dn("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function gc(e){const t=yc(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function yc(e){if(xn(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=20;class wc extends va{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function Ic(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Ec(),postBody:null,tenantId:e.tenantId,error:kn(e,"no-auth-event")}}function bc(e,t){return Sc()._set(kc(e),t)}async function _c(e){const t=await Sc()._get(kc(e));return t&&await Sc()._remove(kc(e)),t}function Tc(e,t){var n,r;const i=Cc(t);if(i.includes("/__/auth/callback")){const t=Nc(i),s=t["firebaseError"]?Ac(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?kn(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function Ec(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<vc;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function Sc(){return Pn(Vs)}function kc(e){return br("authEvent",e.config.apiKey,e.name)}function Ac(e){try{return JSON.parse(e)}catch(t){return null}}function Cc(e){const t=Nc(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Nc(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Nc(i)["link"];return s||i||r||n||e}function Nc(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return J(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=500;class Rc{constructor(){this._redirectPersistence=qs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ma,this._overrideRedirectResult=sa}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new wc(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Sn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){mc(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),ia(),await this._originValidation(e);const s=Ic(e,n,r);await bc(e,s);const o=await hc(e,s,t),a=await fc(o);return pc(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=dc(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=uc(),s=setTimeout((async()=>{await _c(e),t.onEvent(Oc())}),Dc),o=async n=>{clearTimeout(s);const r=await _c(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=Tc(r,n["url"])),t.onEvent(i||Oc())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;uc().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const xc=Rc;function Oc(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:kn("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(e,t){qr(e)._logFramework(t)}var Lc="@firebase/auth-compat",Mc="0.3.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fc=1e3;function Vc(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Uc(){return"http:"===Vc()||"https:"===Vc()}function qc(e=_()){return!("file:"!==Vc()&&"ionic:"!==Vc()&&"capacitor:"!==Vc()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Bc(){return A()||E()}function jc(){return C()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Gc(e=_()){return/Edge\/\d+/.test(e)}function Kc(e=_()){return jc()||Gc(e)}function $c(){try{const e=self.localStorage,t=Gs();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Kc()||D()}catch(e){return zc()&&D()}return!1}function zc(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Wc(){return(Uc()||k()||qc())&&!Bc()&&$c()&&!zc()}function Hc(){return qc()&&"undefined"!==typeof document}async function Qc(){return!!Hc()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Fc);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Yc(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={LOCAL:"local",NONE:"none",SESSION:"session"},Xc=Dn,Zc="persistence";function eu(e,t){Xc(Object.values(Jc).includes(t),e,"invalid-persistence-type"),A()?Xc(t!==Jc.SESSION,e,"unsupported-persistence-type"):E()?Xc(t===Jc.NONE,e,"unsupported-persistence-type"):zc()?Xc(t===Jc.NONE||t===Jc.LOCAL&&D(),e,"unsupported-persistence-type"):Xc(t===Jc.NONE||$c(),e,"unsupported-persistence-type")}async function tu(e){await e._initializationPromise;const t=ru(),n=br(Zc,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function nu(e,t){const n=ru();if(!n)return[];const r=br(Zc,e,t),i=n.getItem(r);switch(i){case Jc.NONE:return[Ir];case Jc.LOCAL:return[ho,qs];case Jc.SESSION:return[qs];default:return[]}}function ru(){var e;try{return(null===(e=Yc())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=Dn;class su{constructor(){this.browserResolver=Pn(Za),this.cordovaResolver=Pn(xc),this.underlyingResolver=null,this._redirectPersistence=qs,this._completeRedirectFn=ma,this._overrideRedirectResult=sa}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Hc()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return iu(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Qc();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(e){return e.unwrap()}function au(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(e){return lu(e)}function uu(e,t){var n;const r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new fu(e,Ss(e,t))}else if(r){const e=lu(t),n=t;e&&(n.credential=e,n.tenantId=r.tenantId||void 0,n.email=r.email||void 0,n.phoneNumber=r.phoneNumber||void 0)}}function lu(e){const{_tokenResponse:t}=e instanceof j?e.customData:e;if(!t)return null;if(!(e instanceof j)&&"temporaryProof"in t&&"phoneNumber"in t)return Bo.credentialFromResult(e);const n=t.providerId;if(!n||n===gn.PASSWORD)return null;let r;switch(n){case gn.GOOGLE:r=Ti;break;case gn.FACEBOOK:r=_i;break;case gn.GITHUB:r=Ei;break;case gn.TWITTER:r=Ni;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?ki._create(n,o):ci._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new bi(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof j?r.credentialFromError(e):r.credentialFromResult(e)}function hu(e,t){return t.catch((t=>{throw t instanceof j&&uu(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:cu(e),additionalUserInfo:_s(e),user:pu.getOrCreate(n)}}))}async function du(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>hu(e,n.confirm(t))}}class fu{constructor(e,t){this.resolver=t,this.auth=au(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return hu(ou(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this._delegate=e,this.multiFactor=Rs(e)}static getOrCreate(e){return pu.USER_MAP.has(e)||pu.USER_MAP.set(e,new pu(e)),pu.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return hu(this.auth,Gi(this._delegate,e))}async linkWithPhoneNumber(e,t){return du(this.auth,Fo(this._delegate,e,t))}async linkWithPopup(e){return hu(this.auth,Jo(this._delegate,e,su))}async linkWithRedirect(e){return await tu(qr(this.auth)),da(this._delegate,e,su)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return hu(this.auth,Ki(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return du(this.auth,Vo(this._delegate,e,t))}reauthenticateWithPopup(e){return hu(this.auth,Yo(this._delegate,e,su))}async reauthenticateWithRedirect(e){return await tu(qr(this.auth)),la(this._delegate,e,su)}sendEmailVerification(e){return cs(this._delegate,e)}async unlink(e){return await Fi(this._delegate,e),this}updateEmail(e){return ds(this._delegate,e)}updatePassword(e){return fs(this._delegate,e)}updatePhoneNumber(e){return qo(this._delegate,e)}updateProfile(e){return hs(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return us(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}pu.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mu=Dn;class gu{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;mu(n,"invalid-api-key",{appName:e.name}),mu(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?su:void 0;this._delegate=t.initialize({options:{persistence:vu(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(In),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?pu.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){jr(this._delegate,e,t)}applyActionCode(e){return Xi(this._delegate,e)}checkActionCode(e){return Zi(this._delegate,e)}confirmPasswordReset(e,t){return Ji(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return hu(this._delegate,ts(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return as(this._delegate,e)}isSignInWithEmailLink(e){return is(this._delegate,e)}async getRedirectResult(){mu(Wc(),this._delegate,"operation-not-supported-in-this-environment");const e=await pa(this._delegate,su);return e?hu(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Pc(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=yu(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=yu(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return rs(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Yi(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(eu(this._delegate,e),e){case Jc.SESSION:t=qs;break;case Jc.LOCAL:const e=await Pn(ho)._isAvailable();t=e?ho:Vs;break;case Jc.NONE:t=Ir;break;default:return Sn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return hu(this._delegate,Oi(this._delegate))}signInWithCredential(e){return hu(this._delegate,ji(this._delegate,e))}signInWithCustomToken(e){return hu(this._delegate,zi(this._delegate,e))}signInWithEmailAndPassword(e,t){return hu(this._delegate,ns(this._delegate,e,t))}signInWithEmailLink(e,t){return hu(this._delegate,ss(this._delegate,e,t))}signInWithPhoneNumber(e,t){return du(this._delegate,Mo(this._delegate,e,t))}async signInWithPopup(e){return mu(Wc(),this._delegate,"operation-not-supported-in-this-environment"),hu(this._delegate,Qo(this._delegate,e,su))}async signInWithRedirect(e){return mu(Wc(),this._delegate,"operation-not-supported-in-this-environment"),await tu(this._delegate),ca(this._delegate,e,su)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return es(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function yu(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&pu.getOrCreate(e));return{next:s,error:t,complete:n}}function vu(e,t){const n=nu(e,t);if("undefined"===typeof self||n.includes(ho)||n.push(ho),"undefined"!==typeof window)for(const r of[Vs,qs])n.includes(r)||n.push(r);return n.includes(Ir)||n.push(Ir),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gu.Persistence=Jc;class wu{constructor(){this.providerId="phone",this._delegate=new Bo(ou(dn.auth()))}static credential(e,t){return Bo.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}wu.PHONE_SIGN_IN_METHOD=Bo.PHONE_SIGN_IN_METHOD,wu.PROVIDER_ID=Bo.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Iu=Dn;class bu{constructor(e,t,n=dn.app()){var r;Iu(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Oo(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u="auth-compat";function Tu(e){e.INTERNAL.registerComponent(new ie(_u,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new gu(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:yn.EMAIL_SIGNIN,PASSWORD_RESET:yn.PASSWORD_RESET,RECOVER_EMAIL:yn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:yn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:yn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:yn.VERIFY_EMAIL}},EmailAuthProvider:vi,FacebookAuthProvider:_i,GithubAuthProvider:Ei,GoogleAuthProvider:Ti,OAuthProvider:bi,SAMLAuthProvider:Ci,PhoneAuthProvider:wu,PhoneMultiFactorGenerator:nc,RecaptchaVerifier:bu,TwitterAuthProvider:Ni,Auth:gu,AuthCredential:Wr,Error:j}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(Lc,Mc)}Tu(dn);var Eu,Su="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},ku={},Au=Au||{},Cu=Su||self;function Nu(){}function Du(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function Ru(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function xu(e){return Object.prototype.hasOwnProperty.call(e,Ou)&&e[Ou]||(e[Ou]=++Pu)}var Ou="closure_uid_"+(1e9*Math.random()>>>0),Pu=0;function Lu(e,t,n){return e.call.apply(e.bind,arguments)}function Mu(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Fu(e,t,n){return Fu=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Lu:Mu,Fu.apply(null,arguments)}function Vu(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Uu(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function qu(){this.s=this.s,this.o=this.o}var Bu=0;qu.prototype.s=!1,qu.prototype.na=function(){this.s||(this.s=!0,this.M(),0==Bu)||xu(this)},qu.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ju=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Gu(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ku(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(Du(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function $u(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}$u.prototype.h=function(){this.defaultPrevented=!0};var zu=function(){if(!Cu.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Cu.addEventListener("test",Nu,t),Cu.removeEventListener("test",Nu,t)}catch(n){}return e}();function Wu(e){return/^[\s\xa0]*$/.test(e)}var Hu=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Qu(e,t){return e<t?-1:e>t?1:0}function Yu(){var e=Cu.navigator;return e&&(e=e.userAgent)?e:""}function Ju(e){return-1!=Yu().indexOf(e)}function Xu(e){return Xu[" "](e),e}function Zu(e){var t=dl;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}Xu[" "]=Nu;var el,tl=Ju("Opera"),nl=Ju("Trident")||Ju("MSIE"),rl=Ju("Edge"),il=rl||nl,sl=Ju("Gecko")&&!(-1!=Yu().toLowerCase().indexOf("webkit")&&!Ju("Edge"))&&!(Ju("Trident")||Ju("MSIE"))&&!Ju("Edge"),ol=-1!=Yu().toLowerCase().indexOf("webkit")&&!Ju("Edge");function al(){var e=Cu.document;return e?e.documentMode:void 0}e:{var cl="",ul=function(){var e=Yu();return sl?/rv:([^\);]+)(\)|;)/.exec(e):rl?/Edge\/([\d\.]+)/.exec(e):nl?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):ol?/WebKit\/(\S+)/.exec(e):tl?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(ul&&(cl=ul?ul[1]:""),nl){var ll=al();if(null!=ll&&ll>parseFloat(cl)){el=String(ll);break e}}el=cl}var hl,dl={};function fl(){return Zu((function(){let e=0;const t=Hu(String(el)).split("."),n=Hu("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=Qu(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||Qu(0==i[2].length,0==s[2].length)||Qu(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(Cu.document&&nl){var pl=al();hl=pl||(parseInt(el,10)||void 0)}else hl=void 0;var ml=hl;function gl(e,t){if($u.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(sl){e:{try{Xu(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:yl[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&gl.X.h.call(this)}}Uu(gl,$u);var yl={2:"touch",3:"pen",4:"mouse"};gl.prototype.h=function(){gl.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var vl="closure_listenable_"+(1e6*Math.random()|0),wl=0;function Il(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++wl,this.ba=this.ea=!1}function bl(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function _l(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Tl(e){const t={};for(const n in e)t[n]=e[n];return t}const El="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sl(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<El.length;t++)n=El[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function kl(e){this.src=e,this.g={},this.h=0}function Al(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=ju(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(bl(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Cl(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}kl.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Cl(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new Il(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var Nl="closure_lm_"+(1e6*Math.random()|0),Dl={};function Rl(e,t,n,r,i){if(r&&r.once)return Pl(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Rl(e,t[s],n,r,i);return null}return n=Bl(n),e&&e[vl]?e.N(t,n,Ru(r)?!!r.capture:!!r,i):xl(e,t,n,!1,r,i)}function xl(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Ru(i)?!!i.capture:!!i,a=Ul(e);if(a||(e[Nl]=a=new kl(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=Ol(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)zu||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Fl(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Ol(){function e(n){return t.call(e.src,e.listener,n)}const t=Vl;return e}function Pl(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Pl(e,t[s],n,r,i);return null}return n=Bl(n),e&&e[vl]?e.O(t,n,Ru(r)?!!r.capture:!!r,i):xl(e,t,n,!0,r,i)}function Ll(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ll(e,t[s],n,r,i);else r=Ru(r)?!!r.capture:!!r,n=Bl(n),e&&e[vl]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Cl(s,n,r,i),-1<n&&(bl(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ul(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cl(t,n,r,i)),(n=-1<e?t[e]:null)&&Ml(n))}function Ml(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[vl])Al(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Fl(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ul(t))?(Al(n,e),0==n.h&&(n.src=null,t[Nl]=null)):bl(e)}}}function Fl(e){return e in Dl?Dl[e]:Dl[e]="on"+e}function Vl(e,t){if(e.ba)e=!0;else{t=new gl(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&Ml(e),e=n.call(r,t)}return e}function Ul(e){return e=e[Nl],e instanceof kl?e:null}var ql="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bl(e){return"function"===typeof e?e:(e[ql]||(e[ql]=function(t){return e.handleEvent(t)}),e[ql])}function jl(){qu.call(this),this.i=new kl(this),this.P=this,this.I=null}function Gl(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new $u(t,e);else if(t instanceof $u)t.target=t.target||e;else{var i=t;t=new $u(r,e),Sl(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Kl(o,r,!0,t)&&i}if(o=t.g=e,i=Kl(o,r,!0,t)&&i,i=Kl(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Kl(o,r,!1,t)&&i}function Kl(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Al(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}Uu(jl,qu),jl.prototype[vl]=!0,jl.prototype.removeEventListener=function(e,t,n,r){Ll(this,e,t,n,r)},jl.prototype.M=function(){if(jl.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bl(n[r]);delete t.g[e],t.h--}}this.I=null},jl.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},jl.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var $l=Cu.JSON.stringify;function zl(){var e=th;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Wl{constructor(){this.h=this.g=null}add(e,t){const n=Ql.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Hl,Ql=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Yl),(e=>e.reset()));class Yl{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Jl(e){Cu.setTimeout((()=>{throw e}),0)}function Xl(e,t){Hl||Zl(),eh||(Hl(),eh=!0),th.add(e,t)}function Zl(){var e=Cu.Promise.resolve(void 0);Hl=function(){e.then(nh)}}var eh=!1,th=new Wl;function nh(){for(var e;e=zl();){try{e.h.call(e.g)}catch(n){Jl(n)}var t=Ql;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}eh=!1}function rh(e,t){jl.call(this),this.h=e||1,this.g=t||Cu,this.j=Fu(this.lb,this),this.l=Date.now()}function ih(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function sh(e,t,n){if("function"===typeof e)n&&(e=Fu(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Fu(e.handleEvent,e)}return 2147483647<Number(t)?-1:Cu.setTimeout(e,t||0)}function oh(e){e.g=sh((()=>{e.g=null,e.i&&(e.i=!1,oh(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Uu(rh,jl),Eu=rh.prototype,Eu.ca=!1,Eu.R=null,Eu.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Gl(this,"tick"),this.ca&&(ih(this),this.start()))}},Eu.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Eu.M=function(){rh.X.M.call(this),ih(this),delete this.g};class ah extends qu{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:oh(this)}M(){super.M(),this.g&&(Cu.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ch(e){qu.call(this),this.h=e,this.g={}}Uu(ch,qu);var uh=[];function lh(e,t,n,r){Array.isArray(n)||(n&&(uh[0]=n.toString()),n=uh);for(var i=0;i<n.length;i++){var s=Rl(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function hh(e){_l(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ml(e)}),e),e.g={}}function dh(){this.g=!0}function fh(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function ph(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function mh(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+yh(e,n)+(r?" "+r:"")}))}function gh(e,t){e.info((function(){return"TIMEOUT: "+t}))}function yh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return $l(n)}catch(a){return t}}ch.prototype.M=function(){ch.X.M.call(this),hh(this)},ch.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},dh.prototype.Aa=function(){this.g=!1},dh.prototype.info=function(){};var vh={},wh=null;function Ih(){return wh=wh||new jl}function bh(e){$u.call(this,vh.Pa,e)}function _h(e){const t=Ih();Gl(t,new bh(t))}function Th(e,t){$u.call(this,vh.STAT_EVENT,e),this.stat=t}function Eh(e){const t=Ih();Gl(t,new Th(t,e))}function Sh(e,t){$u.call(this,vh.Qa,e),this.size=t}function kh(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return Cu.setTimeout((function(){e()}),t)}vh.Pa="serverreachability",Uu(bh,$u),vh.STAT_EVENT="statevent",Uu(Th,$u),vh.Qa="timingevent",Uu(Sh,$u);var Ah={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ch={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Nh(){}function Dh(e){return e.h||(e.h=e.i())}function Rh(){}Nh.prototype.h=null;var xh,Oh={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ph(){$u.call(this,"d")}function Lh(){$u.call(this,"c")}function Mh(){}function Fh(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new ch(this),this.O=Uh,e=il?125:void 0,this.T=new rh(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}Uu(Ph,$u),Uu(Lh,$u),Uu(Mh,Nh),Mh.prototype.g=function(){return new XMLHttpRequest},Mh.prototype.i=function(){return{}},xh=new Mh;var Uh=45e3,qh={},Bh={};function jh(e,t,n){e.K=1,e.v=ld(sd(t)),e.s=n,e.P=!0,Gh(e,null)}function Gh(e,t){e.F=Date.now(),Wh(e),e.A=sd(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),Td(n.i,"t",r),e.C=0,n=e.l.H,e.h=new Vh,e.g=Cf(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ah(Fu(e.La,e,e.g),e.N)),lh(e.S,e.g,"readystatechange",e.ib),t=e.H?Tl(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),_h(),fh(e.j,e.u,e.A,e.m,e.U,e.s)}function Kh(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function $h(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=zh(e,n),r==Bh){4==t&&(e.o=4,Eh(14),i=!1),mh(e.j,e.m,null,"[Incomplete Response]");break}if(r==qh){e.o=4,Eh(15),mh(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}mh(e.j,e.m,r,null),Xh(e,r)}Kh(e)&&r!=Bh&&r!=qh&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Eh(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),If(t),t.K=!0,Eh(11))):(mh(e.j,e.m,n,"[Invalid Chunked Response]"),Jh(e),Yh(e))}function zh(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Bh:(n=Number(t.substring(n,r)),isNaN(n)?qh:(r+=1,r+n>t.length?Bh:(t=t.substr(r,n),e.C=r+n,t)))}function Wh(e){e.V=Date.now()+e.O,Hh(e,e.O)}function Hh(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=kh(Fu(e.gb,e),t)}function Qh(e){e.B&&(Cu.clearTimeout(e.B),e.B=null)}function Yh(e){0==e.l.G||e.I||Tf(e.l,e)}function Jh(e){Qh(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ih(e.T),hh(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Xh(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||Rd(n.h,e)))if(!e.J&&Rd(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;_f(n),hf(n)}wf(n),Eh(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=kh(Fu(n.cb,n),6e3));if(1>=Dd(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else Sf(n,11)}else if((e.J||n.g==e)&&_f(n),!Wu(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(xd(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,ud(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=Af(r,r.H?r.ka:null,r.V),o.J){Od(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Qh(a),Wh(a)),r.g=o}else vf(r);0<n.i.length&&ff(n)}else"stop"!=u[0]&&"close"!=u[0]||Sf(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Sf(n,7):lf(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}_h(4)}catch(u){}}function Zh(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(Du(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function ed(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(Du(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function td(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Du(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=ed(e),r=Zh(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}Eu=Fh.prototype,Eu.setTimeout=function(e){this.O=e},Eu.ib=function(e){e=e.target;const t=this.L;t&&3==rf(e)?t.l():this.La(e)},Eu.La=function(e){try{if(e==this.g)e:{const l=rf(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(3!=l||il||this.g&&(this.h.h||this.g.fa()||sf(this.g)))){this.I||4!=l||7==t||_h(8==t||0>=h?3:2),Qh(this);var n=this.g.aa();this.Y=n;t:if(Kh(this)){var r=sf(this.g);e="";var i=r.length,s=4==rf(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Jh(this),Yh(this);var o="";break t}this.h.i=new Cu.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,ph(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wu(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,Eh(12),Jh(this),Yh(this);break e}mh(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xh(this,n)}this.P?($h(this,l,o),il&&this.i&&3==l&&(lh(this.S,this.T,"tick",this.hb),this.T.start())):(mh(this.j,this.m,o,null),Xh(this,o)),4==l&&Jh(this),this.i&&!this.I&&(4==l?Tf(this.l,this):(this.i=!1,Wh(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Eh(12)):(this.o=0,Eh(13)),Jh(this),Yh(this)}}}catch(l){}},Eu.hb=function(){if(this.g){var e=rf(this.g),t=this.g.fa();this.C<t.length&&(Qh(this),$h(this,e,t),this.i&&4!=e&&Wh(this))}},Eu.cancel=function(){this.I=!0,Jh(this)},Eu.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(gh(this.j,this.A),2!=this.K&&(_h(),Eh(17)),Jh(this),this.o=2,Yh(this)):Hh(this,this.V-e)};var nd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rd(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function id(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof id){this.h=void 0!==t?t:e.h,od(this,e.j),this.s=e.s,this.g=e.g,ad(this,e.m),this.l=e.l,t=e.i;var n=new wd;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),cd(this,n),this.o=e.o}else e&&(n=String(e).match(nd))?(this.h=!!t,od(this,n[1]||"",!0),this.s=hd(n[2]||""),this.g=hd(n[3]||"",!0),ad(this,n[4]),this.l=hd(n[5]||"",!0),cd(this,n[6]||"",!0),this.o=hd(n[7]||"")):(this.h=!!t,this.i=new wd(null,this.h))}function sd(e){return new id(e)}function od(e,t,n){e.j=n?hd(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ad(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function cd(e,t,n){t instanceof wd?(e.i=t,Sd(e.i,e.h)):(n||(t=dd(t,yd)),e.i=new wd(t,e.h))}function ud(e,t,n){e.i.set(t,n)}function ld(e){return ud(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function hd(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dd(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,fd),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function fd(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}id.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dd(t,pd,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(dd(t,pd,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dd(n,"/"==n.charAt(0)?gd:md,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",dd(n,vd)),e.join("")};var pd=/[#\/\?@]/g,md=/[#\?:]/g,gd=/[#\?]/g,yd=/[#\?@]/g,vd=/#/g;function wd(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Id(e){e.g||(e.g=new Map,e.h=0,e.i&&rd(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function bd(e,t){Id(e),t=Ed(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function _d(e,t){return Id(e),t=Ed(e,t),e.g.has(t)}function Td(e,t,n){bd(e,t),0<n.length&&(e.i=null,e.g.set(Ed(e,t),Gu(n)),e.h+=n.length)}function Ed(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Sd(e,t){t&&!e.j&&(Id(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(bd(this,t),Td(this,n,e))}),e)),e.j=t}Eu=wd.prototype,Eu.add=function(e,t){Id(this),this.i=null,e=Ed(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Eu.forEach=function(e,t){Id(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},Eu.oa=function(){Id(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},Eu.W=function(e){Id(this);let t=[];if("string"===typeof e)_d(this,e)&&(t=t.concat(this.g.get(Ed(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Eu.set=function(e,t){return Id(this),this.i=null,e=Ed(this,e),_d(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Eu.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},Eu.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var kd=class{constructor(e,t){this.h=e,this.g=t}};function Ad(e){this.l=e||Cd,Cu.PerformanceNavigationTiming?(e=Cu.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(Cu.g&&Cu.g.Ga&&Cu.g.Ga()&&Cu.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cd=10;function Nd(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Dd(e){return e.h?1:e.g?e.g.size:0}function Rd(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function xd(e,t){e.g?e.g.add(t):e.h=t}function Od(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Pd(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Gu(e.i)}function Ld(){}function Md(){this.g=new Ld}function Fd(e,t,n){const r=n||"";try{td(e,(function(e,n){let i=e;Ru(e)&&(i=$l(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Vd(e,t){const n=new dh;if(Cu.Image){const r=new Image;r.onload=Vu(Ud,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Vu(Ud,n,r,"TestLoadImage: error",!1,t),r.onabort=Vu(Ud,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Vu(Ud,n,r,"TestLoadImage: timeout",!1,t),Cu.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Ud(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function qd(e){this.l=e.ac||null,this.j=e.jb||!1}function Bd(e,t){jl.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=jd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ad.prototype.cancel=function(){if(this.i=Pd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Ld.prototype.stringify=function(e){return Cu.JSON.stringify(e,void 0)},Ld.prototype.parse=function(e){return Cu.JSON.parse(e,void 0)},Uu(qd,Nh),qd.prototype.g=function(){return new Bd(this.l,this.j)},qd.prototype.i=function(e){return function(){return e}}({}),Uu(Bd,jl);var jd=0;function Gd(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function Kd(e){e.readyState=4,e.l=null,e.j=null,e.A=null,$d(e)}function $d(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Eu=Bd.prototype,Eu.open=function(e,t){if(this.readyState!=jd)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,$d(this)},Eu.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Cu).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},Eu.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Kd(this)),this.readyState=jd},Eu.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,$d(this)),this.g&&(this.readyState=3,$d(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof Cu.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Gd(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},Eu.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Kd(this):$d(this),3==this.readyState&&Gd(this)}},Eu.Va=function(e){this.g&&(this.response=this.responseText=e,Kd(this))},Eu.Ua=function(e){this.g&&(this.response=e,Kd(this))},Eu.ga=function(){this.g&&Kd(this)},Eu.setRequestHeader=function(e,t){this.v.append(e,t)},Eu.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Eu.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Bd.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var zd=Cu.JSON.parse;function Wd(e){jl.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hd,this.K=this.L=!1}Uu(Wd,jl);var Hd="",Qd=/^https?$/i,Yd=["POST","PUT"];function Jd(e){return nl&&fl()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Xd(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zd(e),tf(e)}function Zd(e){e.D||(e.D=!0,Gl(e,"complete"),Gl(e,"error"))}function ef(e){if(e.h&&"undefined"!=typeof Au&&(!e.C[1]||4!=rf(e)||2!=e.aa()))if(e.v&&4==rf(e))sh(e.Ha,0,e);else if(Gl(e,"readystatechange"),4==rf(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(nd)[1]||null;if(!i&&Cu.self&&Cu.self.location){var s=Cu.self.location.protocol;i=s.substr(0,s.length-1)}r=!Qd.test(i?i.toLowerCase():"")}n=r}if(n)Gl(e,"complete"),Gl(e,"success");else{e.m=6;try{var o=2<rf(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Zd(e)}}finally{tf(e)}}}function tf(e,t){if(e.g){nf(e);const r=e.g,i=e.C[0]?Nu:null;e.g=null,e.C=null,t||Gl(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function nf(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Cu.clearTimeout(e.A),e.A=null)}function rf(e){return e.g?e.g.readyState:0}function sf(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Hd:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Kf){return null}}function of(e){let t="";return _l(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function af(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=of(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):ud(e,t,n))}function cf(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function uf(e){this.Ca=0,this.i=[],this.j=new dh,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=cf("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=cf("baseRetryDelayMs",5e3,e),this.bb=cf("retryDelaySeedMs",1e4,e),this.$a=cf("forwardChannelMaxRetries",2,e),this.ta=cf("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new Ad(e&&e.concurrentRequestLimit),this.Fa=new Md,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function lf(e){if(df(e),3==e.G){var t=e.U++,n=sd(e.F);ud(n,"SID",e.I),ud(n,"RID",t),ud(n,"TYPE","terminate"),gf(e,n),t=new Fh(e,e.j,t,void 0),t.K=2,t.v=ld(sd(n)),n=!1,Cu.navigator&&Cu.navigator.sendBeacon&&(n=Cu.navigator.sendBeacon(t.v.toString(),"")),!n&&Cu.Image&&((new Image).src=t.v,n=!0),n||(t.g=Cf(t.l,null),t.g.da(t.v)),t.F=Date.now(),Wh(t)}kf(e)}function hf(e){e.g&&(If(e),e.g.cancel(),e.g=null)}function df(e){hf(e),e.u&&(Cu.clearTimeout(e.u),e.u=null),_f(e),e.h.cancel(),e.m&&("number"===typeof e.m&&Cu.clearTimeout(e.m),e.m=null)}function ff(e){Nd(e.h)||e.m||(e.m=!0,Xl(e.Ja,e),e.C=0)}function pf(e,t){return!(Dd(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=kh(Fu(e.Ja,e,t),Ef(e,e.C)),e.C++,!0))}function mf(e,t){var n;n=t?t.m:e.U++;const r=sd(e.F);ud(r,"SID",e.I),ud(r,"RID",n),ud(r,"AID",e.T),gf(e,r),e.o&&e.s&&af(r,e.o,e.s),n=new Fh(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=yf(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),xd(e.h,n),jh(n,r,t)}function gf(e,t){e.ia&&_l(e.ia,(function(e,n){ud(t,n,e)})),e.l&&td({},(function(e,n){ud(t,n,e)}))}function yf(e,t,n){n=Math.min(e.i.length,n);var r=e.l?Fu(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{Fd(a,e,"req"+n+"_")}catch(np){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function vf(e){e.g||e.u||(e.Z=1,Xl(e.Ia,e),e.A=0)}function wf(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=kh(Fu(e.Ia,e),Ef(e,e.A)),e.A++,!0)}function If(e){null!=e.B&&(Cu.clearTimeout(e.B),e.B=null)}function bf(e){e.g=new Fh(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=sd(e.sa);ud(t,"RID","rpc"),ud(t,"SID",e.I),ud(t,"CI",e.L?"0":"1"),ud(t,"AID",e.T),ud(t,"TYPE","xmlhttp"),gf(e,t),e.o&&e.s&&af(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=ld(sd(t)),n.s=null,n.P=!0,Gh(n,e)}function _f(e){null!=e.v&&(Cu.clearTimeout(e.v),e.v=null)}function Tf(e,t){var n=null;if(e.g==t){_f(e),If(e),e.g=null;var r=2}else{if(!Rd(e.h,t))return;n=t.D,Od(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=Ih(),Gl(r,new Sh(r,n)),ff(e)}else vf(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&pf(e,t)||2==r&&wf(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:Sf(e,5);break;case 4:Sf(e,10);break;case 3:Sf(e,6);break;default:Sf(e,2)}}function Ef(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Sf(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=Fu(e.kb,e);n||(n=new id("//www.google.com/images/cleardot.gif"),Cu.location&&"http"==Cu.location.protocol||od(n,"https"),ld(n)),Vd(n.toString(),r)}else Eh(2);e.G=0,e.l&&e.l.va(t),kf(e),df(e)}function kf(e){if(e.G=0,e.la=[],e.l){const t=Pd(e.h);0==t.length&&0==e.i.length||(Ku(e.la,t),Ku(e.la,e.i),e.h.i.length=0,Gu(e.i),e.i.length=0),e.l.ua()}}function Af(e,t,n){var r=n instanceof id?sd(n):new id(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),ad(r,r.m);else{var i=Cu.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new id(null,void 0);r&&od(s,r),t&&(s.g=t),i&&ad(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&ud(r,n,t),ud(r,"VER",e.ma),gf(e,r),r}function Cf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Wd(new qd({jb:!0})):new Wd(e.ra),t.Ka(e.H),t}function Nf(){}function Df(){if(nl&&!(10<=Number(ml)))throw Error("Environmental error: no available transport.")}function Rf(e,t){jl.call(this),this.g=new uf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Wu(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Wu(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Pf(this)}function xf(e){Ph.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Of(){Lh.call(this),this.status=1}function Pf(e){this.g=e}Eu=Wd.prototype,Eu.Ka=function(e){this.L=e},Eu.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():xh.g(),this.C=this.u?Dh(this.u):Dh(xh),this.g.onreadystatechange=Fu(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Xd(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=Cu.FormData&&e instanceof Cu.FormData,!(0<=ju(Yd,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{nf(this),0<this.B&&((this.K=Jd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fu(this.qa,this)):this.A=sh(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Xd(this,s)}},Eu.qa=function(){"undefined"!=typeof Au&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Gl(this,"timeout"),this.abort(8))},Eu.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Gl(this,"complete"),Gl(this,"abort"),tf(this))},Eu.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tf(this,!0)),Wd.X.M.call(this)},Eu.Ha=function(){this.s||(this.F||this.v||this.l?ef(this):this.fb())},Eu.fb=function(){ef(this)},Eu.aa=function(){try{return 2<rf(this)?this.g.status:-1}catch(e){return-1}},Eu.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Eu.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),zd(t)}},Eu.Ea=function(){return this.m},Eu.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},Eu=uf.prototype,Eu.ma=8,Eu.G=1,Eu.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Fh(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=Tl(s),Sl(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=yf(this,i,t),n=sd(this.F),ud(n,"RID",e),ud(n,"CVER",22),this.D&&ud(n,"X-HTTP-Session-Id",this.D),gf(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(of(s)))+"&"+t:this.o&&af(n,this.o,s)),xd(this.h,i),this.Ya&&ud(n,"TYPE","init"),this.O?(ud(n,"$req",t),ud(n,"SID","null"),i.Z=!0,jh(i,n,null)):jh(i,n,t),this.G=2}}else 3==this.G&&(e?mf(this,e):0==this.i.length||Nd(this.h)||mf(this))},Eu.Ia=function(){if(this.u=null,bf(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=kh(Fu(this.eb,this),e)}},Eu.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Eh(10),hf(this),bf(this))},Eu.cb=function(){null!=this.v&&(this.v=null,hf(this),wf(this),Eh(19))},Eu.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Eh(2)):(this.j.info("Failed to ping google.com"),Eh(1))},Eu=Nf.prototype,Eu.xa=function(){},Eu.wa=function(){},Eu.va=function(){},Eu.ua=function(){},Eu.Ra=function(){},Df.prototype.g=function(e,t){return new Rf(e,t)},Uu(Rf,jl),Rf.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Eh(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Af(e,null,e.V),ff(e)},Rf.prototype.close=function(){lf(this.g)},Rf.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=$l(e),e=n);t.i.push(new kd(t.ab++,e)),3==t.G&&ff(t)},Rf.prototype.M=function(){this.g.l=null,delete this.j,lf(this.g),delete this.g,Rf.X.M.call(this)},Uu(xf,Ph),Uu(Of,Lh),Uu(Pf,Nf),Pf.prototype.xa=function(){Gl(this.g,"a")},Pf.prototype.wa=function(e){Gl(this.g,new xf(e))},Pf.prototype.va=function(e){Gl(this.g,new Of)},Pf.prototype.ua=function(){Gl(this.g,"b")},Df.prototype.createWebChannel=Df.prototype.g,Rf.prototype.send=Rf.prototype.u,Rf.prototype.open=Rf.prototype.m,Rf.prototype.close=Rf.prototype.close,Ah.NO_ERROR=0,Ah.TIMEOUT=8,Ah.HTTP_ERROR=6,Ch.COMPLETE="complete",Rh.EventType=Oh,Oh.OPEN="a",Oh.CLOSE="b",Oh.ERROR="c",Oh.MESSAGE="d",jl.prototype.listen=jl.prototype.N,Wd.prototype.listenOnce=Wd.prototype.O,Wd.prototype.getLastError=Wd.prototype.Oa,Wd.prototype.getLastErrorCode=Wd.prototype.Ea,Wd.prototype.getStatus=Wd.prototype.aa,Wd.prototype.getResponseJson=Wd.prototype.Sa,Wd.prototype.getResponseText=Wd.prototype.fa,Wd.prototype.send=Wd.prototype.da,Wd.prototype.setWithCredentials=Wd.prototype.Ka;var Lf=ku.createWebChannelTransport=function(){return new Df},Mf=ku.getStatEventTarget=function(){return Ih()},Ff=ku.ErrorCode=Ah,Vf=ku.EventType=Ch,Uf=ku.Event=vh,qf=ku.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Bf=ku.FetchXmlHttpFactory=qd,jf=ku.WebChannel=Rh,Gf=ku.XhrIo=Wd;const Kf="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$f.UNAUTHENTICATED=new $f(null),$f.GOOGLE_CREDENTIALS=new $f("google-credentials-uid"),$f.FIRST_PARTY=new $f("first-party-uid"),$f.MOCK_USER=new $f("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let zf="9.15.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=new ge("@firebase/firestore");function Hf(){return Wf.logLevel}function Qf(e){Wf.setLogLevel(e)}function Yf(e,...t){if(Wf.logLevel<=he.DEBUG){const n=t.map(Zf);Wf.debug(`Firestore (${zf}): ${e}`,...n)}}function Jf(e,...t){if(Wf.logLevel<=he.ERROR){const n=t.map(Zf);Wf.error(`Firestore (${zf}): ${e}`,...n)}}function Xf(e,...t){if(Wf.logLevel<=he.WARN){const n=t.map(Zf);Wf.warn(`Firestore (${zf}): ${e}`,...n)}}function Zf(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e="Unexpected state"){const t=`FIRESTORE (${zf}) INTERNAL ASSERTION FAILED: `+e;throw Jf(t),new Error(t)}function tp(e,t){e||ep()}function np(e,t){e||ep()}function rp(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class sp extends j{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($f.UNAUTHENTICATED)))}shutdown(){}}class up{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class lp{constructor(e){this.t=e,this.currentUser=$f.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new op;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new op,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Yf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Yf("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new op)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Yf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(tp("string"==typeof t.accessToken),new ap(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return tp(null===e||"string"==typeof e),new $f(e)}}class hp{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=$f.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(tp(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class dp{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new hp(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t($f.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pp{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Yf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Yf("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Yf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Yf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(tp("string"==typeof e.token),this.A=e.token,new fp(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mp(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=mp(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function yp(e,t){return e<t?-1:e>t?1:0}function vp(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function wp(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new sp(ip.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new sp(ip.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new sp(ip.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new sp(ip.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ip.fromMillis(Date.now())}static fromDate(e){return Ip.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Ip(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?yp(this.nanoseconds,e.nanoseconds):yp(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.timestamp=e}static fromTimestamp(e){return new bp(e)}static min(){return new bp(new Ip(0,0))}static max(){return new bp(new Ip(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,n){void 0===t?t=0:t>e.length&&ep(),void 0===n?n=e.length-t:n>e.length-t&&ep(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===_p.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _p?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Tp extends _p{construct(e,t,n){return new Tp(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new sp(ip.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Tp(t)}static emptyPath(){return new Tp([])}}const Ep=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Sp extends _p{construct(e,t,n){return new Sp(e,t,n)}static isValidIdentifier(e){return Ep.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Sp.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Sp(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new sp(ip.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new sp(ip.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new sp(ip.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new sp(ip.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Sp(t)}static emptyPath(){return new Sp([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.path=e}static fromPath(e){return new kp(Tp.fromString(e))}static fromName(e){return new kp(Tp.fromString(e).popFirst(5))}static empty(){return new kp(Tp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Tp.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Tp.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new kp(new Tp(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Cp(e){return e.fields.find((e=>2===e.kind))}function Np(e){return e.fields.filter((e=>2!==e.kind))}Ap.UNKNOWN_ID=-1;class Dp{constructor(e,t){this.fieldPath=e,this.kind=t}}class Rp{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Rp(0,Pp.min())}}function xp(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=bp.fromTimestamp(1e9===r?new Ip(n+1,0):new Ip(n,r));return new Pp(i,kp.empty(),t)}function Op(e){return new Pp(e.readTime,e.key,-1)}class Pp{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Pp(bp.min(),kp.empty(),-1)}static max(){return new Pp(bp.max(),kp.empty(),-1)}}function Lp(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=kp.comparator(e.documentKey,t.documentKey),0!==n?n:yp(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vp(e){if(e.code!==ip.FAILED_PRECONDITION||e.message!==Mp)throw e;Yf("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ep(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Up(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Up?t:Up.resolve(t)}catch(e){return Up.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Up.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Up.reject(t)}static resolve(e){return new Up(((t,n)=>{t(e)}))}static reject(e){return new Up(((t,n)=>{n(e)}))}static waitFor(e){return new Up(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Up.resolve(!1);for(const n of e)t=t.next((e=>e?Up.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Up(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Up(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new op,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Gp(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=Hp(t.target.error);this.P.reject(new Gp(e,n))}}static open(e,t,n,r){try{return new qp(t,e.transaction(r,n))}catch(e){throw new Gp(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(Yf("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new $p(t)}}class Bp{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===Bp.D(_())&&Jf("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Yf("SimpleDb","Removing database:",e),zp(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!D())return!1;if(Bp.N())return!0;const e=_(),t=Bp.D(e),n=0<t&&t<10,r=Bp.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static N(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:""})||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(Yf("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Gp(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new sp(ip.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new sp(ip.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Gp(e,r))},r.onupgradeneeded=e=>{Yf("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next((()=>{Yf("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.F(e);const t=qp.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.V(),e))).catch((e=>(t.abort(e),Up.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Yf("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class jp{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return zp(this.q.delete())}}class Gp extends sp{constructor(e,t){super(ip.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Kp(e){return"IndexedDbTransactionError"===e.name}class $p{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Yf("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Yf("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),zp(n)}add(e){return Yf("SimpleDb","ADD",this.store.name,e,e),zp(this.store.add(e))}get(e){return zp(this.store.get(e)).next((t=>(void 0===t&&(t=null),Yf("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Yf("SimpleDb","DELETE",this.store.name,e),zp(this.store.delete(e))}count(){return Yf("SimpleDb","COUNT",this.store.name),zp(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Up(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Up(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Y(e,t){Yf("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const r=this.cursor(n);return this.H(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}tt(e){const t=this.cursor({});return new Up(((n,r)=>{t.onerror=e=>{const t=Hp(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}H(e,t){const n=[];return new Up(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new jp(i),o=t(i.primaryKey,i.value,s);if(o instanceof Up){const e=o.catch((e=>(s.done(),Up.reject(e))));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}})).next((()=>Up.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function zp(e){return new Up(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Hp(e.target.error);n(t)}}))}let Wp=!1;function Hp(e){const t=Bp.D(_());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new sp("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Wp||(Wp=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Qp{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){Yf("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Yf("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){Kp(e)?Yf("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Vp(e)}await this.nt(6e4)}))}}class Yp{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.it(t,e)))}it(e,t){const n=new Set;let r=t,i=!0;return Up.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Yf("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.ot(r,n))).next((n=>(Yf("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}ot(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=Op(t);Lp(r,n)>0&&(n=r)})),new Pp(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Jp.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xp{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Zp{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Zp("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Zp&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function tm(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function nm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(e){return null==e}function im(e){return 0===e&&1/e==-1/0}function sm(e){return"number"==typeof e&&Number.isInteger(e)&&!im(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new am(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new am(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return yp(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}am.EMPTY_BYTE_STRING=new am("");const cm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function um(e){if(tp(!!e),"string"==typeof e){let t=0;const n=cm.exec(e);if(tp(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:lm(e.seconds),nanos:lm(e.nanos)}}function lm(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function hm(e){return"string"==typeof e?am.fromBase64String(e):am.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function fm(e){const t=e.mapValue.fields.__previous_value__;return dm(t)?fm(t):t}function pm(e){const t=um(e.mapValue.fields.__local_write_time__.timestampValue);return new Ip(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},gm={nullValue:"NULL_VALUE"};function ym(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?dm(e)?4:Rm(e)?9007199254740991:10:ep()}function vm(e,t){if(e===t)return!0;const n=ym(e);if(n!==ym(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return pm(e).isEqual(pm(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=um(e.timestampValue),r=um(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return hm(e.bytesValue).isEqual(hm(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return lm(e.geoPointValue.latitude)===lm(t.geoPointValue.latitude)&&lm(e.geoPointValue.longitude)===lm(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return lm(e.integerValue)===lm(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=lm(e.doubleValue),r=lm(t.doubleValue);return n===r?im(n)===im(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return vp(e.arrayValue.values||[],t.arrayValue.values||[],vm);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(em(n)!==em(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!vm(n[i],r[i])))return!1;return!0}(e,t);default:return ep()}}function wm(e,t){return void 0!==(e.values||[]).find((e=>vm(e,t)))}function Im(e,t){if(e===t)return 0;const n=ym(e),r=ym(t);if(n!==r)return yp(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return yp(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=lm(e.integerValue||e.doubleValue),r=lm(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return bm(e.timestampValue,t.timestampValue);case 4:return bm(pm(e),pm(t));case 5:return yp(e.stringValue,t.stringValue);case 6:return function(e,t){const n=hm(e),r=hm(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=yp(n[i],r[i]);if(0!==e)return e}return yp(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=yp(lm(e.latitude),lm(t.latitude));return 0!==n?n:yp(lm(e.longitude),lm(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Im(n[i],r[i]);if(e)return e}return yp(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===mm.mapValue&&t===mm.mapValue)return 0;if(e===mm.mapValue)return 1;if(t===mm.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=yp(r[o],s[o]);if(0!==e)return e;const t=Im(n[r[o]],i[s[o]]);if(0!==t)return t}return yp(r.length,s.length)}(e.mapValue,t.mapValue);default:throw ep()}}function bm(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return yp(e,t);const n=um(e),r=um(t),i=yp(n.seconds,r.seconds);return 0!==i?i:yp(n.nanos,r.nanos)}function _m(e){return Tm(e)}function Tm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=um(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?hm(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,kp.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Tm(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Tm(e.fields[i])}`;return n+"}"}(e.mapValue):ep();var t,n}function Em(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Sm(e){return!!e&&"integerValue"in e}function km(e){return!!e&&"arrayValue"in e}function Am(e){return!!e&&"nullValue"in e}function Cm(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Nm(e){return!!e&&"mapValue"in e}function Dm(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return tm(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Dm(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Dm(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Rm(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function xm(e){return"nullValue"in e?gm:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Em(Zp.empty(),kp.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:ep()}function Om(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Em(Zp.empty(),kp.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?mm:ep()}function Pm(e,t){const n=Im(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Lm(e,t){const n=Im(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,t){this.position=e,this.inclusive=t}}function Fm(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?kp.comparator(kp.fromName(o.referenceValue),n.key):Im(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Vm(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!vm(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{}class qm extends Um{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ym(e,t,n):"array-contains"===t?new eg(e,n):"in"===t?new tg(e,n):"not-in"===t?new ng(e,n):"array-contains-any"===t?new rg(e,n):new qm(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Jm(e,n):new Xm(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Im(t,this.value)):null!==t&&ym(this.value)===ym(t)&&this.matchesComparison(Im(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ep()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bm extends Um{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new Bm(e,t)}matches(e){return jm(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function jm(e){return"and"===e.op}function Gm(e){return"or"===e.op}function Km(e){return $m(e)&&jm(e)}function $m(e){for(const t of e.filters)if(t instanceof Bm)return!1;return!0}function zm(e){if(e instanceof qm)return e.field.canonicalString()+e.op.toString()+_m(e.value);{const t=e.filters.map((e=>zm(e))).join(",");return`${e.op}(${t})`}}function Wm(e,t){return e instanceof qm?function(e,t){return t instanceof qm&&e.op===t.op&&e.field.isEqual(t.field)&&vm(e.value,t.value)}(e,t):e instanceof Bm?function(e,t){return t instanceof Bm&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Wm(n,t.filters[r])),!0)}(e,t):void ep()}function Hm(e,t){const n=e.filters.concat(t);return Bm.create(n,e.op)}function Qm(e){return e instanceof qm?function(e){return`${e.field.canonicalString()} ${e.op} ${_m(e.value)}`}(e):e instanceof Bm?function(e){return e.op.toString()+" {"+e.getFilters().map(Qm).join(" ,")+"}"}(e):"Filter"}class Ym extends qm{constructor(e,t,n){super(e,t,n),this.key=kp.fromName(n.referenceValue)}matches(e){const t=kp.comparator(e.key,this.key);return this.matchesComparison(t)}}class Jm extends qm{constructor(e,t){super(e,"in",t),this.keys=Zm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Xm extends qm{constructor(e,t){super(e,"not-in",t),this.keys=Zm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Zm(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>kp.fromName(e.referenceValue)))}class eg extends qm{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return km(t)&&wm(t.arrayValue,this.value)}}class tg extends qm{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&wm(this.value.arrayValue,t)}}class ng extends qm{constructor(e,t){super(e,"not-in",t)}matches(e){if(wm(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!wm(this.value.arrayValue,t)}}class rg extends qm{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!km(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>wm(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(e,t="asc"){this.field=e,this.dir=t}}function sg(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.comparator=e,this.root=t||cg.EMPTY}insert(e,t){return new og(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,cg.BLACK,null,null))}remove(e){return new og(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cg.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ag(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ag(this.root,e,this.comparator,!1)}getReverseIterator(){return new ag(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ag(this.root,e,this.comparator,!0)}}class ag{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class cg{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:cg.RED,this.left=null!=r?r:cg.EMPTY,this.right=null!=i?i:cg.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new cg(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return cg.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return cg.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,cg.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,cg.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ep();if(this.right.isRed())throw ep();const e=this.left.check();if(e!==this.right.check())throw ep();return e+(this.isRed()?0:1)}}cg.EMPTY=null,cg.RED=!0,cg.BLACK=!1,cg.EMPTY=new class{constructor(){this.size=0}get key(){throw ep()}get value(){throw ep()}get color(){throw ep()}get left(){throw ep()}get right(){throw ep()}copy(e,t,n,r,i){return this}insert(e,t,n){return new cg(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ug{constructor(e){this.comparator=e,this.data=new og(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new lg(this.data.getIterator())}getIteratorFrom(e){return new lg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ug))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ug(this.comparator);return t.data=e,t}}class lg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hg(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.fields=e,e.sort(Sp.comparator)}static empty(){return new dg([])}unionWith(e){let t=new ug(Sp.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new dg(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return vp(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e){this.value=e}static empty(){return new fg({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Nm(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dm(t)}setAll(e){let t=Sp.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Dm(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Nm(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return vm(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Nm(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){tm(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new fg(Dm(this.value))}}function pg(e){const t=[];return tm(e.fields,((e,n)=>{const r=new Sp([e]);if(Nm(n)){const e=pg(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new dg(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class mg{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new mg(e,0,bp.min(),bp.min(),bp.min(),fg.empty(),0)}static newFoundDocument(e,t,n,r){return new mg(e,1,t,bp.min(),n,r,0)}static newNoDocument(e,t){return new mg(e,2,t,bp.min(),bp.min(),fg.empty(),0)}static newUnknownDocument(e,t){return new mg(e,3,t,bp.min(),bp.min(),fg.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(bp.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fg.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fg.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=bp.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof mg&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mg(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ft=null}}function yg(e,t=null,n=[],r=[],i=null,s=null,o=null){return new gg(e,t,n,r,i,s,o)}function vg(e){const t=rp(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>zm(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),rm(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>_m(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>_m(e))).join(",")),t.ft=e}return t.ft}function wg(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!sg(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Wm(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Vm(e.startAt,t.startAt)&&Vm(e.endAt,t.endAt)}function Ig(e){return kp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function bg(e,t){return e.filters.filter((e=>e instanceof qm&&e.field.isEqual(t)))}function _g(e,t,n){let r=gm,i=!0;for(const s of bg(e,t)){let e=gm,t=!0;switch(s.op){case"<":case"<=":e=xm(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=gm}Pm({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Pm({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Tg(e,t,n){let r=mm,i=!0;for(const s of bg(e,t)){let e=mm,t=!0;switch(s.op){case">=":case">":e=Om(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=mm}Lm({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Lm({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function Sg(e,t,n,r,i,s,o,a){return new Eg(e,t,n,r,i,s,o,a)}function kg(e){return new Eg(e)}function Ag(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Cg(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Ng(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Dg(e){return null!==e.collectionGroup}function Rg(e){const t=rp(e);if(null===t.dt){t.dt=[];const e=Ng(t),n=Cg(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new ig(e)),t.dt.push(new ig(Sp.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new ig(Sp.keyField(),e))}}}return t.dt}function xg(e){const t=rp(e);if(!t._t)if("F"===t.limitType)t._t=yg(t.path,t.collectionGroup,Rg(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Rg(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ig(i.field,t))}const n=t.endAt?new Mm(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Mm(t.startAt.position,t.startAt.inclusive):null;t._t=yg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t._t}function Og(e,t){t.getFirstInequalityField(),Ng(e);const n=e.filters.concat([t]);return new Eg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Pg(e,t,n){return new Eg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Lg(e,t){return wg(xg(e),xg(t))&&e.limitType===t.limitType}function Mg(e){return`${vg(xg(e))}|lt:${e.limitType}`}function Fg(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Qm(e))).join(", ")}]`),rm(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>_m(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>_m(e))).join(",")),`Target(${t})`}(xg(e))}; limitType=${e.limitType})`}function Vg(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):kp.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Rg(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Fm(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,Rg(e),t))&&!(e.endAt&&!function(e,t,n){const r=Fm(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,Rg(e),t))}(e,t)}function Ug(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qg(e){return(t,n)=>{let r=!1;for(const i of Rg(e)){const e=Bg(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Bg(e,t,n){const r=e.field.isKeyField()?kp.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Im(r,i):ep()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return ep()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(e,t){if(e.wt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:im(t)?"-0":t}}function Gg(e){return{integerValue:""+e}}function Kg(e,t){return sm(t)?Gg(t):jg(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this._=void 0}}function zg(e,t,n){return e instanceof Qg?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Yg?Jg(e,t):e instanceof Xg?Zg(e,t):function(e,t){const n=Hg(e,t),r=ty(n)+ty(e.gt);return Sm(n)&&Sm(e.gt)?Gg(r):jg(e.yt,r)}(e,t)}function Wg(e,t,n){return e instanceof Yg?Jg(e,t):e instanceof Xg?Zg(e,t):n}function Hg(e,t){return e instanceof ey?Sm(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Qg extends $g{}class Yg extends $g{constructor(e){super(),this.elements=e}}function Jg(e,t){const n=ny(t);for(const r of e.elements)n.some((e=>vm(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Xg extends $g{constructor(e){super(),this.elements=e}}function Zg(e,t){let n=ny(t);for(const r of e.elements)n=n.filter((e=>!vm(e,r)));return{arrayValue:{values:n}}}class ey extends $g{constructor(e,t){super(),this.yt=e,this.gt=t}}function ty(e){return lm(e.integerValue||e.doubleValue)}function ny(e){return km(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t){this.field=e,this.transform=t}}function iy(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Yg&&t instanceof Yg||e instanceof Xg&&t instanceof Xg?vp(e.elements,t.elements,vm):e instanceof ey&&t instanceof ey?vm(e.gt,t.gt):e instanceof Qg&&t instanceof Qg}(e.transform,t.transform)}class sy{constructor(e,t){this.version=e,this.transformResults=t}}class oy{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new oy}static exists(e){return new oy(void 0,e)}static updateTime(e){return new oy(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ay(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class cy{}function uy(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new wy(e.key,oy.none()):new py(e.key,e.data,oy.none());{const n=e.data,r=fg.empty();let i=new ug(Sp.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new my(e.key,r,new dg(i.toArray()),oy.none())}}function ly(e,t,n){e instanceof py?function(e,t,n){const r=e.value.clone(),i=yy(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof my?function(e,t,n){if(!ay(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=yy(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(gy(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function hy(e,t,n,r){return e instanceof py?function(e,t,n,r){if(!ay(e.precondition,t))return n;const i=e.value.clone(),s=vy(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof my?function(e,t,n,r){if(!ay(e.precondition,t))return n;const i=vy(e.fieldTransforms,r,t),s=t.data;return s.setAll(gy(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return ay(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function dy(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Hg(r.transform,e||null);null!=i&&(null===n&&(n=fg.empty()),n.set(r.field,i))}return n||null}function fy(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&vp(e,t,((e,t)=>iy(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class py extends cy{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class my extends cy{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gy(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function yy(e,t,n){const r=new Map;tp(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Wg(o,a,n[i]))}return r}function vy(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,zg(e,s,t))}return r}class wy extends cy{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Iy extends cy{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _y,Ty;function Ey(e){switch(e){default:return ep();case ip.CANCELLED:case ip.UNKNOWN:case ip.DEADLINE_EXCEEDED:case ip.RESOURCE_EXHAUSTED:case ip.INTERNAL:case ip.UNAVAILABLE:case ip.UNAUTHENTICATED:return!1;case ip.INVALID_ARGUMENT:case ip.NOT_FOUND:case ip.ALREADY_EXISTS:case ip.PERMISSION_DENIED:case ip.FAILED_PRECONDITION:case ip.ABORTED:case ip.OUT_OF_RANGE:case ip.UNIMPLEMENTED:case ip.DATA_LOSS:return!0}}function Sy(e){if(void 0===e)return Jf("GRPC error has no .code"),ip.UNKNOWN;switch(e){case _y.OK:return ip.OK;case _y.CANCELLED:return ip.CANCELLED;case _y.UNKNOWN:return ip.UNKNOWN;case _y.DEADLINE_EXCEEDED:return ip.DEADLINE_EXCEEDED;case _y.RESOURCE_EXHAUSTED:return ip.RESOURCE_EXHAUSTED;case _y.INTERNAL:return ip.INTERNAL;case _y.UNAVAILABLE:return ip.UNAVAILABLE;case _y.UNAUTHENTICATED:return ip.UNAUTHENTICATED;case _y.INVALID_ARGUMENT:return ip.INVALID_ARGUMENT;case _y.NOT_FOUND:return ip.NOT_FOUND;case _y.ALREADY_EXISTS:return ip.ALREADY_EXISTS;case _y.PERMISSION_DENIED:return ip.PERMISSION_DENIED;case _y.FAILED_PRECONDITION:return ip.FAILED_PRECONDITION;case _y.ABORTED:return ip.ABORTED;case _y.OUT_OF_RANGE:return ip.OUT_OF_RANGE;case _y.UNIMPLEMENTED:return ip.UNIMPLEMENTED;case _y.DATA_LOSS:return ip.DATA_LOSS;default:return ep()}}(Ty=_y||(_y={}))[Ty.OK=0]="OK",Ty[Ty.CANCELLED=1]="CANCELLED",Ty[Ty.UNKNOWN=2]="UNKNOWN",Ty[Ty.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ty[Ty.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ty[Ty.NOT_FOUND=5]="NOT_FOUND",Ty[Ty.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ty[Ty.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ty[Ty.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ty[Ty.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ty[Ty.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ty[Ty.ABORTED=10]="ABORTED",Ty[Ty.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ty[Ty.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ty[Ty.INTERNAL=13]="INTERNAL",Ty[Ty.UNAVAILABLE=14]="UNAVAILABLE",Ty[Ty.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ky{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){tm(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return nm(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new og(kp.comparator);function Cy(){return Ay}const Ny=new og(kp.comparator);function Dy(...e){let t=Ny;for(const n of e)t=t.insert(n.key,n);return t}function Ry(e){let t=Ny;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function xy(){return Py()}function Oy(){return Py()}function Py(){return new ky((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ly=new og(kp.comparator),My=new ug(kp.comparator);function Fy(...e){let t=My;for(const n of e)t=t.add(n);return t}const Vy=new ug(yp);function Uy(){return Vy}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,By.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new qy(bp.min(),r,Uy(),Cy(),Fy())}}class By{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new By(n,t,Fy(),Fy(),Fy())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t,n,r){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=r}}class Gy{constructor(e,t){this.targetId=e,this.Et=t}}class Ky{constructor(e,t,n=am.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class $y{constructor(){this.At=0,this.Rt=Hy(),this.bt=am.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=Fy(),t=Fy(),n=Fy();return this.Rt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:ep()}})),new By(this.bt,this.Pt,e,t,n)}xt(){this.vt=!1,this.Rt=Hy()}Nt(e,t){this.vt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class zy{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=Cy(),this.qt=Wy(),this.Ut=new ug(yp)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}jt(e){this.forEachTarget(e,(t=>{const n=this.Wt(t);switch(e.state){case 0:this.zt(t)&&n.Dt(e.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(t);break;case 3:this.zt(t)&&(n.Ft(),n.Dt(e.resumeToken));break;case 4:this.zt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:ep()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.zt(n)&&t(n)}))}Jt(e){const t=e.targetId,n=e.Et.count,r=this.Yt(t);if(r){const e=r.target;if(Ig(e))if(0===n){const n=new kp(e.path);this.Qt(t,n,mg.newNoDocument(n,bp.min()))}else tp(1===n);else this.Xt(t)!==n&&(this.Ht(t),this.Ut=this.Ut.add(t))}}Zt(e){const t=new Map;this.Bt.forEach(((n,r)=>{const i=this.Yt(r);if(i){if(n.current&&Ig(i.target)){const t=new kp(i.target.path);null!==this.Lt.get(t)||this.te(r,t)||this.Qt(r,t,mg.newNoDocument(t,e))}n.St&&(t.set(r,n.Ct()),n.xt())}}));let n=Fy();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const r=new qy(e,t,this.Ut,this.Lt,n);return this.Lt=Cy(),this.qt=Wy(),this.Ut=new ug(yp),r}Gt(e,t){if(!this.zt(e))return;const n=this.te(e,t.key)?2:0;this.Wt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Xt(e){const t=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let t=this.Bt.get(e);return t||(t=new $y,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new ug(yp),this.qt=this.qt.insert(e,t)),t}zt(e){const t=null!==this.Yt(e);return t||Yf("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new $y),this.$t.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.$t.getRemoteKeysForTarget(e).has(t)}}function Wy(){return new og(kp.comparator)}function Hy(){return new og(kp.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Yy=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),Jy=(()=>{const e={and:"AND",or:"OR"};return e})();class Xy{constructor(e,t){this.databaseId=e,this.wt=t}}function Zy(e,t){return e.wt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ev(e,t){return e.wt?t.toBase64():t.toUint8Array()}function tv(e,t){return Zy(e,t.toTimestamp())}function nv(e){return tp(!!e),bp.fromTimestamp(function(e){const t=um(e);return new Ip(t.seconds,t.nanos)}(e))}function rv(e,t){return function(e){return new Tp(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function iv(e){const t=Tp.fromString(e);return tp(Dv(t)),t}function sv(e,t){return rv(e.databaseId,t.path)}function ov(e,t){const n=iv(t);if(n.get(1)!==e.databaseId.projectId)throw new sp(ip.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new sp(ip.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new kp(lv(n))}function av(e,t){return rv(e.databaseId,t)}function cv(e){const t=iv(e);return 4===t.length?Tp.emptyPath():lv(t)}function uv(e){return new Tp(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function lv(e){return tp(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function hv(e,t,n){return{name:sv(e,t),fields:n.value.mapValue.fields}}function dv(e,t,n){const r=ov(e,t.name),i=nv(t.updateTime),s=t.createTime?nv(t.createTime):bp.min(),o=new fg({mapValue:{fields:t.fields}}),a=mg.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function fv(e,t){return"found"in t?function(e,t){tp(!!t.found),t.found.name,t.found.updateTime;const n=ov(e,t.found.name),r=nv(t.found.updateTime),i=t.found.createTime?nv(t.found.createTime):bp.min(),s=new fg({mapValue:{fields:t.found.fields}});return mg.newFoundDocument(n,r,i,s)}(e,t):"missing"in t?function(e,t){tp(!!t.missing),tp(!!t.readTime);const n=ov(e,t.missing),r=nv(t.readTime);return mg.newNoDocument(n,r)}(e,t):ep()}function pv(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ep()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.wt?(tp(void 0===t||"string"==typeof t),am.fromBase64String(t||"")):(tp(void 0===t||t instanceof Uint8Array),am.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ip.UNKNOWN:Sy(e.code);return new sp(t,e.message||"")}(o);n=new Ky(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ov(e,r.document.name),s=nv(r.document.updateTime),o=r.document.createTime?nv(r.document.createTime):bp.min(),a=new fg({mapValue:{fields:r.document.fields}}),c=mg.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new jy(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ov(e,r.document),s=r.readTime?nv(r.readTime):bp.min(),o=mg.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jy([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ov(e,r.document),s=r.removedTargetIds||[];n=new jy([],s,i,null)}else{if(!("filter"in t))return ep();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new by(r),s=e.targetId;n=new Gy(s,i)}}return n}function mv(e,t){let n;if(t instanceof py)n={update:hv(e,t.key,t.value)};else if(t instanceof wy)n={delete:sv(e,t.key)};else if(t instanceof my)n={update:hv(e,t.key,t.data),updateMask:Nv(t.fieldMask)};else{if(!(t instanceof Iy))return ep();n={verify:sv(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Qg)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Yg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Xg)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ey)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ep()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:tv(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ep()}(e,t.precondition)),n}function gv(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?oy.updateTime(nv(e.updateTime)):void 0!==e.exists?oy.exists(e.exists):oy.none()}(t.currentDocument):oy.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)tp("REQUEST_TIME"===t.setToServerValue),n=new Qg;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Yg(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Xg(e)}else"increment"in t?n=new ey(e,t.increment):ep();const r=Sp.fromServerFormat(t.fieldPath);return new ry(r,n)}(e,t))):[];if(t.update){t.update.name;const i=ov(e,t.update.name),s=new fg({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new dg(t.map((e=>Sp.fromServerFormat(e))))}(t.updateMask);return new my(i,s,e,n,r)}return new py(i,s,n,r)}if(t.delete){const r=ov(e,t.delete);return new wy(r,n)}if(t.verify){const r=ov(e,t.verify);return new Iy(r,n)}return ep()}function yv(e,t){return e&&e.length>0?(tp(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?nv(e.updateTime):nv(t);return n.isEqual(bp.min())&&(n=nv(t)),new sy(n,e.transformResults||[])}(e,t)))):[]}function vv(e,t){return{documents:[av(e,t.path)]}}function wv(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=av(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=av(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0!==e.length)return Cv(Bm.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:kv(e.field),direction:Tv(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.wt||rm(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Iv(e){let t=cv(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){tp(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=_v(e);return t instanceof Bm&&Km(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new ig(Av(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,rm(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Mm(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Mm(n,t)}(n.endAt)),Sg(t,i,o,s,a,"F",c,u)}function bv(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return ep()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function _v(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Av(e.unaryFilter.field);return qm.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Av(e.unaryFilter.field);return qm.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Av(e.unaryFilter.field);return qm.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Av(e.unaryFilter.field);return qm.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ep()}}(e):void 0!==e.fieldFilter?function(e){return qm.create(Av(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ep()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Bm.create(e.compositeFilter.filters.map((e=>_v(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ep()}}(e.compositeFilter.op))}(e):ep()}function Tv(e){return Qy[e]}function Ev(e){return Yy[e]}function Sv(e){return Jy[e]}function kv(e){return{fieldPath:e.canonicalString()}}function Av(e){return Sp.fromServerFormat(e.fieldPath)}function Cv(e){return e instanceof qm?function(e){if("=="===e.op){if(Cm(e.value))return{unaryFilter:{field:kv(e.field),op:"IS_NAN"}};if(Am(e.value))return{unaryFilter:{field:kv(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Cm(e.value))return{unaryFilter:{field:kv(e.field),op:"IS_NOT_NAN"}};if(Am(e.value))return{unaryFilter:{field:kv(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kv(e.field),op:Ev(e.op),value:e.value}}}(e):e instanceof Bm?function(e){const t=e.getFilters().map((e=>Cv(e)));return 1===t.length?t[0]:{compositeFilter:{op:Sv(e.op),filters:t}}}(e):ep()}function Nv(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Dv(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ov(t)),t=xv(e.get(n),t);return Ov(t)}function xv(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Ov(e){return e+""}function Pv(e){const t=e.length;if(tp(t>=2),2===t)return tp(""===e.charAt(0)&&""===e.charAt(1)),Tp.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&ep(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:ep()}s=t+2}return new Tp(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(e,t){return[e,Rv(t)]}function Fv(e,t,n){return[e,Rv(t),n]}const Vv={},Uv=["prefixPath","collectionGroup","readTime","documentId"],qv=["prefixPath","collectionGroup","documentId"],Bv=["collectionGroup","readTime","prefixPath","documentId"],jv=["canonicalId","targetId"],Gv=["targetId","path"],Kv=["path","targetId"],$v=["collectionId","parent"],zv=["indexId","uid"],Wv=["uid","sequenceNumber"],Hv=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Qv=["indexId","uid","orderedDocumentKey"],Yv=["userId","collectionPath","documentId"],Jv=["userId","collectionPath","largestBatchId"],Xv=["userId","collectionGroup","largestBatchId"],Zv=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ew=[...Zv,"documentOverlays"],tw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],nw=tw,rw=[...nw,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw extends Fp{constructor(e,t){super(),this.se=e,this.currentSequenceNumber=t}}function sw(e,t){const n=rp(e);return Bp.M(n.se,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&ly(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=hy(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=hy(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Oy();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=uy(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(bp.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Fy())}isEqual(e){return this.batchId===e.batchId&&vp(this.mutations,e.mutations,((e,t)=>fy(e,t)))&&vp(this.baseMutations,e.baseMutations,((e,t)=>fy(e,t)))}}class aw{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){tp(e.mutations.length===n.length);let r=Ly;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new aw(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,t,n,r,i=bp.min(),s=bp.min(),o=am.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new uw(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new uw(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new uw(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.ie=e}}function hw(e,t){let n;if(t.document)n=dv(e.ie,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=kp.fromSegments(t.noDocument.path),r=mw(t.noDocument.readTime);n=mg.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return ep();{const e=kp.fromSegments(t.unknownDocument.path),r=mw(t.unknownDocument.version);n=mg.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Ip(e[0],e[1]);return bp.fromTimestamp(t)}(t.readTime)),n}function dw(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:fw(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:sv(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Zy(e,t.version.toTimestamp()),createTime:Zy(e,t.createTime.toTimestamp())}}(e.ie,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:pw(t.version)};else{if(!t.isUnknownDocument())return ep();r.unknownDocument={path:n.path.toArray(),version:pw(t.version)}}return r}function fw(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function pw(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function mw(e){const t=new Ip(e.seconds,e.nanoseconds);return bp.fromTimestamp(t)}function gw(e,t){const n=(t.baseMutations||[]).map((t=>gv(e.ie,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>gv(e.ie,t))),i=Ip.fromMillis(t.localWriteTimeMs);return new ow(t.batchId,i,n,r)}function yw(e){const t=mw(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?mw(e.lastLimboFreeSnapshotVersion):bp.min();let r;var i;return void 0!==e.query.documents?(tp(1===(i=e.query).documents.length),r=xg(kg(cv(i.documents[0])))):r=function(e){return xg(Iv(e))}(e.query),new uw(r,e.targetId,0,e.lastListenSequenceNumber,t,n,am.fromBase64String(e.resumeToken))}function vw(e,t){const n=pw(t.snapshotVersion),r=pw(t.lastLimboFreeSnapshotVersion);let i;i=Ig(t.target)?vv(e.ie,t.target):wv(e.ie,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:vg(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function ww(e){const t=Iv({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Pg(t,t.limit,"L"):t}function Iw(e,t){return new cw(t.largestBatchId,gv(e.ie,t.overlayMutation))}function bw(e,t){const n=t.path.lastSegment();return[e,Rv(t.path.popLast()),n]}function _w(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:pw(r.readTime),documentKey:Rv(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{getBundleMetadata(e,t){return Ew(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:mw(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Ew(e).put({bundleId:(n=t).id,createTime:pw(nv(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Sw(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:ww(t.bundledQuery),readTime:mw(t.readTime)};var t}))}saveNamedQuery(e,t){return Sw(e).put(function(e){return{name:e.name,readTime:pw(nv(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Ew(e){return sw(e,"bundles")}function Sw(e){return sw(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.yt=e,this.userId=t}static re(e,t){const n=t.uid||"";return new kw(e,n)}getOverlay(e,t){return Aw(e).get(bw(this.userId,t)).next((e=>e?Iw(this.yt,e):null))}getOverlays(e,t){const n=xy();return Up.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new cw(t,i);r.push(this.oe(e,s))})),Up.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(Rv(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(Aw(e).Y("collectionPathOverlayIndex",r))})),Up.waitFor(i)}getOverlaysForCollection(e,t,n){const r=xy(),i=Rv(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Aw(e).W("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Iw(this.yt,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=xy();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Aw(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Iw(this.yt,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}oe(e,t){return Aw(e).put(function(e,t,n){const[r,i,s]=bw(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:mv(e.ie,n.mutation)}}(this.yt,this.userId,t))}}function Aw(e){return sw(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){}ue(e,t){this.ce(e,t),t.ae()}ce(e,t){if("nullValue"in e)this.he(t,5);else if("booleanValue"in e)this.he(t,10),t.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(t,15),t.le(lm(e.integerValue));else if("doubleValue"in e){const n=lm(e.doubleValue);isNaN(n)?this.he(t,13):(this.he(t,15),im(n)?t.le(0):t.le(n))}else if("timestampValue"in e){const n=e.timestampValue;this.he(t,20),"string"==typeof n?t.fe(n):(t.fe(`${n.seconds||""}`),t.le(n.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,t),this._e(t);else if("bytesValue"in e)this.he(t,30),t.we(hm(e.bytesValue)),this._e(t);else if("referenceValue"in e)this.me(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.he(t,45),t.le(n.latitude||0),t.le(n.longitude||0)}else"mapValue"in e?Rm(e)?this.he(t,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,t),this._e(t)):"arrayValue"in e?(this.ye(e.arrayValue,t),this._e(t)):ep()}de(e,t){this.he(t,25),this.pe(e,t)}pe(e,t){t.fe(e)}ge(e,t){const n=e.fields||{};this.he(t,55);for(const r of Object.keys(n))this.de(r,t),this.ce(n[r],t)}ye(e,t){const n=e.values||[];this.he(t,50);for(const r of n)this.ce(r,t)}me(e,t){this.he(t,37),kp.fromName(e).path.forEach((e=>{this.he(t,60),this.pe(e,t)}))}he(e,t){e.le(t)}_e(e){e.le(2)}}function Nw(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function Dw(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Nw(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}Cw.Ie=new Cw;class Rw{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ee(n.value),n=t.next();this.Ae()}Re(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.be(n.value),n=t.next();this.Pe()}ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ee(e);else if(e<2048)this.Ee(960|e>>>6),this.Ee(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ee(480|e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e);else{const e=t.codePointAt(0);this.Ee(240|e>>>18),this.Ee(128|63&e>>>12),this.Ee(128|63&e>>>6),this.Ee(128|63&e)}}this.Ae()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.be(e);else if(e<2048)this.be(960|e>>>6),this.be(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.be(480|e>>>12),this.be(128|63&e>>>6),this.be(128|63&e);else{const e=t.codePointAt(0);this.be(240|e>>>18),this.be(128|63&e>>>12),this.be(128|63&e>>>6),this.be(128|63&e)}}this.Pe()}Se(e){const t=this.De(e),n=Dw(t);this.Ce(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}xe(e){const t=this.De(e),n=Dw(t);this.Ce(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ee(e){const t=255&e;0===t?(this.ke(0),this.ke(255)):255===t?(this.ke(255),this.ke(0)):this.ke(t)}be(e){const t=255&e;0===t?(this.Me(0),this.Me(255)):255===t?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class xw{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class Ow{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class Pw{constructor(){this.$e=new Rw,this.Be=new xw(this.$e),this.Le=new Ow(this.$e)}seed(e){this.$e.seed(e)}qe(e){return 0===e?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ue(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Lw(this.indexId,this.documentKey,this.arrayValue,n)}}function Mw(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Fw(e.arrayValue,t.arrayValue),0!==n?n:(n=Fw(e.directionalValue,t.directionalValue),0!==n?n:kp.comparator(e.documentKey,t.documentKey)))}function Fw(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const t of e.filters){const e=t;e.isInequality()?this.Qe=e:this.Ge.push(e)}}je(e){tp(e.collectionGroup===this.collectionId);const t=Cp(e);if(void 0!==t&&!this.We(t))return!1;const n=Np(e);let r=0,i=0;for(;r<n.length&&this.We(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.Qe){const e=n[r];if(!this.ze(this.Qe,e)||!this.He(this.Ke[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],e))return!1}return!0}We(e){for(const t of this.Ge)if(this.ze(t,e))return!0;return!1}ze(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}He(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(e){var t,n;if(tp(e instanceof qm||e instanceof Bm),e instanceof qm){if(e instanceof tg){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>qm.create(e.field,"==",t))))||[];return Bm.create(r,"or")}return e}const r=e.filters.map((e=>Uw(e)));return Bm.create(r,e.op)}function qw(e){if(0===e.getFilters().length)return[];const t=Kw(Uw(e));return tp(Gw(t)),Bw(t)||jw(t)?[t]:t.getFilters()}function Bw(e){return e instanceof qm}function jw(e){return e instanceof Bm&&Km(e)}function Gw(e){return Bw(e)||jw(e)||function(e){if(e instanceof Bm&&Gm(e)){for(const t of e.getFilters())if(!Bw(t)&&!jw(t))return!1;return!0}return!1}(e)}function Kw(e){if(tp(e instanceof qm||e instanceof Bm),e instanceof qm)return e;if(1===e.filters.length)return Kw(e.filters[0]);const t=e.filters.map((e=>Kw(e)));let n=Bm.create(t,e.op);return n=Ww(n),Gw(n)?n:(tp(n instanceof Bm),tp(jm(n)),tp(n.filters.length>1),n.filters.reduce(((e,t)=>$w(e,t))))}function $w(e,t){let n;return tp(e instanceof qm||e instanceof Bm),tp(t instanceof qm||t instanceof Bm),n=e instanceof qm?t instanceof qm?function(e,t){return Bm.create([e,t],"and")}(e,t):zw(e,t):t instanceof qm?zw(t,e):function(e,t){if(tp(e.filters.length>0&&t.filters.length>0),jm(e)&&jm(t))return Hm(e,t.getFilters());const n=Gm(e)?e:t,r=Gm(e)?t:e,i=n.filters.map((e=>$w(e,r)));return Bm.create(i,"or")}(e,t),Ww(n)}function zw(e,t){if(jm(t))return Hm(t,e.getFilters());{const n=t.filters.map((t=>$w(e,t)));return Bm.create(n,"or")}}function Ww(e){if(tp(e instanceof qm||e instanceof Bm),e instanceof qm)return e;const t=e.getFilters();if(1===t.length)return Ww(t[0]);if($m(e))return e;const n=t.map((e=>Ww(e))),r=[];return n.forEach((t=>{t instanceof qm?r.push(t):t instanceof Bm&&(t.op===e.op?r.push(...t.filters):r.push(t))})),1===r.length?r[0]:Bm.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Hw{constructor(){this.Je=new Qw}addToCollectionParentIndex(e,t){return this.Je.add(t),Up.resolve()}getCollectionParents(e,t){return Up.resolve(this.Je.getEntries(t))}addFieldIndex(e,t){return Up.resolve()}deleteFieldIndex(e,t){return Up.resolve()}getDocumentsMatchingTarget(e,t){return Up.resolve(null)}getIndexType(e,t){return Up.resolve(0)}getFieldIndexes(e,t){return Up.resolve([])}getNextCollectionGroupToUpdate(e){return Up.resolve(null)}getMinOffset(e,t){return Up.resolve(Pp.min())}getMinOffsetFromCollectionGroup(e,t){return Up.resolve(Pp.min())}updateCollectionGroup(e,t,n){return Up.resolve()}updateIndexEntries(e,t){return Up.resolve()}}class Qw{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new ug(Tp.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new ug(Tp.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=new Uint8Array(0);class Jw{constructor(e,t){this.user=e,this.databaseId=t,this.Ye=new Qw,this.Xe=new ky((e=>vg(e)),((e,t)=>wg(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ye.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Ye.add(t)}));const i={collectionId:n,parent:Rv(r)};return Xw(e).put(i)}return Up.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[wp(t),""],!1,!0);return Xw(e).W(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(Pv(r.parent))}return n}))}addFieldIndex(e,t){const n=eI(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=tI(e);return i.next((e=>{n.put(_w(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=eI(e),r=tI(e),i=Zw(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Zw(e);let r=!0;const i=new Map;return Up.forEach(this.Ze(t),(t=>this.tn(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=Fy();const r=[];return Up.forEach(i,((i,s)=>{var o;Yf("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${vg(t)}`);const a=function(e,t){const n=Cp(t);if(void 0===n)return null;for(const r of bg(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of Np(t))for(const t of bg(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of Np(t)){const t=0===i.kind?_g(e,i.fieldPath,e.startAt):Tg(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Mm(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of Np(t)){const t=0===i.kind?Tg(e,i.fieldPath,e.endAt):_g(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Mm(n,r)}(s,i),h=this.en(i,s,u),d=this.en(i,s,l),f=this.nn(i,s,c),p=this.sn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Up.forEach(p,(i=>n.J(i,t.limit).next((t=>{t.forEach((t=>{const n=kp.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Up.resolve(null)}))}Ze(e){let t=this.Xe.get(e);return t||(t=0===e.filters.length?[e]:qw(Bm.create(e.filters,"and")).map((t=>yg(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.Xe.set(e,t),t)}sn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.rn(t[l/c]):Yw,h=this.on(e,a,n[l%c],r),d=this.un(e,a,i[l%c],s),f=o.map((t=>this.on(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}on(e,t,n,r){const i=new Lw(e,kp.empty(),t,n);return r?i:i.Ue()}un(e,t,n,r){const i=new Lw(e,kp.empty(),t,n);return r?i.Ue():i}tn(e,t){const n=new Vw(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.je(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;const r=this.Ze(t);return Up.forEach(r,(t=>this.tn(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new ug(Sp.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&r.length>1&&2===n?1:n))}cn(e,t){const n=new Pw;for(const r of Np(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.qe(r.kind);Cw.Ie.ue(e,i)}return n.Fe()}rn(e){const t=new Pw;return Cw.Ie.ue(e,t.qe(0)),t.Fe()}an(e,t){const n=new Pw;return Cw.Ie.ue(Em(this.databaseId,t),n.qe(function(e){const t=Np(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.Fe()}nn(e,t,n){if(null===n)return[];let r=[];r.push(new Pw);let i=0;for(const s of Np(e)){const e=n[i++];for(const n of r)if(this.hn(t,s.fieldPath)&&km(e))r=this.ln(r,s,e);else{const t=n.qe(s.kind);Cw.Ie.ue(e,t)}}return this.fn(r)}en(e,t,n){return this.nn(e,t,n.position)}fn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Fe();return t}ln(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new Pw;n.seed(e.Fe()),Cw.Ie.ue(s,n.qe(t.kind)),i.push(n)}return i}hn(e,t){return!!e.filters.find((e=>e instanceof qm&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=eI(e),r=tI(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next((e=>{const t=[];return Up.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new Rp(t.sequenceNumber,new Pp(mw(t.readTime),new kp(Pv(t.documentKey)),t.largestBatchId)):Rp.empty(),r=e.fields.map((([e,t])=>new Dp(Sp.fromServerFormat(e),t)));return new Ap(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:yp(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=eI(e),i=tI(e);return this.dn(e).next((e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Up.forEach(t,(t=>i.put(_w(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Up.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Up.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Up.forEach(i,(n=>this._n(e,t,n).next((t=>{const i=this.wn(r,n);return t.isEqual(i)?Up.resolve():this.mn(e,r,n,t,i)})))))))}))}gn(e,t,n,r){return Zw(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(n,t.key),documentKey:t.key.path.toArray()})}yn(e,t,n,r){return Zw(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(n,t.key),t.key.path.toArray()])}_n(e,t,n){const r=Zw(e);let i=new ug(Mw);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.an(n,t)])},((e,r)=>{i=i.add(new Lw(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}wn(e,t){let n=new ug(Mw);const r=this.cn(t,e);if(null==r)return n;const i=Cp(t);if(null!=i){const s=e.data.field(i.fieldPath);if(km(s))for(const i of s.arrayValue.values||[])n=n.add(new Lw(t.indexId,e.key,this.rn(i),r))}else n=n.add(new Lw(t.indexId,e.key,Yw,r));return n}mn(e,t,n,r,i){Yf("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=hg(s),c=hg(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=hg(o)):t?(i(a),a=hg(s)):(a=hg(s),c=hg(o))}}(r,i,Mw,(r=>{s.push(this.gn(e,t,n,r))}),(r=>{s.push(this.yn(e,t,n,r))})),Up.waitFor(s)}dn(e){let t=1;return tI(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Mw(e,t))).filter(((e,t,n)=>!t||0!==Mw(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=Mw(s,e),i=Mw(s,t);if(0===n)r[0]=e.Ue();else if(n>0&&i<0)r.push(s),r.push(s.Ue());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2){if(this.pn(r[s],r[s+1]))return[];const e=[r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,Yw,[]],t=[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,Yw,[]];i.push(IDBKeyRange.bound(e,t))}return i}pn(e,t){return Mw(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(nI)}getMinOffset(e,t){return Up.mapArray(this.Ze(t),(t=>this.tn(e,t).next((e=>e||ep())))).next(nI)}}function Xw(e){return sw(e,"collectionParents")}function Zw(e){return sw(e,"indexEntries")}function eI(e){return sw(e,"indexConfiguration")}function tI(e){return sw(e,"indexState")}function nI(e){tp(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;Lp(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Pp(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class iI{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new iI(e,iI.DEFAULT_COLLECTION_PERCENTILE,iI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{tp(1===a)})));const u=[];for(const l of n.mutations){const e=Fv(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Up.waitFor(s).next((()=>u))}function oI(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw ep();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */iI.DEFAULT_COLLECTION_PERCENTILE=10,iI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,iI.DEFAULT=new iI(41943040,iI.DEFAULT_COLLECTION_PERCENTILE,iI.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),iI.DISABLED=new iI(-1,0,0);class aI{constructor(e,t,n,r){this.userId=e,this.yt=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static re(e,t,n,r){tp(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new aI(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return uI(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=lI(e),s=uI(e);return s.add({}).next((o=>{tp("number"==typeof o);const a=new ow(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>mv(e.ie,t))),i=n.mutations.map((t=>mv(e.ie,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.yt,this.userId,a),u=[];let l=new ug(((e,t)=>yp(e.canonicalString(),t.canonicalString())));for(const e of r){const t=Fv(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,Vv))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.In[o]=a.keys()})),Up.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return uI(e).get(t).next((e=>e?(tp(e.userId===this.userId),gw(this.yt,e)):null))}Tn(e,t){return this.In[t]?Up.resolve(this.In[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return uI(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(tp(t.batchId>=n),i=gw(this.yt,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return uI(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return uI(e).W("userMutationsIndex",t).next((e=>e.map((e=>gw(this.yt,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Mv(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return lI(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=Pv(a);if(o===this.userId&&t.path.isEqual(u))return uI(e).get(c).next((e=>{if(!e)throw ep();tp(e.userId===this.userId),i.push(gw(this.yt,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ug(yp);const r=[];return t.forEach((t=>{const i=Mv(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=lI(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=Pv(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Up.waitFor(r).next((()=>this.En(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=Mv(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new ug(yp);return lI(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=Pv(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.En(e,o)))}En(e,t){const n=[],r=[];return t.forEach((t=>{r.push(uI(e).get(t).next((e=>{if(null===e)throw ep();tp(e.userId===this.userId),n.push(gw(this.yt,e))})))})),Up.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return sI(e.se,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.An(t.batchId)})),Up.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Up.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return lI(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=Pv(e[1]);r.push(t)}else n.done()})).next((()=>{tp(0===r.length)}))}))}containsKey(e,t){return cI(e,this.userId,t)}Rn(e){return hI(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function cI(e,t,n){const r=Mv(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return lI(e).Z({range:s,X:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function uI(e){return sw(e,"mutations")}function lI(e){return sw(e,"documentMutations")}function hI(e){return sw(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new dI(0)}static vn(){return new dI(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,t){this.referenceDelegate=e,this.yt=t}allocateTargetId(e){return this.Vn(e).next((t=>{const n=new dI(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Vn(e).next((e=>bp.fromTimestamp(new Ip(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Vn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Vn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r))))}addTargetData(e,t){return this.Dn(e,t).next((()=>this.Vn(e).next((n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>pI(e).delete(t.targetId))).next((()=>this.Vn(e))).next((t=>(tp(t.targetCount>0),t.targetCount-=1,this.Sn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return pI(e).Z(((s,o)=>{const a=yw(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Up.waitFor(i))).next((()=>r))}forEachTarget(e,t){return pI(e).Z(((e,n)=>{const r=yw(n);t(r)}))}Vn(e){return mI(e).get("targetGlobalKey").next((e=>(tp(null!==e),e)))}Sn(e,t){return mI(e).put("targetGlobalKey",t)}Dn(e,t){return pI(e).put(vw(this.yt,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=vg(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return pI(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=yw(n);wg(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=gI(e);return t.forEach((t=>{const s=Rv(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Up.waitFor(r)}removeMatchingKeys(e,t,n){const r=gI(e);return Up.forEach(t,(t=>{const i=Rv(t.path);return Up.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=gI(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=gI(e);let i=Fy();return r.Z({range:n,X:!0},((e,t,n)=>{const r=Pv(e[1]),s=new kp(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=Rv(t.path),r=IDBKeyRange.bound([n],[wp(n)],!1,!0);let i=0;return gI(e).Z({index:"documentTargetsIndex",X:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}ne(e,t){return pI(e).get(t).next((e=>e?yw(e):null))}}function pI(e){return sw(e,"targets")}function mI(e){return sw(e,"targetGlobal")}function gI(e){return sw(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI([e,t],[n,r]){const i=yp(e,n);return 0===i?yp(t,r):i}class vI{constructor(e){this.xn=e,this.buffer=new ug(yI),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();yI(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class wI{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){Yf("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Kp(e)?Yf("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Vp(e)}await this.Fn(3e5)}))}}class II{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Up.resolve(Jp.at);const n=new vI(t);return this.$n.forEachTarget(e,(e=>n.On(e.sequenceNumber))).next((()=>this.$n.Ln(e,(e=>n.On(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Yf("LruGarbageCollector","Garbage collection skipped; disabled"),Up.resolve(rI)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Yf("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rI):this.qn(e,t)))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Yf("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Hf()<=he.DEBUG&&Yf("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${e} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),Up.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new II(e,t)}(this,t)}Bn(e){const t=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Un(e){let t=0;return this.Ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,((e,n)=>t(n)))}addReference(e,t,n){return _I(e,n)}removeReference(e,t,n){return _I(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return _I(e,t)}Gn(e,t){return function(e,t){let n=!1;return hI(e).tt((r=>cI(e,r,t).next((e=>(e&&(n=!0),Up.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,((s,o)=>{if(o<=t){const t=this.Gn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,bp.min()),gI(e).delete([0,Rv(s.path)]))))}));r.push(t)}})).next((()=>Up.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return _I(e,t)}Kn(e,t){const n=gI(e);let r,i=Jp.at;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Jp.at&&t(new kp(Pv(r)),i),i=o,r=s):i=Jp.at})).next((()=>{i!==Jp.at&&t(new kp(Pv(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function _I(e,t){return gI(e).put(function(e,t){return{targetId:0,path:Rv(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.changes=new ky((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,mg.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Up.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return CI(e).put(n)}removeEntry(e,t,n){return CI(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],fw(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Qn(e,n))))}getEntry(e,t){let n=mg.newInvalidDocument(t);return CI(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(NI(t))},((e,r)=>{n=this.jn(t,r)})).next((()=>n))}Wn(e,t){let n={size:0,document:mg.newInvalidDocument(t)};return CI(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(NI(t))},((e,r)=>{n={document:this.jn(t,r),size:oI(r)}})).next((()=>n))}getEntries(e,t){let n=Cy();return this.zn(e,t,((e,t)=>{const r=this.jn(e,t);n=n.insert(e,r)})).next((()=>n))}Hn(e,t){let n=Cy(),r=new og(kp.comparator);return this.zn(e,t,((e,t)=>{const i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,oI(t))})).next((()=>({documents:n,Jn:r})))}zn(e,t,n){if(t.isEmpty())return Up.resolve();let r=new ug(RI);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(NI(r.first()),NI(r.last())),s=r.getIterator();let o=s.getNext();return CI(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=kp.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&RI(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.j(NI(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),fw(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return CI(e).W(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=Cy();for(const n of e){const e=this.jn(kp.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=Cy();const s=DI(t,n),o=DI(t,Pp.max());return CI(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.jn(kp.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new kI(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return AI(e).get("remoteDocumentGlobalKey").next((e=>(tp(!!e),e)))}Qn(e,t){return AI(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=hw(this.yt,t);if(!e.isNoDocument()||!e.version.isEqual(bp.min()))return e}return mg.newInvalidDocument(e)}}function SI(e){return new EI(e)}class kI extends TI{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new ky((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new ug(((e,t)=>yp(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=dw(this.Yn.yt,s);r=r.add(i.path.popLast());const c=oI(a);n+=c-o.size,t.push(this.Yn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=dw(this.Yn.yt,s.convertToNoDocument(bp.min()));t.push(this.Yn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Yn.updateMetadata(e,n)),Up.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next((e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next((({documents:e,Jn:t})=>(t.forEach(((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function AI(e){return sw(e,"remoteDocumentGlobal")}function CI(e){return sw(e,"remoteDocumentsV14")}function NI(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function DI(e,t){const n=t.documentKey.path.toArray();return[e,fw(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function RI(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=yp(n[s],r[s]),i)return i;return i=yp(n.length,r.length),i||(i=yp(n[n.length-2],r[r.length-2]),i||yp(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class xI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&hy(n.mutation,e,dg.empty(),Ip.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Fy()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Fy()){const r=xy();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Dy();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=xy();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Fy())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Cy();const s=Py(),o=Py();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof my)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),hy(o.mutation,t,o.mutation.getFieldMask(),Ip.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new xI(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Py();let r=new og(((e,t)=>e-t)),i=Fy();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||dg.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Fy()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=Oy();c.forEach((e=>{if(!i.has(e)){const r=uy(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Up.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return kp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Dg(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Up.resolve(xy());let o=-1,a=i;return s.next((t=>Up.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Up.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Fy()))).next((e=>({batchId:o,changes:Ry(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new kp(t)).next((e=>{let t=Dy();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Dy();return this.indexManager.getCollectionParents(e,r).next((s=>Up.forEach(s,(s=>{const o=function(e,t){return new Eg(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,mg.newInvalidDocument(n)))}));let n=Dy();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&hy(s.mutation,i,dg.empty(),Ip.now()),Vg(t,i)&&(n=n.insert(r,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return Up.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:nv(n.createTime)}),Up.resolve()}getNamedQuery(e,t){return Up.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:ww(e.bundledQuery),readTime:nv(e.readTime)}}(t)),Up.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(){this.overlays=new og(kp.comparator),this.es=new Map}getOverlay(e,t){return Up.resolve(this.overlays.get(t))}getOverlays(e,t){const n=xy();return Up.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.oe(e,t,r)})),Up.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),Up.resolve()}getOverlaysForCollection(e,t,n){const r=xy(),i=t.length+1,s=new kp(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Up.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new og(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=xy(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=xy(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Up.resolve(o)}oe(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new cw(t,n));let i=this.es.get(t);void 0===i&&(i=Fy(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.ns=new ug(FI.ss),this.rs=new ug(FI.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new FI(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new FI(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new kp(new Tp([])),n=new FI(t,e),r=new FI(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new kp(new Tp([])),n=new FI(t,e),r=new FI(t,e+1);let i=Fy();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new FI(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class FI{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return kp.comparator(e.key,t.key)||yp(e._s,t._s)}static os(e,t){return yp(e._s,t._s)||kp.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new ug(FI.ss)}checkEmpty(e){return Up.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ow(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new FI(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Up.resolve(s)}lookupMutationBatch(e,t){return Up.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return Up.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Up.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Up.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new FI(t,0),r=new FI(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),Up.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ug(yp);return t.forEach((e=>{const t=new FI(e,0),r=new FI(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),Up.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;kp.isDocumentKey(i)||(i=i.child(""));const s=new FI(new kp(i),0);let o=new ug(yp);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),Up.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){tp(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Up.forEach(t.mutations,(r=>{const i=new FI(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new FI(t,0),r=this.gs.firstAfterOrEqual(n);return Up.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Up.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.Es=e,this.docs=new og(kp.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Up.resolve(n?n.document.mutableCopy():mg.newInvalidDocument(t))}getEntries(e,t){let n=Cy();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():mg.newInvalidDocument(e))})),Up.resolve(n)}getAllFromCollection(e,t,n){let r=Cy();const i=new kp(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Lp(Op(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Up.resolve(r)}getAllFromCollectionGroup(e,t,n,r){ep()}As(e,t){return Up.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new qI(this)}getSize(e){return Up.resolve(this.size)}}class qI extends TI{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),Up.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.persistence=e,this.Rs=new ky((e=>vg(e)),wg),this.lastRemoteSnapshotVersion=bp.min(),this.highestTargetId=0,this.bs=0,this.Ps=new MI,this.targetCount=0,this.vs=dI.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),Up.resolve()}getLastRemoteSnapshotVersion(e){return Up.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Up.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Up.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),Up.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new dI(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,Up.resolve()}updateTargetData(e,t){return this.Dn(t),Up.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Up.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Up.waitFor(i).next((()=>r))}getTargetCount(e){return Up.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return Up.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),Up.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Up.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),Up.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return Up.resolve(n)}containsKey(e,t){return Up.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Jp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new BI(this),this.indexManager=new Hw,this.remoteDocumentCache=function(e){return new UI(e)}((e=>this.referenceDelegate.xs(e))),this.yt=new lw(t),this.Ns=new PI(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new LI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new VI(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Yf("MemoryPersistence","Starting transaction:",e);const r=new GI(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return Up.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class GI extends Fp{constructor(e){super(),this.currentSequenceNumber=e}}class KI{constructor(e){this.persistence=e,this.Fs=new MI,this.$s=null}static Bs(e){return new KI(e)}get Ls(){if(this.$s)return this.$s;throw ep()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),Up.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),Up.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),Up.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Up.forEach(this.Ls,(n=>{const r=kp.fromPath(n);return this.qs(e,r).next((e=>{e||t.removeEntry(r,bp.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.qs(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}qs(e,t){return Up.or([()=>Up.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.yt=e}$(e,t,n,r){const i=new qp("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Lv,{unique:!0}),e.createObjectStore("documentMutations")}(e),zI(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Up.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),zI(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:bp.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").W().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Lv,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Up.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.Us(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i))))),n<7&&r>=7&&(s=s.next((()=>this.Gs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Qs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.js(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Yv});t.createIndex("collectionPathOverlayIndex",Jv,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",Xv,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Uv});t.createIndex("documentKeyIndex",qv),t.createIndex("collectionGroupIndex",Bv)}(e))).next((()=>this.Ws(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.zs(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:zv}).createIndex("sequenceNumberIndex",Wv,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Hv}).createIndex("documentKeyIndex",Qv,{unique:!1})}(e)))),s}Ks(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=oI(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}Us(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next((t=>Up.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next((n=>Up.forEach(n,(n=>{tp(n.userId===t.userId);const r=gw(this.yt,n);return sI(e,t.userId,r).next((()=>{}))}))))}))))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new Tp(n),o=function(e){return[0,Rv(e)]}(s);r.push(t.get(o).next((n=>n?Up.resolve():(n=>t.put({targetId:0,path:Rv(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Up.waitFor(r)))}))}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:$v});const n=t.store("collectionParents"),r=new Qw,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:Rv(r)})}};return t.store("remoteDocuments").Z({X:!0},((e,t)=>{const n=new Tp(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({X:!0},(([e,t,n],r)=>{const s=Pv(t);return i(s.popLast())}))))}js(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=yw(n),i=vw(this.yt,r);return t.put(i)}))}Ws(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new kp(Tp.fromString(o.document.name).popFirst(5)):o.noDocument?kp.fromSegments(o.noDocument.path):o.unknownDocument?kp.fromSegments(o.unknownDocument.path):ep()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Up.waitFor(r)))}zs(e,t){const n=t.store("mutations"),r=SI(this.yt),i=new jI(KI.Bs,this.yt.ie);return n.W().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Fy();gw(this.yt,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Up.forEach(n,((e,n)=>{const s=new $f(n),o=kw.re(this.yt,s),a=i.getIndexManager(s),c=aI.re(s,this.yt,a,i.referenceDelegate);return new OI(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new iw(t,Jp.at),e).next()}))}))}}function zI(e){e.createObjectStore("targetDocuments",{keyPath:Gv}).createIndex("documentTargetsIndex",Kv,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",jv,{unique:!0}),e.createObjectStore("targetGlobal")}const WI="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class HI{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=o,this.Js=c,this.Ys=u,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!HI.C())throw new sp(ip.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new bI(this,r),this.ii=t+"main",this.yt=new lw(a),this.ri=new Bp(this.ii,this.Xs,new $I(this.yt)),this.Cs=new fI(this.referenceDelegate,this.yt),this.remoteDocumentCache=SI(this.yt),this.Ns=new Tw,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&Jf("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new sp(ip.FAILED_PRECONDITION,WI);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Cs.getHighestSequenceNumber(e)))})).then((e=>{this.Ss=new Jp(e,this.Js)})).then((()=>{this.Ds=!0})).catch((e=>(this.ri&&this.ri.close(),Promise.reject(e))))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>YI(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(e))).next((t=>this.isPrimary&&!t?this._i(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(Kp(e))return Yf("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Yf("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable((()=>this.si(e))),this.isPrimary=e}))}fi(e){return QI(e).get("owner").next((e=>Up.resolve(this.mi(e))))}gi(e){return YI(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=sw(e,"clientMetadata");return t.W().next((e=>{const n=this.Ii(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Up.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?Up.resolve(!0):QI(e).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new sp(ip.FAILED_PRECONDITION,WI);return!1}}return!(!this.networkEnabled||!this.inForeground)||YI(e).W().next((e=>void 0===this.Ii(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Yf("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new iw(e,Jp.at);return this._i(t).next((()=>this.gi(t)))})),this.ri.close(),this.Pi()}Ii(e,t){return e.filter((e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(e=>YI(e).W().next((e=>this.Ii(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ds}getMutationQueue(e,t){return aI.re(e,this.yt,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Jw(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return kw.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){Yf("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Xs)?rw:14===s?nw:13===s?tw:12===s?ew:11===s?Zv:void ep();var s;let o;return this.ri.runTransaction(e,r,i,(r=>(o=new iw(r,this.Ss?this.Ss.next():Jp.at),"readwrite-primary"===t?this.fi(o).next((e=>!!e||this.di(o))).next((t=>{if(!t)throw Jf(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new sp(ip.FAILED_PRECONDITION,Mp);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Vi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Vi(e){return QI(e).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new sp(ip.FAILED_PRECONDITION,WI)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return QI(e).put("owner",t)}static C(){return Bp.C()}_i(e){const t=QI(e);return t.get("owner").next((e=>this.mi(e)?(Yf("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Up.resolve()))}pi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Jf(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),N()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return Yf("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Jf("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(Uu){Jf("Failed to set zombie client id.",Uu)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(Uu){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function QI(e){return sw(e,"owner")}function YI(e){return sw(e,"clientMetadata")}function JI(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class XI{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=Fy(),r=Fy();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new XI(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(Ag(t))return Up.resolve(null);let n=xg(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Pg(t,null,"F"),n=xg(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Fy(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,Pg(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return Ag(t)||r.isEqual(bp.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(Hf()<=he.DEBUG&&Yf("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Fg(t)),this.Bi(e,s,t,xp(r,-1)))}))}Fi(e,t){let n=new ug(qg(e));return t.forEach(((t,r)=>{Vg(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Hf()<=he.DEBUG&&Yf("QueryEngine","Using full collection scan to execute query:",Fg(t)),this.Ni.getDocumentsMatchingQuery(e,t,Pp.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.yt=r,this.qi=new og(yp),this.Ui=new ky((e=>vg(e)),wg),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new OI(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qi)))}}function tb(e,t,n,r){return new eb(e,t,n,r)}async function nb(e,t){const n=rp(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Fy();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function rb(e,t){const n=rp(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Up.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);tp(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Fy();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function ib(e){const t=rp(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function sb(e,t){const n=rp(e),r=t.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(am.EMPTY_BYTE_STRING,bp.min()).withLastLimboFreeSnapshotVersion(bp.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(e,u))}));let a=Cy(),c=Fy();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(ob(e,s,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(bp.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Up.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.qi=i,e)))}function ob(e,t,n){let r=Fy(),i=Fy();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Cy();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(bp.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Yf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function ab(e,t){const n=rp(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function cb(e,t){const n=rp(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,Up.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new uw(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qi.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(e.targetId,e),n.Ui.set(t,e.targetId)),e}))}async function ub(e,t,n){const r=rp(e),i=r.qi.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Kp(e))throw e;Yf("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qi=r.qi.remove(t),r.Ui.delete(i.target)}function lb(e,t,n){const r=rp(e);let i=bp.min(),s=Fy();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=rp(e),i=r.Ui.get(n);return void 0!==i?Up.resolve(r.qi.get(i)):r.Cs.getTargetData(t,n)}(r,e,xg(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:bp.min(),n?s:Fy()))).next((e=>(fb(r,Ug(t),e),{documents:e,Hi:s})))))}function hb(e,t){const n=rp(e),r=rp(n.Cs),i=n.qi.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.ne(e,t).next((e=>e?e.target:null))))}function db(e,t){const n=rp(e),r=n.Ki.get(t)||bp.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Gi.getAllFromCollectionGroup(e,t,xp(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(fb(n,t,e),e)))}function fb(e,t,n){let r=e.Ki.get(t)||bp.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}async function pb(e,t,n,r){const i=rp(e);let s=Fy(),o=Cy();for(const u of n){const e=t.Ji(u.metadata.name);u.document&&(s=s.add(e));const n=t.Yi(u);n.setReadTime(t.Xi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await cb(i,function(e){return xg(kg(Tp.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>ob(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Cs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Cs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi))).next((()=>t.Wi))))))}async function mb(e,t,n=Fy()){const r=await cb(e,xg(ww(t.bundledQuery))),i=rp(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=nv(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);const o=r.withResumeToken(am.EMPTY_BYTE_STRING,s);return i.qi=i.qi.insert(o.targetId,o),i.Cs.updateTargetData(e,o).next((()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Cs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ns.saveNamedQuery(e,t)))}))}function gb(e,t){return`firestore_clients_${e}_${t}`}function yb(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function vb(e,t){return`firestore_targets_${e}_${t}`}class wb{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new sp(r.error.code,r.error.message))),s?new wb(e,t,r.state,i):(Jf("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ib{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new sp(n.error.code,n.error.message))),i?new Ib(e,n.state,r):(Jf("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bb{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=Uy();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=sm(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new bb(e,i):(Jf("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class _b{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new _b(t.clientId,t.onlineState):(Jf("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Tb{constructor(){this.activeTargetIds=Uy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Eb{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new og(yp),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=gb(this.persistenceKey,this.sr),this.hr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new Tb),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.mr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const n of e){if(n===this.sr)continue;const e=this.getItem(gb(this.persistenceKey,n));if(e){const t=bb.Zi(n,e);t&&(this.ur=this.ur.insert(t.clientId,t))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const n of this.cr)this.rr(n);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(vb(this.persistenceKey,e));if(n){const r=Ib.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(vb(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Er(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Yf("SharedClientState","READ",e,t),t}setItem(e,t){Yf("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Yf("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(Yf("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void Jf("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=Jp.at;if(null!=e)try{const n=JSON.parse(e);tp("number"==typeof n),t=n}catch(e){Jf("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Jp.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Or(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Mr(e))))}}else this.cr.push(t)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const r=new wb(this.currentUser,e,t,n),i=yb(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=yb(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const r=vb(this.persistenceKey,e),i=new Ib(e,t,n);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return bb.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return wb.Zi(new $f(i),r,t)}Nr(e,t){const n=this._r.exec(e),r=Number(n[1]);return Ib.Zi(r,t)}yr(e){return _b.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);Yf("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Br(s,o).then((()=>{this.ur=n}))}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=Uy();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Sb{constructor(){this.Lr=new Tb,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,t,n){this.qr[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Tb,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{Ur(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Yf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Yf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Yf("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Yf("RestConnection","Received: ",e),e)),(t=>{throw Xf("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+zf,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Cb[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new Gf;o.setWithCredentials(!0),o.listenOnce(Vf.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ff.NO_ERROR:const t=o.getResponseJson();Yf("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Ff.TIMEOUT:Yf("Connection",'RPC "'+e+'" timed out'),s(new sp(ip.DEADLINE_EXCEEDED,"Request time out"));break;case Ff.HTTP_ERROR:const n=o.getStatus();if(Yf("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ip).indexOf(t)>=0?t:ip.UNKNOWN}(t.status);s(new sp(e,t.message))}else s(new sp(ip.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new sp(ip.UNAVAILABLE,"Connection failed."));break;default:ep()}}finally{Yf("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Lf(),s=Mf(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Bf({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Yf("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new Nb({Hr:e=>{l?Yf("Connection","Not sending because WebChannel is closed:",e):(u||(Yf("Connection","Opening WebChannel transport."),c.open(),u=!0),Yf("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,jf.EventType.OPEN,(()=>{l||Yf("Connection","WebChannel transport opened.")})),d(c,jf.EventType.CLOSE,(()=>{l||(l=!0,Yf("Connection","WebChannel transport closed"),h.io())})),d(c,jf.EventType.ERROR,(e=>{l||(l=!0,Xf("Connection","WebChannel transport errored:",e),h.io(new sp(ip.UNAVAILABLE,"The operation could not be completed")))})),d(c,jf.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];tp(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Yf("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=_y[e];if(void 0!==t)return Sy(t)}(e),n=i.message;void 0===t&&(t=ip.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,h.io(new sp(t,n)),c.close()}else Yf("Connection","WebChannel received:",n),h.ro(n)}})),d(s,Uf.STAT_EVENT,(e=>{e.stat===qf.PROXY?Yf("Connection","Detected buffering proxy"):e.stat===qf.NOPROXY&&Yf("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(){return"undefined"!=typeof window?window:null}function xb(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(e){return new Xy(e,!0)}class Pb{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Yf("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Pb(e,t)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,t){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==e?this.xo.reset():t&&t.code===ip.RESOURCE_EXHAUSTED?(Jf(t.toString()),Jf("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):t&&t.code===ip.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),t=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.So===t&&this.Go(e,n)}),(t=>{e((()=>{const e=new sp(ip.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Qo(e)}))}))}Go(e,t){const n=this.Ko(this.So);this.stream=this.jo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.Qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(e){return Yf("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return t=>{this.Hs.enqueueAndForget((()=>this.So===e?t():(Yf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Mb extends Lb{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.yt=i}jo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.xo.reset();const t=pv(this.yt,e),n=function(e){if(!("targetChange"in e))return bp.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?bp.min():t.readTime?nv(t.readTime):bp.min()}(e);return this.listener.Wo(t,n)}zo(e){const t={};t.database=uv(this.yt),t.addTarget=function(e,t){let n;const r=t.target;return n=Ig(r)?{documents:vv(e,r)}:{query:wv(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ev(e,t.resumeToken):t.snapshotVersion.compareTo(bp.min())>0&&(n.readTime=Zy(e,t.snapshotVersion.toTimestamp())),n}(this.yt,e);const n=bv(this.yt,e);n&&(t.labels=n),this.Bo(t)}Ho(e){const t={};t.database=uv(this.yt),t.removeTarget=e,this.Bo(t)}}class Fb extends Lb{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(tp(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const t=yv(e.writeResults,e.commitTime),n=nv(e.commitTime);return this.listener.Zo(n,t)}return tp(!e.writeResults||0===e.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=uv(this.yt),this.Bo(e)}Xo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>mv(this.yt,e)))};this.Bo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.yt=r,this.nu=!1}su(){if(this.nu)throw new sp(ip.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ip.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sp(ip.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ip.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new sp(ip.UNKNOWN,e.toString())}))}terminate(){this.nu=!0}}class Ub{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(e){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,"Online"===e&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Jf(t),this.ou=!1):Yf("OnlineStateTracker",t)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur((e=>{n.enqueueAndForget((async()=>{Qb(this)&&(Yf("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=rp(e);t._u.add(4),await jb(t),t.gu.set("Unknown"),t._u.delete(4),await Bb(t)}(this))}))})),this.gu=new Ub(n,r)}}async function Bb(e){if(Qb(e))for(const t of e.wu)await t(!0)}async function jb(e){for(const t of e.wu)await t(!1)}function Gb(e,t){const n=rp(e);n.du.has(t.targetId)||(n.du.set(t.targetId,t),Hb(n)?Wb(n):f_(n).ko()&&$b(n,t))}function Kb(e,t){const n=rp(e),r=f_(n);n.du.delete(t),r.ko()&&zb(n,t),0===n.du.size&&(r.ko()?r.Fo():Qb(n)&&n.gu.set("Unknown"))}function $b(e,t){e.yu.Ot(t.targetId),f_(e).zo(t)}function zb(e,t){e.yu.Ot(t),f_(e).Ho(t)}function Wb(e){e.yu=new zy({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.du.get(t)||null}),f_(e).start(),e.gu.uu()}function Hb(e){return Qb(e)&&!f_(e).No()&&e.du.size>0}function Qb(e){return 0===rp(e)._u.size}function Yb(e){e.yu=void 0}async function Jb(e){e.du.forEach(((t,n)=>{$b(e,t)}))}async function Xb(e,t){Yb(e),Hb(e)?(e.gu.hu(t),Wb(e)):e.gu.set("Unknown")}async function Zb(e,t,n){if(e.gu.set("Online"),t instanceof Ky&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.du.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.du.delete(r),e.yu.removeTarget(r))}(e,t)}catch(n){Yf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await e_(e,n)}else if(t instanceof jy?e.yu.Kt(t):t instanceof Gy?e.yu.Jt(t):e.yu.jt(t),!n.isEqual(bp.min()))try{const t=await ib(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.yu.Zt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.du.get(r);i&&e.du.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.du.get(t);if(!n)return;e.du.set(t,n.withResumeToken(am.EMPTY_BYTE_STRING,n.snapshotVersion)),zb(e,t);const r=new uw(n.target,t,1,n.sequenceNumber);$b(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Yf("RemoteStore","Failed to raise snapshot:",t),await e_(e,t)}}async function e_(e,t,n){if(!Kp(t))throw t;e._u.add(1),await jb(e),e.gu.set("Offline"),n||(n=()=>ib(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Yf("RemoteStore","Retrying IndexedDB access"),await n(),e._u.delete(1),await Bb(e)}))}function t_(e,t){return t().catch((n=>e_(e,n,t)))}async function n_(e){const t=rp(e),n=p_(t);let r=t.fu.length>0?t.fu[t.fu.length-1].batchId:-1;for(;r_(t);)try{const e=await ab(t.localStore,r);if(null===e){0===t.fu.length&&n.Fo();break}r=e.batchId,i_(t,e)}catch(e){await e_(t,e)}s_(t)&&o_(t)}function r_(e){return Qb(e)&&e.fu.length<10}function i_(e,t){e.fu.push(t);const n=p_(e);n.ko()&&n.Yo&&n.Xo(t.mutations)}function s_(e){return Qb(e)&&!p_(e).No()&&e.fu.length>0}function o_(e){p_(e).start()}async function a_(e){p_(e).eu()}async function c_(e){const t=p_(e);for(const n of e.fu)t.Xo(n.mutations)}async function u_(e,t,n){const r=e.fu.shift(),i=aw.from(r,t,n);await t_(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await n_(e)}async function l_(e,t){t&&p_(e).Yo&&await async function(e,t){if(n=t.code,Ey(n)&&n!==ip.ABORTED){const n=e.fu.shift();p_(e).Mo(),await t_(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await n_(e)}var n}(e,t),s_(e)&&o_(e)}async function h_(e,t){const n=rp(e);n.asyncQueue.verifyOperationInProgress(),Yf("RemoteStore","RemoteStore received new credentials");const r=Qb(n);n._u.add(3),await jb(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n._u.delete(3),await Bb(n)}async function d_(e,t){const n=rp(e);t?(n._u.delete(2),await Bb(n)):t||(n._u.add(2),await jb(n),n.gu.set("Unknown"))}function f_(e){return e.pu||(e.pu=function(e,t,n){const r=rp(e);return r.su(),new Mb(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:Jb.bind(null,e),Zr:Xb.bind(null,e),Wo:Zb.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Mo(),Hb(e)?Wb(e):e.gu.set("Unknown")):(await e.pu.stop(),Yb(e))}))),e.pu}function p_(e){return e.Iu||(e.Iu=function(e,t,n){const r=rp(e);return r.su(),new Fb(t,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,n)}(e.datastore,e.asyncQueue,{Yr:a_.bind(null,e),Zr:l_.bind(null,e),tu:c_.bind(null,e),Zo:u_.bind(null,e)}),e.wu.push((async t=>{t?(e.Iu.Mo(),await n_(e)):(await e.Iu.stop(),e.fu.length>0&&(Yf("RemoteStore",`Stopping write stream with ${e.fu.length} pending writes`),e.fu=[]))}))),e.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class m_{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new op,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new m_(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new sp(ip.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function g_(e,t){if(Jf("AsyncQueue",`${t}: ${e}`),Kp(e))return new sp(ip.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.comparator=e?(t,n)=>e(t,n)||kp.comparator(t.key,n.key):(e,t)=>kp.comparator(e.key,t.key),this.keyedMap=Dy(),this.sortedSet=new og(this.comparator)}static emptySet(e){return new y_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof y_))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new y_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.Tu=new og(kp.comparator)}track(e){const t=e.doc.key,n=this.Tu.get(t);n?0!==e.type&&3===n.type?this.Tu=this.Tu.insert(t,e):3===e.type&&1!==n.type?this.Tu=this.Tu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Tu=this.Tu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Tu=this.Tu.remove(t):1===e.type&&2===n.type?this.Tu=this.Tu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Tu=this.Tu.insert(t,{type:2,doc:e.doc}):ep():this.Tu=this.Tu.insert(t,e)}Eu(){const e=[];return this.Tu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class w_{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new w_(e,t,y_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Lg(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.Au=void 0,this.listeners=[]}}class b_{constructor(){this.queries=new ky((e=>Mg(e)),Lg),this.onlineState="Unknown",this.Ru=new Set}}async function __(e,t){const n=rp(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new I_),i)try{s.Au=await n.onListen(r)}catch(e){const n=g_(e,`Initialization of query '${Fg(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.bu(n.onlineState),s.Au&&t.Pu(s.Au)&&k_(n)}async function T_(e,t){const n=rp(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function E_(e,t){const n=rp(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Pu(i)&&(r=!0);t.Au=i}}r&&k_(n)}function S_(e,t,n){const r=rp(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function k_(e){e.Ru.forEach((e=>{e.next()}))}class A_{constructor(e,t,n){this.query=e,this.vu=t,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new w_(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),t=!0):this.Cu(e,this.onlineState)&&(this.xu(e),t=!0),this.Su=e,t}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let t=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),t=!0),t}Cu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Nu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Du(e){if(e.docChanges.length>0)return!0;const t=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}xu(e){e=w_.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,t){this.ku=e,this.byteLength=t}Ou(){return"metadata"in this.ku}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.yt=e}Ji(e){return ov(this.yt,e)}Yi(e){return e.metadata.exists?dv(this.yt,e.document,!1):mg.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return nv(e)}}class D_{constructor(e,t,n){this.Mu=e,this.localStore=t,this.yt=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=R_(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ku.namedQuery)this.queries.push(e.ku.namedQuery);else if(e.ku.documentMetadata){this.documents.push({metadata:e.ku.documentMetadata}),e.ku.documentMetadata.exists||++t;const n=Tp.fromString(e.ku.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.ku.document&&(this.documents[this.documents.length-1].document=e.ku.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new N_(this.yt);for(const r of e)if(r.metadata.queries){const e=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Fy()).add(e);t.set(n,r)}}return t}async complete(){const e=await pb(this.localStore,new N_(this.yt),this.documents,this.Mu.id),t=this.$u(this.documents);for(const n of this.queries)await mb(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function R_(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.key=e}}class O_{constructor(e){this.key=e}}class P_{constructor(e,t){this.query=e,this.qu=t,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Fy(),this.mutatedKeys=Fy(),this.Gu=qg(e),this.Qu=new y_(this.Gu)}get ju(){return this.qu}Wu(e,t){const n=t?t.zu:new v_,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=Vg(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ep()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==i.length||a?{snapshot:new w_(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}bu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new v_,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.qu=this.qu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.qu=this.qu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Fy(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new O_(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new x_(n))})),t}tc(e){this.qu=e.Hi,this.Ku=Fy();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return w_.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class L_{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class M_{constructor(e){this.key=e,this.nc=!1}}class F_{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new ky((e=>Mg(e)),Lg),this.rc=new Map,this.oc=new Set,this.uc=new og(kp.comparator),this.cc=new Map,this.ac=new MI,this.hc={},this.lc=new Map,this.fc=dI.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function V_(e,t){const n=fT(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await cb(n.localStore,xg(t));n.isPrimaryClient&&Gb(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await U_(n,t,r,"current"===s,e.resumeToken)}return i}async function U_(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await lb(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return X_(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await lb(e.localStore,t,!0),o=new P_(t,s.Hi),a=o.Wu(s.documents),c=By.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);X_(e,n,u.Xu);const l=new L_(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function q_(e,t){const n=rp(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!Lg(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ub(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),Kb(n.remoteStore,r.targetId),Y_(n,r.targetId)})).catch(Vp)):(Y_(n,r.targetId),await ub(n.localStore,r.targetId,!0))}async function B_(e,t,n){const r=pT(e);try{const e=await function(e,t){const n=rp(e),r=Ip.now(),i=t.reduce(((e,t)=>e.add(t.key)),Fy());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Cy(),c=Fy();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=dy(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new my(e.key,t,pg(t.value.mapValue),oy.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Ry(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new og(yp)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await tT(r,e.changes),await n_(r.remoteStore)}catch(e){const t=g_(e,"Failed to persist write");n.reject(t)}}async function j_(e,t){const n=rp(e);try{const e=await sb(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(tp(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?tp(r.nc):e.removedDocuments.size>0&&(tp(r.nc),r.nc=!1))})),await tT(n,e,t)}catch(e){await Vp(e)}}function G_(e,t,n){const r=rp(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.bu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=rp(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.bu(t)&&(r=!0)})),r&&k_(n)}(r.eventManager,t),e.length&&r.sc.Wo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function K_(e,t,n){const r=rp(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new og(kp.comparator);e=e.insert(s,mg.newNoDocument(s,bp.min()));const n=Fy().add(s),i=new qy(bp.min(),new Map,new ug(yp),e,n);await j_(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),eT(r)}else await ub(r.localStore,t,!1).then((()=>Y_(r,t,n))).catch(Vp)}async function $_(e,t){const n=rp(e),r=t.batch.batchId;try{const e=await rb(n.localStore,t);Q_(n,r,null),H_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tT(n,e)}catch(e){await Vp(e)}}async function z_(e,t,n){const r=rp(e);try{const e=await function(e,t){const n=rp(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(tp(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);Q_(r,t,n),H_(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await tT(r,e)}catch(n){await Vp(n)}}async function W_(e,t){const n=rp(e);Qb(n.remoteStore)||Yf("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=rp(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.lc.get(e)||[];r.push(t),n.lc.set(e,r)}catch(e){const n=g_(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function H_(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function Q_(e,t,n){const r=rp(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function Y_(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||J_(e,t)}))}function J_(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(Kb(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),eT(e))}function X_(e,t,n){for(const r of n)r instanceof x_?(e.ac.addReference(r.key,t),Z_(e,r)):r instanceof O_?(Yf("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||J_(e,r.key)):ep()}function Z_(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Yf("SyncEngine","New document in limbo: "+n),e.oc.add(r),eT(e))}function eT(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new kp(Tp.fromString(t)),r=e.fc.next();e.cc.set(r,new M_(n)),e.uc=e.uc.insert(n,r),Gb(e.remoteStore,new uw(xg(kg(n.path)),r,2,Jp.at))}}async function tT(e,t,n){const r=rp(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=XI.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.Wo(i),await async function(e,t){const n=rp(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Up.forEach(t,(t=>Up.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Up.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Kp(e))throw e;Yf("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qi.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qi=n.qi.insert(e,i)}}}(r.localStore,s))}async function nT(e,t){const n=rp(e);if(!n.currentUser.isEqual(t)){Yf("SyncEngine","User change. New user:",t.toKey());const e=await nb(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new sp(ip.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await tT(n,e.ji)}}function rT(e,t){const n=rp(e),r=n.cc.get(t);if(r&&r.nc)return Fy().add(r.key);{let e=Fy();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}async function iT(e,t){const n=rp(e),r=await lb(n.localStore,t.query,!0),i=t.view.tc(r);return n.isPrimaryClient&&X_(n,t.targetId,i.Xu),i}async function sT(e,t){const n=rp(e);return db(n.localStore,t).then((e=>tT(n,e)))}async function oT(e,t,n,r){const i=rp(e),s=await function(e,t){const n=rp(e),r=rp(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Tn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Up.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await n_(i.remoteStore):"acknowledged"===n||"rejected"===n?(Q_(i,t,r||null),H_(i,t),function(e,t){rp(rp(e).mutationQueue).An(t)}(i.localStore,t)):ep(),await tT(i,s)):Yf("SyncEngine","Cannot apply mutation batch with id: "+t)}async function aT(e,t){const n=rp(e);if(fT(n),pT(n),!0===t&&!0!==n.dc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await cT(n,e.toArray());n.dc=!0,await d_(n.remoteStore,!0);for(const r of t)Gb(n.remoteStore,r)}else if(!1===t&&!1!==n.dc){const e=[];let t=Promise.resolve();n.rc.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(Y_(n,i),ub(n.localStore,i,!0)))),Kb(n.remoteStore,i)})),await t,await cT(n,e),function(e){const t=rp(e);t.cc.forEach(((e,n)=>{Kb(t.remoteStore,n)})),t.ac.fs(),t.cc=new Map,t.uc=new og(kp.comparator)}(n),n.dc=!1,await d_(n.remoteStore,!1)}}async function cT(e,t,n){const r=rp(e),i=[],s=[];for(const o of t){let e;const t=r.rc.get(o);if(t&&0!==t.length){e=await cb(r.localStore,xg(t[0]));for(const e of t){const t=r.ic.get(e),n=await iT(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await hb(r.localStore,o);e=await cb(r.localStore,t),await U_(r,uT(t),o,!1,e.resumeToken)}i.push(e)}return r.sc.Wo(s),i}function uT(e){return Sg(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function lT(e){const t=rp(e);return rp(rp(t.localStore).persistence).vi()}async function hT(e,t,n,r){const i=rp(e);if(i.dc)return void Yf("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await db(i.localStore,Ug(s[0])),r=qy.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,am.EMPTY_BYTE_STRING);await tT(i,e,r);break}case"rejected":await ub(i.localStore,t,!0),Y_(i,t,r);break;default:ep()}}async function dT(e,t,n){const r=fT(e);if(r.dc){for(const e of t){if(r.rc.has(e)){Yf("SyncEngine","Adding an already active target "+e);continue}const t=await hb(r.localStore,e),n=await cb(r.localStore,t);await U_(r,uT(t),n.targetId,!1,n.resumeToken),Gb(r.remoteStore,n)}for(const e of n)r.rc.has(e)&&await ub(r.localStore,e,!1).then((()=>{Kb(r.remoteStore,e),Y_(r,e)})).catch(Vp)}}function fT(e){const t=rp(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=j_.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rT.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=K_.bind(null,t),t.sc.Wo=E_.bind(null,t.eventManager),t.sc.wc=S_.bind(null,t.eventManager),t}function pT(e){const t=rp(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$_.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=z_.bind(null,t),t}function mT(e,t,n){const r=rp(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=rp(e),r=nv(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ns.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(R_(r));const i=new D_(r,e.localStore,t.yt);let s=await t.mc();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.mc()}const o=await i.complete();return await tT(e,o.Lu,void 0),await function(e,t){const n=rp(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ns.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return Xf("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class gT{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ob(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return tb(this.persistence,new ZI,e.initialUser,this.yt)}yc(e){return new jI(KI.Bs,this.yt)}gc(e){return new Sb}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yT extends gT{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await pT(this.Ac.syncEngine),await n_(this.Ac.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ic(e){return tb(this.persistence,new ZI,e.initialUser,this.yt)}Tc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new wI(n,e.asyncQueue,t)}Ec(e,t){const n=new Yp(t,this.persistence);return new Qp(e.asyncQueue,n)}yc(e){const t=JI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?iI.withCacheSize(this.cacheSizeBytes):iI.DEFAULT;return new HI(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Rb(),xb(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Sb}}class vT extends yT{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof Eb&&(this.sharedClientState.syncEngine={Fr:oT.bind(null,t),$r:hT.bind(null,t),Br:dT.bind(null,t),vi:lT.bind(null,t),Mr:sT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li((async e=>{await aT(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}gc(e){const t=Rb();if(!Eb.C(t))throw new sp(ip.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=JI(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Eb(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class wT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>G_(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nT.bind(null,this.syncEngine),await d_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new b_}createDatastore(e){const t=Ob(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Db(r));var r;return function(e,t,n,r){return new Vb(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>G_(this.syncEngine,e,0),s=Ab.C()?new Ab:new kb,new qb(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new F_(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=rp(e);Yf("RemoteStore","RemoteStore shutting down."),t._u.add(5),await jb(t),t.mu.shutdown(),t.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(e,t,n){if(!n)throw new sp(ip.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bT(e,t,n,r){if(!0===t&&!0===r)throw new sp(ip.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function _T(e){if(!kp.isDocumentKey(e))throw new sp(ip.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function TT(e){if(kp.isDocumentKey(e))throw new sp(ip.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function ET(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ep()}function ST(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new sp(ip.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ET(e);throw new sp(ip.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function kT(e,t){if(t<=0)throw new sp(ip.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=new Map;class CT{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new sp(ip.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new sp(ip.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bT("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new CT({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new sp(ip.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new sp(ip.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new CT(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new cp;switch(e.type){case"gapi":const t=e.client;return new dp(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new sp(ip.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=AT.get(e);t&&(Yf("ComponentProvider","Removing Datastore"),AT.delete(e),t.terminate())}(this),Promise.resolve()}}function DT(e,t,n,r={}){var i;const s=(e=ST(e,NT))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Xf("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=$f.MOCK_USER;else{t=q(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new sp(ip.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new $f(s)}e._authCredentials=new up(new ap(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new OT(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new RT(this.firestore,e,this._key)}}class xT{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new xT(this.firestore,e,this._query)}}class OT extends xT{constructor(e,t,n){super(e,t,kg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new RT(this.firestore,null,new kp(e))}withConverter(e){return new OT(this.firestore,e,this._path)}}function PT(e,t,...n){if(e=re(e),IT("collection","path",t),e instanceof NT){const r=Tp.fromString(t,...n);return TT(r),new OT(e,null,r)}{if(!(e instanceof RT||e instanceof OT))throw new sp(ip.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tp.fromString(t,...n));return TT(r),new OT(e.firestore,null,r)}}function LT(e,t){if(e=ST(e,NT),IT("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new sp(ip.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new xT(e,null,function(e){return new Eg(Tp.emptyPath(),e)}(t))}function MT(e,t,...n){if(e=re(e),1===arguments.length&&(t=gp.R()),IT("doc","path",t),e instanceof NT){const r=Tp.fromString(t,...n);return _T(r),new RT(e,null,new kp(r))}{if(!(e instanceof RT||e instanceof OT))throw new sp(ip.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Tp.fromString(t,...n));return _T(r),new RT(e.firestore,e instanceof OT?e.converter:null,new kp(r))}}function FT(e,t){return e=re(e),t=re(t),(e instanceof RT||e instanceof OT)&&(t instanceof RT||t instanceof OT)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function VT(e,t){return e=re(e),t=re(t),e instanceof xT&&t instanceof xT&&e.firestore===t.firestore&&Lg(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function UT(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Jf("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e,t){this.Pc=e,this.yt=t,this.metadata=new op,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then((e=>{e&&e.Ou()?this.metadata.resolve(e.ku.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.ku)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(null===e)return null;const t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(n);return new C_(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Sc(){for(;this.xc()<0;)if(await this.Nc())break;if(0===this.buffer.length)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new sp(ip.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=rp(e),r=uv(n.yt)+"/documents",i={documents:t.map((e=>sv(n.yt,e)))},s=await n._o("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=fv(n.yt,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());tp(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new wy(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=kp.fromPath(t);this.mutations.push(new Iy(n,this.precondition(n)))})),await async function(e,t){const n=rp(e),r=uv(n.yt)+"/documents",i={writes:t.map((e=>mv(n.yt,e)))};await n.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ep();t=bp.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new sp(ip.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(bp.min())?oy.exists(!1):oy.updateTime(t):oy.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(bp.min()))throw new sp(ip.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return oy.updateTime(t)}return oy.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.xo=new Pb(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.xo.Ro((async()=>{const e=new jT(this.datastore),t=this.Mc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Fc(e)}))))})).catch((e=>{this.Fc(e)}))}))}Mc(e){try{const t=this.updateFunction(e);return!rm(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Oc(),Promise.resolve())))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Ey(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=$f.UNAUTHENTICATED,this.clientId=gp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Yf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Yf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new sp(ip.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new op;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=g_(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function $T(e,t){e.asyncQueue.verifyOperationInProgress(),Yf("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await nb(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function zT(e,t){e.asyncQueue.verifyOperationInProgress();const n=await WT(e);Yf("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>h_(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>h_(t.remoteStore,n))),e.onlineComponents=t}async function WT(e){return e.offlineComponents||(Yf("FirestoreClient","Using default OfflineComponentProvider"),await $T(e,new gT)),e.offlineComponents}async function HT(e){return e.onlineComponents||(Yf("FirestoreClient","Using default OnlineComponentProvider"),await zT(e,new wT)),e.onlineComponents}function QT(e){return WT(e).then((e=>e.persistence))}function YT(e){return WT(e).then((e=>e.localStore))}function JT(e){return HT(e).then((e=>e.remoteStore))}function XT(e){return HT(e).then((e=>e.syncEngine))}function ZT(e){return HT(e).then((e=>e.datastore))}async function eE(e){const t=await HT(e),n=t.eventManager;return n.onListen=V_.bind(null,t.syncEngine),n.onUnlisten=q_.bind(null,t.syncEngine),n}function tE(e){return e.asyncQueue.enqueue((async()=>{const t=await QT(e),n=await JT(e);return t.setNetworkEnabled(!0),function(e){const t=rp(e);return t._u.delete(0),Bb(t)}(n)}))}function nE(e){return e.asyncQueue.enqueue((async()=>{const t=await QT(e),n=await JT(e);return t.setNetworkEnabled(!1),async function(e){const t=rp(e);t._u.add(0),await jb(t),t.gu.set("Offline")}(n)}))}function rE(e,t){const n=new op;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=rp(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new sp(ip.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=g_(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await YT(e),t,n))),n.promise}function iE(e,t,n={}){const r=new op;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qT({next:s=>{t.enqueueAndForget((()=>T_(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new sp(ip.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new sp(ip.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new A_(kg(n.path),s,{includeMetadataChanges:!0,Nu:!0});return __(e,o)}(await eE(e),e.asyncQueue,t,n,r))),r.promise}function sE(e,t){const n=new op;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await lb(e,t,!0),i=new P_(t,r.Hi),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=g_(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await YT(e),t,n))),n.promise}function oE(e,t,n={}){const r=new op;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new qT({next:n=>{t.enqueueAndForget((()=>T_(e,o))),n.fromCache&&"server"===r.source?i.reject(new sp(ip.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new A_(n,s,{includeMetadataChanges:!0,Nu:!0});return __(e,o)}(await eE(e),e.asyncQueue,t,n,r))),r.promise}function aE(e,t){const n=new qT(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){rp(e).Ru.add(t),t.next()}(await eE(e),n))),()=>{n.bc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){rp(e).Ru.delete(t)}(await eE(e),n)))}}function cE(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new BT(e,t)}(function(e,t){if(e instanceof Uint8Array)return UT(e,t);if(e instanceof ArrayBuffer)return UT(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Ob(t));e.asyncQueue.enqueueAndForget((async()=>{mT(await XT(e),i,r)}))}function uE(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=rp(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ns.getNamedQuery(e,t)))}(await YT(e),t)))}class lE{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Pb(this,"async_queue_retry"),this.Wc=()=>{const e=xb();e&&Yf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.xo.Po()};const e=xb();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const t=xb();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise((()=>{}));const t=new op;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(Uu){if(!Kp(Uu))throw Uu;Yf("AsyncQueue","Operation failed with retryable error: "+Uu)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Jf("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=m_.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.Uc.push(r),r}zc(){this.Kc&&ep()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.Uc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.Uc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Uc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.Uc.indexOf(e);this.Uc.splice(t,1)}}function hE(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class dE{constructor(){this._progressObserver={},this._taskCompletionResolver=new op,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE=-1;class pE extends NT{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new lE,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||gE(this),this._firestoreClient.terminate()}}function mE(e){return e._firestoreClient||gE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function gE(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Xp(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new KT(e._authCredentials,e._appCheckCredentials,e._queue,r)}function yE(e,t){kE(e=ST(e,pE));const n=mE(e),r=e._freezeSettings(),i=new wT;return wE(n,i,new yT(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function vE(e){kE(e=ST(e,pE));const t=mE(e),n=e._freezeSettings(),r=new wT;return wE(t,r,new vT(r,n.cacheSizeBytes))}function wE(e,t,n){const r=new op;return e.asyncQueue.enqueue((async()=>{try{await $T(e,n),await zT(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===ip.FAILED_PRECONDITION||e.code===ip.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;Xf("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function IE(e){if(e._initialized&&!e._terminated)throw new sp(ip.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new op;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Bp.C())return Promise.resolve();const t=e+"main";await Bp.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(JI(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function bE(e){return function(e){const t=new op;return e.asyncQueue.enqueueAndForget((async()=>W_(await XT(e),t))),t.promise}(mE(e=ST(e,pE)))}function _E(e){return tE(mE(e=ST(e,pE)))}function TE(e){return nE(mE(e=ST(e,pE)))}function EE(e,t){const n=mE(e=ST(e,pE)),r=new dE;return cE(n,e._databaseId,t,r),r}function SE(e,t){return uE(mE(e=ST(e,pE)),t).then((t=>t?new xT(e,null,t.query):null))}function kE(e){if(e._initialized||e._terminated)throw new sp(ip.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this._byteString=e}static fromBase64String(e){try{return new AE(am.fromBase64String(e))}catch(e){throw new sp(ip.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new AE(am.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new sp(ip.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Sp(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class NE{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new sp(ip.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new sp(ip.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return yp(this._lat,e._lat)||yp(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=/^__.*__$/;class xE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new my(e,this.data,this.fieldMask,t,this.fieldTransforms):new py(e,this.data,t,this.fieldTransforms)}}class OE{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new my(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function PE(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ep()}}class LE{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.yt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new LE(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return tS(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(PE(this.sa)&&RE.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class ME{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.yt=n||Ob(e)}da(e,t,n,r=!1){return new LE({sa:e,methodName:t,fa:n,path:Sp.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function FE(e){const t=e._freezeSettings(),n=Ob(e._databaseId);return new ME(e._databaseId,!!t.ignoreUndefinedProperties,n)}function VE(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);JE("Data must be an object, but it was:",o,r);const a=QE(r,o);let c,u;if(s.merge)c=new dg(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=XE(t,r,n);if(!o.contains(i))throw new sp(ip.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);nS(e,i)||e.push(i)}c=new dg(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new xE(new fg(a),c,u)}class UE extends NE{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof UE}}function qE(e,t,n){return new LE({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.yt,t.ignoreUndefinedProperties)}class BE extends NE{_toFieldTransform(e){return new ry(e.path,new Qg)}isEqual(e){return e instanceof BE}}class jE extends NE{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=qE(this,e,!0),n=this._a.map((e=>HE(e,t))),r=new Yg(n);return new ry(e.path,r)}isEqual(e){return this===e}}class GE extends NE{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=qE(this,e,!0),n=this._a.map((e=>HE(e,t))),r=new Xg(n);return new ry(e.path,r)}isEqual(e){return this===e}}class KE extends NE{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new ey(e.yt,Kg(e.yt,this.wa));return new ry(e.path,t)}isEqual(e){return this===e}}function $E(e,t,n,r){const i=e.da(1,t,n);JE("Data must be an object, but it was:",i,r);const s=[],o=fg.empty();tm(r,((e,r)=>{const a=eS(t,e,n);r=re(r);const c=i.ca(a);if(r instanceof UE)s.push(a);else{const e=HE(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new dg(s);return new OE(o,a,i.fieldTransforms)}function zE(e,t,n,r,i,s){const o=e.da(1,t,n),a=[XE(t,r,n)],c=[i];if(s.length%2!=0)throw new sp(ip.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(XE(t,s[d])),c.push(s[d+1]);const u=[],l=fg.empty();for(let d=a.length-1;d>=0;--d)if(!nS(u,a[d])){const e=a[d];let t=c[d];t=re(t);const n=o.ca(e);if(t instanceof UE)u.push(e);else{const r=HE(t,n);null!=r&&(u.push(e),l.set(e,r))}}const h=new dg(u);return new OE(l,h,o.fieldTransforms)}function WE(e,t,n,r=!1){return HE(n,e.da(r?4:3,t))}function HE(e,t){if(YE(e=re(e)))return JE("Unsupported field value:",t,e),QE(e,t);if(e instanceof NE)return function(e,t){if(!PE(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=HE(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=re(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Kg(t.yt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Ip.fromDate(e);return{timestampValue:Zy(t.yt,n)}}if(e instanceof Ip){const n=new Ip(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Zy(t.yt,n)}}if(e instanceof DE)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof AE)return{bytesValue:ev(t.yt,e._byteString)};if(e instanceof RT){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rv(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${ET(e)}`)}(e,t)}function QE(e,t){const n={};return nm(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tm(e,((e,r)=>{const i=HE(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function YE(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Ip||e instanceof DE||e instanceof AE||e instanceof RT||e instanceof NE)}function JE(e,t,n){if(!YE(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=ET(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function XE(e,t,n){if((t=re(t))instanceof CE)return t._internalPath;if("string"==typeof t)return eS(e,t);throw tS("Field path arguments must be of type string or ",e,!1,void 0,n)}const ZE=new RegExp("[~\\*/\\[\\]]");function eS(e,t,n){if(t.search(ZE)>=0)throw tS(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new CE(...t.split("."))._internalPath}catch(r){throw tS(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tS(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new sp(ip.INVALID_ARGUMENT,a+e+c)}function nS(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new RT(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new iS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sS("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class iS extends rS{data(){return super.data()}}function sS(e,t){return"string"==typeof t?eS(e,t):t instanceof CE?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new sp(ip.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class aS{}class cS extends aS{}function uS(e,t,...n){let r=[];t instanceof aS&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof dS)).length,n=e.filter((e=>e instanceof lS)).length;if(t>1||t>0&&n>0)throw new sp(ip.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r);for(const i of r)e=i._apply(e);return e}class lS extends cS{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lS(e,t,n)}_apply(e){const t=this._parse(e);return AS(e._query,t),new xT(e.firestore,e.converter,Og(e._query,t))}_parse(e){const t=FE(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new sp(ip.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){kS(o,s);const t=[];for(const n of o)t.push(SS(r,e,n));a={arrayValue:{values:t}}}else a=SS(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||kS(o,s),a=WE(n,t,o,"in"===s||"not-in"===s);return qm.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function hS(e,t,n){const r=t,i=sS("where",e);return lS._create(i,r,n)}class dS extends aS{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new dS(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Bm.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)AS(n,i),n=Og(n,i)}(e._query,t),new xT(e.firestore,e.converter,Og(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class fS extends cS{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new fS(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new sp(ip.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new sp(ip.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ig(t,n);return function(e,t){if(null===Cg(e)){const n=Ng(e);null!==n&&CS(e,n,t.field)}}(e,r),r}(e._query,this._field,this._direction);return new xT(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Eg(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function pS(e,t="asc"){const n=t,r=sS("orderBy",e);return fS._create(r,n)}class mS extends cS{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new mS(e,t,n)}_apply(e){return new xT(e.firestore,e.converter,Pg(e._query,this._limit,this._limitType))}}function gS(e){return kT("limit",e),mS._create("limit",e,"F")}function yS(e){return kT("limitToLast",e),mS._create("limitToLast",e,"L")}class vS extends cS{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new vS(e,t,n)}_apply(e){const t=ES(e,this.type,this._docOrFields,this._inclusive);return new xT(e.firestore,e.converter,function(e,t){return new Eg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function wS(...e){return vS._create("startAt",e,!0)}function IS(...e){return vS._create("startAfter",e,!1)}class bS extends cS{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new bS(e,t,n)}_apply(e){const t=ES(e,this.type,this._docOrFields,this._inclusive);return new xT(e.firestore,e.converter,function(e,t){return new Eg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function _S(...e){return bS._create("endBefore",e,!1)}function TS(...e){return bS._create("endAt",e,!0)}function ES(e,t,n,r){if(n[0]=re(n[0]),n[0]instanceof rS)return function(e,t,n,r,i){if(!r)throw new sp(ip.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Rg(e))if(o.field.isKeyField())s.push(Em(t,r.key));else{const e=r.data.field(o.field);if(dm(e))throw new sp(ip.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new sp(ip.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Mm(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=FE(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new sp(ip.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new sp(ip.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!Dg(e)&&-1!==s.indexOf("/"))throw new sp(ip.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(Tp.fromString(s));if(!kp.isDocumentKey(n))throw new sp(ip.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new kp(n);a.push(Em(t,i))}else{const e=WE(n,r,s);a.push(e)}}return new Mm(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function SS(e,t,n){if("string"==typeof(n=re(n))){if(""===n)throw new sp(ip.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Dg(t)&&-1!==n.indexOf("/"))throw new sp(ip.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Tp.fromString(n));if(!kp.isDocumentKey(r))throw new sp(ip.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Em(e,new kp(r))}if(n instanceof RT)return Em(e,n._key);throw new sp(ip.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ET(n)}.`)}function kS(e,t){if(!Array.isArray(e)||0===e.length)throw new sp(ip.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new sp(ip.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function AS(e,t){if(t.isInequality()){const n=Ng(e),r=t.field;if(null!==n&&!n.isEqual(r))throw new sp(ip.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${r.toString()}'`);const i=Cg(e);null!==i&&CS(e,r,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new sp(ip.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new sp(ip.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function CS(e,t,n){if(!n.isEqual(t))throw new sp(ip.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class NS{convertValue(e,t="none"){switch(ym(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lm(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hm(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ep()}}convertObject(e,t){const n={};return tm(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new DE(lm(e.latitude),lm(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=fm(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(pm(e));default:return null}}convertTimestamp(e){const t=um(e);return new Ip(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Tp.fromString(e);tp(Dv(n));const r=new Zp(n.get(1),n.get(3)),i=new kp(n.popFirst(5));return r.isEqual(t)||Jf(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class RS extends NS{constructor(e){super(),this.firestore=e}convertBytes(e){return new AE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new RT(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OS extends rS{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new PS(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sS("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class PS extends OS{data(e={}){return super.data(e)}}class LS{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new xS(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new PS(this._firestore,this._userDataWriter,n.key,n,new xS(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new sp(ip.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new PS(e._firestore,e._userDataWriter,n.doc.key,n.doc,new xS(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new PS(e._firestore,e._userDataWriter,t.doc.key,t.doc,new xS(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:MS(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function MS(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ep()}}function FS(e,t){return e instanceof OS&&t instanceof OS?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof LS&&t instanceof LS&&e._firestore===t._firestore&&VT(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(e){e=ST(e,RT);const t=ST(e.firestore,pE);return iE(mE(t),e._key).then((n=>XS(t,e,n)))}class US extends NS{constructor(e){super(),this.firestore=e}convertBytes(e){return new AE(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new RT(this.firestore,null,t)}}function qS(e){e=ST(e,RT);const t=ST(e.firestore,pE),n=mE(t),r=new US(t);return rE(n,e._key).then((n=>new OS(t,r,e._key,n,new xS(null!==n&&n.hasLocalMutations,!0),e.converter)))}function BS(e){e=ST(e,RT);const t=ST(e.firestore,pE);return iE(mE(t),e._key,{source:"server"}).then((n=>XS(t,e,n)))}function jS(e){e=ST(e,xT);const t=ST(e.firestore,pE),n=mE(t),r=new US(t);return oS(e._query),oE(n,e._query).then((n=>new LS(t,r,e,n)))}function GS(e){e=ST(e,xT);const t=ST(e.firestore,pE),n=mE(t),r=new US(t);return sE(n,e._query).then((n=>new LS(t,r,e,n)))}function KS(e){e=ST(e,xT);const t=ST(e.firestore,pE),n=mE(t),r=new US(t);return oE(n,e._query,{source:"server"}).then((n=>new LS(t,r,e,n)))}function $S(e,t,n){e=ST(e,RT);const r=ST(e.firestore,pE),i=DS(e.converter,t,n);return JS(r,[VE(FE(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,oy.none())])}function zS(e,t,n,...r){e=ST(e,RT);const i=ST(e.firestore,pE),s=FE(i);let o;return o="string"==typeof(t=re(t))||t instanceof CE?zE(s,"updateDoc",e._key,t,n,r):$E(s,"updateDoc",e._key,t),JS(i,[o.toMutation(e._key,oy.exists(!0))])}function WS(e){return JS(ST(e.firestore,pE),[new wy(e._key,oy.none())])}function HS(e,t){const n=ST(e.firestore,pE),r=MT(e),i=DS(e.converter,t);return JS(n,[VE(FE(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,oy.exists(!1))]).then((()=>r))}function QS(e,...t){var n,r,i;e=re(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||hE(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(hE(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,u,l;if(e instanceof RT)u=ST(e.firestore,pE),l=kg(e._key.path),c={next:n=>{t[o]&&t[o](XS(u,e,n))},error:t[o+1],complete:t[o+2]};else{const n=ST(e,xT);u=ST(n.firestore,pE),l=n._query;const r=new US(u);c={next:e=>{t[o]&&t[o](new LS(u,r,n,e))},error:t[o+1],complete:t[o+2]},oS(e._query)}return function(e,t,n,r){const i=new qT(r),s=new A_(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>__(await eE(e),s))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>T_(await eE(e),s)))}}(mE(u),l,a,c)}function YS(e,t){return aE(mE(e=ST(e,pE)),hE(t)?t:{next:t})}function JS(e,t){return function(e,t){const n=new op;return e.asyncQueue.enqueueAndForget((async()=>B_(await XT(e),t,n))),n.promise}(mE(e),t)}function XS(e,t,n){const r=n.docs.get(t._key),i=new US(e);return new OS(e,i,t._key,r,new xS(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ZS={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=FE(e)}set(e,t,n){this._verifyNotCommitted();const r=tk(e,this._firestore),i=DS(r.converter,t,n),s=VE(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,oy.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=tk(e,this._firestore);let s;return s="string"==typeof(t=re(t))||t instanceof CE?zE(this._dataReader,"WriteBatch.update",i._key,t,n,r):$E(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,oy.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=tk(e,this._firestore);return this._mutations=this._mutations.concat(new wy(t._key,oy.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new sp(ip.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function tk(e,t){if((e=re(e)).firestore!==t)throw new sp(ip.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=FE(e)}get(e){const t=tk(e,this._firestore),n=new RS(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return ep();const r=e[0];if(r.isFoundDocument())return new rS(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new rS(this._firestore,n,t._key,null,t.converter);throw ep()}))}set(e,t,n){const r=tk(e,this._firestore),i=DS(r.converter,t,n),s=VE(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=tk(e,this._firestore);let s;return s="string"==typeof(t=re(t))||t instanceof CE?zE(this._dataReader,"Transaction.update",i._key,t,n,r):$E(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=tk(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=tk(e,this._firestore),n=new US(this._firestore);return super.get(e).then((e=>new OS(this._firestore,n,t._key,e._document,new xS(!1,!1),t.converter)))}}function rk(e,t,n){e=ST(e,pE);const r=Object.assign(Object.assign({},ZS),n);return function(e){if(e.maxAttempts<1)throw new sp(ip.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new op;return e.asyncQueue.enqueueAndForget((async()=>{const i=await ZT(e);new GT(e.asyncQueue,i,n,t,r).run()})),r.promise}(mE(e),(n=>t(new nk(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ik(){return new UE("deleteField")}function sk(){return new BE("serverTimestamp")}function ok(...e){return new jE("arrayUnion",e)}function ak(...e){return new GE("arrayRemove",e)}function ck(e){return new KE("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){zf=e}(Rt),Et(new ie("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new pE(new lp(e.getProvider("auth-internal")),new pp(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new sp(ip.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zp(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Mt(Kf,"3.8.0",e),Mt(Kf,"3.8.0","esm2017")}();const uk="@firebase/firestore-compat",lk="0.3.0";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hk(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new sp("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(){if("undefined"===typeof Uint8Array)throw new sp("unimplemented","Uint8Arrays are not available in this environment.")}function fk(){if(!om())throw new sp("unimplemented","Blobs are unavailable in Firestore in this environment.")}class pk{constructor(e){this._delegate=e}static fromBase64String(e){return fk(),new pk(AE.fromBase64String(e))}static fromUint8Array(e){return dk(),new pk(AE.fromUint8Array(e))}toBase64(){return fk(),this._delegate.toBase64()}toUint8Array(){return dk(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(e){return gk(e,["next","error","complete"])}function gk(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{enableIndexedDbPersistence(e,t){return yE(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return vE(e._delegate)}clearIndexedDbPersistence(e){return IE(e._delegate)}}class vk{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Zp||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||Xf("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){DT(this._delegate,e,t,n)}enableNetwork(){return _E(this._delegate)}disableNetwork(){return TE(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,bT("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return bE(this._delegate)}onSnapshotsInSync(e){return YS(this._delegate,e)}get app(){if(!this._appCompat)throw new sp("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ok(this,PT(this._delegate,e))}catch(t){throw Sk(t,"collection()","Firestore.collection()")}}doc(e){try{return new Ek(this,MT(this._delegate,e))}catch(t){throw Sk(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Dk(this,LT(this._delegate,e))}catch(t){throw Sk(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return rk(this._delegate,(t=>e(new bk(this,t))))}batch(){return mE(this._delegate),new _k(new ek(this._delegate,(e=>JS(this._delegate,e))))}loadBundle(e){return EE(this._delegate,e)}namedQuery(e){return SE(this._delegate,e).then((e=>e?new Dk(this,e):null))}}class wk extends NS{constructor(e){super(),this.firestore=e}convertBytes(e){return new pk(new AE(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Ek.forKey(t,this.firestore,null)}}function Ik(e){Qf(e)}class bk{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new wk(e)}get(e){const t=Pk(e);return this._delegate.get(t).then((e=>new Ck(this._firestore,new OS(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=Pk(e);return n?(hk("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Pk(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Pk(e);return this._delegate.delete(t),this}}class _k{constructor(e){this._delegate=e}set(e,t,n){const r=Pk(e);return n?(hk("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=Pk(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=Pk(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class Tk{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new PS(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Nk(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=Tk.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new Tk(e,new wk(e),t),r.set(t,i)),i}}Tk.INSTANCES=new WeakMap;class Ek{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new wk(e)}static forPath(e,t,n){if(e.length%2!==0)throw new sp("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Ek(t,new RT(t._delegate,n,new kp(e)))}static forKey(e,t,n){return new Ek(t,new RT(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Ok(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ok(this.firestore,PT(this._delegate,e))}catch(t){throw Sk(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=re(e),e instanceof RT&&FT(this._delegate,e)}set(e,t){t=hk("DocumentReference.set",t);try{return t?$S(this._delegate,e,t):$S(this._delegate,e)}catch(n){throw Sk(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?zS(this._delegate,e):zS(this._delegate,e,t,...n)}catch(r){throw Sk(r,"updateDoc()","DocumentReference.update()")}}delete(){return WS(this._delegate)}onSnapshot(...e){const t=kk(e),n=Ak(e,(e=>new Ck(this.firestore,new OS(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return QS(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?qS(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?BS(this._delegate):VS(this._delegate),t.then((e=>new Ck(this.firestore,new OS(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new Ek(this.firestore,e?this._delegate.withConverter(Tk.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Sk(e,t,n){return e.message=e.message.replace(t,n),e}function kk(e){for(const t of e)if("object"===typeof t&&!mk(t))return t;return{}}function Ak(e,t){var n,r;let i;return i=mk(e[0])?e[0]:mk(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class Ck{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Ek(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return FS(this._delegate,e._delegate)}}class Nk extends Ck{data(e){const t=this._delegate.data(e);return np(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Dk{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new wk(e)}where(e,t,n){try{return new Dk(this.firestore,uS(this._delegate,hS(e,t,n)))}catch(r){throw Sk(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Dk(this.firestore,uS(this._delegate,pS(e,t)))}catch(n){throw Sk(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Dk(this.firestore,uS(this._delegate,gS(e)))}catch(t){throw Sk(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Dk(this.firestore,uS(this._delegate,yS(e)))}catch(t){throw Sk(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Dk(this.firestore,uS(this._delegate,wS(...e)))}catch(t){throw Sk(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Dk(this.firestore,uS(this._delegate,IS(...e)))}catch(t){throw Sk(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Dk(this.firestore,uS(this._delegate,_S(...e)))}catch(t){throw Sk(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Dk(this.firestore,uS(this._delegate,TS(...e)))}catch(t){throw Sk(t,"endAt()","Query.endAt()")}}isEqual(e){return VT(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?GS(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?KS(this._delegate):jS(this._delegate),t.then((e=>new xk(this.firestore,new LS(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=kk(e),n=Ak(e,(e=>new xk(this.firestore,new LS(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return QS(this._delegate,t,n)}withConverter(e){return new Dk(this.firestore,e?this._delegate.withConverter(Tk.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Rk{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Nk(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class xk{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Dk(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Nk(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Rk(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Nk(this._firestore,n))}))}isEqual(e){return FS(this._delegate,e._delegate)}}class Ok extends Dk{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Ek(this.firestore,e):null}doc(e){try{return new Ek(this.firestore,void 0===e?MT(this._delegate):MT(this._delegate,e))}catch(t){throw Sk(t,"doc()","CollectionReference.doc()")}}add(e){return HS(this._delegate,e).then((e=>new Ek(this.firestore,e)))}isEqual(e){return FT(this._delegate,e._delegate)}withConverter(e){return new Ok(this.firestore,e?this._delegate.withConverter(Tk.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Pk(e){return ST(e,RT)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(...e){this._delegate=new CE(...e)}static documentId(){return new Lk(Sp.keyField().canonicalString())}isEqual(e){return e=re(e),e instanceof CE&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this._delegate=e}static serverTimestamp(){const e=sk();return e._methodName="FieldValue.serverTimestamp",new Mk(e)}static delete(){const e=ik();return e._methodName="FieldValue.delete",new Mk(e)}static arrayUnion(...e){const t=ok(...e);return t._methodName="FieldValue.arrayUnion",new Mk(t)}static arrayRemove(...e){const t=ak(...e);return t._methodName="FieldValue.arrayRemove",new Mk(t)}static increment(e){const t=ck(e);return t._methodName="FieldValue.increment",new Mk(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={Firestore:vk,GeoPoint:DE,Timestamp:Ip,Blob:pk,Transaction:bk,WriteBatch:_k,DocumentReference:Ek,DocumentSnapshot:Ck,Query:Dk,QueryDocumentSnapshot:Nk,QuerySnapshot:xk,CollectionReference:Ok,FieldPath:Lk,FieldValue:Mk,setLogLevel:Ik,CACHE_SIZE_UNLIMITED:fE};function Vk(e,t){e.INTERNAL.registerComponent(new ie("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},Fk)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(e){Vk(e,((e,t)=>new vk(e,t,new yk))),e.registerVersion(uk,lk)}let qk;Uk(dn);var Bk={name:"app",data(){return{messageList:[],userName:"ユーザーA",message:"テストメッセージです"}},created:function(){const e={apiKey:"AIzaSyArEFrBMUMDHAYTjFJ2HhsHb__zIPYMfLc",authDomain:"turf-war-ebf17.firebaseapp.com",projectId:"turf-war-ebf17",storageBucket:"turf-war-ebf17.appspot.com",messagingSenderId:"1096461103992",appId:"1:1096461103992:web:57b6f83644c9882d8d8e8d"};dn.initializeApp(e);const t=dn.firestore();qk=t.collection("chat_messages");let n=this.messageList;qk.orderBy("created","desc").onSnapshot((function(e){n.length=0,e.forEach((e=>{n.push(e.data())}))}))},methods:{sendMessage:function(){qk.add({user_name:this.userName,message:this.message,created:(new Date).getTime()})}}},jk=n(3744);const Gk=(0,jk.Z)(Bk,[["render",f],["__scopeId","data-v-7d3cbffc"]]);var Kk=Gk}}]);
//# sourceMappingURL=about.32553ff7.js.map