import React, { useEffect, useState } from "react";
import AlumnoCard from './alumnoCard';
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchAlumn } from "../resources/fetch";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const AlumnoList = props => {
    // const  {alumnos } = useSelector(state => state.group.init);
    // const [matricula, setMatricula  ] = useState(0);
    // const [current, setCurrent] = useState(0);
    // const dispatch = useDispatch(); 
    // const wrapperTransform = {
    //   'transform': `translateX(-${current * (100 / alumnos.length)}%)`,
    // }
    
    // const handlePreviousClick = () => {
    //   const previous = current - 1
    //   setCurrent((previous < 0) 
    //       ? alumnos.length - 1
    //       : previous
    //   )
    // }
    
    // const handleNextClick = () =>  {
    //   const next = current + 1;
    //   setCurrent((next === alumnos.length) 
    //       ? 0
    //       : next
    //   )
    // }
    
    // const handleSlideClick = (index, matricula) =>  {
    //   if (current !== index) {
    //     setCurrent(index)
    //   }
    // }  

    // const getMatricula = () =>{
    //   if(  alumnos[current] !== undefined ){
    //     console.log(alumnos[current])
    //     dispatch(fetchAlumn(alumnos[current].matricula));
    //   }    
    // }


    
    // useEffect(() => {
    //   dispatch(fetchData());
    // },[]);   
      return (
        <div className="flex items-center">
          {/* <MdChevronLeft onClick={handlePreviousClick} size={40}/> */}
          <div className="bg-gray-200 relative w-full flex items-center justify-center overflow-hidden">
              <div className="relative items-center w-[16rem] h-[13.5rem]">
                  <ul className="transition-transform	duration-[600ms] flex absolute">
                      {/* {alumnos.map((alumno, i) => {
                          return (
                              <AlumnoCard
                              key={i}
                              alumno={alumno}
                              index={i}
                              current={current}
                              // handleSlideClick={handleSlideClick}
                              />
                          )
                      })} */}
                  </ul>
              </div>
          </div>
          {/* <MdChevronRight onClick={handleNextClick} size={40}/> */}
        </div>
      )     
    }
  

  export default AlumnoList;