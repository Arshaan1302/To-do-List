export function stroke(){
    var a = document.querySelectorAll("p")
    for(var i=0;i<a.length;i++){
     a[i].onclick = function () {
      var p = this.closest("p");
      var text= p.textContent
      p.style.textDecoration = "line-through" ;
      var message=`Congratulations !! You have completed your ${text} task `
      alert(message);
      var a = p.nextElementSibling;
      var b = a.querySelector("#edit-btn")
      b.remove();
    
    } 
    }
  }