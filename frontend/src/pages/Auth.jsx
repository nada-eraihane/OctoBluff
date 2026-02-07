import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

// Placeholder for the logo - assuming it will be at this path after generation
import logoUrl from '../assets/octopus_logo.svg';

const Auth = () => {
    return (
        <Layout>
            <div className="flex-1 flex flex-col md:flex-row h-full relative z-10">

                {/* Left Side: Login */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 md:pr-12 animate-slide-in-left">
                    <div className="w-full max-w-sm space-y-8">
                        <div className="md:hidden flex justify-center mb-8">
                            {/* Mobile Logo View */}
                            <img src={logoUrl} alt="OctoBluff Logo" className="w-32 h-32 object-contain drop-shadow-[0_0_15px_rgba(0,217,255,0.5)]" />
                        </div>

                        <div className="text-center md:text-left">
                            <h2 className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-white">
                                LOGIN
                            </h2>
                            <p className="text-text-gray mt-2 font-inter">Welcome back, Agent.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <Input label="EMAIL" type="email" placeholder="agent@octobluff.com" />
                            <Input label="PASSWORD" type="password" placeholder="••••••••" />

                            <div className="pt-4">
                                <Button variant="primary" className="w-full shadow-[0_0_20px_rgba(139,79,255,0.3)]">
                                    ENTER SYSTEM
                                </Button>
                            </div>

                            <p className="text-center text-sm text-text-gray/60 cursor-pointer hover:text-cyan-primary transition-colors">
                                FORGOT ACCESS CODE?
                            </p>
                        </form>
                    </div>
                </div>

                {/* Center Divider & Logo (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-center relative w-24">
                    <div className="h-full w-px bg-gradient-to-b from-transparent via-cyan-primary/50 to-transparent absolute left-1/2 -translate-x-1/2"></div>
                    <div className="bg-bg-dark border-2 border-cyan-primary/30 rounded-full p-4 relative z-10 shadow-[0_0_30px_rgba(0,217,255,0.2)]">
                        <img src={logoUrl} alt="OctoBluff Logo" className="w-24 h-24 object-contain animate-pulse-cyan" />
                    </div>
                </div>

                {/* Right Side: Register */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 md:pl-12 animate-slide-in-right">
                    <div className="w-full max-w-sm space-y-8">
                        <div className="text-center md:text-right">
                            <h2 className="text-4xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-l from-cyan-primary to-white">
                                REGISTER
                            </h2>
                            <p className="text-text-gray mt-2 font-inter">Join the resistance.</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <Input label="USERNAME" type="text" placeholder="CyberAgent_007" />
                            <Input label="EMAIL" type="email" placeholder="new.recruit@octobluff.com" />
                            <Input label="PASSWORD" type="password" placeholder="••••••••" />
                            <Input label="CONFIRM PASSWORD" type="password" placeholder="••••••••" />

                            <div className="pt-4">
                                <Button variant="accent" className="w-full">
                                    INITIALIZE PROFILE
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Auth;
