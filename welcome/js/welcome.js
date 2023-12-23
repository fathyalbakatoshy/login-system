let ele = document.querySelector("#display")
let btn = document.querySelector("#btn")

let userName;
if (sessionStorage.getItem("username") == null) {
  userName = ""
} else {
  userName = JSON.parse(sessionStorage.getItem("username"))
}
ele.innerHTML = `<h2 class="text-white">${userName}</h2>`


btn.addEventListener("click" ,function () {
  window.open("/index.html", "_parent");
})