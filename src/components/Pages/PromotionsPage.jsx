import React, { useState } from 'react';
import { Doughnut, Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import { FaDollarSign, FaChartLine, FaTag, FaCalendarAlt } from 'react-icons/fa';
import PromotionsTable from '../PromotionsTable';

const Header = ({ navigate }) => (
  <header className="text-center py-4 flex justify-between items-center px-4">
    <button
      onClick={() => navigate('/add-promotions')}
      className="text-white font-bold p-2 text-lg bg-pink-500 rounded-xl"
    >
      Add Promotion
    </button>
  </header>
);

const PromotionCard = ({ title, percentage, value, color, icon }) => (
  <div className={`p-4 ${color} rounded-lg shadow-lg flex items-center`}>
    <div className="text-2xl mr-4">
      {icon}
    </div>
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-4xl font-bold text-gray-800">{percentage}</p>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const SummaryCard = ({ title, value, percentage, color, icon }) => (
  <div className={`p-4 ${color} rounded-lg shadow-lg flex flex-col items-center`}>
    <div className="text-2xl mb-2">
      {icon}
    </div>
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-4xl font-bold text-gray-800">{value}</p>
    <p className="text-sm text-gray-600">{percentage}</p>
  </div>
);

const AnalyticsSection = () => {
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const doughnutChartData = {
    labels: ['Cost', 'Profit'],
    datasets: [
      {
        label: 'Cost vs Profit',
        data: [30, 70],
        backgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Bar data={barChartData} />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Doughnut data={doughnutChartData} />
      </div>
    </div>
  );
};

const PromotionsPage = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('2024-08-11');
  const [endDate, setEndDate] = useState('2024-08-11');

  const handleFilter = () => {
    // Handle the filter action based on startDate and endDate
    console.log(`Filtering from ${startDate} to ${endDate}`);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <header className="text-center py-4 flex justify-between items-center px-4">
          <div className="flex justify-end items-center mb-6">
            <div className="flex items-center space-x-2 relative">
              <label className="font-semibold" htmlFor="from">From</label>
              <input
                type="date"
                id="from"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="p-2 rounded-md border border-gray-300"
              />
              <label className="font-semibold" htmlFor="to">To</label>
              <input
                type="date"
                id="to"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="p-2 rounded-md border border-gray-300"
              />
              <button
                onClick={handleFilter}
                className="p-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors"
              >
                FILTER
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate('/add-promotions')}
            className="text-white font-bold p-2 text-lg bg-pink-500 rounded-xl"
          >
            Add Promotion
          </button>
        </header>

        <div className="grid grid-cols-4 gap-4 my-8">
          <PromotionCard 
            title="Brand A" 
            percentage="35%" 
            value="Total Impressions" 
            color="bg-green-100"
            icon={<FaTag className="text-green-500" />} 
          />
          <PromotionCard 
            title="Brand B" 
            percentage="40%" 
            value="Total Clicks" 
            color="bg-purple-100"
            icon={<FaChartLine className="text-purple-500" />} 
          />
          <PromotionCard 
            title="Brand C" 
            percentage="25%" 
            value="Total Conversions" 
            color="bg-blue-100"
            icon={<FaDollarSign className="text-blue-500" />} 
          />
          <PromotionCard 
            title="Brand D" 
            percentage="50%" 
            value="Total Profit" 
            color="bg-red-100"
            icon={<FaCalendarAlt className="text-red-500" />} 
          />
        </div>

        <div className="grid grid-cols-3 gap-4 my-8">
          <SummaryCard 
            title="Generated Profit" 
            value="$20,000" 
            percentage="30%" 
            color="bg-green-100"
            icon={<FaDollarSign className="text-green-500" />} 
          />
          <SummaryCard 
            title="Total Cost" 
            value="$5,000" 
            percentage="10%" 
            color="bg-yellow-100"
            icon={<FaTag className="text-yellow-500" />} 
          />
          <SummaryCard 
            title="Return on Investment" 
            value="400%" 
            percentage="50%" 
            color="bg-blue-100"
            icon={<FaChartLine className="text-blue-500" />} 
          />
        </div>

        <AnalyticsSection />
      </div>

      <div className="container mx-auto p-4">
        <PromotionsTable />
      </div>
    </>
  );
};

export default PromotionsPage;
