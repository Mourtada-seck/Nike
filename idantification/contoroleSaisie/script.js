
// Declaration variable
var myPassword = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var length = document.getElementById("lenght");

// Affichage du boit message si user click sur le button password
myPassword.onclick = function() {
    document.getElementById("message").style.display = "block";
}
// Fermatation du boit message si user click sur l'interface
myPassword.onblur = function() {
    document.getElementById("message").style.display = "none";
}
// lorsque user commence a donner son mot de pass
myPassword.onkeyup = function() {
    // Valider les lettres minuscules
    var lowerCaseLetters = /[a-z]/g
    if (myPassword.value.match(lowerCaseLetters)) {
        // si password contient une lettre minuscule enleve class"invalid" et ajoute class"valid"
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }
    else 
    {
        // si non fait le contraire
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Valider les lettres majuscule
    var uperCaseLetters = /[A-Z]/g
    if (myPassword.value.match(uperCaseLetters)) {
        // si password contient une lettre majuscule enleve class"invalid" et ajoute class"valid"
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else 
    {
        // si non fait le contraire
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

     // Valider NOMBRE
     var numbers = /[0-9]/g
     if (myPassword.value.match(numbers)) {
         // si password contient un chiffre enleve class"invalid" et ajoute class"valid"
         number.classList.remove("invalid");
         number.classList.add("valid");
     }
     else 
     {
         // si non fait le contraire
         number.classList.remove("valid");
         number.classList.add("invalid");
     }

      // Valider NOMBRE caractere
      if (myPassword.value.length >= 8) {
          // si password contient minimum 8 caracteres enleve class"invalid" et ajoute class"valid"
          lenght.classList.remove("invalid");
          lenght.classList.add("valid");
      }
      else 
      {
          // si non fait le contraire
          length.classList.remove("valid");
          length.classList.add("invalid");
      }

  
      
}

