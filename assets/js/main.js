const something = document.getElementById("something");
const afraid = document.getElementById("afraid");
const darkness = document.getElementById("darkness");
const silence = document.getElementById("silence");
const night = document.getElementById("night");
const crawled = document.getElementById("crawled");
const light = document.getElementById("light");
const seclusion = document.getElementById("seclusion");
const trees = document.getElementById("trees");
const voice = document.getElementById("voice");
const breeze = document.getElementById("breeze");
const crowding = document.getElementById("crowding");
const dismay = document.getElementById("dismay");
const hid = document.getElementById("hid");

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

crawled.addEventListener("click", () => {
    wordToPicture("crawled");
});

light.addEventListener("click", () => {
    wordToPicture("light");
});

seclusion.addEventListener("click", () => {
    wordToPicture("seclusion");
});

trees.addEventListener("click", () => {
    wordToPicture("trees");
});

voice.addEventListener("click", () => {
    wordToPicture("voice");
});

breeze.addEventListener("click", () => {
    wordToPicture("breeze");
});

crowding.addEventListener("click", () => {
    wordToPicture("crowding");
});

dismay.addEventListener("click", () => {
    wordToPicture("dismay");
});

hid.addEventListener("click", () => {
    wordToPicture("hid");
});

crawled.addEventListener("click", () => {
    wordToPicture("crawled");
});