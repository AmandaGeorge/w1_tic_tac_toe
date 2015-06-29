// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function() {
  // alert("js file is linked!");

  // first find DOM elements
  // var tttBoard = document.querySelector("#board");
  // var rows = document.querySelectorAll("#board .row");
  var boxes = document.querySelectorAll("#board .col-xs-4");
  // var boardPs = document.querySelectorAll("#board p");
  var userA = "X";
  var userB = "O";
  var turn = 0;
  var reset = document.querySelector("#rButton");

  // console.log(tttBoard);
  // console.log(rows);
  // console.log(boxes);

  // second setup click events and keep track of moves
  for (var i = 0; i < boxes.length; i += 1) {
  	boxes[i].addEventListener("click",
  		function() {
  			if ((turn % 2 === 0) && (this.innerText == "")) {
  				this.innerText = userA;
  				this.classList.add("colorX");
  			}
  			else if (this.innerText == "") {
  				this.innerText = userB;
  				this.classList.add("colorO");
  			} 
  			turn += 1;
  		}
  	)
  }

  // make a reset button
  reset.addEventListener("click",
    function() {
      for (var i = 0; i < boxes.length; i += 1) {
        boxes[i].innerText = "";
        boxes[i].classList.remove("colorX");
        boxes[i].classList.remove("colorO");
      }
      turn = 0;
    }
  )



});
