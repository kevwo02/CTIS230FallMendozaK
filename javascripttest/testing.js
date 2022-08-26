    //Step 0: What we do we want to do? Change the color and the size and the content of the text when the user moves over it, and change it back when the user moves off the text//

//Step 1: get the element that we want to affect and store it away so that we're ready to respond to the event//

ourText = document.getElementById("newtext");
//This code asks the document for the element that has id newtext and stores the response in somehting named ourText.//
ourText.addEventListener("mouseover", onMouseOver);
//Heres our event listener//
function onMouseOver(){
ourText.style.color = "green"
  ourText.style.fontSize = "3em"
  ourText.innerHTML = "And we changed the text";
}

ourText.addEventListener("mouseout", onmouseout);
function onmouseout(){
  ourText.style.color = "black";
  ourText.style.fontSize = "1em"; //standerd font size is 1 em
  ourText.innerHTML = "<strong> And we back </storng>";
}

//Need another event listener to respond to the mouse moving off
myCard = document.getElementById("card");
//Get the button with id mybutt and store it away
ourButton = document.getElementById("mybutt");
//tell buttong which event listener is attached to it wehn the user clicks on it 
ourButton.addEventListener("click",onClick);
//write evenet handler
function onClick(){
    ourText.innerHTML = "boop"
    ourText.style.fontSize="2em";
    myCard.style.display="block";
}

//get the textfield with the id imput
ourInput = document.getElementById("input"); //contains the new text
ourHeading = document.getElementById("header"); // what we are going to modify

//tell the text field what event listener is connected to its event

ourInput.addEventListener("change", changeText);
ourInput.addEventListener("blur", changeText);
//the text field has focus when we're typing into it
//when we click out of it, the text field loses foucs, and that generates
//a blur event

function changeText(){
  //get the text that the user entered
  newText = ourInput.value; //we ask our ourInput for its value , which is the entered text
  ourHeading.innerHTML=newText;
}

myCardImage = document.getElementById("cardimage");
myCardImage.addEventListener("click", owlImage);

function owlImage() {  
  if (myCardImage.style.position == "")
myCard.style.position = "absolute";
myCard.style.top = "100px";
myCard.style.left= "100px";
myCardImage.style.width = "80px";
myCardImage.src="images/owl.jpg";
}

// else {// otherwise, the card is moved and small
//   myCard.style.position = ""; // "" for a property value means use the original value when the page loaded
//   myCard.style.top = "";
//   myCard.style.left = "";
//   myCardImage.style.width = "auto"; // return the image size to its full value
//   myCardImage.src = "images/blueflower.jpg";
// }

