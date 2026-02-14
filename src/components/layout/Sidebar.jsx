import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Package, Users, FileText, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import Breadcrumb from './Breadcrumb';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Package, label: 'Inventory', path: '/inventory' },
    { icon: Users, label: 'HR / Employees', path: '/hr' },
    { icon: FileText, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-placeholder">
          {isCollapsed ? 'ERP' : 'ERP System'}
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      {!isCollapsed && <Breadcrumb />}
      
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.label : ''}
              >
                <item.icon size={20} />
                {!isCollapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <button className="nav-item logout-btn" title={isCollapsed ? 'Logout' : ''}>
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
