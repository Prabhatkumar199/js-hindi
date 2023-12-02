//const tinderUser=new Object()
const tinderUser={}

tinderUser.Id="123456"
tinderUser.name="prabhat"
tinderUser.isLogginIn=false

//console.log((tinderUser));

const regularUser={
    email:"kumar123@gmail.com",
    fullname:{
        userfullname:{
        firstname:"prabhat",
        lastname:"kumar",
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

//const obj4={obj1,obj2}
//const obj4=Object.assign({},obj1,obj2,obj3)

const obj4={...obj1,...obj2}
console.log(obj4);

const users=[
    {
        id:1,
        email:"p@gmail.com"
    },
    {
        id:1,
        email:"p@gmail.com"
    },   
    ]
    users[1].email
    console.log(tinderUser);

    console.log(Object.keys(tinderUser));
    console.log(Object.values(tinderUser));
    console.log(Object.entries(tinderUser));

    console.log(tinderUser.hasOwnProperty('isLoggin'));
    