const marval_heros=["thor","ironman","spidermn"]
const dc_heros=["superman","flash","batman"]

marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);


// const allheros =marval_heros.concat(dc_heros)
// console.log(allheros);

//************or***************** */

const all_new_heros=[...marval_heros,...dc_heros]

//console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_arry=another_array.flat(Infinity) //1  or 2 or 3,or Infinity
console.log(real_another_arry);

console.log(Array.isArray("prabhat"));
console.log(Array.from({name: "prabhat"}));//intresting

let scroe1 =100
let scroe2 =200
let scroe3 =300
console.log(Array.of(scroe1,scroe2,scroe3));