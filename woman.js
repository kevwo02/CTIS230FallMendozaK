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

}

function hideBigImage(){
    mybigimages.classList.add("dontshow");
}



