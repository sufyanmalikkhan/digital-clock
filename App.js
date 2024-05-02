let hours = document.getElementById("hours");
let minuts = document.getElementById("minuts");
let second = document.getElementById("second");

let timeinterval ;
function startTime (){
  timeinterval = setInterval(function (){
    let date = new Date()
    hours.innerText = date.getHours();
    minuts.innerText = date.getMinutes();
    second.innerText = date.getSeconds();
  },1000);
}
function stopTime(){
  clearInterval(timeinterval)
}


