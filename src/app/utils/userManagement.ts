interface User {
  name: string;
  email: string;
  password: string;
  phone: string;
  department: string;
  jobTitle: string;
}

export const registerUser = (userData: User): boolean => {
  try {
    // Get existing users
    const existingUsers = localStorage.getItem('users');
    const users: User[] = existingUsers ? JSON.parse(existingUsers) : [];

    // Check if user already exists
    if (users.some(user => user.email === userData.email)) {
      return false;
    }

    // Add new user
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  } catch (error) {
    console.error('Error registering user:', error);
    return false;
  }
};

export const loginUser = (email: string, password: string): User | null => {
  try {
    const users = localStorage.getItem('users');
    if (!users) return null;

    const parsedUsers: User[] = JSON.parse(users);
    const user = parsedUsers.find(u => u.email === email && u.password === password);
    return user || null;
  } catch (error) {
    console.error('Error logging in:', error);
    return null;
  }
};

export const logoutUser = () => {
  localStorage.removeItem('auth');
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = (): User | null => {
  try {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}; 