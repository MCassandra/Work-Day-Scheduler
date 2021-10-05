var displayDate = document.getElementById("now");
var saveButton = document.querySelectorAll(".saveBtn");
var textEls = document.querySelectorAll("textarea");



saveButton.forEach(button => {
    button.addEventListener("click", function (){
        var textEl = this.parentNode.childNodes[3];
        console.log(textEl.value);
        console.log(textEl.id);
        console.log(todaysTasks[textEl.id]);
        todaysTasks[textEl.id].task = textEl.value;
        saveTask();
    })
})

// show today's date
function todaysDate() {
    var today = moment().format("MMMM DD, YYYY");
    displayDate.textContent = today;
}

// create a variable to loop through the times
var todaysTasks = JSON.parse(localStorage.getItem("todaysTask")) || {
    "9":{
        hour: "9",
        task: "",
    },
    "10":{
        hour: "10",
        task: "",
    },
    "11":{
        hour: "11",
        task: "",
    },
    "12":{
        hour: "12",
        task: "",
    }, 
    "13":{
        hour: "13",
        task: "",
    }, 
    "14":{
        hour: "14",
        task: "",
    }, 
    "15":{
        hour: "15",
        task: "",
    }, 
    "16":{
        hour: "16",
        task: "",
    },
}

textEls.forEach(textEl => {
    textEl.value = todaysTasks[textEl.id].task
});

// save tasks to local storage
function saveTask() {
    localStorage.setItem("todaysTask", JSON.stringify(todaysTasks));
    console.log("saved");
};


// // display any tasks in local storage on page
// function displayTask() {
//     todaysTasks.forEach(task =>{
//         // console.log(task);
//     }
//     )
// };

// displayTask();
// shows existing data in local storage if it exists


todaysDate();

// saves tasks/data to be stored in local storage
// var 
// saveButton.addEventListener("click", saveTask);
