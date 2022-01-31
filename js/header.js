fetch("../header.html").then(response => {
    return response.text();
}).then(data => {
    document.querySelector("header").innerHTML = data;
});

function activeClass(obj){
    document.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    obj.classList.add('active');
}
