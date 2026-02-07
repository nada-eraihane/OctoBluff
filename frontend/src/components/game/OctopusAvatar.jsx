import React, { useMemo } from 'react';

const COLORS = {
    pink: '#FF006E',
    green: '#00FFA3',
    blue: '#00D9FF',
    yellow: '#FFB800'
};

const OctopusAvatar = ({ color, size = 'md', className = '' }) => {
    const finalColor = useMemo(() => {
        if (color && COLORS[color]) return COLORS[color];
        if (color && color.startsWith('#')) return color;
        const keys = Object.keys(COLORS);
        return COLORS[keys[Math.floor(Math.random() * keys.length)]];
    }, [color]);

    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-16 h-16',
        lg: 'w-32 h-32',
        xl: 'w-64 h-64'
    };

    return (
        <div className={`relative ${sizeClasses[size]} ${className}`}>
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ color: finalColor }}
            >
                {/* Main Body - Cute / Bulbous style */}
                <path
                    d="M 50 5 C 20 5, 5 35, 10 60 C 12 75, 15 80, 10 90 Q 5 95, 15 95 Q 22 90, 25 95 Q 32 100, 35 95 Q 42 90, 50 95 Q 58 100, 65 95 Q 75 90, 85 95 Q 95 90, 90 90 C 85 80, 88 75, 90 60 C 95 35, 80 5, 50 5 Z"
                    fill="currentColor"
                />

                {/* Eyes - Large and cute */}
                <g fill="white">
                    <ellipse cx="33" cy="55" rx="14" ry="16" />
                    <ellipse cx="67" cy="55" rx="14" ry="16" />
                </g>

                {/* Pupils - Large and dark */}
                <g fill="#1a0f2e">
                    <ellipse cx="33" cy="55" rx="8" ry="9" />
                    <ellipse cx="67" cy="55" rx="8" ry="9" />
                </g>

                {/* Eye Highlights */}
                <g fill="white">
                    <circle cx="29" cy="50" r="3" />
                    <circle cx="63" cy="50" r="3" />
                </g>

                {/* Eyebrows - Small nubs */}
                <path d="M 25 35 Q 33 30 41 35" stroke="#1a0f2e" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
                <path d="M 59 35 Q 67 30 75 35" stroke="#1a0f2e" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />

                {/* Mouth - Small Smile */}
                <path
                    d="M 45 72 Q 50 78 55 72"
                    stroke="#1a0f2e"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>
            {/* Glow Effect */}
            <div
                className="absolute inset-0 blur-xl opacity-30 rounded-full animate-pulse"
                style={{ backgroundColor: finalColor }}
            ></div>
        </div>
    );
};

export default OctopusAvatar;
