import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../resources/fetch";
import AlumnoList from "../components/alumnosList";

const Inicio = () => {
    const  {grupo, alumnos, estadisticas}  = useSelector(state => state.group.init);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchData());
    },[]);

    return (
        <>
            <p>{grupo.descripcion}</p>
            <AlumnoList alumnos={alumnos}/>
        </>
    );
};

export default Inicio;