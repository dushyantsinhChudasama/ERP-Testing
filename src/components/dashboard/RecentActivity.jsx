import React from 'react';
import { User, ShoppingCart, AlertCircle, CheckCircle } from 'lucide-react';
import './RecentActivity.css';

const RecentActivity = () => {
    const activities = [
        { id: 1, type: 'user', message: 'New user registered: John Doe', time: '2 mins ago', icon: User, color: '#3b82f6' },
        { id: 2, type: 'order', message: 'New order #1234 received', time: '15 mins ago', icon: ShoppingCart, color: '#10b981' },
        { id: 3, type: 'alert', message: 'Low stock warning: Item #567', time: '1 hour ago', icon: AlertCircle, color: '#f59e0b' },
        { id: 4, type: 'system', message: 'System backup completed', time: '3 hours ago', icon: CheckCircle, color: '#8b5cf6' },
        { id: 5, type: 'user', message: 'User Sarah L. updated profile', time: '5 hours ago', icon: User, color: '#3b82f6' },
    ];

    return (
        <div className="recent-activity-card">
            <div className="activity-header">
                <h3 className="activity-title">Recent Activity</h3>
                <button className="view-all-btn">View All</button>
            </div>

            <div className="activity-list">
                {activities.map((activity) => (
                    <div key={activity.id} className="activity-item">
                        <div className="activity-icon" style={{ backgroundColor: `${activity.color}20`, color: activity.color }}>
                            <activity.icon size={16} />
                        </div>
                        <div className="activity-content">
                            <p className="activity-message">{activity.message}</p>
                            <span className="activity-time">{activity.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentActivity;
