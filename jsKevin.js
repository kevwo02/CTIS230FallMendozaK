myitem = document.getElementById("firsttest");

myitem.addEventListener("click", onClick);

//in the reasoning page, the first in the ordered list changes color
function onClick() {  
    myitem.style.color = "green";  
    myitem.style.fontSize="20px";
}

myitem.addEventListener("mouseout", onmouseout);

// use the first in the ordered list, I reverted the color and size
//to its original view
function onmouseout(){
    myitem.style.color="cornflowerblue";
    myitem.style.fontSize="2vw";
}

//will add the button to the second in the list

thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

function onButtonClick() {  
    otheritem.style.color = "red";  
}

// this button makes changes to 3 item on the list , 
//making it orange and increasing the font
thebutton2 = document.getElementById("thebutton2");  
otheritem2 = document.getElementById("test2");

thebutton2.addEventListener("click", onButtonClick2);


function onButtonClick2() {  
    otheritem2.style.color = "orange";  
    otheritem2.style.fontSize="14pt";
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}

 
//adding another button to the 3rd item on the list
//it changes the color brown and makes the background of the li black

thebutton3 = document.getElementById("button3");  
otheritem3 = document.getElementById("test3");

thebutton3.addEventListener("click",onButtonClick3)

function onButtonClick3(){
    otheritem3.style.color = "brown";
    otheritem3.style.backgroundColor="black";
}






mybigimage = document.getElementById("largeview");
hero = document.getElementById("hero");


hero.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);




function makeBigImage() {
    mybigimage.innerHTML = '';
    bigimage = document.createElement("img");
    bigimage.src ="images/bigthemis.jpg";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
}

function hideBigImage(){
    mybigimage.classList.add("dontshow");
}



