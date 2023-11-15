let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventSefault;
    if(!validateForm(form)) return;
})
const validation = (form) => {
    let valid = true;
    let name = form.querySelector("name");
    let message = form.querySelector("message");
    let email = form.querySelector("email");

    if(name.value === "") {
        giveError(name, "Please enter your name");
        valid =false;
    }
    if(message.value === "") {
        giveError(message, "Please enter your message");
        valid =false;
    }

    

};

const giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    let existinError = parentElement.querySelector(".err-msg");
    if(existingError){
        existingError.remove();
    }

    let error = document.createElement("span");
    error.textContent = message;
    error.classList.add("err-msg")
    parentElement.appendChild(error);
}