import { IoIosMan, IoIosWoman } from "react-icons/io";
import { FaTransgender } from "react-icons/fa";
import Chart from "../components/chart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../resources/fetch";
import { cuatrimestresTsu, cuatrimestresIng } from "../components/AlumnoInfo";

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
      <div className="px-6 md:px-10">
        <h1 className="text-blue-500 font-bold ">Dashboard</h1>
        {/* genero ok */}
        <div className="flex flex-col">
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {estadisticas.datosPersonales.genero.map((gender, index) => {
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
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {/* estado civil ok*/}
          <div className="md:flex flex-col bg-white rounded-xl border border-gray-200 py-6 md:p-6 md:text-left mb-4">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10">
              Estado civil
            </h1>
            <div className="">
              {estadisticas.datosPersonales.estado.map((ec) => {
                return (
                  <div className="flex py-4">
                    <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">
                      {ec.descripcionEC}
                    </h1>
                    <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">
                      {ec.cantidadEC}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Ingresos*/}
          <div className="bg-white rounded-xl border border-gray-200 py-6 md:p-6 md:text-left mb-4">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10">
              Ingresos
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
        {/* vive con ok*/}
        <div className="md:flex flex-col md:justify-between bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4">
          <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10">
            Vive con
          </h1>
          <div className="flex md:justify-between">
            {estadisticas.datosPersonales.viveCon.map((vc, i) => {
              return (
                <div key={i}>
                  <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">
                    {vc.descripcionVC}
                  </h1>
                  <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">
                    {vc.cantidadVC}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Datos laborales*/}
        <div className="flex">
          {/* Trabajan?*/}
          <div className="md:flex flex-col md:justify-between bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4 w-1/2">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10 pb-4">
              Trabajan?
            </h1>
            <div className="flex md:justify-between">
              <div>
                <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">
                  Si
                </h1>
                <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">
                  {estadisticas.datosLaborales.trabajan.si}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">
                  No
                </h1>
                <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">
                  {estadisticas.datosLaborales.trabajan.no}
                </p>
              </div>
            </div>
          </div>
          {/*Trabajo relacionado?*/}
          <div className="md:flex flex-col md:justify-between bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4 w-1/2">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10 pb-4">
              Trabajo relacionado a la carrera?
            </h1>
            <div className="flex md:justify-between">
              <div>
                <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">
                  Si
                </h1>
                <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">
                  {estadisticas.datosLaborales.trabajoRelacionadoEstudios.si}
                </p>
              </div>
              <div>
                <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">
                  No
                </h1>
                <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">
                  {estadisticas.datosLaborales.trabajoRelacionadoEstudios.no}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10">
              Bachilleratos
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
          <div className="w-1/2 ml-4">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10">
              Tipo de bachilleratos
            </h1>
            {estadisticas.datosEscolares.tipoBachillerato.map((data) => {
              dataXTBachi.push(data.descripcion);
              dataYTBachi.push(data.cantidadTipoB);
            })}
            <Chart
              dataX={dataYTBachi}
              dataY={dataXTBachi}
              border="#631433"
              bg="#6314334a"
              type="bar"
            />
          </div>
        </div>

        <div className="flex mt-4 ">
          <div className="w-1/2">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10">
              Tsu
            </h1>
            <Chart
              dataX={estadisticas.promedios.tsu.porCuatrimestre}
              dataY={cuatrimestresTsu}
              border="#631433"
              bg="#6314334a"
            />
          </div>
          <div className="w-1/2 ml-4">
            <h1 className="font-bold text-base text-gray-400 pl-4 md:pl-10">
              Ingenieria
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
