var displayDate = document.getElementById("now");
var saveButton = document.querySelectorAll(".saveBtn");
var textEls = document.querySelectorAll("textarea");


// for each button save the users task value
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

todaysDate();

// create a variable to loop through the times & if todaysTask exists get from local storage on load. 
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
    "17":{
        hour: "17",
        task: "",
    },
};


// save tasks to local storage
function saveTask() {
    localStorage.setItem("todaysTask", JSON.stringify(todaysTasks));
    console.log("saved");
};

// for each textarea get their task values from the appropriate id
textEls.forEach(textEl => {
    textEl.value = todaysTasks[textEl.id].task;
    
});

// changing colors based on time
 