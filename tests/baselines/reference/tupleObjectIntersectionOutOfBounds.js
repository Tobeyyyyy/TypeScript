//// [tupleObjectIntersectionOutOfBounds.ts]
type TupleIntersection1 = [string, number] & { x: string };

declare const t1: TupleIntersection1;

const a = t1[0]; // string
const b = t1[1]; // number
const c = t1[2]; // any + noImplicitAnyError


t1[2] = "abc" // noImplicitAnyError

type TupleIntersection2 = { [idx: number] : number} | [string]

declare const t2: TupleIntersection2

const d = t2[0] // number | string
const e = t2[1] // number
const f = t2[2] // number

//// [tupleObjectIntersectionOutOfBounds.js]
var a = t1[0]; // string
var b = t1[1]; // number
var c = t1[2]; // any + noImplicitAnyError
t1[2] = "abc"; // noImplicitAnyError
var d = t2[0]; // number | string
var e = t2[1]; // number
var f = t2[2]; // number
