// Función para actualizar username y email en localStorage
function updateProfile() {
    const usernameInput = document.getElementById("thq-sign-up-2-username1").value.trim();
    const emailInput = document.getElementById("thq-sign-up-2-email1").value.trim();

    if (usernameInput && emailInput) {
        // Obtener el currentEmail y eliminar las comillas adicionales usando JSON.parse
        let rawCurrentEmail = localStorage.getItem("currentUser");
        let currentEmail = rawCurrentEmail ? JSON.parse(rawCurrentEmail).trim().toLowerCase() : null;

        if (!currentEmail) {
            alert("No valid current user found in localStorage.");
            return;
        }

        // Obtener el array de usuarios desde localStorage
        let users = JSON.parse(localStorage.getItem("users"));

        if (users && Array.isArray(users)) {
            // Buscar al usuario con el currentEmail en el array
            const userIndex = users.findIndex(
                (user) => user.email.trim().toLowerCase() === currentEmail
            );

            if (userIndex !== -1) {
                // Actualizar username y email
                users[userIndex].username = usernameInput;
                users[userIndex].email = emailInput;

                // Guardar el array actualizado en localStorage
                localStorage.setItem("users", JSON.stringify(users));
                // Actualizar el currentUser con el nuevo email
                localStorage.setItem("currentUser", JSON.stringify(emailInput));
                document.getElementById("profile-title").innerText = emailInput;
                alert("User and email updated successfully!");
            } else {
                alert("User not found. Please verify the current email.");
            }
        } else {
            alert("No valid users found in localStorage.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}

    // Cambiar contraseña
function updatePassword() {
    const oldPasswordInput = document.getElementById("thq-sign-up-2-username2").value.trim(); // Campo de contraseña anterior
    const newPasswordInput = document.getElementById("thq-sign-up-2-email2").value.trim(); // Campo de nueva contraseña

    if (oldPasswordInput && newPasswordInput) {
        // Obtener el currentEmail y eliminar las comillas adicionales usando JSON.parse
        const rawCurrentEmail = localStorage.getItem("currentUser");
        const currentEmail = rawCurrentEmail ? JSON.parse(rawCurrentEmail).trim().toLowerCase() : null;

        if (!currentEmail) {
            alert("No valid current user found in localStorage.");
            return;
        }

        // Obtener el array de usuarios desde localStorage
        let users = JSON.parse(localStorage.getItem("users"));

        if (users && Array.isArray(users)) {
            // Buscar al usuario con el currentEmail
            const userIndex = users.findIndex(
                (user) => user.email.trim().toLowerCase() === currentEmail
            );

            if (userIndex !== -1) {
                // Verificar si la contraseña actual coincide
                if (users[userIndex].password === oldPasswordInput) {
                    // Actualizar la contraseña del usuario
                    users[userIndex].password = newPasswordInput;

                    // Guardar los cambios en el array de usuarios
                    localStorage.setItem("users", JSON.stringify(users));

                    alert("Password updated successfully!");
                } else {
                    alert("Old password is incorrect.");
                }
            } else {
                alert("User not found. Please verify the current email.");
            }
        } else {
            alert("No valid users found in localStorage.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}