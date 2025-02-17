function _$(item){
 return document.querySelector(item)
     
}

const chmForm = _$(".chm__form");
const emailInput = _$("#email");
const passwordInput = _$("#password");
const signBtn = _$(".sign-btn");
const errorMssg = _$(".errormssg");

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
