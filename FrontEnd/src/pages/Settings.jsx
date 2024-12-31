import React from 'react';
import ProfileSettings from '../components/settings/ProfileSettings';
import ThemeSettings from '../components/settings/ThemeSettings';

const Settings = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
      <ProfileSettings />
      <ThemeSettings />
    </div>
  );
};

export default Settings;