
const data = {
    labels: ['Kid', 'Over 18', 'Over 65','Dead'],
    datasets: [
        {
            label: 'Dataset 1',
            data: pieData,
            backgroundColor: ["pink","green","blue","red"],
        }
    ]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Pie Chart'
            }
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

$("#downloadPdf").click(function () {
    html2canvas($("#booking"), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("bookingdata.pdf");
        }
    });
})
