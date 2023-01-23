
// @target: es5

async function test(r: any) {
    if (r) {
        var a = new Error();
    }
    else if (r)
    {
        var a: Error;
    }
}