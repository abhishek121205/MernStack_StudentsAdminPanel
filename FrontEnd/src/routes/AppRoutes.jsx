import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';
import Students from '../pages/Students';
import Attendance from '../pages/Attendance';
import AttendanceSheet from '../pages/AttendanceSheet';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/attendanceSheet" element={<AttendanceSheet />} />
    </Routes>
  );
};

export default AppRoutes;