document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('show-login').addEventListener('click', function() {
        document.getElementById('left-side').innerHTML = `
            <h2>Iniciar Sesión</h2>
            <form id="login-form">
                <label for="username">Usuario</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Iniciar Sesión</button>
                <a href="#" id="forgot-password" class="small-text">Olvidé mi Contraseña</a>
            </form>
        `;
    });

    document.getElementById('show-register').addEventListener('click', function() {
        document.getElementById('left-side').innerHTML = `
            <h2>Crear Cuenta</h2>
            <form id="register-form">
                <label for="username">Usuario</label>
                <input type="text" id="username" name="username" required>
                <label for="repeat-username">Repetir Usuario</label>
                <input type="text" id="repeat-username" name="repeat-username" required>
                <label for="password">Contraseña</label>
                <input type="password" id="password" name="password" required>
                <label for="repeat-password">Repetir Contraseña</label>
                <input type="password" id="repeat-password" name="repeat-password" required>
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required>
                <label for="phone">Número de Teléfono</label>
                <input type="tel" id="phone" name="phone" required>
                <button type="submit">Crear Cuenta</button>
            </form>
        `;
    });
    document.getElementById('forgot-password').addEventListener('click', function() {
        document.getElementById('left-side').innerHTML = `
            <h2>Recuperar contraseña</h2>
            <form id="register-form">
                <label for="username">Introduzca el usuario</label>
                <input type="text" id="username" name="username" required>
                <label for="repeat-username">Introduzca el correo</label>
                <input type="text" id="repeat-username" name="repeat-username" required>
                <button type="submit">Restablecer contraseña</button>
            </form>
        `;
    });
});