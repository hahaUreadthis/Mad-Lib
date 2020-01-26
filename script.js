document.getElementById('m').classList.add('active');

const button = document.getElementById("gogo");

button.addEventListener("click", function(){
  const selected = document.getElementById("selector").value;
  console.log(selected);
  window.location.replace("./" + selected + ".html");
});

function onClicke() {
  
  document.getElementById("aa").innerHTML = document.getElementById("exam").value;
  document.getElementById("ab").innerHTML = document.getElementById("ple").value
  document.getElementById("ac").innerHTML = document.getElementById("ok").value
   var element = document.getElementById("m");
  element.classList.add("not-active");
}
function hideStuff(){
  var element = document.getElementById("m").classList.remove("not-active")
}

