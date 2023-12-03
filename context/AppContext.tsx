import React, { createContext, useContext, useState } from 'react';

interface AppContextProps {
  isSidebarMenuOpen: boolean;
  toggleSidebar: () => void;
}

const AppContext = createContext<AppContextProps>({
  isSidebarMenuOpen: false,
  toggleSidebar: () => {},
});

export const AppProvider: React.FC = ({ children }) => {
  const [isSidebarMenuOpen, setIsSidebarMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMenuOpen((prev) => !prev);
  };

  const value: AppContextProps = {
    isSidebarMenuOpen,
    toggleSidebar,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
