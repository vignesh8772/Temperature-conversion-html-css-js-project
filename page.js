
let box1=document.getElementById("box1");
let fahrenheit1=document.getElementById("fahrenheit");
let celsius1=document.getElementById("celsius");
let result=document.getElementById("result");
let temp;
function conversion(){

    if(fahrenheit1.checked){
        temp=Number(box1.value);
        result.textContent= (temp*9/5+32).toFixed(1)+"°F";

    }
    else if(celsius1.checked){
        temp=Number(box1.value);
        result.textContent=((5/9)*(temp-32)).toFixed(1)+"°C";
    }
    else{
        result.textContent="you select fahrenheit or celsius must. ";
    }
}