import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../resources/fetch";
import AlumnoList from "../components/alumnosList";
import AlumnoInfo from "../components/AlumnoInfo";

const Alumnos = () => {
  const dispatch = useDispatch();
  const { grupo, alumnos } = useSelector((state) => state.group.init);
  let alumno = useSelector((state) => state.alumno.alumn);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div className="px-6 md:px-10">
        {/* <p>{grupo.descripcion}</p> */}
        <h1 className="text-blue-500 font-bold ">
          Alumnos registrados en la plataforma
        </h1>
        <AlumnoList alumnos={alumnos} />
        <AlumnoInfo alumno={alumno} />
      </div>
    </>
  );
};

export default Alumnos;
