import React from 'react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import OctopusAvatar from '../components/game/OctopusAvatar';

const MainMenu = ({ onLogout, onStartGame }) => {
    return (
        <Layout>
            <div className="flex flex-col h-full min-h-[80vh] relative z-10">

                {/* Top Bar */}
                <div className="flex justify-between items-center p-4 bg-bg-card/50 backdrop-blur-sm rounded-xl border border-white/5 animate-slide-in-top">
                    <div className="flex items-center gap-4">
                        <OctopusAvatar size="sm" />
                        <div>
                            <p className="text-sm text-text-gray font-inter">WELCOME BACK</p>
                            <p className="text-xl font-orbitron font-bold text-white tracking-wider">CyberAgent_007</p>
                        </div>
                    </div>
                    <Button
                        variant="danger"
                        onClick={onLogout}
                        className="px-4 py-2 text-sm"
                    >
                        LOGOUT
                    </Button>
                </div>

                {/* Center Stage */}
                <div className="flex-1 flex flex-col items-center justify-center relative">
                    <div className="relative animate-breathe w-full max-w-md aspect-square flex items-center justify-center">
                        {/* Glow behind octopus */}
                        <div className="absolute inset-0 bg-cyan-primary/20 blur-[100px] rounded-full"></div>

                        {/* Large Central Avatar */}
                        <OctopusAvatar size="xl" className="drop-shadow-[0_0_50px_rgba(0,217,255,0.4)]" />
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-6 w-full max-w-xs animate-slide-in-right">
                        <Button
                            variant="primary"
                            className="w-full text-lg py-4 shadow-[0_0_30px_rgba(139,79,255,0.4)]"
                            onClick={onStartGame}
                        >
                            🎮 START GAME
                        </Button>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default MainMenu;
