import React from 'react';

const Layout = ({ children }) => {
    return (
        <div
            className="min-h-screen bg-bg-dark text-white relative overflow-hidden font-inter selection:bg-cyan-primary selection:text-bg-dark"
            style={{ backgroundColor: '#1a0f2e' }}
        >
            {/* Cyberpunk Grid Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px',
                }}
            ></div>

            {/* Radial Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-bg-dark/50 to-bg-dark pointer-events-none"></div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-2 md:px-4 py-2 flex flex-col min-h-screen overflow-y-auto">
                {children}
            </div>
        </div>
    );
};

export default Layout;
