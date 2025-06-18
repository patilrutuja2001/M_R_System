class RegService {
    acceptRegData(name, email, contact, username, password) {
        
        let index = email.indexOf(".gmail.com"); // ✅ Correct method name
if (index === -1) { // ✅ Correct comparison
  return true;
} else {
  return false;
}

    }
}

module.exports = new RegService();
