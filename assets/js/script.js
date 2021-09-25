const textRows = document.getElementsByClassName("textRow");
$("#currentDay").text(moment().format('dddd, MMMM Do'));
let currentHour = parseInt(moment().format('H'));

//Function to set color based on time current/past/future
Array.from(textRows).forEach(textRow => {
    let textRowIdString = textRow.id
    let textRowHour;
    if (textRowIdString) {
        textRowHour = parseInt(textRowIdString);
    }
    if (textRowHour) {
        //compares row id to current hour?
        if (currentHour === textRowHour) {
            setColor(textRow, "#ff6961");
        } else if (currentHour < textRowHour) {
            setColor(textRow, "#77dd77");
        } else if (currentHour > textRowHour) {
            setColor(textRow, "#d3d3d3");
        }
    }
});

//sets color if time
function setColor(element, color) {
    element.style.backgroundColor = color;
};

//Save button events
$("#9amBtn").on("click", function(event){
    var nineAmText = $("textarea#9").val();
    saveText = JSON.stringify(nineAmText);
    localStorage.setItem("nineAmTask", saveText);
});
$("#10amBtn").on("click", function(event){
    var tenAmText = $('textarea#10').val();
    saveText = JSON.stringify(tenAmText);
    localStorage.setItem("tenAmTask", saveText);
});
$("#11amBtn").on("click", function(event){
    var elevenAmText = $('textarea#11').val();
    saveText = JSON.stringify(elevenAmText);
    localStorage.setItem("elevenAmTask", saveText);
});
$("#12pmBtn").on("click", function(event){
    var noonText = $('textarea#12').val();
    saveText = JSON.stringify(noonText);
    localStorage.setItem("noonTask", saveText);
});
$("#1pmBtn").on("click", function(event){
    var onePmText = $('textarea#13').val();
    saveText = JSON.stringify(onePmText);
    localStorage.setItem("onePmTask", saveText);
});
$("#2pmBtn").on("click", function(event){
    var twoPmText = $('textarea#14').val();
    saveText = JSON.stringify(twoPmText);
    localStorage.setItem("twoPmTask", saveText);
});
$("#3pmBtn").on("click", function(event){
    var threePmText = $('textarea#15').val();
    saveText = JSON.stringify(threePmText);
    localStorage.setItem("threePmTask", saveText);
});
$("#4pmBtn").on("click", function(event){
    var fourPmText = $('textarea#16').val();
    saveText = JSON.stringify(fourPmText);
    localStorage.setItem("fourPmTask", saveText);
});
$("#5pmBtn").on("click", function(event){
    var fivePmText = $('textarea#17').val();
    saveText = JSON.stringify(fivePmText);
    localStorage.setItem("fivePmTask", saveText);
});

//load tasks
function loadTasks() {
    nineAmTask = JSON.parse(localStorage.getItem("nineAmTask")) || [];
    var nineAmText = $('textarea#9');
    nineAmText.val(nineAmTask)

    tenAmTask = JSON.parse(localStorage.getItem("tenAmTask")) || [];
    var tenAmText = $('textarea#10');
    tenAmText.val(tenAmTask)

    elevenAmTask = JSON.parse(localStorage.getItem("elevenAmTask")) || [];
    var elevenAmText = $('textarea#11');
    elevenAmText.val(elevenAmTask)

    noonTask = JSON.parse(localStorage.getItem("noonTask")) || [];
    var noonText = $('textarea#12');
    noonText.val(noonTask)

    onePmTask = JSON.parse(localStorage.getItem("onePmTask")) || [];
    var onePmText = $('textarea#13');
    onePmText.val(onePmTask)

    twoPmTask = JSON.parse(localStorage.getItem("twoPmTask")) || [];
    var twoPmText = $('textarea#14');
    twoPmText.val(twoPmTask)

    threePmTask = JSON.parse(localStorage.getItem("threePmTask")) || [];
    var threePmText = $('textarea#15');
    threePmText.val(threePmTask)
    
    fourPmTask = JSON.parse(localStorage.getItem("fourPmTask")) || [];
    var fourPmText = $('textarea#16');
    fourPmText.val(fourPmTask)

    fivePmTask = JSON.parse(localStorage.getItem("fivePmTask")) || [];
    var fivePmText = $('textarea#17');
    fivePmText.val(fivePmTask)
};

loadTasks();