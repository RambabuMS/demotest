//CRUD in javascript
//C- create - POST
// u- updtae-PUT
//d-delete-DELETE


//server:dummy server
var url='https://61d28670da87830017e59521.mockapi.io/users';
//GET-Read
//R-Read-GET

function getdata(){
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>console.log(data))
    .catch((error)=>console.log(error));
}
// getdata();

function createdata(){
    let data={
        name:"Ram",
        email:"ram@guvi.in"
    };
  fetch(url,{ 
      method:"POST",
      body:JSON.stringify(data),
      headers:{
          "Content-type":"application/json;charset=UTF-8",
      }
  }).then((resp)=>resp.json())
  .then((data)=>console.log(data))
  .catch((error)=>console.log(error)); 
}
//createdata();

function updatedata(){
    let data={
        name:"raj",
        email:"raj@guvi.in"
    };
  fetch(url+"/5",{ 
      method:"PUT",
      body:JSON.stringify(data),
      headers:{
          "Content-type":"application/json;charset=UTF-8",
      }
  }).then((resp)=>resp.json())
  .then((data)=>console.log(data))
  .catch((error)=>console.log(error)); 
}
//updatedata();

function deletedata(){
    let data={
        name:"raj",
        email:"raj@guvi.in"
    };
  fetch(url+"/5",{ 
      method:"DELETE"
  }).then((resp)=>resp.json())
  .then((data)=>console.log(data))
  .catch((error)=>console.log(error)); 
}
deletedata();