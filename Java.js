"use strict";

const form = document.getElementById("Quiz");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        // basic info
        sessionStorage.setItem("name", document.getElementById("fullName").value);
        sessionStorage.setItem("email", document.getElementById("email").value);
        sessionStorage.setItem("gender", document.getElementById("Gender").value);
        sessionStorage.setItem("age", document.getElementById("Age").value);

        // radio groups
        let stress = document.querySelector('input[name="yes/no"]:checked')?.value;
        let minutes = document.querySelector('input[name="mins"]:checked')?.value;
        let feeling = document.querySelector('input[name="Lifestyle3"]:checked')?.value;

        sessionStorage.setItem("stress", stress);
        sessionStorage.setItem("minutes", minutes);
        sessionStorage.setItem("feeling", feeling);

        // go to results page
        window.location.href = "submit.html";
    });
}