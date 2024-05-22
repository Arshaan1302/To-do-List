export function closer() {
    var close = document.querySelectorAll("#close-btn");
    var count = close.length;
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
         var a = this.closest("li");  
          a.remove();
          count--;
        if (count == 0) {
          const element = document.getElementById("tasks");
          element.style.display="none";
        }
      };
    }
  }