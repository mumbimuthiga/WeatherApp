const  citydate=document.querySelector(".citydate");
const submit=document.querySelector("#submit");
const city=document.querySelector("#city");
const name=document.querySelector(".name");
const desc=document.querySelector(".desc");
const weather=document.querySelector(".weather");
const dat=document.querySelector(".date");


submit.addEventListener("click", (e)=> {
    e.preventDefault();
    var cityval=city.value;
    var d=new Date();
    var hour=d.getHours();
     var min=d.getMinutes();
     var day=d.getDay();
    citydate.innerHTML=`${cityval}
  
     <br>
    `
    ;
    dat.innerHTML=`${d}`;
    const dd = document.querySelector('#degrees');
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityval+'&appid=c4c8bbf816b272d30cd4ff0a4f56d6b5', {mode: 'cors'})
      .then(response=>response.json()) 
        //return response.json();
    
      .then(data=>{
          console.log(data)
var nameValue=data['name'];
var tempValue=data['main']['temp'];
var descValue=data['weather'][0]['description'];
name.innerHTML=`${tempValue}`;
desc.innerHTML=`${descValue}`;
temp.innerHTML=`${tempValue}`;
      })
       

      .catch(err=>("err"))
    
  
});
  