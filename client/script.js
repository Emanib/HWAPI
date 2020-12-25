// //edit your code 
fetch('http://localhost:3000/user?name="Eman"',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})



fetch('http://localhost:3000/user/Eman',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({massage: "hello from the other side", name: 'Eman'}),
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})

fetch('http://localhost:3000/user/Eman',{
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
      },
}).then(res=>res.json()).then(val=>console.log(val))
.catch(err=>{
    console.log(err);
})