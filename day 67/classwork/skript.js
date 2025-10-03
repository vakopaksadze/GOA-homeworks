function checkGrade() {
  // მომხმარებლისგან ქულების შემოტანა prompt-ით
  let exam = prompt("Enter your exam score:");
  let activity = prompt("Enter your activity score:");

  // გარდაქმნა რიცხვებად (Number ან parseInt)
  exam = Number(exam);
  activity = Number(activity);

  // ჯამი
  let total = exam + activity;

  let grade;

  // ქულის კატეგორიების შემოწმება
  if (total >= 90 && total <= 100) {
    grade = "A";
  } else if (total >= 80 && total < 90) {
    grade = "B";
  } else if (total >= 70 && total < 80) {
    grade = "C";
  } else if (total >= 50 && total < 70) {
    grade = "D";
  } else if (total >= 30 && total < 50) {
    grade = "E";
  } else if (total < 30) {
    grade = "F";
  } else {
    grade = "Invalid score!";
  }

  // შედეგის ჩვენება ვებგვერდზე
  document.getElementById("result").textContent = 
    "Your total score is " + total + " → Grade: " + grade;
}