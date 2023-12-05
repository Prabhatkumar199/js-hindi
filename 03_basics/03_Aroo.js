const user ={
    username:"prabhat",
    price: 999,

    welcomeMassage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
}
// user.welcomeMassage()
// user.username="sam"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     let username ="prabhat"
//     console.log(this.username);
// }
// chai()

// const chai =function(){
//     let username="prabhat"
//     console.log(this.username);
// }
// chai()

const chai=() =>{          //Aroo function
    let username="prabhat"
    console.log(this.username);
}
//chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

//const addTwo=(num1,num2)=> num1+num2

 //const addTwo=(num1,num2)=>(num1+num2)

 const addTwo=(num1,num2)=>({username:"prabhat"})

console.log(addTwo(3,4));

//const myArray=[2,3,4,5,6,]
//myArray.forEach()