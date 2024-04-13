const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/safari-icon.png");
  }
    else {
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
  }

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function getUserName() {
  const myName = prompt("Enter your name");
  if (!myName) {
    getUserName();
  }
  else {
    localStorage.getItem("name", myName);
    myHeading.textContent = `Mozilla is great, ${myName}`;
  }
}

myButton.onclick = () => {
  getUserName();
};
