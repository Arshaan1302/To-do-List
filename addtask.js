import { closer } from "./close.js";
import { edit } from "./edit.js";
import { stroke } from "./completed.js";



export function addElement() {
  var li = document.createElement("li");
  var p = document.createElement("p");
  var inputText = document.getElementById("input").value;
  var text = document.createTextNode(inputText);

  
    var div = document.getElementById("tasks");
    div.style.display="";

  li.appendChild(p);
  p.appendChild(text);
  if (inputText === "") {
    alert("You cannot enter blank !");
  } else {
    document.getElementById("myList").appendChild(li);
  }

  
  document.getElementById("input").value = "";
  var span = document.createElement("span");
  var buttonx=document.createElement("button");
  buttonx.id='close-btn'
  var editbtn=document.createElement("button");
  editbtn.id='edit-btn'
  span.appendChild(editbtn);
  editbtn.appendChild(document.createTextNode("Edit"));
  span.appendChild(buttonx);
  buttonx.appendChild(document.createTextNode("X"));
  li.appendChild(span);
  closer(buttonx);
  edit(editbtn);
  stroke(p)
}