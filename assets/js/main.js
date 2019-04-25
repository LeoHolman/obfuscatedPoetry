const something = document.getElementById("something");
const afraid = document.getElementById("afraid");
const darkness = document.getElementById("darkness");
const silence = document.getElementById("silence");
const night = document.getElementById("night");
const something = document.getElementById("crawled");
const afraid = document.getElementById("light");
const darkness = document.getElementById("seclusion");
const silence = document.getElementById("trees");
const night = document.getElementById("voice");
const something = document.getElementById("breeze");
const afraid = document.getElementById("crowding");
const darkness = document.getElementById("dismay");
// const silence = document.getElementById("silence");

var text;
var clicked = false;
var lastClicked;

function randomInt(highestPossibleNumber){
    return 1 + Math.round(Math.random() * (highestPossibleNumber - 1));
}


function wordToPicture(divID){
    if(lastClicked !== divID){
        if(lastClicked){
            pictureToWord(lastClicked);
        }
        let div = document.getElementById(divID);
        text = div.innerHTML;
        div.innerHTML = '';
        let newPictureNode = document.createElement("IMG");
        newPictureNode.src = `assets/images/${divID}/${divID}${randomInt(3)}.png`;
        div.appendChild(newPictureNode);
        clicked = true;
        lastClicked = divID;
        div.style = "filter: none;"
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
        div.style= "filter: blur(3px);"
    }
}

something.addEventListener("click", () => {
    wordToPicture("something");  
});

afraid.addEventListener("click", () => {
    wordToPicture("afraid");  
});

darkness.addEventListener("click", () => {
    wordToPicture("darkness");  
});

shadow.addEventListener("click", () => {
    wordToPicture("shadow");  
});

silence.addEventListener("click", () => {
    wordToPicture("silence");  
});

night.addEventListener("click", () => {
    wordToPicture("night");  
});

//add more event listeners