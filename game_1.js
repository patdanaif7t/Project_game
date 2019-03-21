var array = ["10 + 15 = 25", "15 - 7 = 3", "18 - 2 = 16", "1 + 2 = 3", "5 + 5 = 10", "20 - 1 = 18", "10 - 7 = 3", "1 + 21 = 22", "16 - 3 = 13", "8 + 7 = 12"]
var Checkcheck = ""
var round = 0
var score = 0
var EScore = document.getElementById("score")

var startTime = () => {
  var seconds = 120, $seconds = document.querySelector('#countdown');
  (function countdown() {
    $seconds.textContent = seconds + ' Second' + (seconds == 1 ? '' : 's')
    if (seconds-- > 0) {
      setTimeout(countdown, 1000)
    } else {
      // alert('หมด');
      console.log('หมดเวลา');
      alertScore()
    }
  })();
}


var alertScore = () => {
  showModalScore()
  $('#exampleModalCenter').modal('show');
}

var win = () => {
  $('#winmodal').modal('show');
}

var reload = () => {
  location.reload();
}
var showModalScore = () => {
  var modalScore = document.getElementById("modalScore")
  modalScore.innerHTML = "คะแนนที่ได้  " + score + " คะแนน"
}
var yes = () => {
  Checkcheck = "yes"
  // EScore.innerHTML = "Score : " + score
}

var no = () => {
  Checkcheck = "no"
  // EScore.innerHTML = "Score :" + score
}

var init = () => {
  var Qus = document.getElementById("Qus")
  Qus.innerHTML = array[round]
}

var checkAns = () => {
  console.log(Checkcheck);

  if (round == 0 && Checkcheck == "yes") {
    score += 1
    round += 1
    console.log(round);

    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 1 && Checkcheck == "no") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 2 && Checkcheck == "yes") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 3 && Checkcheck == "yes") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 4 && Checkcheck == "yes") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 5 && Checkcheck == "no") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 6 && Checkcheck == "yes") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 7 && Checkcheck == "yes") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 8 && Checkcheck == "yes") {
    score += 1
    round += 1
    console.log(round);
    EScore.innerHTML = "Score : " + score
    init()
  }
  else if (round == 9 && Checkcheck == "no") {
    score += 1
    round += 1
    if (score == 10) {
      win()
    }
  }
  else {
    // alert("คุณตอบผิด")
    alertScore()
  }
}




var x = document.getElementById("myAudio")
function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();
} 
