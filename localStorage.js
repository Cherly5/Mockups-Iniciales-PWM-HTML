function setUserToNull() {
    const users = JSON.stringify(null)
    localStorage.setItem("users", users);
}

// Llamar al método
setUserToNull();
