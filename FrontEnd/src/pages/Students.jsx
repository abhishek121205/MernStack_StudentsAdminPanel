import React from 'react';
import StudentList from '../components/StudentList';

const Students = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Students</h2>
      <StudentList />
    </div>
  );
};

export default Students;