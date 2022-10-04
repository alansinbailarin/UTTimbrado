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

const AlumnoInfo = (props) => {
  const { alumno } = props.alumno != undefined ? props.alumno : "";
  let data = alumno != undefined ? alumno[0] : "";

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
      <div className="md:flex my-4">
        {/* paner izquierdo */}
        <div className="md:w-full lg:max-w-[250px] bg-white shadow-lg rounded-lg mr-2 p-4">
          <img
            className="mb-3 h-60 w-60 rounded-full shadow-lg object-cover m-auto"
            src={data.foto}
          />
          <>
            <p className="text-lg text-center">{data.nombreCompleto}</p>
            <p className="text-sm text-slate-500 text-center">
              {data.matricula}
            </p>
          </>
        </div>
        {/* paner derecho */}
        <div className="w-full bg-white shadow-lg rounded-lg ml-2 p-4">
          <div>
            <FaRegEdit size={30} className="text-zinc-300 text-right" />
          </div>
          {/* Datos personales */}
          <details className="bg-gray-100 open:bg-gray-300 duration-300 rounded-tr-lg rounded-tl-lg">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
              Datos personales
            </summary>
            <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
              <p>{formatDate(data.datosPersonales.fechaDeNacimiento)}</p>
              <p>{data.datosPersonales.edad}</p>
              <p>{data.datosPersonales.genero.descripcion}</p>
              <p>{data.datosPersonales.estadoCivil.descripcion}</p>
              <p>
                {data.datosPersonales.lugarDeNacimiento.ciudad +
                  " " +
                  data.datosPersonales.lugarDeNacimiento.entidadFederativa
                    .descripcion}
              </p>
              <p>
                {data.datosPersonales.domicilio.calle +
                  " " +
                  data.datosPersonales.domicilio.numero +
                  " " +
                  data.datosPersonales.domicilio.colonia +
                  " " +
                  data.datosPersonales.domicilio.municipio.descripcion}
              </p>
              <p>
                <strong>Institucional </strong>
                {data.datosPersonales.contacto.correoElectronico.institucional}
              </p>
              <p>
                <strong>Personal </strong>
                {data.datosPersonales.contacto.correoElectronico.personal}
              </p>
              <p>
                <strong>Movil </strong>
                {data.datosPersonales.contacto.telefono.movil}
              </p>
              <p>
                <strong>Casa </strong>
                {data.datosPersonales.contacto.telefono.casa}
              </p>
            </div>
          </details>
          {/* Datos escolares */}
          <details className="bg-gray-100 open:bg-gray-300 duration-300">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
              Datos escolares
            </summary>
            <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
              <p>{data.datosEscolares.nombreBachillerato}</p>
              <p>{data.datosEscolares.entidadFederativa.descripcion}</p>
              <p>{data.datosEscolares.tipoBachillerato.descripcion}</p>
            </div>
          </details>
          {/* Datos laborales */}
          <details
            className="bg-gray-100 open:bg-gray-300 duration-300"
            style={
              data.datosLaborales.trabaja
                ? { display: "block" }
                : { display: "none" }
            }
          >
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
              Datos laborales
            </summary>
            <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
              <p>{data.datosLaborales.estaRelacionadoEstudios ? "Si" : "No"}</p>
              <p>{data.datosLaborales.empresa.nombre}</p>
              <p>{data.datosLaborales.empresa.departamento}</p>
              <p>{data.datosLaborales.empresa.puesto}</p>
              <p>{data.datosLaborales.empresa.domicilio}</p>
              <p>{data.datosLaborales.empresa.telefono}</p>
            </div>
          </details>
          {/* Datos familiares */}
          <details className="bg-gray-100 open:bg-gray-300 duration-300">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
              Datos familiares
            </summary>
            <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
              <p>Madre</p>
              <p>{data.datosFamiliares.madre.nombre}</p>
              <p>{data.datosFamiliares.madre.ocupacion}</p>
              <p>{data.datosFamiliares.madre.telefono}</p>
              <p>padre</p>
              <p>{data.datosFamiliares.padre.nombre}</p>
              <p>{data.datosFamiliares.padre.ocupacion}</p>
              <p>{data.datosFamiliares.padre.telefono}</p>
              {data.datosFamiliares.conyuge.nombre !== "" ? (
                <>
                  <p>Conyuge</p>
                  <p>{data.datosFamiliares.conyuge.telefono}</p>
                  <p>{data.datosFamiliares.conyuge.ocupacion}</p>
                  <p>{data.datosFamiliares.conyuge.telefono}</p>
                </>
              ) : (
                false
              )}
              <p>Emergencias</p>
              <p>{data.datosFamiliares.emergencia.nombre}</p>
              <p>{data.datosFamiliares.emergencia.parentezco}</p>
              <p>{data.datosFamiliares.emergencia.telefono}</p>
            </div>
          </details>
          {/* Datos economicos */}
          <details className="bg-gray-100 open:bg-gray-300 duration-300">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
              Datos economicos
            </summary>
            <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
              <p>{data.datosEconomicos.apoyoEconomico.descripcion}</p>
              <p>{data.datosEconomicos.ingresosFamiliares.descripcion}</p>
              <p>{data.datosEconomicos.transporte.descripcion}</p>
              <p>{data.datosEconomicos.viveCon.descripcion}</p>
              <p>{data.datosEconomicos.vivienda.descripcion}</p>
            </div>
          </details>
          {/* Promedios */}
          <details className="bg-gray-100 open:bg-gray-300 duration-300 rounded-br-lg rounded-bl-lg">
            <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
              Promedios
            </summary>
            <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
              <p>
                <strong>Bachillerato: </strong>
                {data.promedios.tsu.bachillerato}
              </p>
              <p>
                <strong>Puntos de examen de ingreso: </strong>
                {data.promedios.tsu.puntosExamenIngreso}
              </p>
              <p>
                <strong>nivel de ingles: </strong>
                {data.promedios.tsu.nivelIngles}
              </p>

              <h1>TSU</h1>
              <p>
                <strong>Promedio: </strong>
                {data.promedios.tsu.promedio}
              </p>
              {/* grafica Tsu */}
              <Chart
                dataX={data.promedios.tsu.porCuatrimestre}
                dataY={cuatrimestresTsu}
                border="#631433"
                bg="#6314334a"
              />
              <h1>Ingenieria</h1>
              <p>
                <strong>Promedio: </strong>
                {data.promedios.ingenieria.promedio}
              </p>
              {/* grafica Ingenieria */}
              <Chart
                dataX={data.promedios.ingenieria.porCuatrimestre}
                dataY={cuatrimestresIng}
              />
            </div>
          </details>
        </div>
      </div>
    );
  }
};

export default AlumnoInfo;
