document.querySelector(".form1next").addEventListener("click", page1);
document.querySelector(".form2next").addEventListener("click", page2);
document.querySelector(".form3next").addEventListener("click", page3);

function page1() {
  var count = 0;
  for (let a = 0; a < 4; a++) {
    var form1input = document.querySelectorAll(".alltypes")[a].value;
    if (form1input == "") {
      document.querySelectorAll(".alltypes")[a].style.border = "2px solid red";
    } else {
      document.querySelectorAll(".alltypes")[a].style.border =
        "1px solid black";
      count++;
    }
    if (count == "4") {
      var form1 = document.querySelector(`.top[data-id = "0"]`);
      form1.style.display = "none";
      var form2 = document.querySelector(`.top[data-id = "1"]`);
      form2.style.display = "block";
    }
  }
}

function page2() {
  var secondCount = 0;
  for (let b = 0; b < 10; b++) {
    var form2input = document.querySelectorAll(".form2inputs")[b].value;
    if (form2input == "") {
      document.querySelectorAll(".form2inputs")[b].style.border =
        "2px solid red";
    } else {
      document.querySelectorAll(".form2inputs")[b].style.border =
        "1px solid black";
      secondCount++;
    }
    if (secondCount == "9") {
      var form1 = document.querySelector(`.top[data-id = "1"]`);
      form1.style.display = "none";
      var form2 = document.querySelector(`.top[data-id = "2"]`);
      form2.style.display = "block";
    }
  }
}
function page3() {
    var thirdCount = 0;
    for (let c = 0; c < 3; c++) {
      var form3input = document.querySelectorAll(".form3inputs")[c].value;
      if (form3input == "") {
        document.querySelectorAll(".form3inputs")[c].style.border =
          "2px solid red";
      } else {
        document.querySelectorAll(".form3inputs")[c].style.border =
          "1px solid black";
          thirdCount++;
      }
      if (thirdCount == "3") {
        var form1 = document.querySelector(`.top[data-id = "2"]`);
        form1.style.display = "none";
        var form2 = document.querySelector(`.top[data-id = "3"]`);
        form2.style.display = "block";
      }
    }
  }
  function page4() {
   
    for (let d = 0; d < 7; d++) {
      var form3input = document.querySelectorAll(".form4inputs")[d].value;
      if (form3input == "") {
        document.querySelectorAll(".form4inputs")[d].style.border =
          "2px solid red";
      } else {
        document.querySelectorAll(".form4inputs")[d].style.border =
          "1px solid black";
         
      }
    
    }
  }

