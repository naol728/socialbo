let showpwd=document.getElementById("eye");
let password=document.getElementById("password");
showpwd.addEventListener("click",()=>{
    if(password.type=="password"){
        password.type="text";
    }
    else{
        password.type="password";
    }
})