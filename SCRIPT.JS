const ekran=document.getElementById("ekren");
function Rovno(){
    ekran.value=eval(ekran.value)
}

function chistka(){
    ekran.value="";
}

function delet(){
    ekran.value=ekran.value.slice(0,-1)
}