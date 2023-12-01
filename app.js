// initial declarations
let i = 0;
let images = ["./images/1.png","./images/2.png", "./images/3.png"];

let time = 3000;
let paused = false;

//slider functionality
function handleChange() {
  if (!paused) {
    document.slide.src = images[i];
    if (i < images.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }
  // slideshow functionality
  setTimeout(handleChange, time);
}
// slideshow pause functionality
function pause() {
  paused = !paused;
}

window.onload = handleChange;
window.onload = handleChange;


function sendMail() {
    const params = {
        email: document.getElementById("email").value
    }

const serviceID = "service_nt7mjs6"
const templateID = "template_wmlb8xj"

emailjs.send(serviceID, templateID, params).then(
    res => {
        document.getElementById("email").value = "";
        console.log(res);
        alert("Your email has been sent successfully")
    }
).catch(err => console.log(err));
}
