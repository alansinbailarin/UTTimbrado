import { setGroup } from "../redux/slices/grupo";
import {  setAlumno } from "../redux/slices/alumnos";

export const fetchData = () => dispatch =>{
    fetch('http://proyectoalumno.somee.com/Group/GetGroup?grupoId=TI-IDGS-9A-202203')
    .then( response =>response.json() )
    .then( response =>{
        dispatch(setGroup(response));
        dispatch(fetchAlumn(response.alumnos[0].matricula));
    })
    .catch(error => console.log(error))
}

export const fetchAlumn = (matricula) => async (dispatch) =>{
    await fetch(`http://proyectoalumno.somee.com/Alumn/GetAlumn?matricula=${matricula}`)
    .then( response =>response.json() )
    .then( response =>{
        dispatch(setAlumno(response));
    })
    .catch(error => console.log(error))
}