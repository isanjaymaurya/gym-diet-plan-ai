import React from 'react';
import { useAppContext } from '@/context/AppContext';

const MobileHeader = () => {
    const {isSidebarMenuOpen, toggleSidebar} = useAppContext();

    return (
        <header className="w-full fixed top-0">
            
        </header>
    )
}

export default MobileHeader;