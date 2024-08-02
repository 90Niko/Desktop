function solve() {

  const sectionEl = document.querySelectorAll("section");
  const correctAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  const userAnswers = [];

  function showUserResult() {

    const corrAnswerCount = userAnswers.reduce(
      (totalCount, currAnswer, index) =>
      currAnswer === correctAnswers[index]
        ? (totalCount += 1)
        : totalCount,
        0
      );


      const resultEL=document.querySelector("ul#results h1");

      resultEL.textContent=correctAnswers===correctAnswers.length
      ?`You are top JavaScript fan!`
      :`You have${corrAnswerCount} right answers`

      resultEL.parentElement.parentElement.style.display="block";
  }

  function onCLickHandler(event) {

    const sectionToHide = sectionEl[userAnswers.length];
    const sectionToShow = sectionEl[userAnswers.length + 1];

    if (!!sectionToHide) {
      sectionToHide.style.display = "none";
    }
    if (!!sectionToShow) {
      sectionToShow.style.display = "block";
    }
    userAnswers.push(event.target.textContent.trim());

    if (userAnswers.length === correctAnswers.length) {
      showUserResult();
    }
  }

  document.querySelectorAll(".answer-wrap")
    .forEach((wrapEl) => wrapEl.addEventListener("click", onCLickHandler));

}
