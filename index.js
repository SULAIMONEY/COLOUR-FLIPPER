const colors = ["green", "red", "orange", "blue", "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond",
    "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimison", "cyan", "darksalmon", "darkseagreen",
    "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dodgerblue", "dimgray", "dimgrey",
    "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "gold", "goldenrod", "greenyellow", "gray", "grey", "honeydew", "hotpink",
    "indianred", "indigo", "khaki", "tomato", "tan", "teal", "lawngreen", "lightpink", "purple", "pink", "rebeccapurple", "olive", "orangered",
    "yellow", "yellowgreen", "magenta", "maroon",];
    
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}