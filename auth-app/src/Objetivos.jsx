import {Link} from "react-router-dom"
import './Objetivos.css';

const Objetivos = () => {
    return (
        <div>
            <h1 className="h1">
                Objetivos del Proyecto
            </h1>
            <li className="texto-1">
             Desarrollar un sistema de gestión integral que aborde los desafíos 
             mencionados anteriormente.  
            </li>
            <li>
            Mantener un control preciso del inventario, facilitando el seguimiento del 
            stock disponible y las necesidades de reposición.
            </li>
            <li>
            Generar informes y gráficos que muestren las tendencias de ventas de 
            libros y otros productos.
            </li>
            <li>
            Registrar y organizar las ventas y ganancias por mes de manera eficiente.
            </li>
            <Link to="/Dashboard">
                <button>
                    Volver
                </button>
            </Link>
        </div>
    );
};
export default Objetivos;