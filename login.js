async function signIn() {
    console.log("Inicio de sesión iniciado");

    // Obtener los valores del formulario
    const email = document.getElementById("thq-sign-in-1-email").value;
    const password = document.getElementById("thq-sign-in-1-password").value;

    if (!email || !password) {
        alert("Por favor, ingresa tu email y contraseña.");
        return;
    }

    try {
        // Obtener usuarios desde el servidor JSON Fake
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();

        // Verificar credenciales
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert(`¡Bienvenido, ${user.username}!`);
            console.log("Inicio de sesión exitoso");
            // Redirige según sea necesario
            window.location.href = "../profile/profile.html";
        } else {
            alert("Email o contraseña incorrectos.");
            console.log("Credenciales incorrectas");
        }
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
    }
}

// Función para registrarse (Sign Up)
async function signUp() {
    console.log("Registro iniciado");

    // Obtener los valores ingresados del formulario
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

    try {
        // Verificar si el email ya está registrado
        const response = await fetch("http://localhost:3000/users");
        const users = await response.json();

        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert("El email ya está registrado. Por favor, inicia sesión.");
            return;
        }

        // Crear un nuevo usuario
        const newUser = { username, email, password };

        // Guardar en el servidor
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
        window.location.href = "../sign_in/sign_in.html"; // Redirige a la página de inicio de sesión
    } catch (error) {
        console.error("Error al registrarse:", error);
    }
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