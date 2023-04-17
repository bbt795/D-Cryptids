const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "dcryptids" && password === "password123") {
        alert("You have successfully logged in.");
        //continue to security questions 
        window.location.href="secQuestions.html";
    
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

//function for security questions
function quesFunction() {

   const res1 = loginForm.ques1.value;
   const res2 = loginForm.ques2.value;
   const res3 = loginForm.ques3.value;

    if(res1=="Blue" && res2=="Jones" && res3=="Midas") {
        //continue to password manager
        window.location.href="passManager.html";
    }
    else {
        alert("Incorrect response for at least one question");
    }
}
