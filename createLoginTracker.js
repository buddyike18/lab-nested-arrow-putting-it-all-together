// Function to create a login tracker
function createLoginTracker(userInfo) {
    let attemptCount = 0; // Initialize attempt counter
  
    // Return a nested arrow function that handles login attempts
    return (passwordAttempt) => {
      attemptCount++; // Increment attempt count each time the function is called
  
      // If attempts exceed 3, lock the account
      if (attemptCount > 3) {
        return 'Account locked due to too many failed login attempts';
      }
  
      // If password is correct and attempts are 3 or less
      if (passwordAttempt === userInfo.password) {
        return 'Login successful';
      }
  
      // Otherwise, return attempt-specific login failure message
      return `Attempt ${attemptCount}: Login failed`;
    };
  }
  
  // --- Example usage ---
  
  const user = { username: 'testUser', password: 'securePass123' };
  const login = createLoginTracker(user);
  
  console.log(login('wrong1'));   // Attempt 1: Login failed
  console.log(login('wrong2'));   // Attempt 2: Login failed
  console.log(login('wrong3'));   // Attempt 3: Login failed
  console.log(login('securePass123')); // Account locked due to too many failed login attempts
  