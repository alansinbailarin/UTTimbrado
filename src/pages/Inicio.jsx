import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../resources/fetch";
import AlumnoList from "../components/alumnosList";

const Inicio = () => {
    const  {grupo, alumnos, estadisticas}  = useSelector(state => state.group.init);
    let alumno = useSelector(state => state.alumno.alumn);
    alumno = (alumno != undefined)?alumno.alumno[0]:"";
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchData());
    },[]);
    let datosPersonales = (alumno.datosPersonales != undefined)?alumno.datosPersonales:"";
    return (
        <>
            <p>{grupo.descripcion}</p>
            <AlumnoList alumnos={alumnos}/>
            
            <div className="bg-white">
                <img className="h-60 w-48 object-cover" src={alumno.foto}/>
                <p>{alumno.matricula}</p>
                <p>{alumno.nombreCompleto}</p>

                <h1>Datos personales</h1>
                <p>{datosPersonales.fechaDeNacimiento}</p>
                <p>{datosPersonales.edad}</p>

                <h1>Datos Familiares</h1>
                <h1>Datos laborales</h1>
                <h1>Datos economicos</h1>
                <h1>Datos laborales</h1>
                <h1>Datos ecolares</h1>
                <h1>Promedio</h1>
            </div>
            
        </>
    );
};

export default Inicio;