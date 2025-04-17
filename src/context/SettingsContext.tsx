import React, { createContext, useContext, useState } from 'react';
import { Settings } from '../types';

const defaultSettings: Settings = {
  theme: 'dark'
};

const SettingsContext = createContext<{
  settings: Settings;
  updateSettings: (settings: Partial<Settings>) => void;
}>({
  settings: defaultSettings,
  updateSettings: () => {}
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};