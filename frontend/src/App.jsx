import React, { useState } from 'react';
import Auth from './pages/Auth';
import MainMenu from './pages/MainMenu';
import Lobby from './pages/Lobby';
import Game from './pages/Game';

function App() {
  const [currentScreen, setCurrentScreen] = useState('auth');

  const handleLogin = () => {
    setCurrentScreen('mainMenu');
  };

  const handleLogout = () => {
    setCurrentScreen('auth');
  };

  const handleStartGame = () => {
    setCurrentScreen('lobby');
  };

  const handleLeaveLobby = () => {
    setCurrentScreen('mainMenu');
  };

  const handleStartGameplay = () => {
    setCurrentScreen('game');
  };

  return (
    <>
      {currentScreen === 'auth' && <Auth onLogin={handleLogin} />}
      {currentScreen === 'mainMenu' && <MainMenu onLogout={handleLogout} onStartGame={handleStartGame} />}
      {currentScreen === 'lobby' && (
        <Lobby
          onLeaveLobby={handleLeaveLobby}
          onStartGameplay={handleStartGameplay}
        />
      )}
      {currentScreen === 'game' && <Game />}
    </>
  );
}

export default App;
