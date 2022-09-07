const submitBtn = document.querySelector(".btn");
const scoreOptionList = document.querySelectorAll(".score-option");

submitBtn.addEventListener("click", onSubmitForm);

let selectedScoreOption = null;

function onScoreOptionClick(event) {
  // Remove active class from previous selected score option
  if (selectedScoreOption >= 1)
    scoreOptionList[selectedScoreOption - 1].classList.remove("active");

  // Get current selected score option value
  selectedScoreOption = Number(event.target.getAttribute("data-score-option"));

  // Set active class in score option
  event.target.classList.add("active");

  // Set Submit button active
  submitBtn.classList.add("active");
}

scoreOptionList.forEach((scoreOption) => {
  scoreOption.addEventListener("click", onScoreOptionClick);
});

function onSubmitForm() {
  const initialState = document.querySelector(".initial-state");
  const finalState = document.querySelector(".final-state");
  const selection = document.querySelector(".selection");

  initialState.classList.add("hidden");
  finalState.classList.remove("hidden");
  selection.innerText = `You selected ${selectedScoreOption} out of 5`;
}
