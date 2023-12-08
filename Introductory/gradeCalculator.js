function gradeCalculator(gradeNum) {
  if (gradeNum >= 90) {
    return "A";
  } else if (80 <= gradeNum && gradeNum <= 89) {
    return "B";
  } else if (70 <= gradeNum && gradeNum <= 79) {
    return "C";
  } else if (60 <= gradeNum && gradeNum <= 69) {
    return "D";
  } else {
    return "F";
  }
}
// Uncomment the lines below to test your code
console.log(gradeCalculator(92)); // => "A"
console.log(gradeCalculator(84)); // => "B"
console.log(gradeCalculator(70)); // => "C"
console.log(gradeCalculator(61)); // => "D"
console.log(gradeCalculator(43)); // => "F"
