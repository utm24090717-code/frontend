import "./Login.css";
import { useState } from "react";

function Login() {
  // ... (todo el código que ya tienes está perfecto)
  // SOLO cambia el handleSubmit para navegar al dashboard:

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!correo || !contraseña) {
      setError("Todos los campos son obligatorios");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
      setError("El correo no tiene un formato válido");
      return;
    }

    console.log("Datos enviados:", { correo, contraseña });

    // SIMULAR LOGIN EXITOSO - redirigir al dashboard
    if (correo === "test@gmail.com" && contraseña === "123456") {
      setError("");
      window.location.href = "/dashboard"; // ← Esta línea redirige
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="title">Iniciar sesión</h2>
        <p className="subtitle">Bienvenido de nuevo</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />

          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />

          <button className="button">Entrar</button>
        </form>
        
        {/* Agrega este texto para probar credenciales */}
        <p style={{textAlign: 'center', fontSize: '12px', marginTop: '15px', color: '#666'}}>
          Usa: test@gmail.com / 123456
        </p>
      </div>
    </div>
  );
}

export default Login;


