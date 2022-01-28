

function astro(){
     try{
var sign=document.getElementById('signs').value;
let day=document.getElementById('day').value;   


const URL = `https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`;
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const data = json;
   
    console.log(data);
    document.getElementById('date').value=data.current_date;
    document.getElementById('compat').value=data.compatibility;
    document.getElementById('ltime').value=data.lucky_time;
    document.getElementById('lnumber').value=data.lucky_number;
    document.getElementById('color').value=data.color;
    document.getElementById('drange').value=data.date_range;
    document.getElementById('mood').value=data.mood;
    document.getElementById('descrip').value=data.description;
});
}catch(error){
    console.log(error);
}
}

