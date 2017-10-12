

define(["require", "exports", "Observable"], function (r, e, sym) {
    console.log("symbol in define");
    var f = {};
    f.me = "i am";    
    console.log(r);
    console.log(e);
    console.log(sym);
    console.log(sym.getSymbolObservable);
    e.f = f;
});
