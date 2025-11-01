// Line Chart
const lineCtx = document.getElementById('lineChart');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [{
      label: 'Total Sales',
      data: [40, 48, 55, 60, 72, 68, 70, 75, 73, 80, 78, 90],
      borderColor: '#005baa',
      backgroundColor: '#005baa33',
      fill: true,
      tension: 0.3
    }]
  },
  options: { responsive: true, plugins: { legend: { display: false } } }
});

// Bar Chart
const barCtx = document.getElementById('barChart');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Product A','Product B','Product C','Product D','Product E'],
    datasets: [{
      label: 'Total Sales',
      data: [300, 250, 200, 180, 160],
      backgroundColor: '#0077cc'
    }]
  },
  options: { responsive: true }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Electronics','Apparel','Books','Accessories'],
    datasets: [{
      data: [40,35,15,10],
      backgroundColor: ['#0077cc','#00aaff','#99ccff','#cce6ff']
    }]
  },
  options: { responsive: true }
});

// Map Chart (simulasi)
const mapCtx = document.getElementById('mapChart');
new Chart(mapCtx, {
  type: 'bar',
  data: {
    labels: ['Jawa Tengah','Jawa Timur','DKI Jakarta'],
    datasets: [{
      label: 'Sales by Region',
      data: [500, 400, 300],
      backgroundColor: '#0099cc'
    }]
  },
  options: { responsive: true }
});
