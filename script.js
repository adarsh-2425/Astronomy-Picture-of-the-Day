let title = document.querySelector(".title");
let image = document.querySelector("#spacepicture");
let description = document.querySelector(".description");
let datenow = document.querySelector(".datenow");
let quoteBtn = document.querySelector(".quoteBtn");
let today = document.querySelector(".today");


 function displayPicture() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=YmUaptrzHgTrGDOVHuGDCXRRUIC80sQ4FcIkw5g4")
    .then(res => res.json())
    .then(result =>{
        title.innerHTML = result.title;
        today.innerHTML = "Image Of " + result.date;
        image.src = result.url;
        description.innerHTML =result.explanation;
});

}


