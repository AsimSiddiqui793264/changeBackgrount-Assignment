// let namePrint = function(){
//     console.log("Asim Siddiqui");
// };

// setTimeout(namePrint , 2000);

// --------------------

// let changeHeading = function(){
//     document.querySelector("h1").innerHTML = "Best JS Series";
// }

// let changeMe = setTimeout(changeHeading , 2000);

// let stopBtn = document.getElementById("stop");
// stopBtn.addEventListener("click" , function(){
//     clearInterval(changeMe);
// console.log("Stopped");

// });

// ------------------

// let sayDate = function (str) {
//     console.log(str, Date.now());
// };

// let start;

// let startBtn = document.getElementById("start");
// let stopBtn = document.getElementById("stop");

// startBtn.addEventListener("click" , function(){
//      start = setInterval(sayDate, 1000, "Asim Siddiqui"); 
// })

// stopBtn.addEventListener("click", function () {
//     clearInterval(start);
// })

// ----------------------------------------

//Generate a random colour

let randomColour = function () {
    let hex = "0123456789ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
        colour += hex[Math.floor(Math.random() * 16)]
    }
    return colour;
}

let interValid;
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stop");

let startChangingColour = function () {

    if (!interValid) {
        interValid = setInterval(changeBackgroungColour, 1000);
    }

    function changeBackgroungColour() {
        document.body.style.background = randomColour();
    }

}

let stopChangingColour = function () {
    clearInterval(interValid);
    interValid = null;
}

startBtn.addEventListener("click", startChangingColour);
stopBtn.addEventListener("click", stopChangingColour);


