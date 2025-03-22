function signIn() {
    console.log("Botón Sign In presionado"); // Esto ayuda a depurar

    // Obtener los valores del formulario
    const email = document.getElementById("thq-sign-in-1-email").value;
    const password = document.getElementById("thq-sign-in-1-password").value;

    // Verificar que los campos no estén vacíos
    if (!email || !password) {
        alert("Por favor, ingresa tu email y contraseña.");
        return;
    }

    // Simulación de autenticación básica (reemplazar con backend en una app real)
    if (email === "user@example.com" && password === "123") {
        console.log("Inicio de sesión exitoso");
        window.location.href = "profile.html"; // Redirige al usuario
    } else {
        console.log("Credenciales incorrectas");
        alert("Email o contraseña incorrectos.");
    }
}

// Función para registrarse (Sign Up)
function signUp() {
    console.log("Botón Sign Up presionado");

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

    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "../sign_in/sign_in.html";
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
togglePasswordVisibility('.sign-in-hide-password', '#thq-sign-in-1-password', 'span');