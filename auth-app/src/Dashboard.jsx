import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";
import  React from 'react';
import "./Dashboard.css";

const Dashboard = () => {
    const auth = useAuth();
    return (
        <div className="container">
            <div>
                <h1>Bienvenido al Sistema Integral de Gestion de Librerias!, {auth.user}.</h1>
                <h2>Por favor, selecciona una opción:</h2>
                <p>
                    <Link to="/IdeaPrincipal">
                        <button>
                            <b>Idea Principal</b>
                        </button>
                    </Link>
                </p>

                <p>
                    <Link to="/Productos">
                        <button>
                            <b>Productos</b>
                        </button>
                    </Link>
                </p>

                {/* Nuevo botón */}
                <p>
                    <Link to="/Objetivos">
                        <button>
                            <b>Objetivos</b>
                        </button>
                    </Link>
                </p>

            
                <p>
                    <Link to="/About">
                        <button>
                            <b>Acerca de</b>
                        </button>
                    </Link>
                </p>

                <button onClick={() => auth.logOut()} className="btn-submit">
                    <b>Cerrar sesión</b>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;



