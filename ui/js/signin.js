let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");
signinBtn.onclick=function()
{
    nameField.style.maxHeight="0";
    title.innerHTML="Sign In ";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

}
signupBtn.onclick=function()
{
    nameField.style.maxHeight="6rem";
    title.innerHTML="Sign Up ";
    signipBtn.classList.add("disable");
    signupBtn.classList.remove("disable");

}
var username=document.getElementById(nextField).value;
var emial=document.getElementById(emailHere).value;
var password=document.getElementById(pwd).value;
var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 while((username>=a&&username<=z)||(username>=A&&username<=Z))
 {
     while((email>filter&&email<=filter))
     {
        if(password<6||password>6)
        {
            alert("Sign up successful");
            window.location="index.html";
        }
     }
 }