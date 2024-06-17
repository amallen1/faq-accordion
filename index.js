const questions = document.querySelectorAll(".faq-question");

const closeAnswers = () => {
  questions.forEach((question) => {
    question.classList.remove("active");
  });
};

questions.forEach((question) => {
  question.addEventListener("click", () => {
    if (!question.classList.contains("active")) {
      closeAnswers();
      setTimeout(() => {
        question.classList.toggle("active");
      }, 500);
    } else {
      question.classList.toggle("active");
    }
  });
});
