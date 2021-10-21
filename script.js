//Input array of colors
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//Links to objects
const refs = {
  body: document.querySelector("body"),
  start: document.querySelector("button[data-action='start']"),
  stop: document.querySelector("button[data-action='stop']"),
};

//Random color selection function
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Color change function
const changeColor = () => {
  const currentColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = currentColor;
};

//Listen to the start button
refs.start.addEventListener("click", () => {
  idStartInterval = setInterval(changeColor, 1000);
  refs.start.setAttribute("disabled", "disabled");
});

//Listen to the stop button
refs.stop.addEventListener("click", () => {
  clearInterval(idStartInterval);
  refs.start.removeAttribute("disabled", "disabled");
});