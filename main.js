const  citydate=document.querySelector(".citydate");
const submit=document.querySelector("#submit");
const city=document.querySelector("#city");


submit.addEventListener("click", (e)=> {
    e.preventDefault();
    var cityval=city.value;
    var d=new Date();
    var hour=d.getHours();
     var min=d.getMinutes();
     var day=d.getDay();
    citydate.innerHTML=`${cityval}
  
     <br>
     ${d}`
    ;
});
  