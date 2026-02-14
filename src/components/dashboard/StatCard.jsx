import React from 'react';
import './StatCard.css';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
    return (
        <div className="stat-card">
            <div className="stat-card-header">
                <div className="stat-info">
                    <h3 className="stat-title">{title}</h3>
                    <p className="stat-value">{value}</p>
                </div>
                <div className="stat-icon" style={{ backgroundColor: `${color}20`, color: color }}>
                    <Icon size={24} />
                </div>
            </div>

            {trend && (
                <div className="stat-trend">
                    <span className={`trend-value ${trend === 'up' ? 'positive' : 'negative'}`}>
                        {trend === 'up' ? '↑' : '↓'} {trendValue}
                    </span>
                    <span className="trend-label">vs last month</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;
