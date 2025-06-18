import React from 'react';
import { FaTooth, FaLungs, FaBone, FaCalendar, FaStethoscope, FaHeart, FaUserMd } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <input type="text" placeholder="Search" className="px-4 py-2 border rounded-full text-sm w-60" />
      </header>

      <section className="mt-6 grid grid-cols-3 gap-6">
        <BodyPartCard icon={<FaLungs />} title="Lungs" color="bg-red-300" value="60%" />
        <BodyPartCard icon={<FaTooth />} title="Teeth" color="bg-green-300" value="80%" />
        <BodyPartCard icon={<FaBone />} title="Bone" color="bg-orange-300" value="40%" />
      </section>

      <section className="mt-8 grid grid-cols-2 gap-6">
        <Calendar />
        <Schedule />
      </section>

      <section className="mt-8">
        <ActivityGraph />
      </section>
    </div>
  );
};

const BodyPartCard = ({ icon, title, color, value }) => (
  <div className="bg-white p-4 rounded-xl shadow flex items-center justify-between">
    <div className="flex items-center space-x-3">
      <div className={`text-white text-lg p-3 rounded-full ${color}`}>{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <p className="text-xs text-gray-400">Date: 26 Oct 2021</p>
      </div>
    </div>
    <div className="w-32 h-2 bg-gray-200 rounded-full">
      <div className={`h-full ${color} rounded-full`} style={{ width: value }}></div>
    </div>
  </div>
);

const Calendar = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="font-semibold mb-4">October 2021</h3>
    <div className="grid grid-cols-7 text-sm gap-2">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="text-center text-gray-500">{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][i]}</div>
      ))}
      {[...Array(31)].map((_, i) => (
        <div key={i} className={`text-center py-1 rounded ${i === 25 ? 'bg-blue-100 text-blue-600 font-medium' : 'text-gray-600'}`}>{i + 1}</div>
      ))}
    </div>
  </div>
);

const Schedule = () => (
  <div className="bg-white p-6 rounded-xl shadow space-y-4">
    <h3 className="font-semibold">The Upcoming Schedule</h3>
    <div className="bg-purple-100 text-purple-800 px-3 py-2 rounded-xl flex justify-between items-center text-sm">
      <span>Health checkup complete</span>
      <span>11:00 AM</span>
    </div>
    <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-xl flex justify-between items-center text-sm">
      <span>Ophthalmologist</span>
      <span>14:00 PM</span>
    </div>
    <div className="bg-red-100 text-red-800 px-3 py-2 rounded-xl flex justify-between items-center text-sm">
      <span>Cardiologist</span>
      <span>12:00 AM</span>
    </div>
    <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-xl flex justify-between items-center text-sm">
      <span>Neurologist</span>
      <span>16:00 PM</span>
    </div>
  </div>
);

const ActivityGraph = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Appointments',
        data: [3, 2, 4, 1, 5, 2, 3],
        backgroundColor: '#3B82F6',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Activity</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Dashboard;
