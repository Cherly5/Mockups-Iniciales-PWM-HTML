function setUserToNull() {
    const users = JSON.stringify("cualquiercosa")
    localStorage.setItem("users", users);
}

// Llamar al método
setUserToNull();
