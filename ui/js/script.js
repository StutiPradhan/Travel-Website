function login(){
    var username=document.getElementById("email").value;
    var password=document.getElementById("password").value;
   var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(username=='')
    {
        alert("please enter user name.")
    }
    else if(password==''){
        alert("enter the password");
    }
    else if(!filter.test(username))
    {
        alert("Enter valid email id.");
    }
    else if(password.length<6||password.length>6)
    {
        alert("Password min and max length is 6");
    }
    else{
        alert("Login successfull");
        window.location="D:\stutivscode\Travel-Website\index.html";
    }
}