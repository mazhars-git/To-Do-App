let form = document.getElementById("form"),
textInput = document.getElementById("textInput"),
msg = document.getElementById("msg"),
dateInput = document.getElementById("dateInput"),
description = document.getElementById("textarea"),
tasks = document.getElementById("tasks");

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
        acceptData();
    }
}

let data = {};

let acceptData = () =>{
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = description.value;

    console.log(data);
    createPost();
}

let createPost = () =>{
    tasks.innerHTML += 
        `
            <div>
                <span class="fw-bold">${data.text}</span>
                <span class="text-secondary small">${data.date}</span>
                <p>${data.description}</p>
                <span class="options">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
                </span>
            </div>    
        `
    resetForm();
}

let resetForm= () =>{
    textInput.value = "";
    dateInput.value = "";
    description.value= "";
}

