fetch("../education.html").then(response => {
    return response.text();
}).then(data => {
    document.querySelector("education").innerHTML = data;
});

fetch("../skills.html").then(response => {
    return response.text();
}).then(data => {
    document.querySelector("skills").innerHTML = data;
});

fetch("../projects.html").then(response => {
    return response.text();
}).then(data => {
    document.querySelector("projects").innerHTML = data;
});
