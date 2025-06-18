exports.validateLoginInput = (email, password) => {
  if (!email || !password) {
    return { valid: false, message: "Email and password are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: "Invalid email format." };
  }

  if (password.length < 6) {
    return { valid: false, message: "Password must be at least 6 characters." };
  }

  return { valid: true };
};
