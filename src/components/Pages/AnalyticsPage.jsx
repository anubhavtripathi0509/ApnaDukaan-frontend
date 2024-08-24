import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Inventory Value',
        data: [12, 19, 3, 5, 2, 3, 20, 15, 18, 24, 20, 25],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Turnover (Days)',
        data: [33, 42, 31, 50, 20, 32, 40, 52, 38, 45, 35, 50],
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        tension: 0.1,
        pointRadius: 3,
      },
    ],
  };

  const doughnutData = {
    labels: ['Inventory Value', 'Sales Amount', 'Ratio'],
    datasets: [
      {
        label: 'Inventory to Sales Analysis',
        data: [65, 25, 10],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">

      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Inventory Value</h3>
          <p className="text-2xl font-bold text-green-500">$20,068,577</p>
          <p className="text-gray-500">Change: 1,076,296</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Stock Available</h3>
          <p className="text-2xl font-bold text-blue-500">3,790,813</p>
          <p className="text-gray-500">Change: 58,778</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Turnover Ratio</h3>
          <p className="text-2xl font-bold text-purple-500">9.13</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Avg. Inventory Days of Supply</h3>
          <p className="text-2xl font-bold text-orange-500">39.98</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Inventory Value Over Time</h3>
          <Bar data={barData} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Turnover (Days) by Month</h3>
          <Line data={lineData} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Inventory to Sales Analysis</h3>
          <Doughnut data={doughnutData} options={{ responsive: true }} />
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Top 10 Items Based on Value</h3>
          <ul>
            <li className="flex justify-between">
              <span>C100006 - Cherry Finished Crystal Vase</span>
              <span className="font-bold text-green-500">$0.144M</span>
            </li>
            <li className="flex justify-between">
              <span>C100011 - Winter Frost Vase</span>
              <span className="font-bold text-green-500">$0.13M</span>
            </li>
            <li className="flex justify-between">
              <span>C100055 - Silver Plated Photo Frame</span>
              <span className="font-bold text-green-500">$0.12M</span>
            </li>
            {/* Add more items similarly */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
