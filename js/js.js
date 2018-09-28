var main = document.getElementById("main");
var item = document.getElementById("item");
var myList = document.getElementById("list");
var del = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");
  
function addItem(){
    var newLi = document.createElement("li")
    newLi.innerHTML = "новая задача";
    newLi.className = "item";
    myList.appendChild(newLi);
    popup.style.display = "none";
}

function delItem(){
    myList.removeChild(del[0]);
    if(del.length == 0){
        popup.style.display = "block";
    }
}
function closePopup(){
    popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);