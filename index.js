const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const charactersSymbols =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersNumbers =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const charactersNumbersSymbols =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const genBtn = document.getElementById("generate")
const pass1 = document.getElementById("pass1")
const pass2 = document.getElementById("pass2")
const pass1Copy = document.getElementById("pass1-copy")
const pass2Copy = document.getElementById("pass2-copy")
const alert = document.getElementById("alert")
const symbolsRadio = document.getElementById("yes1")
const numbersRadio = document.getElementById("yes2")

genBtn.addEventListener("click", function() {

    pass1.textContent = ""
    pass2.textContent = ""

    if(symbolsRadio.checked === true && numbersRadio.checked === true) {
        for (let i = 0; i < 11; i++ ) {
            GeneratePassword()
        }
    }

    else if(symbolsRadio.checked === false && numbersRadio.checked === true) {
        for (let i = 0; i < 11; i++ ) {
            GeneratePasswordNoSymbols()
        }
    }

    else if(symbolsRadio.checked === true && numbersRadio.checked === false) {
        for (let i = 0; i < 11; i++ ) {
            GeneratePasswordNoNumbers()
        }
    }

    else  {
        for (let i = 0; i < 11; i++ ) {
            GeneratePasswordNoNumbersSymbols()
        }
    }
})


function GeneratePassword() {

    let characterIndex1 = Math.floor(Math.random() * characters.length)
    let randomCharacter1 = characters[characterIndex1]
    pass1.textContent += randomCharacter1

    let characterIndex2 = Math.floor(Math.random() * characters.length)
    let randomCharacter2 = characters[characterIndex2]
    pass2.textContent += randomCharacter2  
}

function GeneratePasswordNoSymbols() {

    let characterIndex1 = Math.floor(Math.random() * charactersSymbols.length)
    let randomCharacter1 = charactersSymbols[characterIndex1]
    pass1.textContent += randomCharacter1

    let characterIndex2 = Math.floor(Math.random() * charactersSymbols.length)
    let randomCharacter2 = charactersSymbols[characterIndex2]
    pass2.textContent += randomCharacter2  
}

function GeneratePasswordNoNumbers() {

    let characterIndex1 = Math.floor(Math.random() * charactersNumbers.length)
    let randomCharacter1 = charactersNumbers[characterIndex1]
    pass1.textContent += randomCharacter1

    let characterIndex2 = Math.floor(Math.random() * charactersNumbers.length)
    let randomCharacter2 = charactersNumbers[characterIndex2]
    pass2.textContent += randomCharacter2  
}

function GeneratePasswordNoNumbersSymbols() {

    let characterIndex1 = Math.floor(Math.random() * charactersNumbersSymbols.length)
    let randomCharacter1 = charactersNumbersSymbols[characterIndex1]
    pass1.textContent += randomCharacter1

    let characterIndex2 = Math.floor(Math.random() * charactersNumbersSymbols.length)
    let randomCharacter2 = charactersNumbersSymbols[characterIndex2]
    pass2.textContent += randomCharacter2  
}

pass1Copy.addEventListener("click", function() {
    let passText1 = pass1.innerHTML
    navigator.clipboard.writeText(passText1)
    console.log("clicked")
    alert.classList.add("clicked");
    fadeOutTimer()

})

pass2Copy.addEventListener("click", function() {
    let passText2 = pass2.innerHTML;
    navigator.clipboard.writeText(passText2);
    console.log("clicked")
    alert.classList.add("clicked");
    fadeOutTimer()

})

function fadeOutTimer() {
    setTimeout(function() {
        alert.classList.remove("clicked"); 
        }, 1000);
    
}



