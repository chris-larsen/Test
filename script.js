
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter, t1, t2;
var inProgress = 0

$("body").keypress(function(event) {
    if (event.key === "Enter" && inProgress == 0) {
        callGame();
    }
    if (event.key === randomLetter) {
        t2 = performance.now();
        endGame();
    }

});

function callGame() {
    var i = Math.floor(Math.random() * 26);
    randomLetter = letters[i];
    inProgress = 1

    // 3,2,1 countdown
    setTimeout(function () {
        $("h2").css("color", "black");
        $("h2").text("3");
    }, 1000);
    setTimeout(function () {
        $("h2").text("2");
    }, 2000);
    setTimeout(function () {
        $("h2").text("1");
    }, 3000);

    // show random letter
    // initialize timer
    setTimeout(function () {
        $("h2").text(randomLetter);
        t1 = performance.now();
    }, 4000);

}

function endGame() {
    var msg = Math.round(t2 - t1) + " milliseconds"
    $("h2").css("color", "red");
    $("h2").text(msg);
    inProgress = 0
}