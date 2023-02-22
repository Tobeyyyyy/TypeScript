// repro from #51676

class C1<T> {
    get x(): string { return '' }
    set x(val: string | T) {}
}
const c = new C1<string[]>()
c.x = [] as string[]

interface C2<T> {
    get y(): string
    set y(val: string | T)
}
declare const d: C2<string[]>
d.y = [] as string[]