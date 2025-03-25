// Función para verificar si el JSON Server está activo
async function isServerActive() {
    try {
        const response = await fetch("http://localhost:3000/users");
        return response.ok;
    } catch (error) {
        console.warn("El JSON Server no está activo.");
        return false;
    }
}

// Función para iniciar sesión (Sign In)
async function signIn() {
    console.log("Inicio de sesión iniciado");

    const email = document.getElementById("thq-sign-in-1-email").value;
    const password = document.getElementById("thq-sign-in-1-password").value;

    if (!email || !password) {
        alert("Por favor, ingresa tu email y contraseña.");
        return;
    }

    const serverActive = await isServerActive();
    const users = serverActive
        ? await (await fetch("http://localhost:3000/users")).json()
        : JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert(`¡Bienvenido, ${user.username}!`);
        console.log("Inicio de sesión exitoso");
        window.location.href = "../profile/profile.html";
    } else {
        alert("Email o contraseña incorrectos.");
        console.log("Credenciales incorrectas");
    }
}

// Función para registrarse (Sign Up)
async function signUp() {
    console.log("Registro iniciado");

    const username = document.getElementById("thq-sign-up-2-username").value;
    const email = document.getElementById("thq-sign-up-2-email").value;
    const password = document.getElementById("thq-sign-up-2-password").value;

    if (!username || !email || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    const serverActive = await isServerActive();
    const users = serverActive
        ? await (await fetch("http://localhost:3000/users")).json()
        : JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("El email ya está registrado. Por favor, inicia sesión.");
        return;
    }

    const newUser = { username, email, password };
    users.push(newUser);

    if (serverActive) {
        try {
            await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });
            console.log("Usuario guardado en el servidor.");
        } catch (error) {
            console.error("Error al guardar en el servidor:", error);
        }
    }

    // Guardar en localStorage
    localStorage.setItem("users", JSON.stringify(users));
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "../profile/profile.html";
}

function togglePasswordVisibility(buttonSelector, inputSelector, textSelector) {
    const button = document.querySelector(buttonSelector);
    const passwordInput = document.querySelector(inputSelector);
    const hideText = button.querySelector(textSelector); // Selector del texto

    // Sincronizar el texto al cargar la página
    hideText.textContent = passwordInput.type === 'password' ? 'Hide' : 'Show';

    hideText.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            hideText.textContent = 'Show'; // Cambiar texto a "Show"
        } else {
            passwordInput.type = 'password';
            hideText.textContent = 'Hide'; // Cambiar texto a "Hide"
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.sign-in-hide-password')) {
        togglePasswordVisibility('.sign-in-hide-password', '#thq-sign-in-1-password', 'span');
    }

    if (document.querySelector('.sign-up-hide-password')) {
        togglePasswordVisibility('.sign-up-hide-password', '#thq-sign-up-2-password', 'span');
    }
});