var screen = document.querySelector(".screen");
var buttons = document.querySelectorAll("#btn");
var equal = document.querySelector(".equal");
var clear = document.querySelector(".clear");

buttons.forEach(function(button) {
    button.addEventListener("click", function(f) {
        let value = f.target.dataset.num;
        if (screen.value == "Please enter a number") {
            screen.value = value;
        } else {
            screen.value += value;
        }
    });
});

function equals() {
    if (screen.value === "") {
        screen.value = "Please enter a number";
    } else {
        screen.value = eval(screen.value);
    }
}

function clears() {
    screen.value = "";
}

function remov() {
    var output = document.getElementById("screen").value;
    output = output.substr(0, output.length - 1);
    document.getElementById("screen").value = output;
}