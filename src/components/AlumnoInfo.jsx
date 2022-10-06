import React from "react";
import Chart from "./chart";
import { FaRegEdit } from "react-icons/fa";

export const cuatrimestresTsu = [
  "Cero",
  "Primero",
  "Segundo",
  "Tercero",
  "Cuarto",
  "Quinto",
];

export const cuatrimestresIng = [
  "Sexto",
  "Septimo",
  "Octavo",
  "Noveno",
  "Decimo",
  "Onceavo",
  "Doceavo",
];

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const AlumnoInfo = (props) => {
  const { alumno } = props.alumno != undefined ? props.alumno : "";
  let data = alumno != undefined ? alumno[0] : "";

  // funcion para formatear la fecha
  const formatDate = (date) => {
    var date = new Date(date);
    let formatted_date =
      date.getDate() + "-" + months[date.getMonth()] + "-" + date.getFullYear();
    return formatted_date;
  };
  //comprueba que los datos esten cargados
  if (data.length !== 0) {
    return (
      <div className="mx-auto my-4 ">
        <div className="md:flex no-wrap md:-mx-2">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-5 border border-gray-200 rounded-lg">
              <div className="image overflow-hidden rounded-md">
                <img
                  src={data.foto}
                  alt={data.nombreCompleto}
                  className="h-auto w-full mx-auto"
                />
              </div>
              <h1 className="font-semibold text-blue-400 pt-3">
                {data.nombreCompleto}
              </h1>
              <p className="text-gray-500 font-light font-md leading-6 text-semibold">
                {data.matricula}
              </p>
              <h2 className="pt-3 font-bold text-gray-500">Contacto</h2>
              <p className="text-gray-500 font-light text-sm">
                {data.datosPersonales.contacto.correoElectronico.personal}
              </p>
              <p className="text-gray-500 font-light text-sm">
                {data.datosPersonales.contacto.correoElectronico.institucional}
              </p>
              <div className="mt-2">
                <p className="text-gray-500 font-light text-sm">
                  <p className="font-bold text-gray-500">Movil:</p>{" "}
                  {data.datosPersonales.contacto.telefono.movil}
                </p>
                <p className="text-gray-500 font-light text-sm">
                  <p className="font-bold text-gray-500">Casa:</p>{" "}
                  {data.datosPersonales.contacto.telefono.casa}
                </p>
              </div>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover-shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3 text-sm">
                  <span>Estado</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Activo
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3 text-sm">
                  <span>Fecha</span>
                  <span className="ml-auto">
                    {formatDate(data.datosPersonales.fechaDeNacimiento)}
                  </span>
                </li>
                <li className="flex items-center py-3 text-sm">
                  <span>Edad</span>
                  <span className="ml-auto">
                    {data.datosPersonales.edad} años
                  </span>
                </li>
                <li className="flex items-center py-3 text-sm">
                  <span>Genero</span>
                  <span className="ml-auto">
                    {data.datosPersonales.genero.descripcion}
                  </span>
                </li>
                <li className="flex items-center py-3 text-sm">
                  <span>Estado civil</span>
                  <span className="ml-auto">
                    {data.datosPersonales.estadoCivil.descripcion}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:-9/12  mx-0 md:mx-2 h-64">
            <div className="bg-white p-3 border border-gray-200 rounded-lg">
              <div className="flex flex-row-reverse ml-4">
                <a
                  className="mr-4 text-gray-300 hover:text-gray-600"
                  href={"/editAlumno/" + data.matricula}
                >
                  <FaRegEdit size={20} />
                </a>
              </div>

              <div className="flex ml-6 items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-blue-400">
                  <svg
                    className="h-5"
                    xlmns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      stroke-strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                </span>
                <span className="text-blue-400">
                  Sobre {data.nombreCompleto}
                </span>
              </div>
              <div className="text-gray-600 pl-3">
                <div className="text-sm">
                  <div>
                    <div className="px-4 font-bold text-base">
                      Lugar de nacimiento
                    </div>
                    <div className="text-gray-400 px-4 pb-2">
                      {data.datosPersonales.lugarDeNacimiento.ciudad +
                        " " +
                        data.datosPersonales.lugarDeNacimiento.entidadFederativa
                          .descripcion}
                    </div>
                  </div>
                  <div>
                    <div className="px-4 font-bold text-base">Vivienda</div>
                    <div className="text-gray-400 px-4 pb-2">
                      {data.datosPersonales.domicilio.calle +
                        " " +
                        data.datosPersonales.domicilio.numero +
                        " " +
                        data.datosPersonales.domicilio.colonia +
                        " " +
                        data.datosPersonales.domicilio.municipio.descripcion}
                    </div>
                  </div>
                  <div>
                    <div className="px-4 font-bold text-base">
                      Datos economicos
                    </div>
                    <div className="text-gray-400 px-4 pb-2">
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Apoyo economico:{" "}
                        </span>
                        {data.datosEconomicos.apoyoEconomico.descripcion}
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Ingresos familiares:{" "}
                        </span>
                        {data.datosEconomicos.ingresosFamiliares.descripcion}
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Transporte:{" "}
                        </span>
                        {data.datosEconomicos.transporte.descripcion}
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Vive con:{" "}
                        </span>
                        {data.datosEconomicos.viveCon.descripcion}
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Vivienda:{" "}
                        </span>
                        {data.datosEconomicos.vivienda.descripcion}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="px-4 font-bold text-base">
                      Datos escolares
                    </div>
                    <div className="text-gray-400 px-4 pb-2">
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Bachillerato:{" "}
                        </span>
                        {data.promedios.tsu.bachillerato}
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Puntos de examen de ingreso:{" "}
                        </span>
                        {data.promedios.tsu.puntosExamenIngreso}
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          nivel de ingles:{" "}
                        </span>
                        {data.promedios.tsu.nivelIngles}
                      </p>
                      <h1 className="">TSU</h1>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Promedio:{" "}
                        </span>
                        {data.promedios.tsu.promedio}
                      </p>
                    </div>
                  </div>
                  <div>
                    <details className="mx-2 text-gray-500 w-52 bg-gray-100 p2 rounded-md font-base">
                      <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">
                        Informacion de la madre
                      </summary>
                      <div className="px-3 p-2 ">
                        <p className="font-semibold pb-1">
                          {data.datosFamiliares.madre.nombre}
                        </p>
                        <p>{data.datosFamiliares.madre.ocupacion}</p>
                        <p>{data.datosFamiliares.madre.telefono}</p>
                      </div>
                    </details>
                  </div>
                  <div className="my-4">
                    <details className="mx-2 text-gray-500 w-52 bg-gray-100 p2 rounded-md font-base">
                      <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">
                        Informacion del padre
                      </summary>
                      <div className="px-3 p-2 ">
                        <p className="font-semibold pb-1">
                          {data.datosFamiliares.padre.nombre}
                        </p>
                        <p>{data.datosFamiliares.padre.ocupacion}</p>
                        <p>{data.datosFamiliares.padre.telefono}</p>
                      </div>
                    </details>
                  </div>
                  <div>
                    {data.datosFamiliares.conyuge.nombre !== "" ? (
                      <>
                        <details className="mx-2 text-gray-500 w-52 bg-gray-100 p2 rounded-md font-base">
                          <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">
                            Conyugue
                          </summary>
                          <div className="px-3 p-2">
                            <p>{data.datosFamiliares.conyuge.telefono}</p>
                            <p>{data.datosFamiliares.conyuge.ocupacion}</p>
                            <p>{data.datosFamiliares.conyuge.telefono}</p>
                          </div>
                        </details>
                      </>
                    ) : (
                      false
                    )}
                    <details className="mx-2 text-gray-500 w-52 bg-gray-100 p2 rounded-md font-base">
                      <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">
                        Contacto emergencia
                      </summary>
                      <div className="px-3 p-2 ">
                        <p className="font-semibold pb-1">
                          {data.datosFamiliares.emergencia.nombre}
                        </p>
                        <p>{data.datosFamiliares.emergencia.parentezco}</p>
                        <p>{data.datosFamiliares.emergencia.telefono}</p>
                      </div>
                    </details>
                  </div>
                  <div className="px-3 mt-4">
                    <span className="font-bold text-base">Datos escolares</span>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-blue-500 font-bold text-md">
                          {data.datosEscolares.nombreBachillerato}
                        </div>
                        <div className="text-gray-500 text-md font-semibold">
                          {data.datosEscolares.entidadFederativa.descripcion}
                        </div>
                        <div className="text-gray-500 text-md font-light">
                          {data.datosEscolares.tipoBachillerato.descripcion}
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="px-3 mt-4"
                    style={
                      data.datosLaborales.trabaja
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <span className="font-bold text-base">Datos laborales</span>
                    <ul className="list-inside space-y-2">
                      <li>
                        <p>
                          <span className="text-gray-500 font-semibold">
                            Relacionado con la carrera:{" "}
                          </span>

                          {data.datosLaborales.estaRelacionadoEstudios
                            ? "Si"
                            : "No"}
                        </p>
                        <p>
                          Nombre de la empresa:{" "}
                          {data.datosLaborales.empresa.nombre}
                        </p>
                        <p>
                          Departamento:{" "}
                          {data.datosLaborales.empresa.departamento}
                        </p>
                        <p>Puesto: {data.datosLaborales.empresa.puesto}</p>
                        <p>
                          Ubicación: {data.datosLaborales.empresa.domicilio}
                        </p>
                        <p>Telefono: {data.datosLaborales.empresa.telefono}</p>
                      </li>
                    </ul>
                  </div>
                  <div className="md:grid grid-cols-2">
                    <div className="bg-gray-100 my-4 mr-3 p-4 rounded-lg">
                      <p className="text-gray-600 font-bold text-sm mb-2">
                        Promedio de TSU: {data.promedios.tsu.promedio}
                      </p>
                      <Chart
                        dataX={data.promedios.tsu.porCuatrimestre}
                        dataY={cuatrimestresTsu}
                        border="#631433"
                        bg="#6314334a"
                      />
                    </div>
                    <div className="bg-gray-100 my-4 mr-3 p-4 rounded-lg">
                      <p className="text-gray-600 font-bold text-sm mb-2">
                        Promedio de Ingenieria:{" "}
                        {data.promedios.ingenieria.promedio}
                      </p>
                      <Chart
                        dataX={data.promedios.ingenieria.porCuatrimestre}
                        dataY={cuatrimestresIng}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default AlumnoInfo;
