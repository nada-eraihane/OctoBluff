import React from 'react';
import Layout from './components/layout/Layout';
import Button from './components/ui/Button';

function App() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-full space-y-8 mt-20">
        <h1 className="text-6xl font-poppins font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-primary to-cyan-primary animate-pulse">
          OCTOBLUFF
        </h1>
        <div className="p-8 bg-bg-card/90 rounded-xl border border-white/10 backdrop-blur-sm max-w-md w-full text-center shadow-2xl">
          <p className="text-xl mb-8 font-inter text-text-gray">System initialized. Foundation active.</p>
          <div className="flex flex-col space-y-4">
            <Button variant="primary">START GAME</Button>
            <Button variant="accent">CONNECT WALLET</Button>
            <Button variant="danger">EMERGENCY RESET</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
