//button One

var button = document.getElementById("S2btn-1"),
    S2details = document.getElementById("S2info");

button.addEventListener("click", function(){
  if (S2details.style.display == 'none') {
    S2details.style.display = 'block';
  } else {
    S2details.style.display = 'none';
  }
}, false);