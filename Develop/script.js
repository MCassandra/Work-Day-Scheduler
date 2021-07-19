var saveButton=document.querySelector(".saveBtn");

// need a function to get input to local storage
function save(){
    localStorage.getItem("inputTask", savedTask);
}

// on click, set input to local storage
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    var savedTask=document.getElementById("task").value;
    localStorage.setItem("inputTask", savedTask);
    save();
})



