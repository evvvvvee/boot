//Line Graph

var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22"],
    datasets: [{
      label: "Today",
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 45, 59, 80, 81, 56],
      backgroundColor: [
        'rgba(105, 0, 132, .2)',
      ],
      borderColor: [
        '#DFE0EB',
      ],
      borderWidth: 2
    },
    {
      label: "Yesterday",
      data: [0, 10, 20, 30, 86, 27, 100, 10, 20, 30, 86, 27, 100, 10, 20, 30, 86, 27, 100, 10, 20, 30, 86, 27, 100, 10, 20, 30, 86, 27, 100],
      backgroundColor: [
        'rgba(0, 137, 132, .2)',
      ],
      borderColor: [
        '#3751FF',
      ],
      borderWidth: 2
    }
    ]
  },
  options: {
    responsive: true
  }
});
