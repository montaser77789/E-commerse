let links = document.getElementById("links");
let userinfo = document.getElementById("user-info");
let cartlog = document.getElementById("card-log");


let user = document.getElementById("user");
let username = localStorage.getItem("username");
let logbtn =document.getElementById("log-out")



if(username){
    links.style.display="none";
    userinfo.style.display="flex";
    cartlog.style.display="flex";

    user.innerHTML+=username;
}
logbtn.addEventListener("click",function(){
    localStorage.clear();
    setTimeout(()=> {
        window.location="register.html"
    },1500)
})

let header_responsive = document.querySelector(".header_responsive");
let listIcon = document.querySelector(".list");
listIcon.addEventListener("click" , ()=>{
    header_responsive.classList.toggle("active");
    console.log("kero");
})

