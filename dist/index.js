"use strict";var l=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var g=l(function(M,h){"use strict";var q=require("@stdlib/assert-is-plain-object"),u=require("@stdlib/assert-has-own-property"),y=require("@stdlib/assert-is-ndarray-like"),f=require("@stdlib/assert-is-nonnegative-integer"),m=require("@stdlib/ndarray-base-assert-is-order"),w=require("@stdlib/ndarray-shape"),o=require("@stdlib/ndarray-order"),O=require("@stdlib/ndarray-strides"),c=require("@stdlib/ndarray-base-data-buffer"),b=require("@stdlib/ndarray-base-dtype"),T=require("@stdlib/ndarray-base-shape2strides"),j=require("@stdlib/ndarray-base-strides2order"),E=require("@stdlib/ndarray-base-flatten-shape"),L=require("@stdlib/ndarray-base-assign"),R=require("@stdlib/ndarray-base-ctor"),S=require("@stdlib/ndarray-empty-like"),i=require("@stdlib/string-format"),p="row-major",k="column-major";function A(a,r){var v,e,t,s,d,n;if(!y(a))throw new TypeError(i("invalid argument. First argument must be an ndarray. Value: `%s`.",a));if(t=w(a),e={depth:t.length,order:p,dtype:b(a)},arguments.length>1){if(!q(r))throw new TypeError(i("invalid argument. Options argument must be an object. Value: `%s`.",r));if(u(r,"depth")){if(!f(r.depth))throw new TypeError(i("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","depth",r.depth));e.depth=r.depth}if(u(r,"order"))if(r.order==="any")d=j(O(a)),d===1?e.order=p:d===2?e.order=k:e.order=o(a);else if(r.order==="same")e.order=o(a);else if(m(r.order))e.order=r.order;else throw new TypeError(i("invalid option. `%s` option must be a recognized order. Option: `%s`.","order",r.order));u(r,"dtype")&&(e.dtype=r.dtype)}return n=S(a,{shape:E(t,e.depth),order:e.order,dtype:e.dtype}),s=t.length>0?T(t,e.order):[0],v=new R(e.dtype,c(n),t,s,0,e.order),L([a,v]),n}h.exports=A});var D=g();module.exports=D;
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
