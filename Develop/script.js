var displayDate = document.getElementById("now");
var text1 = document.getElementById("text1");
var saveBtn = document.querySelector(".saveBtn");
var inputTask = document.querySelector(".task");

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
// looping through local storage using the key value. (got this structure off youtube video)
// // for (i=0; i<localStorage.length;i++){
//     var key = localStorage.task(i);
//     var value = localStorage.getItem("task");
// }