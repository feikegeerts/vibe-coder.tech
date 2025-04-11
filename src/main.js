// Create this file if it doesn't exist

export const load = ({ url }) => {
  // Check if we're being redirected from 404.html
  if (url.searchParams.has('path')) {
    // Get the original path
    const path = url.searchParams.get('path');
    // Redirect to the correct path
    if (path !== '/') {
      window.history.replaceState(null, null, path);
    }
  }

  return {};
};
