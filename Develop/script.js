var saveButton=document.querySelector(".saveBtn");
var updatetext = document.querySelector("#text");
var storageInput = document.querySelector(".storage");

// on click, set input to local storage
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    
})

var savedTask=document.getElementById(".task").value;
    document.localStorage.setItem("inputTask", savedTask);

    // need a function to get input to local storage
function save(){
    document.localStorage.getItem("inputTask", savedTask);
}
updatetext.document.textContent.savedTask
save();