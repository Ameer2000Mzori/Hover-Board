// selecting our elements
let allSpans: any = document.querySelectorAll("span");

// functions
const hoverEffect = (e) => {
  let spanEl: any = e.target;
  spanEl.classList.add("active");
};

// our eventlisnters
allSpans.forEach((span: any) => {
  span.addEventListener("mouseenter", hoverEffect);
});
