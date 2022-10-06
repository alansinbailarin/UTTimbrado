import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlumn, fetchCatalogo } from "../resources/fetch";
import { useParams } from "react-router-dom";

import Select from "react-select";

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

const EditAlumno = (props) => {
  let { matricula } = useParams();
  const dispatch = useDispatch();
  let alumno = useSelector((state) => state.alumno.alumn);
  let { catalogo } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAlumn(matricula));
    dispatch(fetchCatalogo());
  }, []);

  let data = alumno !== undefined ? alumno.alumno[0] : "";

  if (data.length !== 0 && catalogo.alumn !== undefined) {
    console.group(data);
    return (
      <div className="mx-auto my-4 mx-4">
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
              <input
                type="text"
                className="outline-0 text-gray-500 font-light text-sm w-full"
                defaultValue={
                  data.datosPersonales.contacto.correoElectronico.personal
                }
              />
              <input
                type="text"
                name="inst"
                className="outline-0 text-gray-500 font-light text-sm w-full"
                defaultValue={
                  data.datosPersonales.contacto.correoElectronico.institucional
                }
              />
              <div className="mt-2">
                <p className="font-bold text-gray-500 text-sm">Movil:</p>{" "}
                <input
                  type="text"
                  name="inst"
                  className="outline-0 text-gray-500 font-light text-sm w-full"
                  defaultValue={data.datosPersonales.contacto.telefono.movil}
                />
                <p className="font-bold text-gray-500 text-sm">Casa:</p>{" "}
                <input
                  type="text"
                  name="inst"
                  className="outline-0 text-gray-500 font-light text-sm w-full"
                  defaultValue={data.datosPersonales.contacto.telefono.casa}
                />
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
                  <input
                    type="date"
                    id="dob"
                    className="outline-0 text-gray-500 font-light text-sm ml-auto bg-transparent"
                    defaultValue={data.datosPersonales.fechaDeNacimiento}
                  ></input>
                </li>
                <li className="flex items-center py-3 text-sm">
                  <span>Edad</span>
                  <span className="ml-auto">
                    {data.datosPersonales.edad} años
                  </span>
                </li>
                <li className="flex items-center py-3 text-sm">
                  <span>Genero</span>
                  <Select
                    options={catalogo.alumn.genero.map((opt) => ({
                      label: opt.descripcion,
                      value: opt.id,
                    }))}
                    defaultValue={{
                      label: data.datosPersonales.genero.descripcion,
                      value: data.datosPersonales.genero.id,
                    }}
                    className="outline-0 text-gray-500 font-light text-sm ml-auto bg-transparent"
                  />
                </li>
                <li className="flex items-center py-3 text-sm">
                  <span>Estado civil</span>
                  <Select
                    options={catalogo.alumn.estadoCivil.map((opt) => ({
                      label: opt.descripcion,
                      value: opt.id,
                    }))}
                    defaultValue={{
                      label: data.datosPersonales.estadoCivil.descripcion,
                      value: data.datosPersonales.estadoCivil.id,
                    }}
                    className="outline-0 text-gray-500 font-light text-sm ml-auto bg-transparent"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-4 md:mt-0 md:-9/12  mx-0 md:mx-2 h-64">
            <div className="bg-white p-3 border border-gray-200 rounded-lg">
              <div className="flex flex-row-reverse ml-4">
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-1 border border-gray-400 rounded shadow">
                  Guardar
                </button>
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
                    <div className="px-4 pb-2">
                      <input
                        type="text"
                        className="outline-0 text-gray-400 font-light text-sm w-full"
                        defaultValue={
                          data.datosPersonales.lugarDeNacimiento.ciudad +
                          " " +
                          data.datosPersonales.lugarDeNacimiento
                            .entidadFederativa.descripcion
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <div className="px-4 font-bold text-base">Vivienda</div>
                    <div className="text-gray-400 px-4 pb-2">
                      <input
                        type="text"
                        className="outline-0 text-gray-400 font-light text-sm w-full"
                        defaultValue={
                          data.datosPersonales.domicilio.calle +
                          " " +
                          data.datosPersonales.domicilio.numero +
                          " " +
                          data.datosPersonales.domicilio.colonia +
                          " " +
                          data.datosPersonales.domicilio.municipio.descripcion
                        }
                      />
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
                        <Select
                          options={catalogo.alumn.apoyoEconomico.map((opt) => ({
                            label: opt.descripcion,
                            value: opt.id,
                          }))}
                          defaultValue={{
                            label:
                              data.datosEconomicos.apoyoEconomico.descripcion,
                            value: data.datosEconomicos.apoyoEconomico.id,
                          }}
                          className="outline-0 w-1/4 text-gray-500 font-light text-sm bg-transparent"
                        />
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Ingresos familiares:{" "}
                        </span>
                        <Select
                          options={catalogo.alumn.ingresosFamiliares.map(
                            (opt) => ({
                              label: opt.descripcion,
                              value: opt.id,
                            })
                          )}
                          defaultValue={{
                            label:
                              data.datosEconomicos.ingresosFamiliares
                                .descripcion,
                            value: data.datosEconomicos.ingresosFamiliares.id,
                          }}
                          className="outline-0 w-1/4 text-gray-500 font-light text-sm bg-transparent"
                        />
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Transporte:{" "}
                        </span>
                        <Select
                          options={catalogo.alumn.transporte.map((opt) => ({
                            label: opt.descripcion,
                            value: opt.id,
                          }))}
                          defaultValue={{
                            label: data.datosEconomicos.transporte.descripcion,
                            value: data.datosEconomicos.transporte.id,
                          }}
                          className="outline-0 w-1/4 text-gray-500 font-light text-sm bg-transparent"
                        />
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Vive con:{" "}
                        </span>
                        <Select
                          options={catalogo.alumn.viveCon.map((opt) => ({
                            label: opt.descripcion,
                            value: opt.id,
                          }))}
                          defaultValue={{
                            label: data.datosEconomicos.viveCon.descripcion,
                            value: data.datosEconomicos.viveCon.id,
                          }}
                          className="outline-0 w-1/4 text-gray-500 font-light text-sm bg-transparent"
                        />
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Vivienda:{" "}
                        </span>
                        <Select
                          options={catalogo.alumn.vivienda.map((opt) => ({
                            label: opt.descripcion,
                            value: opt.id,
                          }))}
                          defaultValue={{
                            label: data.datosEconomicos.vivienda.descripcion,
                            value: data.datosEconomicos.vivienda.id,
                          }}
                          className="outline-0 w-1/4 text-gray-500 font-light text-sm bg-transparent"
                        />
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="px-4 font-bold text-base">
                      Datos escolares
                    </div>
                    <div className="text-gray-400 px-4 pb-2">
                      <p className="flex">
                        <span className="text-gray-500 font-semibold">
                          Bachillerato:
                        </span>
                        <input
                          type="text"
                          className="outline-0 text-gray-400 font-light text-sm w-full ml-1"
                          defaultValue={data.promedios.tsu.bachillerato}
                        />
                      </p>
                      <p>
                        <span className="text-gray-500 font-semibold">
                          Puntos de examen de ingreso:{" "}
                        </span>
                        {data.promedios.tsu.puntosExamenIngreso}
                      </p>
                      <p className="flex">
                        <span className="text-gray-500 font-semibold">
                          nivel de ingles:{" "}
                        </span>
                        <input
                          type="text"
                          className="outline-0 text-gray-400 font-light text-sm  ml-1"
                          defaultValue={data.promedios.tsu.nivelIngles}
                        />
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
                        <input
                          type="text"
                          className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                          defaultValue={data.datosFamiliares.madre.ocupacion}
                        />
                        <input
                          type="text"
                          className="outline-0 text-gray-400 font-light text-sm w-full bg-transparent"
                          defaultValue={data.datosFamiliares.madre.telefono}
                        />
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
                        <input
                          type="text"
                          className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                          defaultValue={data.datosFamiliares.padre.ocupacion}
                        />
                        <input
                          type="text"
                          className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                          defaultValue={data.datosFamiliares.padre.telefono}
                        />
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
                            <p>{data.datosFamiliares.conyuge.nombreCompleto}</p>
                            ç
                            <input
                              type="text"
                              className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                              defaultValue={
                                data.datosFamiliares.conyuge.ocupacion
                              }
                            />
                            <input
                              type="text"
                              className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                              defaultValue={
                                data.datosFamiliares.conyuge.telefono
                              }
                            />
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
                        <input
                          type="text"
                          className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                          defaultValue={
                            data.datosFamiliares.emergencia.parentezco
                          }
                        />
                        <input
                          type="text"
                          className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                          defaultValue={
                            data.datosFamiliares.emergencia.telefono
                          }
                        />
                      </div>
                    </details>
                  </div>
                  <div className="px-3 mt-4">
                    <span className="font-bold text-base">
                      Datos del bachillerato
                    </span>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-blue-500 font-bold text-md">
                          <input
                            type="text"
                            className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                            defaultValue={
                              data.datosEscolares.nombreBachillerato
                            }
                          />
                        </div>
                        <div className="text-gray-500 text-md font-semibold">
                          <input
                            type="text"
                            className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                            defaultValue={
                              data.datosEscolares.entidadFederativa.descripcion
                            }
                          />
                        </div>
                        <div className="text-gray-500 text-md font-light">
                          <Select
                            options={catalogo.alumn.tipoBachillerato.map(
                              (opt) => ({
                                label: opt.descripcion,
                                value: opt.id,
                              })
                            )}
                            defaultValue={{
                              label:
                                data.datosEscolares.tipoBachillerato
                                  .descripcion,
                              value: data.datosEscolares.tipoBachillerato.id,
                            }}
                            className="outline-0 w-1/4 text-gray-500 font-light text-sm bg-transparent"
                          />
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
                          <div className="flex">
                            <div class="flex  ml-4">
                              <input
                                id="default-radio-1"
                                type="radio"
                                value="true"
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="default-radio-1"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Si
                              </label>
                            </div>
                            <div class="flex  ml-4">
                              <input
                                id="default-radio-1"
                                type="radio"
                                value="true"
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label
                                for="default-radio-1"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                no
                              </label>
                            </div>
                          </div>
                        </p>
                        <p>
                          Nombre de la empresa:{" "}
                          <input
                            type="text"
                            className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                            defaultValue={data.datosLaborales.empresa.nombre}
                          />
                        </p>
                        <p>
                          Departamento:{" "}
                          <input
                            type="text"
                            className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                            defaultValue={
                              data.datosLaborales.empresa.departamento
                            }
                          />
                        </p>
                        <p>
                          Puesto:
                          <input
                            type="text"
                            className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                            defaultValue={data.datosLaborales.empresa.puesto}
                          />
                        </p>
                        <p>
                          Ubicación:
                          <input
                            type="text"
                            className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                            defaultValue={data.datosLaborales.empresa.domicilio}
                          />
                        </p>
                        <p>
                          Telefono:
                          <input
                            type="text"
                            className="outline-0 text-gray-500 font-light text-sm w-full bg-transparent"
                            defaultValue={data.datosLaborales.empresa.telefono}
                          />
                        </p>
                      </li>
                    </ul>
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

export default EditAlumno;
