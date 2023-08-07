"use strict"
//Containers
const formContainer = document.querySelector("#main-form");
const successContainer = document.querySelector("#success-message");

// Elements
const inputs = document.querySelectorAll(("input"));
const submitBtn = document.querySelector(".submit");
const userRating = document.querySelector(".user-rating");
// Events
submitBtn.addEventListener("click", function () {
    if (!formContainer.classList.contains("hide")) {
        formContainer.classList.add("hide");
        successContainer.classList.remove("hide");
    }
})

inputs.forEach(i => {
    i.addEventListener("click", function () {
        let rating = i.value;
        userRating.textContent = rating;
    })
})