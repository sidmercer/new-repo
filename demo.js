

function checkvalue(){
const data= document.demoform.uname.value;
if(data=="")
document.getElementById('show').innerHTML='name cant be blank';
console.log("data must be there");
}