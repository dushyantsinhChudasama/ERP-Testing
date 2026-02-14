import React from 'react';
import { useLocation } from 'react-router-dom';

const Placeholder = () => {
    const location = useLocation();
    const pageName = location.pathname.split('/')[1] || 'Page';

    return (
        <div style={{ padding: '2rem', textAlign: 'center', background: 'white', borderRadius: '12px', minHeight: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ textTransform: 'capitalize', marginBottom: '1rem' }}>{pageName}</h1>
            <p style={{ color: '#64748b' }}>This module is currently under development.</p>
        </div>
    );
};

export default Placeholder;
