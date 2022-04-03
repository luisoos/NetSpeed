// Fetch all the data from the JSON file 

fetch('./../../data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('Eerror: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("p");
        div.innerHTML = data[i].date + ':<span style="opacity: 0">...</span>' + data[i].speed;
        mainContainer.appendChild(div);
    }
}