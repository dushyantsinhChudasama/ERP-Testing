import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import './TopBar.css';

const TopBar = () => {
    return (
        <header className="topbar">
            <div className="search-container">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder="Search..."
                    className="search-input"
                />
            </div>

            <div className="topbar-actions">
                <button className="icon-btn">
                    <Bell size={20} />
                    <span className="notification-badge">3</span>
                </button>

                <div className="profile-section">
                    <div className="avatar">
                        <User size={20} />
                    </div>
                    <div className="user-info">
                        <span className="user-name">Admin User</span>
                        <span className="user-role">Administrator</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
