import {Link} from "react-router-dom"
import './IdeaPrincipal.css';


const IdeaPrincipal = () => {
    return (
        <div>
            <h1 className="h1">
                Sistema Integral de Gestion para Librerias
            </h1>
            <u className="texto-1"><strong>-Planteamiento del Problema</strong></u>
            <p className="texto-2"> La gestión eficiente de una librería no solo implica un seguimiento adecuado 
            de las ventas y ganancias, sino también un control efectivo del inventario de productos, que incluyen 
            libros, material de escritura y artículos relacionados.La falta de un sistema adecuado para organizar estas 
            actividades puede llevar aerrores en la gestión del negocio, pérdida de ingresos y una experiencia deficiente 
            para los clientes.</p> 
            <div> 
            <u className="texto-6"><strong>-Problematicas a abordar en el problema</strong></u>
            <p className="texto-3">-Registro de Ventas y Ganancias por Mes: Actualmente, la librería carece de un sistema automatizado 
                para registrar y organizar las ventas y ganancias por  mes. Esto dificulta la evaluación del rendimiento 
                financiero a lo largo del tiempo y la identificación de patrones de venta.</p>
            <p className="texto-4">-Análisis de Ventas de Libros: Sin un mecanismo para analizar las ventas de libros, es difícil identificar 
               qué títulos son los más populares y cuáles podrían necesitar una promoción adicional. Esto puede resultar en 
               oportunidades perdidas para maximizar los ingresos y satisfacer las demandas de los clientes.</p>  
            <p className="texto-5">-Control de Inventario: La librería también enfrenta desafíos en la gestión de su inventario de productos diversos, 
                como lápices, colores, pinturas, etc. La falta de un sistema centralizado para monitorear el stock disponible puede 
                dar lugar a exceso o escasez de productos, lo que afecta negativamente las operaciones y la satisfacción del cliente.</p>
            </div>
            <Link to="/Dashboard">
                <button>
                    Volver
                </button>
            </Link>
        </div>
    );
};
export default IdeaPrincipal;