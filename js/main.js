// Mathieu François - Srinjoy Sanyal 5C 

//---------------- On load ---------------------

if (document.getElementById("naissance")) {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear() - 3;

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  document.getElementById("naissance").max = year + "-" + month + "-" + day;
}

//-----------------------------------------------


//---------------- Top button -------------------
topButton = document.getElementById("topButton"); //Assigne le bouton a une variable

window.onscroll = function () { scrolling() }; // quand l'utilisateur descend de 20px, l'afficher

function scrolling() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// quand on clique sur le bouton, aller en haut de page
function goToTop() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Firefox, Chrome,...
}
//-----------------------------------------------


// -- déplace les ancres à cause de la navbar --
var shiftWindow = function () { scrollBy(0, -130) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
//-----------------------------------------------


//-----------------Easter Egg--------------------
function flocons() {

  var audio = new Audio("images/Dean Martin - Let it Snow!.mp3");
  audio.play();
  audio.loop = true;


  var parentDiv = document.createElement("div")
  parentDiv.id = "snowflakes"
  document.getElementById("neige").appendChild(parentDiv);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);

  var div = document.createElement("div");
  div.innerHTML = "❆";
  div.className = "snowflake";
  document.getElementById("snowflakes").appendChild(div);
}

//-----------------------------------------------


//---------------- Contact -------------------

function contactSubmit(form) {

  var recap = "Votre message à bien été envoyé. \n" + form.familyName.value + " " + form.givenName.value + "\n" + form.email.value + "\n" + form.phone.value + "\n" + form.message.value;
  alert(recap)
  return true

}

//-----------------------------------------------


//---------------- Inscription -------------------

function inscriptionFunc(form) {

  var recap = "Votre inscription au " + form.BadTen.value +  " à bien été prise en compte. \n" + form.familyName.value + " " + form.givenName.value + "\n" + form.naissance.value + "\n" + form.email.value + "\n" + form.phone.value + "\n" + form.street.value + "\n" + form.postal.value + " " + form.city.value + "\n" + form.country.value;
  alert(recap)
  return true

}

//-----------------------------------------------
