


let p1=new Promise((resolve,reject)=>{
    if(5>4){
        resolve("Async ops successful");
    }
    else{
        reject(("Async ops Failed"))
    }
});
console.log(p1);

p1.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

function foo(){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>resolve("Hello world"),5000);
    })
}
foo().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

function mul(num){
    return new Promise((resolve,reject)=>{
          setTimeout(()=>resolve(2*num),2000);
        //   setTimeout(()=>reject("rejected"),2000);
    })
}
mul(8).then((va1)=>{
    console.log(va1);
    return mul(va1);
}).then((va2)=>{
    console.log(va2);
    return mul(va2);
}).then((va3)=>{
    console.log(va3);
}).catch((error)=>{
    console.log(error);
})