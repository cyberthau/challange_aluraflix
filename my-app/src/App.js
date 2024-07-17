import React from 'react';
import './App.css';
import Header from './componentes/Header/header';
import Footer from './componentes/Footer/Footer';
import { VideoProvider } from './context/videoContext';
import AppRoutes from './AppRoutes';

function App() {
  return (
  <VideoProvider>
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
    </VideoProvider>

  );
}

export default App;
