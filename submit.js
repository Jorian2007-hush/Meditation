"use strict";

// get stored values
let name = sessionStorage.getItem("name");
let email = sessionStorage.getItem("email");
let gender = sessionStorage.getItem("gender");
let age = sessionStorage.getItem("age");
let stress = sessionStorage.getItem("stress");
let minutes = sessionStorage.getItem("minutes");
let feeling = sessionStorage.getItem("feeling");

function formatGender(value) {
    if (value === "m") return "Male";
    if (value === "f") return "Female";
    if (value === "o") return "Other";
    return "Not specified";
}

function formatAge(value) {
    if (value === "u") return "Under 18";
    if (value === "18-34") return "18–34";
    if (value === "35-44") return "35–44";
    if (value === "45-69") return "45–69";
    if (value === "70+") return "70+";
    return "Not specified";
}

function formatStress(value) {
    if (value === "yes") return "You experience stress often";
    if (value === "no") return "You rarely feel stressed";
    return "You sometimes feel stressed";
}

function formatMinutes(value) {
    if (value === "less-5") return "Short sessions (under 5 minutes)";
    if (value === "between") return "Medium sessions (5–10 minutes)";
    return "Long sessions (10+ minutes)";
}

function formatFeeling(value) {
    if (value === "ground") return "Calm and grounded";
    if (value === "love") return "Full of love";
    if (value === "blissed") return "Blissed out";
    return "Re-energized and clear";
}

// display results (same idea as your reservationInfo)
document.getElementById("results").innerHTML = `
    <p>${name} - ${email}</p>
    <p>Gender: ${formatGender(gender)}</p>
    <p>Age: ${formatAge(age)}</p>

    <p>${formatStress(stress)}</p>
    <p>Preferred session: ${formatMinutes(minutes)}</p>
    <p>Goal: ${formatFeeling(feeling)}</p>
`;