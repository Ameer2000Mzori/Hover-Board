// selecting our elements
var allSpans = document.querySelectorAll("span");
// our array of colors
var colorObject = [
    {
        color: "red",
    },
    {
        color: "yellow",
    },
    {
        color: "blue",
    },
    {
        color: "green",
    },
    {
        color: "white",
    },
];
// functions
var startEffect = function (e) {
    var spanEl = e.target;
    setTimeout(function () {
        spanEl.classList.add("active");
        // spanEl.style.backgroundColor = "white";
        var randNum = Math.floor(Math.random() * 5);
        console.log(randNum);
        spanEl.style.backgroundColor = "".concat(colorObject[randNum].color);
    }, 10);
    // added timeout after 1s effect should be removed!
    setTimeout(function () {
        // spanEl.classList.remove("active");
        spanEl.style.backgroundColor = "black";
    }, 1000);
};
// our eventlinster for each span
allSpans.forEach(function (span) {
    span.addEventListener("mouseenter", startEffect);
});
