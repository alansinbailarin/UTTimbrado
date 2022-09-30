import {
    IoIosMan,
    IoIosWoman
} from "react-icons/io";
import {
    FaTransgender
} from "react-icons/fa";

import Chart from "../components/chart";

const Inicio = () => {
    const index = [1,2,3,4]
    const data = [6.7,8.2,5.5,7.4]
    return (
      <div className="px-6 md:px-10">
        <h1 className="text-blue-500 font-bold ">Dashboard</h1>
        <div className="flex justify-between mt-4 space-y-3 mb-8 flex-col md:flex-row md:space-x-4 md:space-y-0 md:mb-14">
          <div className="p-5 bg-[#FE8BA2] rounded-xl w-full views flex">
              <IoIosWoman className="text-base font-bold text-white opacity-30" size={40}/>
              <div>
                  <p className="text-base font-bold text-white opacity-30">Mujeres</p>
                  <p className="text-base font-semibold text-white">20</p>            
              </div>
          </div>
          <div className="p-5 bg-[#00A7EE] rounded-xl w-full follows flex">
          <IoIosMan className="text-base font-bold text-white opacity-30" size={40}/>
          <div>
              <p className="text-base font-bold text-white opacity-30">Hombres</p>
              <p className="text-base font-semibold text-white">7</p>
          </div>
          
          </div>
          <div className="p-5 bg-[#c95ffa] rounded-xl w-full like  flex">
              <FaTransgender className="text-base font-bold opacity-30" size={40}/>
              <div>
                  <p className="text-base font-bold opacity-30">Otros</p>
                  <p className="text-base font-semibold text-white ">2</p>
              </div> 
          </div>
        </div>
        <div className="flex">
          <div className="w-1/2">
            <h1>Tsu</h1>
            <Chart index={index} data={data}/>
          </div>
          <div className="w-1/2 mx-2.5">
            <h1>Ingenieria</h1>
            <Chart index={index} data={data}/>
          </div>
        </div>
        <div className="md:flex md:justify-between bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4">
          <div>
              <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-10">Estado civil</h1>
              <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">10</p>
          </div>
          <div>
              <h1 className="font-bold text-base text-gray-600 pl-4 md:pl-0">Vive con</h1>
              <p className="text-md text-gray-400 pl-4 md:pl-10 md:text-center">10</p>
          </div>
          <div>
              <h1 className="font-bold text-base text-gray-600 pr-4 md:pr-10 pl-4 md:pl-0">Mujeres</h1>
              <p className="text-md text-gray-400 pl-4 md:pl-10 pr-4 md:pr-10 md:text-center">10</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl border border-gray-50 py-6 md:p-6 md:text-left mb-4">
          <h1>Ingresos</h1>
          <Chart index={index} data={data}/>
        </div>
      </div>
    )
}

export default Inicio;