myCharts = document.getElementsByClassName('myChart')

var j = 0

for (let i = 0; i < myCharts.length; i++) {
    let item = myCharts[i];

    test = document.createElement('canvas')
    test.setAttribute("id", "myChart"+i)
console.log(test)
    item.append(test)

    var ctx = document.getElementById('myChart'+i).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins:{
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                  display: false
                },
                y: {
                    display: false
                }
            }
        }
    });
}