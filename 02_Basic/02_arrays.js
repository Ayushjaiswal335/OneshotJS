
const marvel_heros = ["thor","Ironman","spiderman"]
const dc_hero = ["Superman","flash","batman"]

const newHeros = marvel_heros.concat(dc_hero)
console.log(newHeros);

// spread operators
const newHero = [...marvel_heros,...dc_hero]
// console.log(newHero);

const anotherArr = [1,2,3,[3,3,3,4],5,4,[45,6,[65,45,3]]]
const newAnotherArr = anotherArr.flat(Infinity)
// console.log(newAnotherArr);

const num1 = 100
const num2 = 200
const num3 = 300
// console.log(Array.of(num1,num2,num3));