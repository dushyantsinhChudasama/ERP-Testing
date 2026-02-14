import React from 'react';
import { Plus, UserPlus, FileText, Send, Upload, Settings } from 'lucide-react';
import './QuickActions.css';

const QuickActions = () => {
    const actions = [
        { label: 'New Invoice', icon: FileText, color: '#3b82f6' },
        { label: 'Add Employee', icon: UserPlus, color: '#10b981' },
        { label: 'Create Order', icon: Plus, color: '#f59e0b' },
        { label: 'Send Email', icon: Send, color: '#8b5cf6' },
        { label: 'Upload File', icon: Upload, color: '#ef4444' },
        { label: 'System Config', icon: Settings, color: '#64748b' },
    ];

    return (
        <div className="quick-actions-card">
            <h3 className="actions-title">Quick Actions</h3>
            <div className="actions-grid">
                {actions.map((action, index) => (
                    <button key={index} className="action-btn">
                        <div className="action-icon" style={{ backgroundColor: `${action.color}15`, color: action.color }}>
                            <action.icon size={20} />
                        </div>
                        <span className="action-label">{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
