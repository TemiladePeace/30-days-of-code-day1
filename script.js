var num = document.getElementById("number");

function changeColor(){
    if (Number(num.innerHTML) > 0 ){
        num.style.color= "green";
    } else if(Number(num.innerHTML) < 0 ){
        num.style.color= "red";
    } else {
        num.style.color= "black";
    }
};

function addCount() {
    num.innerHTML =  Number(num.innerHTML) + 1;
    changeColor();
};
function lowerCount() {
    num.innerHTML =  Number(num.innerHTML) - 1;
    changeColor();
};