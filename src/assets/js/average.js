// Fetch elements of the JSON array and calculate the average

var records = 0;
var allSpeed = 0;
var averageSpeed = 0;
var roundedValue = 0;

fetch('../../data.json')
    .then(function (response2) {
        return response2.json();
    })
    .then(function (data2) {
        appendData2(data2);
    })
    .catch(function (err) {
        console.log('Error: ' + err);
    });

function appendData2(data2) {
    var mainContainer = document.getElementById("averageSpeed");

    for (var i = 0; i < data2.length; i++) {
        allSpeed = allSpeed + data2[i].speed; // Sum up all records
    }

    records = i + 1; // Get number of records
    averageSpeed = allSpeed/records; // Calculate the average speed
    roundedValue = Math.floor(averageSpeed); // Round the value using Math.floor()

    var div2 = document.createElement("h2");
        div2.innerHTML = roundedValue;
        mainContainer.appendChild(div2);
}