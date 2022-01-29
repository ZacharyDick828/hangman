// functions


// function badChoice() {

    

//     if (lives === 3){
//         images('assets/Ghost-Rider-Head.png', 580, 555, 75)
//     }
//     else if (lives === 2){
//         images('assets/Ghost-Rider-Body.png', 580, 550, 100)
//     }
//     else if (lives === 1) {
//         images('assets/Left-leg.png', 560, 300, 63)
//     }
//     else if (lives === 0) {
//         images('assets/Right-leg.png', 618, 290, 63)
//     }

// }
// function falseSubmission(array) {
//     for (let i = 0; i > array.length; i++){
//         if (array[i] !== submittedLetter) {
//         lives -= 1
        // append submitted number to graveyard div
//     }}
// }

//     function correctSubmission(array) {
//          for (let i = 0; i > array.length; i++){
//             if (array[i] === submittedLetter) {
            // append submitted letter to correct place
    //     }}

    // }
   

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

// function submissions(url, property, maxWidth){
//     let object = document.createElement('img')
//     object.src = url
//     object.style.maxWidth = maxWidth + 'px'
//     document.property.append(object) = property
//     return object
// }

// Level One

// document.getElementsByClassName("level-one")[0].addEventListener("click", function(){

//     currentName = levelOneName
    
    
    // falseSubmission(levelOneName)
    // correctSubmission(levelOneName)
    // $(document).ready(function(){
    //     $(".level-one").click(function(){
   
    // $("img.bubble").append("<p>HINT: 5 letter word</p>")

    
    //     if (lives === 3) {
    //         $("img.bubble").append("<p>HINT: He's fast</p>")
    //     }

    //     if (lives < 3){
    //         $("img.bubble").append("<p>HINT: His real name is Barry Allen</p>")
        // }
     
       

// })


// Level Two

// document.getElementsByClassName("level-two").addEventListener("click", function(){
   
   
    // $("img.bubble").append("<p>HINT: 7 letter word</p>")
    
    //     if (lives === 3) {
    //         $("img.bubble").append("<p>HINT: He's fast</p>")
    //     }

    //     if (lives < 3){
    //         $("img.bubble").append("<p>HINT: His real name is Barry Allen</p>")
        // }
        
        // append "Professor X's 'old friend'" to bubble
        //  if (lives < 3)
        // append "Has the ability to control magnetic fields" to bubble
    
    //     let hintElement = document.div.createElement("p")
    //         hintElement.append("hint:")

    //     const levelTwoName = ["M", "A", "G", "N", "E", "T", "O"]
    //     falseSubmission(levelTwoName)
    //     correctSubmission(levelTwoName)
    // })
    // Level Three
    // document.getElementsByClassName("level-three").addEventListener("click", function(){

            // append "4 letter word" to bubble
            // if (lives === 3)
            // append "Primarily a Fantastic 4 villain" to bubble
            // if (lives < 3)
            // append "At one point becomes the Sorcerer Supreme" to bubble
            
        //     const levelThreeName = ["D", "O", "O", "M"]
        //     falseSubmission(levelThreeName)
        //     correctSubmission(levelThreeName)
        // })
        

    // Level Four
    // document.getElementsByClassName("level-four").addEventListener("click", function(){


        // append "Dick Grayson's second super-hero identity" to bubble
        // if (lives === 3)
        // append "Carries electrified batons" to bubble 
        // if (lives < 3)
        // appennd  "9 letter word" to bubble
        

    //     const levelFourName = ["N", "I", "G", "H", "T", "W", "I", "N", "G"]
    //     falseSubmission(levelFourName)
    //     correctSubmission(levelFourName)
    // })

    





    document.getElementById('input-form').addEventListener("submit", submit)

    let lives = 4
    let levelOneName = ["f", "l", "a", "s", "h"]
    let currentName = levelOneName
    
    function submit(event) {
      event.preventDefault()
      let input = document.getElementById("input")
      let value = input.value.toLowerCase()
    
      if (currentName.includes(value)) {
        console.log("success")
        currentName = currentName.filter(letter => letter !== value)
        checkIfWin()
      } else {
        console.log("failure")
        lives--
        if (lives === 0) {
          console.log("you lose")
        }
      }
    
      function checkIfWin() {
        if (currentName.length === 0) {
          console.log("You win!")
          let name = levelOneName.join("").toUpperCase()
          console.log(name)
        }
      }
    
      input.value = ""
      console.log("original:", levelOneName)
      console.log("letters left", currentName)
    }
