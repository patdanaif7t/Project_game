var arrQue = ["5 + 10 - 5 =   ", "8 + 10 + 1 = ", "11 + 3 - 2 = ","18 + 12 - 5 =" , "35 + 15 + 35 = ",
"28 - 7 + 14 =" , "76 - 8 - 9 =", "112 + 39 - 28 =", "88 - 32 - 6 =", "133 - 78 + 18 ="]
var answer = document.getElementById("answer")
var Que = document.getElementById("Que")
var Escore = document.getElementById("showScore")

var Choice1 = document.getElementById("Choice1")
var Choice2 = document.getElementById("Choice2")
var Choice3 = document.getElementById("Choice3")
var Choice4 = document.getElementById("Choice4")

var round = 0
var score = 0

var init = () => {
    Que.innerHTML = arrQue[round]
}

var showScore = () => {
    Escore.innerHTML = "Score : " + score
}

var alertScore = () => {
    showModalScore()
    $('#exampleModalCenter').modal('show');
}

var win = () => {
    $('#winmodal').modal('show');
}

var showModalScore = () => {
    var modalScore = document.getElementById("modalScore")
    modalScore.innerHTML = "คะแนนที่ได้  " + score + " คะแนน"
}

var reload = () => {
    location.reload();
  }

var checkAnswer = () => {
    if (round == 0 && answer.value == 10) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 20
        Choice2.innerHTML = 19
        Choice3.innerHTML = 7
        Choice4.innerHTML = 18

        Choice1.value = 20
        Choice2.value = 19
        Choice3.value = 7
        Choice4.value = 18
        init()
    } else if (round == 1 && answer.value == 19) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 12
        Choice2.innerHTML = 28
        Choice3.innerHTML = 11
        Choice4.innerHTML = 5

        Choice1.value = 12
        Choice2.value = 28
        Choice3.value = 11
        Choice4.value = 5
        init()
    } else if (round == 2 && answer.value == 12) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 20
        Choice2.innerHTML = 25
        Choice3.innerHTML = 5
        Choice4.innerHTML = 9

        Choice1.value = 20
        Choice2.value = 25
        Choice3.value = 5
        Choice4.value = 9
        init()
    }else if (round == 3 && answer.value == 25) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 59
        Choice2.innerHTML = 90
        Choice3.innerHTML = 85
        Choice4.innerHTML = 44

        Choice1.value = 59
        Choice2.value = 90
        Choice3.value = 85
        Choice4.value = 78
        init()
    }else if (round == 4 && answer.value == 85) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 20
        Choice2.innerHTML = 25
        Choice3.innerHTML = 35
        Choice4.innerHTML = 9

        Choice1.value = 20
        Choice2.value = 25
        Choice3.value = 35
        Choice4.value = 9
        init()
    }else if (round == 5 && answer.value == 35) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 20
        Choice2.innerHTML = 25
        Choice3.innerHTML = 59
        Choice4.innerHTML = 9

        Choice1.value = 20
        Choice2.value = 25
        Choice3.value = 59
        Choice4.value = 9
        init()
    }else if (round == 6 && answer.value == 59) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 123
        Choice2.innerHTML = 25
        Choice3.innerHTML = 55
        Choice4.innerHTML = 90

        Choice1.value = 123
        Choice2.value = 25
        Choice3.value = 55
        Choice4.value = 90
        init()
    }else if (round == 7 && answer.value == 123) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 19
        Choice2.innerHTML = 250
        Choice3.innerHTML = 50
        Choice4.innerHTML = 9

        Choice1.value = 19
        Choice2.value = 250
        Choice3.value = 50
        Choice4.value = 9
        init()
    }else if (round == 8 && answer.value == 50) {
        score += 1
        round += 1
        answer.value = ""
        Choice1.innerHTML = 20
        Choice2.innerHTML = 25
        Choice3.innerHTML = 5
        Choice4.innerHTML = 73

        Choice1.value = 20
        Choice2.value = 25
        Choice3.value = 5
        Choice4.value = 73
        init()
    }else if (round == 9 && answer.value == 73) {
        score += 1
        if(score == 10 ){
            win()
        }
    }else {
        alertScore()
        // round += 1
        // answer.value = ""
        // init()
        // if(round == 10 && score != 10){
        //     alertScore()
        // }
    }
}