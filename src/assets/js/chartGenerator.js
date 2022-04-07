getData();

async function getData() {
    const response = await fetch('../../data.json');
    const data = await response.json();
    var length = data.length;

    labels = [];
    values = [];
    for (var i = 0; i < length; i++) {
        labels.push(data[i].date);
        values.push(data[i].speed);
    }


    new Chart(document.getElementById("myChart"), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: "Speed in MB/s",
                    backgroundColor: [
                        "#715f8dBF",
                        "#715f8d99"
                    ],
                    data: values
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            font: {
                fontFamily: " 'SF Pro Display', -apple-system, 'Helvetica Neue', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica', sans-serif "
            },
            responsive: true,
            maintainAspectRatio: true,
        }
    });

}
  

