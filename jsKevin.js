myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

//in the reasoning page, the first in the ordered list changes color
function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize="20px";
}

myitem.addEventListener("mouseout", onmouseout);

function onmouseout(){
    myitem.style.color="cornflowerblue";
    myitem.style.fontSize="2vw";
}