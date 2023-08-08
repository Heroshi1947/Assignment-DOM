
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

   
 