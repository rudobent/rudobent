function createCustomElementFromProperties(properties){
	var content = document.createElement("div");
	for(var property in properties){
	var labello = document.createElement("td");                 // Create a <p> element
	labello.innerHTML = property+":";
	var tmpnode = document.createElement("input");
	tmpnode.value = properties[property]
	tmpnode.j_type = property
	content.appendChild(labello)
	content.appendChild(tmpnode)
	tmpnode.id = "text"
  }
  return content
}
function RetrieveObjFromCustomElement(custom_element){
	var tmpobj = {};
  for(var i = 0; i < custom_element.childNodes.length; i++){
	var j_type = custom_element.childNodes[i].j_type
	tmpobj[j_type] = custom_element.childNodes[i].value	
  }
  return tmpobj
}
function FillCustomElementFromProperties(tmpobject, custom_element){
  for(var i = 0; i < custom_element.childNodes.length; i++){
	var j_type = custom_element.childNodes[i].j_type
	custom_element.childNodes[i].value = tmpobject[j_type]
  }
	return custom_element
}
function addPopup(layer) {
	var content = createCustomElementFromProperties(layer.feature.properties)
	content.addEventListener("keyup", function () {
	layer.feature.properties = RetrieveObjFromCustomElement(content);
			});
	layer.on("popupopen", function () {
	content = FillCustomElementFromProperties(layer.feature.properties, content);
  });
  layer.bindPopup(content);
}
