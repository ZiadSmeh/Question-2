let score = +prompt("Enter your score :");
let attendance = true;
if (attendance = prompt("Do you have good attendance?") == true) {
  score += 3;
}
if (score > 100) {
  score = 100;
}

let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;

  case score >= 80:
    grade = "B";
    break;

  case score >= 70:
    grade = "C";
    break;

  case score >= 60:
    grade = "D";
    break;

  default:
    grade = "F";
}
let stat;

if (score >= 60) {
  stat = "PASS";
} else {
  stat = "FAIL";
}

console.log("Final Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + stat);
