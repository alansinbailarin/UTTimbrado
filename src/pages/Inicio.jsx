import { IoIosMan, IoIosWoman } from "react-icons/io";
import { FaTransgender } from "react-icons/fa";
import Chart from "../components/chart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../resources/fetch";
import { cuatrimestresTsu, cuatrimestresIng } from "../components/AlumnoInfo";
import { BiInfoCircle } from "react-icons/bi";

const Inicio = () => {
  const { estadisticas } = useSelector((state) => state.group.init);
  var color;
  var dataX = [],
    dataY = [],
    dataXBachi = [],
    dataYBachi = [],
    dataXTBachi = [],
    dataYTBachi = [];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (estadisticas.length === 0) {
    console.log("vacio");
  } else {
    console.log(estadisticas);
    return (
      <div className="px-6 md:px-10 mx-auto">
        <h1 className="text-blue-500 font-bold">Dashboard</h1>
        {/* genero ok */}
        <div className="flex flex-col">
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {estadisticas.datosPersonales.genero.map((gender, index) => {
              // eslint-disable-next-line no-lone-blocks
              {
                if (gender.descripcionGenero == "Masculino") {
                  color = "#00A7EE";
                  return (
                    <div
                      key={index}
                      className="p-5 rounded-xl w-full views flex"
                      style={{ background: color }}
                    >
                      <IoIosMan
                        className="text-base font-bold text-white opacity-30"
                        size={40}
                      />
                      <div>
                        <p className="text-base font-bold text-white opacity-30">
                          {gender.descripcionGenero}
                        </p>
                        <p className="text-base font-semibold text-white">
                          {gender.cantidadGeneros}
                        </p>
                      </div>
                    </div>
                  );
                } else if (gender.descripcionGenero == "Femenino") {
                  color = "#FE8BA2";
                  return (
                    <div
                      key={index}
                      className="p-5 rounded-xl w-full views flex"
                      style={{ background: color }}
                    >
                      <IoIosWoman
                        className="text-base font-bold text-white opacity-30"
                        size={40}
                      />
                      <div>
                        <p className="text-base font-bold text-white opacity-30">
                          {gender.descripcionGenero}
                        </p>
                        <p className="text-base font-semibold text-white">
                          {gender.cantidadGeneros}
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  color = "#c95ffa";
                  return (
                    <div
                      key={index}
                      className="p-5 rounded-xl w-full views flex"
                      style={{ background: color }}
                    >
                      <FaTransgender
                        className="text-base font-bold opacity-30"
                        size={40}
                      />
                      <div>
                        <p className="text-base font-bold text-white opacity-30">
                          {gender.descripcionGenero}
                        </p>
                        <p className="text-base font-semibold text-white">
                          {gender.cantidadGeneros}
                        </p>
                      </div>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>

        {/* estado civil e ingresos*/}
        <div className="md:grid md:grid-cols-2 my-4 gap-3 mx-auto">
          <div className="grid md:grid-cols-2 gap-3">
            <div className="grid grid-cols-2">
              <div className="bg-white p-4 border border-gray-200 rounded-lg col-span-2">
                <div className="flex">
                  <h1 className="text-gray-700 font-medium text-base">
                    Estado civil
                  </h1>
                  <div>
                    <BiInfoCircle className="text-gray-500 ml-2 icon-info text-center" />
                  </div>
                  <p className="bg-gray-300 py-1 px-2 rounded-md ml-12 cursor-pointer text-gray-600 font-bold text-xs">
                    Ver reporte
                  </p>
                </div>
                {estadisticas.datosPersonales.estado.map((ec) => {
                  return (
                    <div className="flex gap-1 mt-3">
                      <h1 className="text-gray-500 font-bold text-xs">
                        {ec.descripcionEC}:
                      </h1>
                      <p className="text-blue-500 font-medium text-xs">
                        {ec.cantidadEC} estudiante{"(s)"}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="bg-white p-3 mt-3 border border-gray-200 rounded-lg col-span-2">
                <div className="flex">
                  <h1 className="text-gray-700 font-medium text-base">
                    Viven con
                  </h1>
                  <div>
                    <BiInfoCircle className="text-gray-500 ml-2 icon-info text-center" />
                  </div>
                  <p className="bg-gray-300 py-1 px-2 rounded-md ml-16 cursor-pointer text-gray-600 font-bold text-xs">
                    Ver reporte
                  </p>
                </div>
                {estadisticas.datosPersonales.viveCon.map((vc, i) => {
                  return (
                    <div key={i} className="flex gap-1 mt-3">
                      <h1 className="text-gray-500 font-bold text-xs">
                        {vc.descripcionVC}:
                      </h1>
                      <p className="text-blue-500 font-medium text-xs">
                        {vc.cantidadVC} estudiante{"(s)"}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="bg-white p-3 border border-gray-200 rounded-lg col-span-2">
                <div className="flex">
                  <h1 className="text-gray-700 font-medium text-base">
                    Trabajo
                  </h1>
                  <div>
                    <BiInfoCircle className="text-gray-500 ml-2 icon-info text-center" />
                  </div>
                  <p className="bg-gray-300 py-1 px-2 rounded-md ml-24 cursor-pointer text-gray-600 font-bold text-xs">
                    Ver reporte
                  </p>
                </div>
                <div className="flex gap-1 mt-3">
                  <h1 className="text-gray-500 font-bold text-xs">
                    {estadisticas.datosLaborales.trabajan.si} estudiante{"(s)"}
                  </h1>
                  <p className="text-blue-500 font-medium text-xs">
                    SI trabajan
                  </p>
                </div>
                <div className="flex gap-1 mt-3">
                  <h1 className="text-gray-500 font-bold text-xs">
                    {estadisticas.datosLaborales.trabajan.no} estudiante{"(s)"}
                  </h1>
                  <p className="text-blue-500 font-medium text-xs">
                    NO trabajan
                  </p>
                </div>
              </div>
              <div className="bg-white p-3 mt-3 border border-gray-200 rounded-lg col-span-full">
                <div className="flex">
                  <h1 className="text-gray-700 font-medium text-base">
                    Relacion trabajo/escuela
                  </h1>
                </div>
                <div className="">
                  <h1 className="text-gray-500 font-bold text-xs">
                    {estadisticas.datosLaborales.trabajoRelacionadoEstudios.si}{" "}
                    estudiante{"(s)"}
                  </h1>
                  <p className="text-blue-500 font-medium text-xs">
                    SI tienen un trabajo relacionado a su carrera.
                  </p>
                </div>
                <div className="">
                  <h1 className="text-gray-500 font-bold text-xs">
                    {estadisticas.datosLaborales.trabajoRelacionadoEstudios.no}{" "}
                    estudiante{"(s)"}
                  </h1>
                  <p className="text-blue-500 font-medium text-xs">
                    NO tienen un trabajo relacionado a su carrera.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 mt-4 md:mt-0 border text-gray-600 font-bol border-gray-200 rounded-lg">
            <h1 className="text-blue-500 font-semibold text-base ml-3 mb-4">
              Salario promedio de los estudiantes
            </h1>
            {estadisticas.datosPersonales.ingresosFamiliares.map((data) => {
              dataX.push(data.descripcionIF);
              dataY.push(data.cantidadIngresos);
            })}
            <Chart
              dataX={dataY}
              dataY={dataX}
              border="#631433"
              bg="#6314334a"
              type="bar"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 gap-3">
          <div className="bg-white p-3 mt-4 md:mt-0 border gap-3 text-gray-600 font-bol border-gray-200 rounded-lg">
            <h1 className="text-blue-500 font-semibold text-base ml-3 mb-4">
              Principales preparatorias de las que vienen
            </h1>
            {estadisticas.datosEscolares.bachilleratos.map((data) => {
              dataXBachi.push(data.nombre);
              dataYBachi.push(data.cantidad);
            })}
            <Chart
              dataX={dataYBachi}
              dataY={dataXBachi}
              border="#631433"
              bg="#6314334a"
              type="bar"
            />
          </div>
          <div className="bg-white p-3 mt-4 md:mt-0 border text-gray-600 font-bol border-gray-200 rounded-lg">
            <h1 className="text-blue-500 font-semibold text-base ml-3 mb-4">
              Tipo de bachilleratos
            </h1>
            {estadisticas.datosEscolares.tipoBachillerato.map((data) => {
              dataXTBachi.push(data.descripcion);
              dataYTBachi.push(data.cantidadTipoB);
            })}
            <Chart
              dataX={dataYTBachi}
              dataY={dataXTBachi}
              border="#FF5733"
              bg="#FF57334a"
              type="bar"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 gap-3 mt-4">
          <div className="bg-white p-3 mt-4 md:mt-0 border text-gray-600 font-bol border-gray-200 rounded-lg">
            <h1 className="text-blue-500 font-semibold text-base ml-3 mb-4">
              Promedio de estudiantes en TSU
            </h1>
            <Chart
              dataX={estadisticas.promedios.tsu.porCuatrimestre}
              dataY={cuatrimestresTsu}
              border="#631433"
              bg="#6314334a"
            />
          </div>
          <div className="bg-white p-3 mt-4 md:mt-0 border text-gray-600 font-bol border-gray-200 rounded-lg">
            <h1 className="text-blue-500 font-semibold text-base ml-3 mb-4">
              Promedio de estudiantes en INGENIERIA
            </h1>
            <Chart
              dataX={estadisticas.promedios.tsu.porCuatrimestre}
              dataY={cuatrimestresIng}
              border="#631433"
              bg="#6314334a"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Inicio;
