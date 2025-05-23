  // Chart data
    const monthlyData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Auto Insurance',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1
            },
            {
                label: 'Home Insurance',
                data: [28, 48, 40, 19, 86, 27, 90],
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                borderColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 1
            },
            {
                label: 'Life Insurance',
                data: [45, 25, 16, 36, 67, 18, 76],
                backgroundColor: 'rgba(139, 92, 246, 0.6)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 1
            }
        ]
    };

    const yearlyData = {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
            {
                label: 'Auto Insurance',
                data: [650, 590, 800, 810, 560, 550],
                backgroundColor: 'rgba(59, 130, 246, 0.6)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1
            },
            {
                label: 'Home Insurance',
                data: [280, 480, 400, 190, 860, 270],
                backgroundColor: 'rgba(16, 185, 129, 0.6)',
                borderColor: 'rgba(16, 185, 129, 1)',
                borderWidth: 1
            },
            {
                label: 'Life Insurance',
                data: [450, 250, 160, 360, 670, 180],
                backgroundColor: 'rgba(139, 92, 246, 0.6)',
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 1
            }
        ]
    };

    // Get chart canvas
    const ctx = document.getElementById('policyChart').getContext('2d');

    // Create chart
    const policyChart = new Chart(ctx, {
        type: 'bar',
        data: monthlyData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value;
                        }
                    }
                }
            }
        }
    });

    // Toggle between monthly and yearly data
    document.getElementById('monthlyBtn').addEventListener('click', function() {
        policyChart.data = monthlyData;
        policyChart.update();
        this.classList.remove('bg-gray-100', 'text-gray-600');
        this.classList.add('bg-blue-100', 'text-blue-600');
        document.getElementById('yearlyBtn').classList.remove('bg-blue-100', 'text-blue-600');
        document.getElementById('yearlyBtn').classList.add('bg-gray-100', 'text-gray-600');
    });

    document.getElementById('yearlyBtn').addEventListener('click', function() {
        policyChart.data = yearlyData;
        policyChart.update();
        this.classList.remove('bg-gray-100', 'text-gray-600');
        this.classList.add('bg-blue-100', 'text-blue-600');
        document.getElementById('monthlyBtn').classList.remove('bg-blue-100', 'text-blue-600');
        document.getElementById('monthlyBtn').classList.add('bg-gray-100', 'text-gray-600');
    });