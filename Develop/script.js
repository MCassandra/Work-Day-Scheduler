var displayDate = document.getElementById("now");
var text1 = document.getElementById("text1");
var saveBtn = document.querySelector(".saveBtn");
var inputTask = document.querySelector(".task");

// show today's date
function todaysDate (){
    var today = moment().format("MMMM DD, YYYY");
    displayDate.textContent=today;
}

function showSavedTask(){
    var saved = localStorage.getItem("task");
    text1.textContent = saved;
}
function saveInput (){
    var needToDo = text1.value;
    console.log (needToDo);
// make sure input is entered / no empty submitts
    if (needToDo){
        localStorage.setItem("task", text1.value);
    }
    showSavedTask();
}
showSavedTask();
todaysDate();


// when click save button, save key-value pairs into local storage
saveBtn.addEventListener("click", saveInput);

// figure out how to save inputs for multiple areas