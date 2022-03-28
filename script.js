let lives = 4
let levelOneName = ["f", "l", "a", "s", "h"]
let levelTwoName = ["m", "a", "g", "n", "e", "t", "o"]
let levelThreeName = ["d", "o", "o", "m"]
let levelFourName = ["n", "i", "g", "h", "t", "w", "i", "n", "g"]
let firstName = levelOneName

// wrong answer function
function deaths(hintTwo, hintThree) {

  if (lives === 3) {
    images('assets/Ghost-Rider-Head.png', -6, 0, 7, 0, 7, 5)
    console.log('imagerendered)')
    document.getElementById("hint").textContent = hintTwo
  } else if (lives === 2) {
    images('assets/Ghost-Rider-Body.png', -16, 0, 11.5, 0, 14, 9)
    document.getElementById("hint").textContent = hintThree
  } else if (lives === 1) {
    images('assets/Left-leg.png', -29, -40, 20.5, 10, 7, 7)
  } else {
    images('assets/Right-leg.png', -30.5, -40, 20.5, 14, 7, 7)
    document.getElementById("hint").textContent = "YOU LOSE! REFRESH PAGE AND CLICK NEW LEVEL"
  }
}

// load image function
function images(url, left, bottom, top, right, maxWidth, maxHeight) {
  let object = document.createElement('img')
  object.src = url
  object.style.position = 'relative'
  object.style.left = left + 'em'
  object.style.right = right + 'em'
  object.style.bottom = bottom + 'em'
  object.style.top = top + 'em'
  object.style.maxWidth = maxWidth + 'em'
  object.style.maxHeight = maxHeight + 'em'
  let post = document.getElementById('post')
  post.append(object)
  return object
}


// Level One
document.getElementById("level-one").addEventListener("click", function () {

  let hintOne = "Hint One: 5 letter word (Member of the Justice League)"
  let hintTwo = "Hint Two: His real name is Barry Allen"
  let hintThree = "Hint Three: He's Fast"

  document.getElementById("hint")
  document.createElement("p")
  hint.append("")
  hint.textContent = hintOne

  function checkIfWin() {
    if (firstName.length === 0) {
      correct.textContent = "FLASH!!!! ==> YOU WIN! HIT REFRESH AND CLICK A NEW LEVEL!"
    }
  }
  document.getElementById('input-form').addEventListener("submit", submit)

  function submit(event) {
    event.preventDefault()
    let input = document.getElementById("input")
    let value = input.value.toLowerCase()

    if (firstName.includes(value)) {
      console.log("success")
      document.getElementById("correct")
      let correctInput = document.createElement("p")
      correct.append(value, correctInput)
      firstName = firstName.filter(letter => letter !== value)
      checkIfWin()
      console.log('checkingifwon')
    } else if (!firstName.includes(value)){
      document.getElementById("graveyard")
      let wrongInput = document.createElement("p")
      graveyard.append(value, wrongInput)
      lives--
      deaths(hintTwo, hintThree)
    }
  }
})
// // Level Two
document.getElementById("level-two").addEventListener("click", function () {

  let hintOne = "First Hint: 7 letter word (X-men Villain)"
  let hintTwo = "SECOND HINT: He controls Magnetic Fields"
  let hintThree = "THIRD HINT: He plays chess with an 'Old Friend'"

  document.getElementById("hint")
  document.createElement("p")
  hint.append("")
  hint.textContent = hintOne

  document.getElementById('input-form').addEventListener("submit", submit)

  function checkIfWin() {
    if (levelTwoName.length === 0) {
      console.log("You win!")
      let name = levelTwoName.join("").toUpperCase()
      console.log(name)
      correct.textContent = "MAGNETO!!!! ==> YOU WIN! REFRESH PAGE AND CLICK A NEW LEVEL"
    }
  }
  function submit(event) {
    event.preventDefault()
    let input = document.getElementById("input")
    let value = input.value.toLowerCase()

    if (levelTwoName.includes(value)) {
      document.getElementById("correct")
      let correctInput = document.createElement("p")
      correct.append(value, correctInput)
      levelTwoName = levelTwoName.filter(letter => letter !== value)
      checkIfWin()
    } else {
      document.getElementById("graveyard")
      let wrongInput = document.createElement("p")
      graveyard.append(value, wrongInput)
      lives--
      deaths(hintTwo, hintThree)
      if (lives === 0) {
      }
    }
  }
})
// Level Three
document.getElementById("level-three").addEventListener("click", function () {

  let hintOne = "First Hint: 4 letter word (MARVEL VILLAIN)"
  let hintTwo = "SECOND HINT: Primarily a Fantastic Four Villain"
  let hintThree = "THIRD HINT: The ruler of Latveria"

  document.getElementById("hint")
  document.createElement("p")
  hint.append("")
  hint.textContent = hintOne

  document.getElementById('input-form').addEventListener("submit", submit)

  function checkIfWin() {
    if (levelThreeName.length === 0) {
      console.log("You win!")
      let name = levelThreeName.join("").toUpperCase()
      console.log(name)
      correct.textContent = "DOOM!!!! ==> YOU WIN! REFRESH PAGE AND CLICK A NEW LEVEL"
    }
  }

  function submit(event) {
    event.preventDefault()
    let input = document.getElementById("input")
    let value = input.value.toLowerCase()

    if (levelThreeName.includes(value)) {
      document.getElementById("correct")
      let correctInput = document.createElement("p")
      correct.append(value, correctInput)
      levelThreeName = levelThreeName.filter(letter => letter !== value)
      checkIfWin()
    } else {
      document.getElementById("graveyard")
      let wrongInput = document.createElement("p")
      graveyard.append(value, wrongInput)
      lives--
      deaths(hintTwo, hintThree)
      if (lives === 0) {
      }
    }
  }
})

//     // Level Four
document.getElementById("level-four").addEventListener("click", function () {

  let hintOne = "FOURTH LEVEL HINT: 9 letter word (DC ANTIHERO)"
  let hintTwo = "SECOND HINT: He weilds electrified batons"
  let hintThree = "THIRD HINT: Dick Graysons second superhero identity"

  document.getElementById("hint")
  document.createElement("p")
  hint.append("")
  hint.textContent = hintOne

  document.getElementById('input-form').addEventListener("submit", submit)

  function checkIfWin() {
    if (levelFourName.length === 0) {
      levelFourName.join("").toUpperCase()
      correct.textContent = "NIGHTWING!!!! ==> YOU WIN! REFRESH PAGE AND CLICK A NEW LEVEL"
    }
  }

  function submit(event) {
    event.preventDefault()
    let input = document.getElementById("input")
    let value = input.value.toLowerCase()

    if (levelFourName.includes(value)) {
      document.getElementById("correct")
      let correctInput = document.createElement("p")
      correct.append(value, correctInput)
      levelFourName = levelFourName.filter(letter => letter !== value)
      checkIfWin()
    } else {
      document.getElementById("graveyard")
      let wrongInput = document.createElement("p")
      graveyard.append(value, wrongInput)
      lives--
      deaths(hintTwo, hintThree)
      if (lives === 0) {
      }
    }
  }
})