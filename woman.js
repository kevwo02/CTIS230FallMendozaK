mybigimages = document.getElementById("bigview");
hero = document.getElementById("hero");


hero.addEventListener("click", makesBigImage);
mybigimages.addEventListener("click", hideBigImage);


function makesBigImage() {
    mybigimages.innerHTML = '';
    bigimage = document.createElement("img");
    bigimage.src ="images/bigthemis.jpg";
    mybigimages.appendChild(bigimage);
    mybigimages.classList.remove("dontshow");
    bigimage.style.width="50%"
    bigimage.style.height="30%"

}

function hideBigImage(){
    mybigimages.classList.add("dontshow");
}



