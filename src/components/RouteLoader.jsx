import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Configure NProgress bar globally
NProgress.configure({ 
  showSpinner: false,
  trickleSpeed: 100,
  minimum: 0.2,
  speed: 400
});

export default function RouteLoader() {
  const location = useLocation();

  useEffect(() => {
    // Override default nprogress styles to match brand colors
    const style = document.createElement('style');
    style.innerHTML = `
      #nprogress .bar {
        background: #b88d44 !important; /* Brand Gold */
        height: 4px !important;
        z-index: 10310 !important;
      }
      #nprogress .peg {
        box-shadow: 0 0 10px #b88d44, 0 0 5px #b88d44 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Remove the initial HTML loader smoothly once the app boots up
    const loader = document.getElementById('initial-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        loader.remove();
      }, 600); // Wait for transition to finish
    }
  }, []);

  useEffect(() => {
    // Start navigation progress bar
    NProgress.start();
    
    // Scroll to top immediately on route change
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // End navigation progress bar shortly after the new route renders
    const timer = setTimeout(() => {
      NProgress.done();
    }, 400); // 400ms buffer allows components to mount

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
