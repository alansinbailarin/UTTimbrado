import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import AlumnoCard from './alumnoCard';

import { useDispatch, useSelector } from "react-redux";
import { fetchAlumn } from "../resources/fetch";

const AlumnoList = props => {
  const  { alumnos } = props;
  const [current, setCurrent] = useState(0);
  const dispatch = useDispatch();
  const wrapperTransform = {
    'transform': `translateX(-${current * (50 / alumnos.length)}%)`,
  }
  
  const getMatricula = x =>{
    console.log(x)
    dispatch(fetchAlumn(alumnos[x].matricula));
  }
    
  const handlePreviousClick = () => {
    let previous = current - 1
    previous = (previous < 0)?alumnos.length - 1:previous
    setCurrent( previous)
    getMatricula(previous)
  }
  
  const handleNextClick = () =>  {
    let next = current + 1;
    next = (next === alumnos.length) ? 0 : next
    setCurrent(next)
    getMatricula(next)
  }
  
  const handleSlideClick = (index) =>  {
    if (current !== index) {
      setCurrent(index)
      getMatricula(index)
    }
  }  

  return (
    <div className="flex items-center bg-white border border-gray-150 rounded-xl">
      <MdChevronLeft className="cursor-pointer text-gray-300 hover:bg-gray-100 rounded-full ease-out duration-300" onClick={handlePreviousClick} size={40}/>
      <div className=" relative w-full flex items-center justify-center overflow-hidden">
      
        <div className="relative items-center w-[16rem] h-[13.5rem]">
          <ul className="transition-transform	duration-[600ms] flex absolute" style={wrapperTransform}>
            {alumnos.map((alumno, i) => {
              return (
                <AlumnoCard
                key={i}
                alumno={alumno}
                index={i}
                current={current}
                handleSlideClick={handleSlideClick}
                />
              )
            })}
          </ul>
        </div>
        
      </div>
      <MdChevronRight className="cursor-pointer text-gray-300 hover:bg-gray-100 rounded-full ease-out duration-300" onClick={handleNextClick} size={40}/>
    </div>
  )     
}
  
export default AlumnoList;