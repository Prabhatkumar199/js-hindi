//singlrton(object)

//object literals

const mySym=Symbol("key1")

const Jsuser={
    name:"prabhat",
    [mySym]:"mykey1",
    age:18,
    location:"delhi",
    email:"kprabhat55@gmail.com",
    isloggin:false,
    lastloginDays:["monday","friday"]
}
console.log(Jsuser.email);
console.log(Jsuser.location);
console.log(Jsuser.age);
console.log(Jsuser[mySym]);

Jsuser.email ="rajan@gmail.com"
//Object.freeze(Jsuser)
Jsuser.email="rajan@gmail.com"
//console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("hello js user");
}
Jsuser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());