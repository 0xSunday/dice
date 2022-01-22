var ramdomNum1 = Math.floor(Math.random() * 6) + 1;
var ramdompic = "dice" + ramdomNum1 + ".png";
var imageSourse = "images/" + ramdompic;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageSourse);

var ramdomNum2 = Math.floor(Math.random() * 6) + 1;
var ramdompic2 = "dice" + ramdomNum2 + ".png";
var imageSourse2 = "images/" + ramdompic2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageSourse2);


if (ramdomNum1 > ramdomNum2) {
    document.querySelector("h1").innerHTML = "🏆Player 1 is winner";
} else if (ramdomNum2 > ramdomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 is winner 🏆";
} else {
    document.querySelector("h1").innerHTML = "Both resutls are same"
}