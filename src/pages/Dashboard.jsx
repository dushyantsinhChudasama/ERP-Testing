import React from 'react';
import { DollarSign, Users, ShoppingBag, Activity } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import ChartWidget from '../components/dashboard/ChartWidget';
import RecentActivity from '../components/dashboard/RecentActivity';
import QuickActions from '../components/dashboard/QuickActions';
import './Dashboard.css';

const Dashboard = () => {
    // Mock data for charts
    const revenueData = [
        { name: 'Jan', value: 4000 },
        { name: 'Feb', value: 3000 },
        { name: 'Mar', value: 5000 },
        { name: 'Apr', value: 4500 },
        { name: 'May', value: 6000 },
        { name: 'Jun', value: 5500 },
        { name: 'Jul', value: 7000 },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1 className="page-title">Dashboard Overview</h1>
                <p className="page-subtitle">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                <StatCard
                    title="Total Revenue"
                    value="$54,239"
                    icon={DollarSign}
                    trend="up"
                    trendValue="12%"
                    color="#2563eb"
                />
                <StatCard
                    title="Active Users"
                    value="2,543"
                    icon={Users}
                    trend="up"
                    trendValue="8.1%"
                    color="#10b981"
                />
                <StatCard
                    title="New Orders"
                    value="543"
                    icon={ShoppingBag}
                    trend="down"
                    trendValue="3.2%"
                    color="#f59e0b"
                />
                <StatCard
                    title="System Health"
                    value="98%"
                    icon={Activity}
                    trend="up"
                    trendValue="Good"
                    color="#8b5cf6"
                />
            </div>

            {/* Main Content Grid */}
            <div className="dashboard-content-grid">
                <div className="main-chart-section">
                    <ChartWidget title="Revenue Trends" data={revenueData} color="#2563eb" />
                </div>
                <div className="side-widgets-section">
                    <RecentActivity />
                    <QuickActions />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
