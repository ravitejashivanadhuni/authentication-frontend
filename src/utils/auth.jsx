//this code over here checks auth status whether user is logged in or not
export const isAuthenticated = () => {
  // Check for a token in localStorage (or cookies)
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
}
