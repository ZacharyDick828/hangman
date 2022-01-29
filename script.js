// functions

function badChoice() {

    let lives = 4

    if (lives === 3){
        images('assets/Ghost-Rider-Head.png', 580, 555, 75)
    }
    else if (lives === 2){
        images('assets/Ghost-Rider-Body.png', 580, 550, 100)
    }
    else if (lives === 1) {
        images('assets/Left-leg.png', 560, 300, 63)
    }
    else if (lives === 0) {
        images('assets/Right-leg.png', 618, 290, 63)
    }

}
function falseSubmission(array) {
    for (let i = 0; i > array.length; i++){
        if (array[i] !== submittedLetter) {
        lives -= 1
        // append submitted number to graveyard div
    }}
}

    function correctSubmission(array) {
         for (let i = 0; i > array.length; i++){
            if (array[i] === submittedLetter) {
            // append submitted letter to correct place
        }}

    }
   

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

document.getElementsByClassName("level-one").addEventListener("click", levelOne());
   
    function levelOne(){
       

       badChoice()
    
    //    append "5 letter word" to bubble
        // if (lives === 3)s
        // append "His real name is Barry Allen" to bubble
        // if (lives < 3)
        // append "He's fast" to bubble
     
    
       const levelOneName = ["F", "L", "A", "S", "H"]
       falseSubmission(levelOneName)
       correctSubmission(levelOneName)

    }


// Level Two

document.getElementsByClassName("level-two").addEventListener("click", levelTwo());
   
    function levelTwo() {
   

        // append "7 letter word" to bubble
        // if (lives === 3)
        // append "Professor X's 'old friend'" to bubble
        //  if (lives < 3)
        // append "Has the ability to control magnetic fields" to bubble
    
        let hintElement = document.div.createElement("p")
            hintElement.append("hint:")

        const levelTwoName = ["M", "A", "G", "N", "E", "T", "O"]
        falseSubmission(levelTwoName)
        correctSubmission(levelTwoName)
    }
    // Level Three
    document.getElementsByClassName("level-three").addEventListener("click", levelThree());

        function levelThree() {

            // append "4 letter word" to bubble
            // if (lives === 3)
            // append "Primarily a Fantastic 4 villain" to bubble
            // if (lives < 3)
            // append "At one point becomes the Sorcerer Supreme" to bubble
            
            const levelThreeName = ["D", "O", "O", "M"]
            falseSubmission(levelThreeName)
            correctSubmission(levelThreeName)
        }
        

    // Level Four
    document.getElementsByClassName("level-four").addEventListener("click", levelFour());

    function levelFour() {

        // append "Dick Grayson's second super-hero identity" to bubble
        // if (lives === 3)
        // append "Carries electrified batons" to bubble 
        // if (lives < 3)
        // appennd  "9 letter word" to bubble
        

        const levelFourName = ["N", "I", "G", "H", "T", "W", "I", "N", "G"]
        falseSubmission(levelFourName)
        correctSubmission(levelFourName)
    }

    badChoice()






