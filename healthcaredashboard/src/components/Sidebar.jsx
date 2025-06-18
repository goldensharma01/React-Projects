import React from 'react';
import { FaHome, FaHistory, FaCalendarAlt, FaUserMd, FaChartBar, FaComments, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-60 bg-white h-full shadow-lg p-6 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold text-blue-500 mb-10">Health<span className="text-gray-800">care.</span></h1>
        <nav className="space-y-6">
          <SidebarLink icon={<FaHome />} label="Dashboard" />
          <SidebarLink icon={<FaHistory />} label="History" />
          <SidebarLink icon={<FaCalendarAlt />} label="Calendar" />
          <SidebarLink icon={<FaUserMd />} label="Appointments" />
          <SidebarLink icon={<FaChartBar />} label="Statistics" />
        </nav>
        <div className="mt-10 space-y-6">
          <SidebarLink icon={<FaComments />} label="Chat" />
          <SidebarLink icon={<FaCog />} label="Support" />
        </div>
      </div>
      <div className="mt-10">
        <SidebarLink icon={<FaSignOutAlt />} label="Setting" />
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, label }) => (
  <div className="flex items-center text-gray-600 hover:text-blue-500 cursor-pointer text-sm">
    <div className="text-xl mr-3">{icon}</div>
    {label}
  </div>
);

export default Sidebar;