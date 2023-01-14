/// <reference path='fourslash.ts'/>

//// const /*foo*/foo = {
////   x: 3,
////   y: 4,
//// };
////
//// /** @typedef {keyof typeof foo} MyType */
//// /** @typedef {keyof foo} MyType */
//// /** @typedef {foo} MyType */

verify.baselineRename("foo", {});