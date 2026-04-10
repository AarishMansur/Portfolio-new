import React from 'react';

const BackgroundEffects = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {/* Grids */}
            <div className="absolute inset-0 bg-grid-lines opacity-35" />
            <div className="absolute inset-0 bg-diagonal-lines opacity-25" />
            <div className="absolute inset-0 bg-cross-lines opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_42%,rgba(255,255,255,0.03)_100%)]" />
            
            {/* Background Stripes for Layout */}
            <div className="fixed inset-0 pointer-events-none hidden lg:block overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[calc((100vw-42rem)/2)] border-r border-white/5 opacity-20"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 12px)' }} />
                <div className="absolute right-0 top-0 bottom-0 w-[calc((100vw-42rem)/2)] border-l border-white/5 opacity-20"
                    style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 12px)' }} />
            </div>
        </div>
    );
};

export default BackgroundEffects;
