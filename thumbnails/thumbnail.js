// Grab the largeview and card1 elements to manipulate later

mybigimage = document.getElementById("largeview");
card1 = document.getElementById("card1");

// make something happen when we click on them

card1.addEventListener("click", makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

//have the document hide the big image whenever the user presses any key

document.addEventListener("keyup", hideBigImage);


function makeBigImage() {
    // first be sure that the largeview element has no leftover HTML
    mybigimage.innerHTML = '';
    // add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    bigimage.src ="images/2_of_clubs.png";
    //make the new element a child of 
    mybigimage.appendChild(bigimage);
    //remove the dontshow class that the div element is displayed
    mybigimage.classList.remove("dontshow");
}

function hideBigImage(){
    mybigimage.classList.add("dontshow");
}

