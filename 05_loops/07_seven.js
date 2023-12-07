const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },3)

const myTotal = myNums.reduce((acc,curr)=>acc + curr, 0)

console.log(myTotal);


const shoppingCart =[
    {
        itemName: "Java cuurse",
        price: 99
    },
    {
        itemName: "js cuurse",
        price: 999
    },
    {
        itemName: "Cpp cuurse",
        price: 9999
    },
]

const priceToPay=shoppingCart.reduce((acc,item) => item.price,0)

console.log(priceToPay);