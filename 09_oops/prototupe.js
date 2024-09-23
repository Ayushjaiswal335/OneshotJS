// let myName = "Ayush    "

// console.log(myName.trueLength);

let hero = ["spiderman","superMan"]

let myHero = {
        thor : "Lightnimg",
        spiderMan : "webSoot",

        getSpiderPower : function(){
                console.log(`spider powe is ${this.spiderMan}`);
        }
}

Object.prototype.Ayush = function(){
        console.log(`Ayush is present in all object`);
}
Array.prototype.heyAyush = function(){
        console.log(`Ayush Says hello`);
}

myHero.Ayush()
hero.Ayush()
hero.heyAyush()

// imheritance