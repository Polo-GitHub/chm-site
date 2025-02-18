function _$(item){
 return document.querySelector(item)
     
}

const chmForm = _$(".chm__form");
const emailInput = _$("#email");
const passwordInput = _$("#password");
const signBtn = _$(".sign-btn");
const errorMssg = _$(".errormssg");
const eyeIcon = _$(".eyeicon");

if(passwordInput){
    passwordInput.addEventListener("input", ()=>{
        if(passwordInput.value.length > 0){
            eyeIcon.style.display = "block";
        }
        else{
            eyeIcon.style.display = "none";
        }
    });
}
if(eyeIcon){
    eyeIcon.addEventListener("click", ()=>{

            if(passwordInput.type === "password"){
                passwordInput.type = "text"
                eyeIcon.src = "./images/eye-close.png";
            }
            else{
                passwordInput.type = "password"
                eyeIcon.src = "./images/eye-open.png";
            }   
    });
}
document.addEventListener("input", ()=>{
    const emailValue = emailInput.value.trim().toLowerCase();
    const passwordValue = passwordInput.value.trim();
    if(emailValue !== "" && passwordValue !== "" ){
        signBtn.removeAttribute("disabled");
        signBtn.classList.add("active")
    }
    else{
        signBtn.setAttribute("disabled", "true");
        signBtn.classList.remove("active");
    }
    errorMssg.innerHTML = ""
});
if(signBtn){
    signBtn.addEventListener("click", (e)=>{
        e.preventDefault()
    const emailValue = emailInput.value.trim().toLowerCase();
    const passwordValue = passwordInput.value.trim();
    const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.[a-z]{2,}$/
    if(!emailRegEx.test(emailValue) || passwordValue.length < 6){
        errorMssg.innerHTML = `Email and password combination do not match our records.`
    }

    });
}
