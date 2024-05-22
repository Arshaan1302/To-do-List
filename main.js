import { addElement } from "./addtask.js";
import { closer } from "./close.js";
import { edit } from "./edit.js";
import { stroke } from "./completed.js";

document.getElementById("Add-btn").addEventListener("click", addElement);
var close = document.querySelectorAll("#close-btn");
var count = close.length;
if (count == 0) {
    const element = document.getElementById("tasks");
    element.style.display="none";
  }

function coloring() {
  var items = document.getElementsByTagName("li");
  var i;
  for (i = 0; i < items.length; i++) {
    if (i % 2 == 0) {
      items[i].style.backgroundColor = "#3d3d3d";
    } else {
      items[i].style.backgroundColor = "#2b2b2b";
    }
  }
}

setInterval(coloring, 100);
stroke()
closer();
edit();