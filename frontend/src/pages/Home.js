/**
 * Home Page Component
 * Displays a list of all workouts fetched from the backend API
 */

import { useEffect, useState } from "react";

const Home = () => {
  /**
   * State Management
   * workouts: stores the array of workout data from the API
   * setWorkouts: function to update the workouts state
   * Initial value is null (no data loaded yet)
   */
  const [workouts, setWorkouts] = useState(null);

  /**
   * useEffect Hook - Side Effect Management
   * Runs after component mounts (empty dependency array [])
   * Used for data fetching, subscriptions, or other side effects
   */
  useEffect(() => {
    /**
     * Async function to fetch workouts from the backend API
     * Separated into its own function because useEffect cannot be async directly
     */
    const fetchWorkouts = async () => {
      try {
        // Make GET request to backend API
        // Note: In development, this will use the proxy configured in setupProxy.js
        const response = await fetch('http://localhost:4000/api/workouts');
        
        // Parse the JSON response
        const json = await response.json();

        // Check if the request was successful
        if (response.ok) {
          // Update state with the fetched workout data
          setWorkouts(json);
        }
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    }

    // Call the fetch function when component mounts
    fetchWorkouts();
  }, []); // Empty dependency array means this effect runs once on mount

  /**
   * Render Method
   * Returns JSX that defines what the component displays
   */
  return (
    <div className="home">
      <div className="workouts">
        {/* 
          Conditional Rendering with Logical AND (&&)
          Only renders the map when workouts array exists (not null)
          
          Array.map() transforms each workout object into a JSX element
          Key prop is required for React's virtual DOM optimization
        */}
        {workouts && workouts.map((workout) => (
          <p key={workout._id}>{workout.title}</p>
        ))}
        
        {/* 
          Alternative approach for no data state:
          {!workouts && <p>Loading workouts...</p>}
          {workouts && workouts.length === 0 && <p>No workouts found</p>}
        */}
      </div>
    </div>
  );
}

export default Home;