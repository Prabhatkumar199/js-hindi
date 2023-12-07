// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     //console.log(item);                      //forEach not return any value
//     return item
// })

// console.log(values);

 const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNum.filter((num) => {
//    return num > 5
// })
const newNums=[]
myNum.forEach((num) => {
    if (num>5) {
        newNums.push(num)
    }
});
console.log(newNums);