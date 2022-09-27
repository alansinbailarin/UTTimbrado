import React, { Component } from "react";

class AlumnoCard extends React.Component {
    constructor(props) {
      super(props)
  
      this.handleSlideClick = this.handleSlideClick.bind(this)
      this.imageLoaded = this.imageLoaded.bind(this)
      this.slide = React.createRef()
    }
    
  
    
    handleSlideClick(event) {
      this.props.handleSlideClick(this.props.index,this.props.alumno.matricula)
    }
    
    imageLoaded(event) {
      event.target.style.opacity = 1
    }
    
    render() {
      const { matricula, nombreCompleto, foto } = this.props.alumno
      const {index} =this.props; 
      const current = this.props.current
      let classNames = 'slide w-56 rounded-lg border border-gray-200 bg-white inline-block m-4 cursor-pointer'
      
      if (current === index) classNames += ' slide--current scale-110'
      else if (current - 1 === index) classNames += ' slide--previous'
      else if (current + 1 === index) classNames += ' slide--next'
          
      return (
        <li 
          ref={this.slide}
          className={classNames} 
          onClick={this.handleSlideClick}
        >           
            <div className="flex flex-col items-center p-4">
                <img className="mb-3 h-16 w-16 rounded-full shadow-lg" src={foto} onLoad={this.imageLoaded}/>
                <h5 className="text-md mb-1 font-medium text-center text-gray-900 dark:text-white">{nombreCompleto}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{matricula}</span>
            </div>
       
          
        </li>
      )
    }
  }

  export default AlumnoCard;