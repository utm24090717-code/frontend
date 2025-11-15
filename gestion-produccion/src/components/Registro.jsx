import "./Registro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← Agregar esto

function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
    confirmar: ""
  });
  
  const navigate = useNavigate(); // ← Agregar esto

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.contraseña !== form.confirmar) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert("Registro exitoso! Redirigiendo al login...");
    navigate("/"); // ← Redirigir al login después del registro
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="title">Crear cuenta</h2>
        <p className="subtitle">Regístrate para continuar</p>

        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            onChange={handleChange}
          />
          <input
            className="input"
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <input
            className="input"
            type="password"
            name="confirmar"
            placeholder="Confirmar contraseña"
            onChange={handleChange}
          />

          <button className="button">Registrarme</button>
        </form>
        
        <p style={{textAlign: 'center', marginTop: '15px'}}>
          <a href="/">¿Ya tienes cuenta? Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}

export default Registro;

