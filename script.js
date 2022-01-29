let lives = 4

let levelOneName = ["f", "l", "a", "s", "h"]
let currentName = levelOneName
// load image function
function images(url, left, bottom, maxWidth){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    object.style.maxWidth = maxWidth + 'px'
    document.body.append(object)
    return object
}

// decoration

    images('assets/Batman-logo.png', 0, 0, 250)
    images('assets/Nightwing-Logo.png', 0, 600, 220)
    images('assets/Doom-logo.png', 1250, 0, 180)
    images('assets/Spiderman-logo.png', 1230, 600, 175)
    images('/assets/Hangman-post.png', 600, 300, 300)


// Level One
document.getElementById("level-one").addEventListener("click", function(){

  currentName = levelOneName

  document.getElementById("hint")
  let hintOne = document.createElement("p")
  hint.append("HINT: 5 letter word", hintOne)




function deaths() {

  console.log("running death")

  if (lives === 3) {
    images('assets/Ghost-Rider-Head.png', 580, 555, 75)
    document.getElementById("hint").textContent = "HINT: real name is Barry Allen"
  }

  if (lives === 2){
    images('assets/Ghost-Rider-Body.png', 560, 440, 125)
    document.getElementById("hint").textContent = "HINT: he's fast"
  }

  if (lives === 1){
        images('assets/Left-leg.png', 560, 320, 63)
  }

  if (lives === 0) {
    images('assets/Right-leg.png', 618, 315, 63)
    document.getElementById("hint").textContent = "YOU LOSE! REFRESH PAGE AND CLICK NEW LEVEL"
  }
}
        
document.getElementById('input-form').addEventListener("submit", submit)

function submit(event) {
  event.preventDefault()
  let input = document.getElementById("input")
  let value = input.value.toLowerCase()

  if (currentName.includes(value)) {
    console.log("success")
    document.getElementById("correct")
    let correctInput = document.createElement("p")
    correct.append(value, correctInput)
    currentName = currentName.filter(letter => letter !== value)
    checkIfWin()
  } else {
    console.log("failure")
    document.getElementById("graveyard")
    let wrongInput = document.createElement("p")
    graveyard.append(value, wrongInput)
    lives--
    deaths()
    if (lives === 0) {
      console.log("you lose")
    }
  }
}
})

  function checkIfWin() {
    if (currentName.length === 0) {
      console.log("You win!")
      let name = levelOneName.join("").toUpperCase()
      console.log(name)
      correct.textContent = "FLASH"
    }
  }

// // Level Two

// document.getElementById("level-two").addEventListener("click", function(){

//   let lives = 4
//   let levelTwoName = ["m", "a", "g", "n", "e", "t", "o"]
//   let currentName = levelTwoName
//   document.getElementById("hint")
//   let hintOne = document.createElement("p")
//   hint.append("HINT: 7 letter word", hintOne)

//   document.getElementById('input-form').addEventListener("submit", submit)

//   function submit(event) {
//     event.preventDefault()
//     let input = document.getElementById("input")
//     let value = input.value.toLowerCase()

//     if (currentName.includes(value)) {
//       console.log("success")
//       currentName = currentName.filter(letter => letter !== value)
//       checkIfWin()
//     } else {
//       console.log("failure")
//       lives--
//       if (lives === 0) {
//         console.log("you lose")
//       }
//     }

//     function checkIfWin() {
//       if (currentName.length === 0) {
//         console.log("You win!")
//         let name = levelTwoName.join("").toUpperCase()
//         console.log(name)
//       }
//     }

//     input.value = ""
//     console.log("original:", levelTwoName)
//     console.log("letters left", currentName)
//   }
// })
//     //HINT: 7 letter word
    
//     //HINT: controls magnetic fields

//     //HINT: he plays chess with an old friend
  
//     // Level Three
//     document.getElementById("level-three").addEventListener("click", function(){

//       let lives = 4
//       let levelThreeName = ["d", "o", "o", "m"]
//       let currentName = levelThreeName
//       document.getElementById("hint")
//   let hintOne = document.createElement("p")
//   hint.append("HINT: 4 letter word", hintOne)

//       document.getElementById('input-form').addEventListener("submit", submit)
    
//       function submit(event) {
//         event.preventDefault()
//         let input = document.getElementById("input")
//         let value = input.value.toLowerCase()
    
//         if (currentName.includes(value)) {
//           console.log("success")
//           currentName = currentName.filter(letter => letter !== value)
//           checkIfWin()
//         } else {
//           console.log("failure")
//           lives--
//           if (lives === 0) {
//             console.log("you lose")
//           }
//         }
    
//         function checkIfWin() {
//           if (currentName.length === 0) {
//             console.log("You win!")
//             let name = levelThreeName.join("").toUpperCase()
//             console.log(name)
//           }
//         }
    
//         input.value = ""
//         console.log("original:", levelThreeName)
//         console.log("letters left", currentName)
//       }
// })

//             //hint: "4 letter word" 
          
//             // hint: Primarily a Fantastic 4 villain
           
//             // hint: At one point becomes the Sorcerer Supreme
            
//     // Level Four
//     document.getElementById("level-four").addEventListener("click", function(){

//       let lives = 4
//       let levelFourName = ["n", "i", "g", "h", "t", "w", "i", "n", "g"]
//       let currentName = levelFourName
//       document.getElementById("hint")
//   let hintOne = document.createElement("p")
//   hint.append("HINT: 9 letter word", hintOne)
    
//       document.getElementById('input-form').addEventListener("submit", submit)
    
//       function submit(event) {
//         event.preventDefault()
//         let input = document.getElementById("input")
//         let value = input.value.toLowerCase()
    
//         if (currentName.includes(value)) {
//           console.log("success")
//           currentName = currentName.filter(letter => letter !== value)
//           checkIfWin()
//         } else {
//           console.log("failure")
//           lives--
//           if (lives === 0) {
//             console.log("you lose")
//           }
//         }
    
//         function checkIfWin() {
//           if (currentName.length === 0) {
//             console.log("You win!")
//             let name = levelFourName.join("").toUpperCase()
//             console.log(name)
//           }
//         }
    
//         input.value = ""
//         console.log("original:", levelFourName)
//         console.log("letters left", currentName)
//       }
//  })


        //hint: Dick Grayson's second super-hero identity 
       
        // hint:Carries electrified batons
       
        // hint: 9 letter word
        
  
  



    