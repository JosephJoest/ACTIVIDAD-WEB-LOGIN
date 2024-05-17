import {Link} from "react-router-dom"

const About = () => {
    return (
        <div>
            <h1 className="h1">
                Acerca del Proyecto
            </h1>
            <p className="texto-1">
            Este proyecto ambicioso busca revolucionar la gestión y el control de inventario a través de un sistema integral que aborda desafíos 
            clave en la industria. </p>
            <p className="texto-2"> Con objetivos claros y definidos, el proyecto se centra en:</p>
            <li>
            Sistema de Gestión Integral: Desarrollar una solución robusta que resuelva los desafíos actuales y mejore la eficiencia operativa.
            </li>
            <li>
            Registro y Organización: Implementar métodos para registrar y organizar las ventas y ganancias mensuales, utilizando informes gráficos para visualizar tendencias y patrones.
            </li>
            <li>
            Control de Inventario: Mantener un seguimiento preciso del inventario, asegurando una gestión efectiva del stock y facilitando la reposición oportuna de productos.
            </li>
            <p><em>El éxito de este proyecto no solo mejorará la operatividad interna, sino que también ofrecerá una visión más clara y estratégica para la toma de decisiones en el futuro.</em></p>
            <Link to="/Dashboard">
                <button>
                    Volver
                </button>
            </Link>
        </div>
    );
};
export default About;    