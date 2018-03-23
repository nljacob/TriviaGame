$(".questions").hide();
$('.end-game').hide();

$("#begin").click(function(){
   $('.questions').show();
   $('.begin-game').hide();
   $('.end-game').hide();
   runTimer();
});

$("#submit").click(function(){
    stopTimer();
    $('.questions').hide();
    $('.begin-game').hide();
    $('.end-game').show(); 
 });

 $("#playagain").click(function(){
    $('.questions').hide();
    $('.begin-game').show();
    $('.end-game').hide();
    stopTimer()
 });

// TIMER////////////////////////////////////////////////////////////////////////////////////////////////////////////
var number = 45;
var intervalId;
function runTimer() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}
function decrement() {
  number--;
  $("#timer").html("<h3>" + number + "</h3>");
  if (number === 0) {
    stopTimer();
    alert("Time's Up!");
    $('.questions').hide();
    $('.end-game').show();
  }
}
function stopTimer() {
  clearInterval(intervalId);
}
// TIMER/////////////////////////////////////////////////////////////////////////////////////////////////////////////

var q1 = $('input[name=question1]:checked','#form').val();
var q2 = $('input[name=question2]:checked','#form').val();
var q3 = $('input[name=question3]:checked','#form').val();
var q4 = $('input[name=question4]:checked','#form').val();
var q5 = $('input[name=question5]:checked','#form').val();
var q6 = $('input[name=question6]:checked','#form').val();
var q7 = $('input[name=question7]:checked','#form').val();
var q8 = $('input[name=question8]:checked','#form').val();

var numberCorrect = 0;
var numberWrong = 0;
var numberUnanswered = 0;

if (q1 == "Mufasa") {
    numberCorrect++;
    }
    else if (!q1) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }

if (q2 == "Pride Rock") {
    numberCorrect++;
    }
    else if (!q2) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }

if (q3 == "Fonzi") {
    numberCorrect++;
    }
    else if (!q3) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }

if (q4 == "Zazu") {
    numberCorrect++;
    }
    else if (!q4) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }

if (q5 == "Scar") {
    numberCorrect++;
    }
    else if (!q5) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }


if (q6 == "No Worries") {
    numberCorrect++;
    }
    else if (!q6) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }


if (q7 == "Sarabi") {
    numberCorrect++;
    }
    else if (!q7) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }

if (q8 == "Meerkat") {
    numberCorrect++;
    }
    else if (!q8) {
    numberUnanswered++;
    }
    else {
    numberWrong++;
    }
    

console.log(numberCorrect)
console.log(numberWrong)
console.log(numberUnanswered)

$("#correct").html("<h5>" + numberCorrect + "</h5>");
$("#incorrect").html("<h5>" + numberWrong + "</h5>");
$("#unanswered").html("<h5>" + numberUnanswered + "</h5>");

// function reset() {
//     numberCorrect = 0;
//     numberWrong = 0;
//     numberUnanswered = 0;
//     console.log("calling reset")
// }