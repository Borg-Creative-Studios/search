function techHide(){
  var x = document.getElementByClas("tech");
if (x.style.display === "none") {
  document.getElementById("techHide").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("techHide").className = "buttonY_orange";
}
}
function softwareHide(){
  var x = document.getElementById("softwareHide");
if (x.style.display === "none") {
  document.getElementById("softwareButt").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("softwareButt").className = "buttonY_orange";
}
}
function googleHide(){
  var x = document.getElementById("googleHide");
if (x.style.display === "none") {
  document.getElementById("googleButt").className = "buttonY_green";
 x.style.display = "block";
} else {
 x.style.display = "none";
 document.getElementById("googleButt").className = "buttonY_orange";
}
}




/*function searching(){
  var x = document.getElementById("myUL");
if (x.style.display === "none") {
 x.style.display = "block";
} else {
 x.style.display = "none";
}
}*/
function searched(){
document.getElementById("searchButt").style.visibility = "hidden";
document.getElementById("myUL").style.visibility = "visible";
document.getElementById("topbutton").style.visibility = "visible";
document.getElementById("myInput").style.width = "90%";
document.getElementById("myUL").style.height = "100%";
}
