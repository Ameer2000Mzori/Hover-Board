// selecting our elements
var allSpans = document.querySelectorAll("span");
// functions
var hoverEffect = function (e) {
    var spanEl = e.target;
    spanEl.classList.add("active");
};
// our eventlisnters
allSpans.forEach(function (span) {
    span.addEventListener("mouseenter", hoverEffect);
});
