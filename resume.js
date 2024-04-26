const data = {
    "name": "Sathish S",
    "title": "MERN Stack Developer",
    "contact": {
        "email": "sathishsettu@gmail.com",
        "phone": "9751444444",
        "address": "Vailambadi, Arakkonam, Ranippettai Dist"
    },
    "summary": "Guvi certified Fullstack Developer",
    "experience": [
        {
            "title": "Senior Data Analyst",
            "company": "Stellar Innovation Pvt Limited",
            "location": "Sholingur",
            "dates": "2 years",
            "description": "Responsible for analyzing and interpreting complex data sets to provide insights and drive business decisions."
        }
    ],
    "education": [
        {
            "degree": "BE in Computer Science Engineering",
            "institution": "Ranippettai Engineering College",
            "location": "Ranippettai",
            "dates": "Unknown"
        }
    ],
    "skills": [
        "MERN Stack Development",
        "Data Analysis",
        "Tamil",
        "English"
    ]
}
// Using for...in
console.log("Using for...in:");
for (let key in data) {
    console.log(key, data[key]);
}

// Using for...of (with skills array)
console.log("\nUsing for...of:");
for (let skill of data.skills) {
    console.log(skill);
}

// Using forEach (with skills array)
console.log("\nUsing forEach:");
data.skills.forEach(skill => {
    console.log(skill);
});

// Using for loop
console.log("\nUsing for loop:");
for (let i = 0; i < data.skills.length; i++) {
    console.log(data.skills[i]);
}
