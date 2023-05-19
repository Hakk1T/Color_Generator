const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; 

const btn = document.getElementById("btn");
const color = document.querySelector(".color");  

btn.addEventListener("click", function() {
let HexColor = "#";
for(let i = 0; i<6; i++) {
    HexColor += hex[getRandomnumber()];  
}
color.textContent = HexColor;
document.body.style.backgroundColor = HexColor;
});

function getRandomnumber () {
    return Math.floor(Math.random()* hex.length);
}