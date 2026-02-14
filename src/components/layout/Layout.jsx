import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Layout.css';

const Layout = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className={`app-layout ${isSidebarCollapsed ? 'collapsed' : ''}`}>
            <Sidebar isCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <TopBar />
                <main className="page-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
