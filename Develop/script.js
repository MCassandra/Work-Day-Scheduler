var displayDate = document.getElementById("now");
var text1 = document.getElementById("text1");
var saveBtn = document.querySelectorAll(".saveBtn");
// var inputTask = document.querySelector(".task");
var textareaEl = document.querySelectorAll(".task")

// show today's date
function todaysDate (){
    var today = moment().format("MMMM DD, YYYY");
    displayDate.textContent=today;
}

// get the stored value from local storage and show it on page, even when refreshed
function showSavedTask(){
    var saved = localStorage.getItem("task");
    text1.textContent = saved;
}

// get user's input and store the value
function saveInput (e){
    // got code structure (line 22) from a BCS assistant  
    textareaEl=(e.target.getAttribute("hour"));
    
    var needToDo = text1.value;
    console.log (textareaEl);
// make sure input is entered / no empty submitts
    if (needToDo){
        localStorage.setItem("task", text1.value);
    }
    showSavedTask();
}
showSavedTask();
todaysDate();


// when click save button, save key-value pairs into local storage
for (var i = 0; i < saveBtn.length; i++){
saveBtn[i].addEventListener("click", saveInput);
};
