const userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't hsve user email");
}

//truthy or falshy value
//falshy value
//false,0,-0,BigInt,0n,"",null,undefiend.NaN
//truthy
//"0",'false'," ",[],{},function(){},


// if (userEmail.length === 0){
//     console.log("array is empty");
// }



const emptyobj={}                     //detect obj empty or not

if (Object.keys(emptyobj).length===0) {
    console.log("object is empty");
}

//Nullish coalescing Operater (??): null undefined

let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 15
 val1=null ?? 10 ?? 20

 console.log(val1);
 
//***************************************************************** */
 //Terniary operator

 //condition ? true : false
 const iceTeaPrice = 100
 iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");