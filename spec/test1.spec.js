var Jasmine = require("jasmine");
var jasmine = new Jasmine();
var mylib = require("../src/test1");

jasmine.loadConfigFile('spec/support/jasmine.json');
jasmine.execute();

describe("Our test suite", function() {
    it("test1", function() {

        let x=5;
        let y=6;
        let z = mylib.add(x,y);

        expect(z).toBe(10);
    });
});






















function testmyadd() {

    let x = 3;
    let y = 7;

    let z = add(x,y);
    if(z != 10)
        console.log("fail");

}



function doit(x, y,z) {

    return x(y,z);

}

//var blah = multiply;

//console.log(doit(add, 7, 3));
