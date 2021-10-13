
var x = document.getElementById("sidebar");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);

function myFunction() {
 document.getElementById("sidebar").style.backgroundColor = "white";
}
function mySecondFunction() {
    document.getElementById("sidebar").style.backgroundColor = "yellow";
}
