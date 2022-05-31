let form = document.getElementById("form"),
textInput = document.getElementById("textInput"),
msg = document.getElementById("msg");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    formValidation();
})

let formValidation = () =>{
    if(textInput.value === ""){
        console.log("Something wrong")
        msg.innerHTML = "Input cannot be blank";

    }
    else{
        console.log("success");
        msg.innerHTML = "";
    }
}
