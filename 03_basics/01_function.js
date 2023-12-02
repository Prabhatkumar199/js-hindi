// console.log("P");
// console.log("R");
// console.log("A");
// console.log("B");
// console.log("H");
// console.log("A");
// console.log("T");

function myname(){
console.log("P");
console.log("R");
console.log("A");
console.log("B");
console.log("H");
console.log("A");
console.log("T");
}
// myname();

// function addtwonumber(num1,num2){
//  console.log(num1 + num2);
// }
function addtwonumber(num1,num2){
//    let result=num1+num2
//      return result
  return num1 +num2
   }

const result=addtwonumber(3,4) 
// console.log("result:",result);

function loginUserMessage(username ="sam "){
    // if(username===undefined)
        if(!username){
        console.log("plese inter a user name");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("prabhat "));
// console.log(loginUserMessage("rajan"));

function calculateCartPrice(val1, val2,...num1){  //... is rest oprator
    return num1
}
console.log(calculateCartPrice(200,300,400,2000));

const user={
    username:"prabhat",
    price:1999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));