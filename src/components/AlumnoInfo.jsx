import React from "react";
import Chart from "./chart";

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

  const cuatrimestresTsu = [
    "Cero",
    "Primero",
    "Segundo",
    "Tercero",
    "Cuarto",
    "Quinto",
  ];

  const cuatrimestresIng = [
    "Sexto",
    "Septimo",
    "Octavo",
    "Noveno",
    "Decimo",
    "Onceavo",
    "Doceavo",
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
        <div className="container mx-auto my-4 ">
            <div className="md:flex no-wrap md:-mx-2">
                <div className="w-full md:w-3/12 md:mx-2">
                    <div className="bg-white p-5 border border-gray-200 rounded-lg">
                        <div className="image overflow-hidden rounded-md">
                            <img src={data.foto} alt={data.nombreCompleto} className="h-auto w-full mx-auto"/>
                        </div>
                        <h1 className="font-semibold text-blue-400 pt-3">{data.nombreCompleto}</h1>
                        <p className="text-gray-500 font-light font-md leading-6 text-semibold">{data.matricula}</p>
                        <h2 className="pt-3 font-bold text-gray-500">Contacto</h2>
                        <p className="text-gray-500 font-light text-sm">{data.datosPersonales.contacto.correoElectronico.personal}</p>
                        <p className="text-gray-500 font-light text-sm">{data.datosPersonales.contacto.correoElectronico.institucional}</p>
                        <div className="mt-2">
                            <p className="text-gray-500 font-light text-sm"><p className="font-bold text-gray-500">Movil:</p> {data.datosPersonales.contacto.telefono.movil}</p>
                            <p className="text-gray-500 font-light text-sm"><p className="font-bold text-gray-500">Casa:</p> {data.datosPersonales.contacto.telefono.casa}</p>
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
                                <span className="font-semibold">Fecha</span>
                                <span className="ml-auto">{formatDate(data.datosPersonales.fechaDeNacimiento)}</span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span className="font-semibold">Edad</span>
                                <span className="ml-auto">{data.datosPersonales.edad} años</span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span className="font-semibold">Genero</span>
                                <span className="ml-auto">{data.datosPersonales.genero.descripcion}</span>
                            </li>
                            <li className="flex items-center py-3 text-sm">
                                <span className="font-semibold">Estado civil</span>
                                <span className="ml-auto">{data.datosPersonales.estadoCivil.descripcion}</span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="w-full mt-4 md:mt-0 md:-9/12  mx-0 md:mx-2 h-64">
                        <div className="bg-white p-3 border border-gray-200 rounded-lg">

                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span className="text-blue-400">
                                    <svg className="h-5" xlmns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                        <path strokeLinecap="round" stroke-strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </span>
                                <span className="text-blue-400">Sobre {data.nombreCompleto}</span>
                            </div>
                            <div className="text-gray-600 pl-3">
                                <div className="text-sm">
                                    <div>
                                        <div className="px-4 font-bold text-base">
                                            Lugar de nacimiento
                                        </div>
                                        <div className="text-gray-400 px-4 pb-2">{data.datosPersonales.lugarDeNacimiento.ciudad + " " + data.datosPersonales.lugarDeNacimiento.entidadFederativa.descripcion}</div>
                                    </div>
                                    <div>
                                        <div className="px-4 font-bold text-base">
                                            Vivienda
                                        </div>
                                        <div className="text-gray-400 px-4 pb-2">{data.datosPersonales.domicilio.calle + " " + data.datosPersonales.domicilio.numero + " " + data.datosPersonales.domicilio.colonia + " " + data.datosPersonales.domicilio.municipio.descripcion}</div>
                                    </div>
                                    <div>
                                        <div className="px-4 font-bold text-base">
                                            Datos economicos
                                        </div>
                                            <div className="text-gray-400 px-4 pb-2">
                                                <p><span className="text-gray-500 font-semibold">Apoyo economico: </span>{data.datosEconomicos.apoyoEconomico.descripcion}</p>
                                                <p><span className="text-gray-500 font-semibold">Ingresos familiares: </span>{data.datosEconomicos.ingresosFamiliares.descripcion}</p>
                                                <p><span className="text-gray-500 font-semibold">Transporte: </span>{data.datosEconomicos.transporte.descripcion}</p>
                                                <p><span className="text-gray-500 font-semibold">Vive con: </span>{data.datosEconomicos.viveCon.descripcion}</p>
                                                <p><span className="text-gray-500 font-semibold">Vivienda: </span>{data.datosEconomicos.vivienda.descripcion}</p> 
                                            </div>                                   
                                        </div>
                                        <div>
                                            <div className="px-4 font-bold text-base">Datos escolares</div>
                                                <div className="text-gray-400 px-4 pb-2">
                                                    <p><span className="text-gray-500 font-semibold">Bachillerato: </span>{data.promedios.tsu.bachillerato}</p>
                                                    <p><span className="text-gray-500 font-semibold">Puntos de examen de ingreso: </span>{data.promedios.tsu.puntosExamenIngreso}</p>
                                                    <p><span className="text-gray-500 font-semibold">nivel de ingles: </span>{data.promedios.tsu.nivelIngles}</p>
                                                    <h1 className="">TSU</h1>
                                                    <p><span className="text-gray-500 font-semibold">Promedio: </span>{data.promedios.tsu.promedio}</p>
                                                </div>
                                            </div>   
                                    <div>
                                        <details className="mx-2 text-gray-500 w-52 bg-gray-100 p2 rounded-md font-base">
                                            <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">Informacion de la madre</summary>
                                            <div className="px-3 p-2 ">
                                                <p className="font-semibold pb-1">{data.datosFamiliares.madre.nombre}</p>
                                                <p>{data.datosFamiliares.madre.ocupacion}</p>
                                                <p>{data.datosFamiliares.madre.telefono}</p>  
                                            </div>                                      
                                        </details>
                                    </div>
                                    <div className="my-4">
                                        <details className="mx-2 text-gray-500 w-52 bg-gray-100 p2 rounded-md font-base">
                                            <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">Informacion del padre</summary>
                                            <div className="px-3 p-2 ">
                                                <p className="font-semibold pb-1">{data.datosFamiliares.padre.nombre}</p>
                                                <p>{data.datosFamiliares.padre.ocupacion}</p>
                                                <p>{data.datosFamiliares.padre.telefono}</p>  
                                            </div>                                      
                                        </details>
                                    </div>
                                    <div>
                                        {data.datosFamiliares.conyuge.nombre !== "" ? (
                                        <>
                                        <details className="mx-2 text-gray-500 w-52 bg-gray-100 p2 rounded-md font-base">
                                            <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">Conyugue</summary>
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
                                            <summary className="bg-gray-200 text-gray-500 font-semibold p-2 w-52 rounded-md cursor-pointer">Contacto emergencia</summary>
                                            <div className="px-3 p-2 ">
                                                <p className="font-semibold pb-1">{data.datosFamiliares.emergencia.nombre}</p>
                                                <p>{data.datosFamiliares.emergencia.parentezco}</p>
                                                <p>{data.datosFamiliares.emergencia.telefono}</p>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div>

                </div>
            </div>
        </div>
    //   <div className="md:flex my-4">
    //     {/* paner izquierdo */}
    //     <div className="md:w-full lg:max-w-[250px] bg-white border border-gray-200 rounded-lg mr-2 p-4">
    //       <img
    //         className="mb-3 img-main rounded-full shadow-lg object-cover m-auto"
    //         src={data.foto}
    //       />
    //       <>
    //         <p className="text-lg text-center">{data.nombreCompleto}</p>
    //         <p className="text-sm text-slate-500 text-center">
    //           {data.matricula}
    //         </p>
    //       </>
    //     </div>
    //     {/* paner derecho */}
    //     <div className="w-full bg-white shadow-lg rounded-lg ml-2 p-4">
    //       {/* Datos personales */}
    //       <details className="bg-gray-100 open:bg-gray-300 duration-300 rounded-tr-lg rounded-tl-lg">
    //         <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
    //           Datos personales
    //         </summary>
    //         <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
    //           <p></p>
    //           <p></p>
    //           <p></p>
    //           <p></p>
    //           <p>
    //             
    //           </p>
    //           <p>
    //             
    //           </p>
    //         </div>
    //       </details>
    //       {/* Datos escolares */}
    //       <details className="bg-gray-100 open:bg-gray-300 duration-300">
    //         <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
    //           Datos escolares
    //         </summary>
    //         <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
    //           <p>{data.datosEscolares.nombreBachillerato}</p>
    //           <p>{data.datosEscolares.entidadFederativa.descripcion}</p>
    //           <p>{data.datosEscolares.tipoBachillerato.descripcion}</p>
    //         </div>
    //       </details>
    //       {/* Datos laborales */}
    //       <deta
    //         className="bg-gray-100 open:bg-gray-300 duration-300"
    //         style={
    //           data.datosLaborales.trabaja
    //             ? { display: "block" }
    //             : { display: "none" }
    //         }
    //       >
    //         <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
    //           Datos laborales
    //         </summary>
    //         <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
    //           <p>{data.datosLaborales.estaRelacionadoEstudios ? "Si" : "No"}</p>
    //           <p>{data.datosLaborales.empresa.nombre}</p>
    //           <p>{data.datosLaborales.empresa.departamento}</p>
    //           <p>{data.datosLaborales.empresa.puesto}</p>
    //           <p>{data.datosLaborales.empresa.domicilio}</p>
    //           <p>{data.datosLaborales.empresa.telefono}</p>
    //         </div>
    //       </deta
    //     
    //       {/* Promedios */}
    //       <details className="bg-gray-100 open:bg-gray-300 duration-300 rounded-br-lg rounded-bl-lg">
    //         <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer">
    //           Promedios
    //         </summary>
    //         <div className="bg-white px-5 py-3 border border-gray-100 text-sm font-light">
    //           
    //           {/* grafica Tsu */}
    //           <Chart
    //             dataX={data.promedios.tsu.porCuatrimestre}
    //             dataY={cuatrimestresTsu}
    //             border="#631433"
    //             bg="#6314334a"
    //           />
    //           <h1>Ingenieria</h1>
    //           <p>
    //             <strong>Promedio: </strong>
    //             {data.promedios.ingenieria.promedio}
    //           </p>
    //           {/* grafica Ingenieria */}
    //           <Chart
    //             dataX={data.promedios.ingenieria.porCuatrimestre}
    //             dataY={cuatrimestresIng}
    //           />
    //         </div>
    //       </details>
    //     </div>
    //   </div>
    );
  }
};

export default AlumnoInfo;
