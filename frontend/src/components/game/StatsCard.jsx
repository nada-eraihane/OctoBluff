import React from 'react';

const StatsCard = ({ gamesPlayed, winRate }) => {
    return (
        <div className="flex gap-4 p-4 bg-bg-card/80 border border-purple-primary/30 rounded-xl backdrop-blur-sm shadow-[0_0_15px_rgba(139,79,255,0.1)]">
            <div className="flex flex-col items-center px-4 border-r border-white/10">
                <span className="text-2xl font-orbitron font-bold text-white">{gamesPlayed}</span>
                <span className="text-xs text-text-gray font-inter uppercase tracking-wider">Games</span>
            </div>
            <div className="flex flex-col items-center px-4">
                <span className="text-2xl font-orbitron font-bold text-success">{winRate}%</span>
                <span className="text-xs text-text-gray font-inter uppercase tracking-wider">Win Rate</span>
            </div>
        </div>
    );
};

export default StatsCard;
