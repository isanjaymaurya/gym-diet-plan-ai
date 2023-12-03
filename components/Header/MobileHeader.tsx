import React from 'react';

import IconButton from '../UI/IconButton/IconButton';
import HamburgerMenuIcon from '../UI/Icons/HamburgerMenuIcon';
import { useAppContext } from '@/context/AppContext';

const MobileHeader = () => {
    const {isSidebarMenuOpen, toggleSidebar} = useAppContext();

    return (
        <header className="w-full fixed top-0">
            <div className="flex justify-between items-center p-4 text-white">
                <div className="mr-auto flex">
                    <img src="/images/" alt="Logo" className='' />
                </div>
                <div className="ml-auto">
                    <IconButton onClick={toggleSidebar}>
                        <HamburgerMenuIcon />
                    </IconButton>
                </div>
            </div>
        </header>
    )
}

export default MobileHeader;