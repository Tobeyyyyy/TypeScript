
const doSomething = <Args extends unknown[]>(
    fn1: (aNumber: number, ...rest: Args) => void,
    fn2: (aNumber: number, ...rest: Args) => void,
) => {}


// // OK, no contextual types
// doSomething(
//     (explicit: number, rest: string) => {}, // Args = [string]
//     () => {},
// )

// OK (both contain contextually typed arg)
doSomething(
    (contextual, rest: string) => {}, // Args = [string]
    (contextual) => {},
)

// // Contextually type only fn1 - Not ok
// doSomething(
//     (contextual: number, rest: string) => {}, // ERROR
//     () => {}, // Args = []
// )

// doSomething(
//     (contextual, rest: string) => {}, // ERROR
//     (explicit: number) => {}, // Args = []
// )