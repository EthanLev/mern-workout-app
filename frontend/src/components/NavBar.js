/**
 * Navigation Bar Component
 * Renders the top navigation with site branding and links
 */

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <div className="container">
                {/* 
                  Link component from react-router-dom
                  Provides client-side navigation without page refresh
                  'to' prop specifies the destination route
                */}
                <Link to="/">
                    <h1>Workout App</h1>
                </Link>
                
                {/* 
                  Additional navigation links can be added here:
                  <Link to="/workouts">Workouts</Link>
                  <Link to="/profile">Profile</Link>
                */}
            </div>
        </header>
    )
}

export default NavBar