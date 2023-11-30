const name="prabhat"
const repoCount=50
const dob="3/4/1997"
//console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}and my dob ${dob}`);

 const gameName = new String('prabhat-Hc')
 console.log(gameName[0]);
// console.log(gameName .__proto__);
console.log(gameName .toUpperCase());
console.log(gameName .charAt(2));
console.log(gameName .indexOf('t'));


const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="  prabhat    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://reimagined-train-pjjpqw%77pjqc6rpw.github.dev"
console.log(url.replace('%77','-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));