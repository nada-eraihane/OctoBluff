import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import OctopusAvatar from '../components/game/OctopusAvatar';

const Lobby = ({ onLeaveLobby, onStartGameplay }) => {
    // Mock data - Set to 4 players to demonstrate auto-start
    const [players, setPlayers] = useState([
        { id: 1, name: 'CyberAgent_007', avatarColor: 'pink', isReady: true, isHost: true },
        { id: 2, name: 'Neon_Taco', avatarColor: 'green', isReady: true, isHost: false },
        { id: 3, name: 'Glitch_Master', avatarColor: 'blue', isReady: true, isHost: false },
        { id: 4, name: 'Void_Walker', avatarColor: 'yellow', isReady: true, isHost: false },
    ]);

    // Simulate finding players (shortened for demo)
    const [findingPlayers, setFindingPlayers] = useState(true);
    const [gameStarting, setGameStarting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFindingPlayers(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Auto-start logic
    useEffect(() => {
        if (!findingPlayers && players.length === 4) {
            setGameStarting(true);
            const timer = setTimeout(() => {
                onStartGameplay();
            }, 3000); // 3 second countdown before start
            return () => clearTimeout(timer);
        }
    }, [players, findingPlayers, onStartGameplay]);

    return (
        <Layout>
            <div className="flex flex-col h-full relative z-10 max-w-4xl mx-auto w-full p-2">

                {/* Header */}
                <div className="text-center mb-2 animate-slide-in-top">
                    <h2 className="text-xl md:text-2xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-purple-primary animate-pulse">
                        {gameStarting ? '🚀 STARTING...' : (findingPlayers ? '🔍 FINDING...' : 'LOBBY READY')}
                    </h2>
                    <p className="text-text-gray font-inter text-xs mt-1">
                        {gameStarting ? 'Launch imminent.' : 'Waiting (4/4)...'}
                    </p>
                    <div className="mt-2 inline-block px-4 py-1 bg-bg-card/50 rounded-full border border-cyan-primary/30 text-cyan-primary font-orbitron text-sm">
                        {players.length} / 4 JOINED
                    </div>
                </div>

                {/* Player List */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-bg-card/30 backdrop-blur-md rounded-2xl border border-white/5 p-2 mb-4 space-y-2 animate-slide-in-right">
                    {players.map((player) => (
                        <div
                            key={player.id}
                            className="flex items-center justify-between p-3 bg-bg-dark/50 rounded-xl border border-white/5 hover:border-cyan-primary/30 transition-colors group"
                        >
                            <div className="flex items-center gap-4">
                                <OctopusAvatar color={player.avatarColor} size="sm" className="group-hover:scale-110 transition-transform" />
                                <div className="flex flex-col">
                                    <span className="text-white font-orbitron tracking-wide">
                                        {player.name} {player.isHost && <span className="text-xs text-yellow-400 ml-2">[HOST]</span>}
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-2 text-success font-bold font-orbitron text-sm">
                                    ✓ READY
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Empty Slots */}
                    {Array.from({ length: Math.max(0, 4 - players.length) }).map((_, i) => (
                        <div key={`empty-${i}`} className="p-4 rounded-xl border border-white/5 border-dashed flex items-center justify-center text-text-gray/30 font-orbitron text-sm">
                            WAITING FOR AGENT...
                        </div>
                    ))}
                </div>

                {/* Footer Actions */}
                <div className="flex flex-col items-center animate-slide-in-bottom">
                    <Button
                        variant="danger"
                        onClick={onLeaveLobby}
                        className="w-full md:w-auto px-8 opacity-80 hover:opacity-100"
                    >
                        LEAVE LOBBY
                    </Button>
                </div>

            </div>
        </Layout>
    );
};

export default Lobby;
