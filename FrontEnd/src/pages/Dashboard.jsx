import React from 'react';
import DashboardStats from '../components/dashboard/DashboardStats';
import StudentList from '../components/StudentList';
import AttendanceChart from '../components/analytics/AttendanceChart';
import PerformanceChart from '../components/analytics/PerformanceChart';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Dashboard</h2>
      <DashboardStats />
      {/* <StudentList /> */}
      <PerformanceChart />
      <AttendanceChart />
    </div>
  );
};

export default Dashboard;