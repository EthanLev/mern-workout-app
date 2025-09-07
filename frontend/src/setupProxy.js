/**
 * Development Proxy Configuration
 * Configures Create React App's built-in proxy to forward API requests
 * to the backend server during development
 * 
 * This file is automatically detected by Create React App and used
 * to configure the webpack dev server proxy
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * Export a function that configures the Express app used by the dev server
 * @param {Object} app - Express application instance from Create React App
 */
module.exports = function(app) {
  /**
   * Configure proxy for all requests starting with '/api'
   * 
   * How this works:
   * 1. Frontend runs on http://localhost:3000
   * 2. Backend runs on http://localhost:4000
   * 3. When frontend makes request to '/api/workouts'
   * 4. Proxy forwards it to 'http://localhost:4000/api/workouts'
   * 5. This avoids CORS issues during development
   */
  app.use(
    '/api', // Match all paths starting with /api
    createProxyMiddleware({
      target: 'http://localhost:4000', // Backend server URL
      changeOrigin: true, // Change the origin header to match the target
      
      /**
       * Optional configurations:
       * pathRewrite: { '^/api': '' }, // Remove /api prefix when forwarding
       * logLevel: 'debug', // Enable detailed logging
       * secure: false, // Allow proxying to HTTPS endpoints with invalid certificates
       */
    })
  );
};