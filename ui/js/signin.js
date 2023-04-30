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
    signinBtn.classList.add("disable");
    signupBtn.classList.remove("disable");

}
var username=document.getElementById("nextField").value;
var emial=document.getElementById("emailHere").value;
var password=document.getElementById("pwd").value;
var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(username=''){
    alert("Please enter user name.")
}
else if(password=''){
    alert("Please enter a password")
}
else if(!filter.test(username)){
    alert("Enter a valid email id.")
}
else if(password.length<6||password.length>6){
    alert("Password min and max length is 6")
}
else{
    alert("Sign In successfull");
}
// while((username>=a&&username<=z)||(username>=A&&username<=Z))
//  {
//      while((email>filter&&email<=filter))
//      {
//         if(password<6||password>6)
//         {
//             alert("Sign up successful");
//             window.location="index.html";
//         }
//      }
 //}