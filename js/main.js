var imgSlider = Array.from(document.querySelectorAll(".item img"));
console.log(imgSlider);
var imgLarger = document.querySelector("#overlay");
var imgBack = document.querySelector("#textOverlay");
var closeButton = document.querySelector("#close");
var nextButton = document.querySelector("#next");
var prevButton = document.querySelector("#prev");
var indexImg = 0;
var imgSr = "";
for (var i = 0; i < imgSlider.length; i++) {
    imgSlider[i].addEventListener("click", function(e) {
        indexImg = imgSlider.indexOf(e.target);
        imgSr = e.target.getAttribute("src");
        imgLarger.style.display = "flex";
        imgBack.style.backgroundImage = `url(${imgSr})`;
    })
}
closeButton.addEventListener("click", close);
nextButton.addEventListener("click", nextimg)
prevButton.addEventListener("click", previmg)

function close() {
    imgLarger.style.display = "none";
}

function nextimg() {
    indexImg++;
    if (indexImg == imgSlider.length) {
        indexImg = 0;
    }
    var next = imgSlider[indexImg].getAttribute("src");
    imgBack.style.backgroundImage = `url(${next})`
}

function previmg() {
    indexImg--;
    if (indexImg < 0) {
        indexImg = imgSlider.length - 1;
    }
    var prev = imgSlider[indexImg].getAttribute("src");
    imgBack.style.backgroundImage = `url(${prev})`
}
document.addEventListener("keyup", function(e) {
    if (e.code == "ArrowRight") {
        nextimg()
    } else if (e.code == "ArrowLeft") {
        previmg()
    } else if (e.code == "Escape") {
        close()
    }
})