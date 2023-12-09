// selecting our elements
let allSpans: any = document.querySelectorAll("span");

// our array of colors
let colorObject = [
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
const startEffect = (e) => {
  let spanEl: HTMLSpanElement = e.target;
  setTimeout(() => {
    spanEl.classList.add("active");
    // spanEl.style.backgroundColor = "white";
    let randNum = Math.floor(Math.random() * 5);
    console.log(randNum);
    spanEl.style.backgroundColor = `${colorObject[randNum].color}`;
  }, 10);

  // added timeout after 1s effect should be removed!
  setTimeout(() => {
    // spanEl.classList.remove("active");
    spanEl.style.backgroundColor = `black`;
  }, 1000);
};

// our eventlinster for each span
allSpans.forEach((span: any) => {
  span.addEventListener("mouseenter", startEffect);
});
