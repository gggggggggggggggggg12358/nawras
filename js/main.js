// const userInput = document.getElementById("userInput");
// const passInput = document.getElementById("passInput");
// const logInBtn = document.getElementById("logIn");
// // window.onload=localStorage.setItem("userName","Nawras")
// const enter = function() {
//     if (userInput.value === "Nawras" && passInput.value === 161199) {
//         location.href = "../happy.html"
//     } else {
//         window.alert("You are Not Nawras")
//     }
// }

// logInBtn.addEventListener("click", enter);

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const signUpBtn2 = document.getElementById('signUpBtn2');
const signInBtn2 = document.getElementById('signInBtn2');
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

signUpBtn2.addEventListener('click', () => {
    window.alert("اااسف الباسوورد بس مع حبيبتي وما بقدر اسجل غيرها")
});
const error = function (){
     if(userInput.value!=="nawras"|| passInput.value.toString()!=="161199" ){
        window.alert("اااسف الباسوورد بس مع حبيبتي وما  بفوت غيرها")
        window.location.href="#";
 }else{
    window.location.href="https://www.youtube.com/watch?v=0LHmevWVvpc";
}
}
   
document.getElementById("aaa").addEventListener('click', error)


 
;
