import { setGroup } from "../redux/slices/grupo";
import {  setAlumno } from "../redux/slices/alumnos";

export const fetchData = () => dispatch =>{
    fetch('http://localhost:8081/grupo')
    .then( response =>response.json() )
    .then( response =>{
        dispatch(setGroup(response));
        dispatch(fetchAlumn(response.alumnos[0].matricula));
    })
    .catch(error => console.log(error))
}

export const fetchAlumn = (matricula) => async (dispatch) =>{
    await fetch(`http://www.proyectoalumno.somee.com/Alumn/GetAlumno?matricula=${matricula}`)
    .then( response =>response.json() )
    .then( response =>{
        dispatch(setAlumno(response));
    })
    .catch(error => console.log(error))
}