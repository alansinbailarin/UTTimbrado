import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AlumnoInfo from "../components/AlumnoInfo";
import { fetchAlumn } from "../resources/fetch";
import { useParams } from "react-router-dom";
import { BsFillEmojiFrownFill } from "react-icons/bs";

const AlumnoSearch = () => {
  let { matricula } = useParams();
  const dispatch = useDispatch();
  let alumno = useSelector((state) => state.alumno.alumn);

  useEffect(() => {
    dispatch(fetchAlumn(matricula));
  }, []);

  return (
    <>
      <div className="px-6 md:px-10">
        {/* dos errores */}
        <AlumnoInfo alumno={alumno} />
      </div>
    </>
  );
};

export default AlumnoSearch;
