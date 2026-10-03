"use strict";var g=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(d){throw r=0,d}}};var h=g(function(F,y){"use strict";var l=require("@stdlib/assert-is-plain-object"),s=require("@stdlib/assert-has-own-property"),f=require("@stdlib/assert-is-ndarray-like"),q=require("@stdlib/assert-is-nonnegative-integer"),m=require("@stdlib/ndarray-base-assert-is-mostly-safe-data-type-cast"),w=require("@stdlib/ndarray-base-assert-is-order"),O=require("@stdlib/ndarray-shape"),p=require("@stdlib/ndarray-order"),c=require("@stdlib/ndarray-strides"),b=require("@stdlib/ndarray-base-data-buffer"),S=require("@stdlib/ndarray-base-dtype"),T=require("@stdlib/ndarray-base-shape2strides"),E=require("@stdlib/ndarray-base-strides2order"),j=require("@stdlib/ndarray-base-flatten-shape"),L=require("@stdlib/ndarray-base-assign"),M=require("@stdlib/ndarray-base-ctor"),R=require("@stdlib/ndarray-empty-like"),i=require("@stdlib/string-format"),o="row-major",k="column-major";function A(a,r){var d,e,t,v,n,u;if(!f(a))throw new TypeError(i("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(t=O(a),e={depth:t.length,order:o,dtype:S(a)},arguments.length>1){if(!l(r))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r));if(s(r,"depth")){if(!q(r.depth))throw new TypeError(i("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","depth",r.depth));e.depth=r.depth}if(s(r,"order"))if(r.order==="any")n=E(c(a)),n===1?e.order=o:n===2?e.order=k:e.order=p(a);else if(r.order==="same")e.order=p(a);else if(w(r.order))e.order=r.order;else throw new TypeError(i("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",r.order));if(s(r,"dtype")){if(!m(e.dtype,r.dtype))throw new TypeError(i("invalid option. First argument cannot be safely cast to the specified data type. Input data type: %s. Option: `%s`.",String(e.dtype),String(r.dtype)));e.dtype=r.dtype}}return u=R(a,{shape:j(t,e.depth),order:e.order,dtype:e.dtype}),v=t.length>0?T(t,e.order):[0],d=new M(e.dtype,b(u),t,v,0,e.order),L([a,d]),u}y.exports=A});var C=h();module.exports=C;
/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
