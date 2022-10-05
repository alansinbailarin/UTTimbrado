import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [value, setValue] = useState(""); // State for the search
  const { alumnos } = useSelector((state) => state.group.init);

  const onChange = (event) => {
    setValue(event.target.value);
  }; // Function to update the state

  const onSearch = (searchTerm) => {
    console.log(searchTerm);
  };

  return (
    <div className="grid grid-cols-3">
      <input
        className="col-span-2 search-input w-full"
        id="search-alumn"
        type="search"
        placeholder="Escribe un nombre..."
        value={value}
        autoComplete="off"
        onChange={onChange}
      />
      <button
        onClick={() => onSearch(value)}
        className="ml-2 px-6 py-2 bg-blue-500 rounded-md  text-white font-semibold"
      >
        Buscar
      </button>
      {value === "" ? (
        false
      ) : (
        
        <div className="dropdown w-60 shadow-md bg-white absolute mt-10 text-sm text-gray-500">
        {alumnos
          .filter((alumno) => {
            const searchTerm = value.toLowerCase();
            const matricula = alumno.matricula;
            const nombre = alumno.nombreCompleto;

              return (
                nombre.toLowerCase().search(searchTerm) != -1 ||
                matricula.toLowerCase().search(searchTerm) != -1
              );
            })
            .slice(0, 3)
            .map((alumno) => (
              <a href={"alumnoSearch/" + alumno.matricula}>
                <div
                  onClick={() => onSearch(alumno.matricula)}
                  className="border py-2 px-4 border-gray-50 cursor-pointer hover:bg-gray-50"
                  key={alumno.matricula}
                >
                  {alumno.nombreCompleto}
                  <p className="text-gray-300">{alumno.matricula}</p>
                </div>
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
