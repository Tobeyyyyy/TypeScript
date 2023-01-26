/// <reference path='fourslash.ts' />

// repro #52418

////const /*x*/fn/*y*/ = () =>
////	async () => {};

function fn() {
    return

        async () => {      }
}

goTo.select("x", "y");
edit.applyRefactor({
    refactorName: "Convert arrow function or function expression",
    actionName: "Convert to named function",
    actionDescription: "Convert to named function",
    newContent: `function fn() {
    return async () => {};
}`,
});