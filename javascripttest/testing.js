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

//Get the button with id mybutt and store it away
ourButton = document.getElementById("mybutt");
//tell buttong which event listener is attached to it wehn the user clicks on it 
ourButton.addEventListener("click",onClick);
//write evenet handler
function onClick(){
    ourText.innerHTML = "boop";
}