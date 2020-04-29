//JazzBlocksFunctions.js
//discourage selection with the "disableselect" function!
//After downloading JazzBlocks
//Import JazzBlocksFunctions via below code
//<script type="text/javascript" src="./JazzBlocks/JazzBlocksFunctions.js"></script>

//JazzBlock DisableSelect (start)
function disableselect(e) {
  return false
}

function reEnable() {
  return true
}

document.onselectstart = new Function ("return false")

if (window.sidebar) {
  document.onmousedown = disableselect
  document.onclick = reEnable
}
//end

//JazzBlock back
function goBack(){
  window.history.back();
}
//end
//JazzBlock forward
function goForward(){
  window.history.forward();
}
//end
//JazzBlock Origin
function Origin(){
  var x = location.origin;
  alert(x);
}
//end
