// Fetch last element of the JSON array

fetch('../../data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('Error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("lastTest");
    var div = document.createElement("h2");
    div.innerHTML = data[data.length - 1].speed;
    mainContainer.appendChild(div);
}
