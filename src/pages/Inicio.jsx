import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../resources/fetch";
import AlumnoList from "../components/alumnosList";

const Inicio = () => {
    const  {grupo, alumnos, estadisticas}  = useSelector(state => state.group.init);
    const dispatch = useDispatch();
   console.log(alumnos)
    useEffect(() =>{
        dispatch(fetchData());
    },[]);

    return (
        <>
            <AlumnoList/>
        </>
    );
};

export default Inicio;