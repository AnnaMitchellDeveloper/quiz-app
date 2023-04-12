let submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", showCorrectAnswer);



function showCorrectAnswer(event) {
	event.preventDefault();
	let points = 0;
	if(document.querySelector("#rigthAnswer1").checked) {
		points++;
	}
	if (document.querySelector("#rigthAnswer2").checked) {
    points++;
  }
	if (document.querySelector("#rigthAnswer3").checked) {
    points++;
  }
  if (document.querySelector("#rigthAnswer4").checked) {
    points++;
  }
  if (document.querySelector("#rigthAnswer5").checked) {
    points++;
  }
  document.querySelector("#showAnswer").textContent = "Your score: " + points;
}