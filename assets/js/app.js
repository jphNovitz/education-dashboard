/* ************************* */
/* ***** LATERAL MENU ****** */
/****************************/

var menus = document.querySelectorAll("#menu, #sidebar-menu")
var sidebar = document.getElementById("sidebar")
var contentLogo = document.getElementById('content-logo')

for (var menu of menus) {
    menu.addEventListener('click', () => {
        if (sidebar.classList.contains('show')) {
            sidebar.classList.remove('show')
            if (contentLogo.classList.contains('hide')) {
                contentLogo.classList.remove('hide')
            }
        } else {
            sidebar.classList.add('show')
            if (!contentLogo.classList.contains('hide')) {
                contentLogo.classList.add('hide')
            }

        }
    })
}

/* ************************* */
/* ***** CHARTS ****** */
/****************************/

myCharts = document.getElementsByClassName('myChart')

var j = 0

for (let i = 0; i < myCharts.length; i++) {
    let item = myCharts[i];

    test = document.createElement('canvas')
    test.setAttribute("id", "myChart" + i)
    item.append(test)

    var ctx = document.getElementById('myChart' + i).getContext('2d');
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
            plugins: {
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

if (document.getElementById('mydoughnut') !== null) {
    var ctx2 = document.getElementById('mydoughnut').getContext('2d');
    var mydoughnut = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: [''],
            datasets: [{
                label: '# of Votes',
                data: [78, 12],
                backgroundColor: [
                    '#E6F2FF',
                    'white',
                ],
                borderColor: [
                    '#51A3FF',
                    'white'
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
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
            },
            responsive: false
        }
    });
}
if (document.getElementById('mybars') !== null) {
    var ctx3 = document.getElementById('mybars').getContext('2d');
    var mybars = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [' ', ' ', ' ', ' ', ' '],
            datasets: [{
                label: '',
                data: [78, 10, 50, 30, 90],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
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
            },
            responsive: true
        }
    });


    var gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, 'rgba(90,70,170,1)');
    gradient.addColorStop(1, 'rgba(90,70,170,0)');
}


if (document.getElementById('myBigChart') !== null) {
    var ctx4 = document.getElementById('myBigChart').getContext('2d');
    var myBigChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ['jan', 'Feb', 'Mar', 'Api', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: '# of Votes',
                fill: true,
                backgroundColor: gradient,
                data: [1, 5, 3, 15, 20, 30, 10, 60, 40, 80, 10, 100],
                borderWidth: 1,
                borderColor: '9C46AA'
            },
                {
                    label: '# of Votes',
                    fill: false,
                    backgroundColor: gradient,
                    data: [19, 12, 5, 3, 2, 12, 20, 40, 60, 55, 80, 90],
                    borderWidth: 1,
                    borderColor: 'red',

                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    display: true
                },
                y: {
                    display: false
                }
            }
        }
    });
}


/* ********************************* */
/* ***** fake message submit ****** */
/***********************************/

// when click on the 'fake subit" it adds a spechh messenger bullet

var speech = "<div class='message'>"
              +"<img src='http://placebeard.it/g/48x48' alt='jiffy.codes'>"
              + "<span class='speech'> azer</span>"
              + "</div>"

const submit = document.getElementById('fake-submit')
if (submit){
    submit.addEventListener('click', ()=>{
        let text = document.getElementById('fake-message').value
        if (text !==''){
            var container = document.getElementById('messages-right')
            let message = document.createElement("div")
            message.classList.add("message")
            let image = document.createElement('img')
            image.src =  "http://placebeard.it/g/48x48"
            let speech = document.createElement('span')
            speech.classList.add("speech")
            message.append(image)
            let txt = document.createTextNode(text)
            speech.append(txt)
            message.append(speech)
            document.getElementById('fake-message').value = ""

            document.getElementById("messages-right").append(message)
        }
    })
}


