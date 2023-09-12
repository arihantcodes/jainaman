burger = document.querySelector(".burger");
navitem = document.querySelector(".navitem");

burger.addEventListener("click", () => {
  navitem.classList.toggle("v-class");
  log;
});

const login=document.getElementById("login")
login.addEventListener("click",function(){
  window.location.assign("login.html")
})