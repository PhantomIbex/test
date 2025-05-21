var myText = document.getElementById("text");
myText.innerHTML = getSavedValue("text");


function saveValue(e){
	var id=e.id;
	var val=e.innerHTML;
	localStorage.setItem(id, val);
}

function getSavedValue (v){
	if (!localStorage.getItem(v)) {
		return "";
	}
	return localStorage.getItem(v);
}

function formatDoc(sCmd, sValue) {
  document.execCommand(sCmd, false, sValue); 
  myText.focus(); 
}