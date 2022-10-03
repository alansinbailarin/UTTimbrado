import React, { useEffect, useState } from 'react'

const SearchBar = () => {

  const [ value, setValue ] = useState(''); // State for the search
  const [ alumnos, setAlumnos] = useState([]); // State for the
  const onChange = (event) => { 
    setValue(event.target.value); 
  }  // Function to update the state
  
  const onSearch = async (searchTerm) => {
    fetch("http://proyectoalumno.somee.com/Alumn/GetAlumnList") 
    .then(response => response.json())
    .then((data) => console.log(data));    
    console.log("searching: ", searchTerm);
  }


  return (
    <div className="grid grid-cols-3">
        <input className="col-span-2 search-input w-full" id="search-alumn" type="search" placeholder="Escribe un nombre..." value={value} onChange={onChange}/>
        <button onClick={()=>onSearch(value)} className="ml-2 px-6 py-2 bg-blue-500 rounded-md  text-white font-semibold">Buscar</button>
        <div className="dropdown">
          {alumnos.filter((alumno) => {
            const searchTerm = value.toLowerCase();
            const matricula = alumno.matricula();

            return (
              searchTerm && matricula.startsWith(searchTerm) && matricula !== searchTerm
            );
          })
          .slice(0, 10)
          .map((alumno) => (
            <div onClick={() => onSearch(alumno.matricula)} className="dropdown-row" key={alumno.matricula}>
              {alumno.matricula}
            </div>
          ))}
        </div>
    </div>
  )
}

export default SearchBar