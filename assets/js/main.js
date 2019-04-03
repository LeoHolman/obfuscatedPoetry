const path = document.getElementById("path");
const darkness = document.getElementById("darkness");
const trudge = document.getElementById("trudge");
const nightmare = document.getElementById("nightmare");

var text;
function wordToPicture(divID){
    let div = document.getElementById(divID);
    text = div.innerHTML;
    div.innerHTML = '';
    let newPictureNode = document.createElement("IMG");
    newPictureNode.src = `assets/images/${divID}/${divID}1.jpg`;
    div.appendChild(newPictureNode);
}

function pictureToWord(divID){
    let div = document.getElementById(divID);
    div.innerHTML = text;
}

path.addEventListener("mouseover", () => {
    wordToPicture("path");
});

path.addEventListener("mouseout", () => {
    pictureToWord("path");
})