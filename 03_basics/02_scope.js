// var c=300
let a=300

if (true) {
    let a=10
    const b=20
    console.log("INNER:",a);
}
// for (let i = 0; i < array.length; i++) {
    // const element = array[i];
    
// }
//  console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="hitesh"
    function Two(){
        const website="youtube"
        console.log(username);
    }
// console.log(website);
Two()
}

//one()

if (true) {
    const username="hitesh"
    if (username === "hitesh") {
        const website=" youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

//****************intresting************ */

addone(5)
function addone(num){
    return num +1
}

//addTwo()
const addTwo=function(num){     //hoisting Example
return num + 2
}

