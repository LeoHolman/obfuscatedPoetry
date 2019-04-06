const path = document.getElementById("path");
const darkness = document.getElementById("darkness");
const trudge = document.getElementById("trudge");
const nightmare = document.getElementById("nightmare");

var text;
var clicked = false;
var lastClicked;

function wordToPicture(divID){
    if(lastClicked !== divID){
        if(lastClicked){
            pictureToWord(lastClicked);
        }
        let div = document.getElementById(divID);
        text = div.innerHTML;
        div.innerHTML = '';
        let newPictureNode = document.createElement("IMG");
        newPictureNode.src = `assets/images/${divID}/${divID}1.jpg`;
        div.appendChild(newPictureNode);
        clicked = true;
        
        lastClicked = divID;

    }
}

function pictureToWord(divID){
    if(clicked){
        let div = document.getElementById(divID);
        while(div.firstChild){
            div.removeChild(div.firstChild);
        }
        div.innerHTML = text;
        clicked = false;
    }
}

path.addEventListener("click", () => {
    wordToPicture("path");  
});

darkness.addEventListener("click", () => {
    wordToPicture("darkness");  
});

trudge.addEventListener("click", () => {
    wordToPicture("trudge");  
});

nightmare.addEventListener("click", () => {
    wordToPicture("nightmare");  
});
