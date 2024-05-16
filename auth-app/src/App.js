// App.js

import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import IdeaPrincipal from "./IdeaPrincipal";
import Productos from "./Productos";
import Objetivos from "./Objetivos";
import About from "./About";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route element={<PrivateRoute />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                    <Route path="/IdeaPrincipal" element={<IdeaPrincipal/>} />
                    <Route path="/Productos" element ={<Productos/>} />
                    <Route path="/Objetivos" element = {<Objetivos/>} />
                    <Route path="/About" element = {<About/>} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App; 