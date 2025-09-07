/**
 * Main App Component
 * Root component that sets up routing and overall app structure
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import page components and shared components
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* 
        BrowserRouter enables client-side routing for the entire app
        This allows navigation between different pages without page refreshes
      */}
      <BrowserRouter>
        {/* 
          NavBar component renders on all pages
          Contains site navigation and branding
        */}
        <NavBar />
        
        {/* 
          Main content area where different pages will be rendered
          based on the current URL route
        */}
        <div className="pages">
          {/* 
            Routes component contains all possible route definitions
            Only one Route will match and render at a time
          */}
          <Routes>
            {/* 
              Route for the home page (/)
              When user visits root URL, Home component will render
            */}
            <Route path="/" element={<Home />} />
            
            {/* 
              Additional routes can be added here for other pages
              Example: <Route path="/about" element={<About />} />
            */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;