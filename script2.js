
var saveButton=document.querySelector(".saveBtn");
var updatetext = document.querySelector("#text");


// use moment.js to add date
function showDate() {
    var today = moment().format('MMM DD, YYYY');
    showDay.text(today);
  }

// on click, set input to local storage
saveButton.addEventListener("click", function(event){
    event.preventDefault();
    
})

var savedTask=document.querySelector(".task").value;
    localStorage.setItem("inputTask", savedTask);

    // need a function to get input to local storage
function save(){
   localStorage.getItem("inputTask", savedTask);
}
updatetext.document.textContent.savedTask
save();