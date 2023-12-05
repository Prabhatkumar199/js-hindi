//if
// const isuserloggedIn= true
// const temperature =41
// if (temperature<50) {
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater thaan 50");
// }

//>,  <,  <=, >=, ==, !=, ===, !==

// const score=200

// if (score>100) {
//     const power="fly"                      //var or const deffrence
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

//********************************************************************************** */

// const balance =1000
// //if (balance>500)console.log("test"),console.log("text2");  //not a right code 

// if (balance<500) {
//     console.log("less than");
//     }else if(balance<750){
//         console.log("less than 750");
//     }else{
//         console.log("less than 1200");
//     }

const userLoggedIn =true
const debitCard = true
const userLoggedInFromGooge=false
const userLoggedInFromemail=true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy cource");
}
if(userLoggedInFromGooge || userLoggedInFromemail){
    console.log("usr logged in");
}