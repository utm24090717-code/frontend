import React from "react";
import { useNavigate } from "react-router-dom";
// Quita completamente esta línea: import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="card">
        <h2 className="title">Dashboard</h2>
        <p>Bienvenido al prototipo visual del sistema.</p>
        <button className="button" onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Dashboard;