import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import OctopusAvatar from '../components/game/OctopusAvatar';
import Button from '../components/ui/Button';

const Game = () => {
    // Mock Players - Dynamic count (currently 4 to match Lobby)
    const [players, setPlayers] = useState([
        { id: 1, name: 'CyberAgent_007', color: 'pink', isHuman: true, isMystery: false },
        { id: 2, name: 'Neon_Taco', color: 'green', isHuman: false, isMystery: true },
        { id: 3, name: 'Glitch_Master', color: 'blue', isHuman: true, isMystery: false },
        { id: 4, name: 'Void_Walker', color: 'yellow', isHuman: false, isMystery: true },
    ]);

    const [activePlayerId, setActivePlayerId] = useState(3);
    const [timeLeft, setTimeLeft] = useState(272);

    // Timer Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Dynamic Grid Classes based on player count
    const getGridClass = (count) => {
        if (count <= 4) return 'grid-cols-2 grid-rows-2';
        if (count <= 6) return 'grid-cols-3 grid-rows-2'; // 3x2
        return 'grid-cols-4 grid-rows-2'; // 4x2
    };

    return (
        <div className="h-screen w-screen bg-bg-dark text-white overflow-hidden flex flex-col font-inter">
            {/* Background Failsafe */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20 z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundColor: '#1a0f2e'
                }}
            ></div>

            {/* TOP 70%: Player Grid - SCALABLE & CONTAINED */}
            <div className="relative z-10 flex-1 p-1 md:p-2 min-h-0 flex flex-col justify-center">
                <div className={`grid gap-1 md:gap-2 w-full h-full max-h-full ${getGridClass(players.length)}`}>
                    {players.map((player) => {
                        const isActive = player.id === activePlayerId;
                        return (
                            <div
                                key={player.id}
                                onClick={() => setActivePlayerId(player.id)}
                                className={`
                                    relative rounded-xl border-2 transition-all duration-300 flex flex-col items-center justify-center p-1
                                    bg-bg-card/40 backdrop-blur-md cursor-pointer overflow-hidden
                                    ${isActive
                                        ? 'border-cyan-primary shadow-[0_0_20px_#00D9FF] z-20'
                                        : 'border-white/10 hover:border-white/30 opacity-90 hover:opacity-100'}
                                `}
                            >
                                {/* Active Speaking Pulse */}
                                {isActive && (
                                    <div className="absolute inset-0 rounded-xl animate-pulse-cyan opacity-20 pointer-events-none"></div>
                                )}

                                {/* Avatar Container - Scalable */}
                                <div className="relative flex-1 w-full flex items-center justify-center min-h-0">
                                    <div className="aspect-square h-[80%] max-h-[150px] relative">
                                        <OctopusAvatar color={player.color} size="full" className="w-full h-full" />

                                        {/* Speaking Badge */}
                                        {isActive && (
                                            <div className="absolute top-0 right-0 bg-cyan-primary text-black text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full animate-bounce shadow-md">
                                                SPEAKING
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Identifier - COLOR ONLY (No Name Overlap) */}
                                <div className="mt-1 md:mt-2 text-center w-full z-10">
                                    <h3 className={`font-orbitron font-bold tracking-widest text-sm md:text-lg uppercase ${isActive ? 'text-cyan-primary drop-shadow-[0_0_5px_rgba(0,217,255,0.8)]' : 'text-white/80'}`}>
                                        {player.color}
                                    </h3>
                                    <div className="flex justify-center -mt-1">
                                        {player.isHuman ? (
                                            <span className="text-lg md:text-xl" title="Human">👤</span>
                                        ) : (
                                            <span className="text-lg md:text-xl opacity-50" title="Unknown">❓</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* BOTTOM 30%: Interaction Area - Fixed Height */}
            <div className="relative z-20 h-[25vh] md:h-[20vh] bg-bg-card/90 backdrop-blur-xl border-t border-cyan-primary/30 p-2 flex flex-col shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">

                {/* Info Bar */}
                <div className="flex justify-between items-center mb-2">
                    <span className="text-text-gray font-orbitron text-xs md:text-sm">ROUND 1/3</span>
                    <span className="text-white font-orbitron text-lg md:text-2xl font-bold tracking-widest flex items-center gap-2">
                        ⏱ {formatTime(timeLeft)}
                    </span>
                </div>

                {/* Question Prompt */}
                <div className="flex-1 flex items-center justify-center mb-3 min-h-0">
                    <h2 className="text-lg md:text-2xl lg:text-3xl text-center font-poppins font-semibold text-white px-4 leading-tight">
                        ❓ "Describe your most embarrassing moment in high school..."
                    </h2>
                </div>

                {/* Input Area */}
                <div className="flex items-center gap-2 md:gap-4 max-w-4xl mx-auto w-full mt-auto">
                    <input
                        type="text"
                        placeholder="Type your response..."
                        className="flex-1 bg-bg-dark/50 border border-purple-primary/50 text-white rounded-lg px-4 py-2 md:py-3 text-sm md:text-base focus:outline-none focus:border-cyan-primary focus:shadow-[0_0_15px_#00D9FF] transition-all font-inter"
                    />
                    <Button variant="primary" className="px-4 py-2 md:px-8 md:py-3 text-sm md:text-base shadow-[0_0_15px_#8B4FFF]">
                        SEND
                    </Button>
                    <button className="bg-bg-dark border border-gray-600 hover:border-white text-white p-2 md:p-3 rounded-lg transition-colors flex-shrink-0">
                        🎤
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Game;
