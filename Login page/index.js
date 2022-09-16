var psw=document.getElementById("psw");
var letter=document.getElementById("letter");
var capital=document.getElementById("capital");
var number=document.getElementById("number");
var specialChar=document.getElementById("specialChar");
var length=document.getElementById("length");

// When the user clicks on the password field, show the message box
psw.onfocus=function()
{
    document.getElementById("message").style.display="block";
}

// When the user clicks outside of the password field, hide the message box
psw.onblur=function()
{
    document.getElementById("message").style.display="none";
}

// When the user starts to type something inside the password field
function passwordCheck()
{
    // Validate lowercase letters
    var lowerCaseLetters=/[a-z]/;

    if(psw.value.match(lowerCaseLetters))
    {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    }

    else
    {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    // Validate capital letters
    var upperCaseLetters=/[A-Z]/;

    if(psw.value.match(upperCaseLetters))
    {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }

    else
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    // Validate numbers
    var numbers=/[0-9]/;

    if(psw.value.match(numbers))
    {
        number.classList.remove("invalid");
        number.classList.add("valid");
    }

    else
    {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(psw.value.length >=8)
    {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }

    else
    {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    var specialCharacters=/[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    
    //Special characters check
    if(psw.value.match(specialCharacters))
    {
        specialChar.classList.remove("invalid");
        specialChar.classList.add("valid");
    }

    else
    {
        specialChar.classList.remove("valid");
        specialChar.classList.add("invalid");
    }
}


function usernameCheck()
{
    
}