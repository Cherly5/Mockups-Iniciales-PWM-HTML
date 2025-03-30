function setUserToNull() {
    const currentUser = JSON.stringify(null)
    localStorage.setItem("currentUser", currentUser);
}

// Llamar al método
setUserToNull();
