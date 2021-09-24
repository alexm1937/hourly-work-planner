const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));
//Function to set color based on time current/past/future
Array.from(rows).forEach(row => {
    let rowIdString = row.id
    let rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        //compares row id to current hour?
        if (currentHour === rowHour) {
            setColor(row, "red");
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white")
        }
    }
})
//sets color if time
function setColor(element, color) {
    element.style.backgroundColor = color;
}

//Save button events
$("#9amBtn").on("click", function(event){
    var nineAmText = $('textarea#9am').val().trim();
    savedText = JSON.stringify(nineAmText);
    localStorage.setItem("nineAmTask", savedText);
    console.log(nineAmTask);
})
$("#10amBtn").on("click", function(event){
    var tenAmText = $('textarea#10am').val().trim();
    saveText = JSON.stringify(tenAmText);
    localStorage.setItem("tenAmTask", saveText);
    console.log(tenAmTask);
})


//load tasks
function loadTasks() {
    nineAmTask = JSON.parse(localStorage.getItem("nineAmTask"));
    var nineAmText = $('textarea#9am');
    nineAmText.val(nineAmTask)

    tenAmTask = JSON.parse(localStorage.getItem("tenAmTask"));
    var tenAmText = $('textarea#10am');
    tenAmText.val(tenAmTask)
};




loadTasks();