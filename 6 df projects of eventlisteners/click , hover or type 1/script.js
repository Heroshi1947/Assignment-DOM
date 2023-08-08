var element = document.getElementById("myElement");

element.onclick = function() {
  element.style.backgroundColor = "blue";
  element.innerHTML = "Clicked!";
};

element.ondblclick = function() {
  element.style.backgroundColor = "green";
  element.innerHTML = "Double-clicked!";
};

element.onmouseover = function() {
  element.style.backgroundColor = "yellow";
  element.innerHTML = "Mouseover!";
};

element.onmouseout = function() {
  element.style.backgroundColor = "red";
  element.innerHTML = "";
};

document.onkeypress = function(event) {
  element.style.backgroundColor = "purple";
  element.innerHTML = "Key pressed: " + event.key;
};