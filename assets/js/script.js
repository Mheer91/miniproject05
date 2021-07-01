var projectName = $("#project-name");
var projectType = $("#project-type");
var hourlyRate = $("#hourly-rate");
var dueDate = $("#due-date");
var projectlist = $("#project-list");
var submitButton = $("#submit-button");
var now = setInterval(function() {
    $("#date-time").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    }, 1000);

$("#submit-button").on("click", function(event){
    event.preventDefault();
    let formComplete = [];
    let timeTillDue = moment(dueDate.val()).diff(moment(), "days");
    let potentialEarnings = timeTillDue*hourlyRate.val()*8;
    formComplete.push(projectName.val(), projectType.val(), hourlyRate.val(), dueDate.val(), timeTillDue, potentialEarnings);
    console.log(formComplete);
    $("#project-list")
    .append(`
    <tr>
        <td>${formComplete[0]}</td>
        <td>${formComplete[1]}</td>
        <td>$${formComplete[2]}/hr</td>
        <td>${formComplete[3]}</td>
        <td>${formComplete[4]}</td>
        <td>$${formComplete[5]}</td>
    </tr>`);
    
});
console.log(now)

$("#date-time").append


