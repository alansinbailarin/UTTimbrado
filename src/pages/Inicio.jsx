import { IoIosMan,IoIosWoman } from "react-icons/io";
import { FaTransgender } from "react-icons/fa";
import Chart from "../components/chart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../resources/fetch";

const Inicio = () => {
    const  {estadisticas}  = useSelector(state => state.group.init);
    var color, icon;
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(fetchData());
    },[]);

    if(estadisticas.length === 0) { 
      console.log("vacio")
    }else{ 
      return (
      <div className="px-6 md:px-10">
        <h1 className="text-blue-500 font-bold ">Dashboard</h1>
        {/* genero ok */}
        <div className="flex justify-between mt-4 space-y-3 mb-8 flex-col md:flex-row md:space-x-4 md:space-y-0 md:mb-14">
        {estadisticas.datosPersonales.genero.map(gender => {
          {
            if(gender.descripcion == "Masculino"){
              color = '#00A7EE'
              return (
                <div className='p-5 rounded-xl w-full views flex' style={{background: color}}>
                  <IoIosMan className="text-base font-bold text-white opacity-30" size={40}/>
                  <div>
                      <p className="text-base font-bold text-white opacity-30">{gender.descripcion}</p>
                      <p className="text-base font-semibold text-white">{gender.cantidad}</p>            
                  </div>
                </div>
              )
            }else if(gender.descripcion == "Femenino"){
              color = '#FE8BA2'
              return (
                <div className='p-5 rounded-xl w-full views flex' style={{background: color}}>
                  <IoIosWoman className="text-base font-bold text-white opacity-30" size={40}/>
                  <div>
                      <p className="text-base font-bold text-white opacity-30">{gender.descripcion}</p>
                      <p className="text-base font-semibold text-white">{gender.cantidad}</p>            
                  </div>
                </div>
              )
            }else{
              color = '#c95ffa'
              return (
                <div className='p-5 rounded-xl w-full views flex' style={{background: color}}>
                  <FaTransgender className="text-base font-bold opacity-30" size={40}/>
                  <div>
                      <p className="text-base font-bold text-white opacity-30">{gender.descripcion}</p>
                      <p className="text-base font-semibold text-white">{gender.cantidad}</p>            
                  </div>
                </div>
              )
            }
          }
        })}
        </div>
         {/* vive con ok*/}
        <div className="md:flex md:justify-between bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4">
          {estadisticas.datosPersonales.viveCon.map((vc,i) => {
            return(
              <div key={i}>
                <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">{vc.descripcion}</h1>
                <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">{vc.cantidad}</p>
              </div>
            )
          })}          
        </div>
        {/* estado civil e ingresos*/}
        <div className="flex">
          {/* estado civil ok*/}
          <div className="md:flex md:justify-between bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4 w-1/2">
            {estadisticas.datosPersonales.estadoCivil.map(ec => {
              return(
                <div>
                  <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">{ec.descripcion}</h1>
                  <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">{ec.cantidad}</p>
                </div>
              )
            })}          
          </div>
          {/* Ingresos*/}
          <div className="bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4 w-1/2">
            <h1>Ingresos</h1>
            <Chart data={estadisticas.datosPersonales.ingresosFamiliares}/>
          </div>
        </div>





        {/* grafica de promedios revisar */}
{/*       
        <div className="flex">
          <div className="w-1/2">
            <h1>Tsu</h1>
            <Chart index={index} data={data}/>
          </div>
          <div className="w-1/2 mx-2.5">
            <h1>Ingenieria</h1>
            <Chart index={index} data={data}/>
          </div>
        </div> */}
      </div>
    )
    }
    
}

export default Inicio;