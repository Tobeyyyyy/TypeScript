//// [restParameterInferenceContextual.ts]
const doSomething = <Args extends unknown[]>(
    fn1: (aNumber: number, ...rest: Args) => void,
    fn2: (aNumber: number, ...rest: Args) => void,
) => {}


// OK, no contextual types
doSomething(
    (explicit: number, rest: string) => {}, // Args = [string]
    () => {},
)

// OK (both contain contextually typed arg)
doSomething(
    (contextual, rest: string) => {}, // Args = [string]
    (contextual) => {},
)

// Contextually type only fn1 - Not ok
doSomething(
    (contextual, rest: string) => {}, // ERROR
    () => {}, // Args = []
)
doSomething(
    (contextual, rest: string) => {}, // ERROR
    (explicit: number) => {}, // Args = []
)

//// [restParameterInferenceContextual.js]
var doSomething = function (fn1, fn2) { };
// OK, no contextual types
doSomething(function (explicit, rest) { }, // Args = [string]
function () { });
// OK (both contain contextually typed arg)
doSomething(function (contextual, rest) { }, // Args = [string]
function (contextual) { });
// Contextually type only fn1 - Not ok
doSomething(function (contextual, rest) { }, // ERROR
function () { });
doSomething(function (contextual, rest) { }, // ERROR
function (explicit) { });
