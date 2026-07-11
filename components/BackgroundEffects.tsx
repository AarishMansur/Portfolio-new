import React from 'react';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(255,255,255,0.03)_100%)]" />
        </div>
    );
};

export default BackgroundEffects;
