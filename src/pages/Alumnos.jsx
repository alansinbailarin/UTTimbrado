import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlumnoList from "../components/alumnosList";
import AlumnoInfo from "../components/AlumnoInfo";
import { fetchData } from "../resources/fetch";

const Alumnos = () => {
  const dispatch = useDispatch();
  const { alumnos, grupo } = useSelector((state) => state.group.init);
  let alumno = useSelector((state) => state.alumno.alumn);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <div className="px-6 md:px-10">
        <h1 className="text-blue-500 font-bold mb-4">
          Alumnos registrados en la plataforma
        </h1>
        <p className="text-gray-700 mb-4">
          <strong>Gurupo:</strong>
          {" " + grupo.descripcion}
        </p>
        <AlumnoList alumnos={alumnos} />
        {/* dos errores */}
        <AlumnoInfo alumno={alumno} />
      </div>
    </>
  );
};

export default Alumnos;
