// Productos.jsx
import React from "react";
import { Link } from "react-router-dom"; 
import "./Productos.css";

const productosData = [
    {
        id: 1,
        nombre: "Rainbow Powered",
        imagen: "/Producto01.png",
        descripcion: "Libro Rainbow Powered.",
    },
    {
        id: 2,
        nombre: "Umbrella",
        imagen: "/Producto02.png",
        descripcion: "Libro Umbrella",
    },
    {
        id: 3,
        nombre: "Watch",
        imagen: "/Producto03.png",
        descripcion: "Libro Watch",
    },
    {
        id: 4,
        nombre: "Solar",
        imagen: "/Producto04.png",
        descripcion: "Libro Solar",
    },
    
];

const Productos = () => {
    return (
        <div className="productos-container">
            {productosData.map((producto) => (
                <div key={producto.id} className="producto-card">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="producto-image"
                    />
                    <p className="producto-description">{producto.descripcion}</p>
                </div>
            ))}

            {/* Botón "Volver" */}
            <div>
                <Link to="/Dashboard">
                    <button>
                        Volver
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Productos;
