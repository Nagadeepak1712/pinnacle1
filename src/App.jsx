import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import RouteLoader from './components/RouteLoader';
import Chatbot from './components/Chatbot';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <BrowserRouter>
        <RouteLoader />
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
