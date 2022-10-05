import React, { createRef } from "react";

const AlumnoCard = (props) => {
  const slide = createRef();
  const { matricula, nombreCompleto, foto } = props.alumno;
  const { index, current } = props;
  let classNames =
    "slide w-[185px] rounded-lg border border-gray-200 bg-white inline-block m-4 cursor-pointer";

  if (current === index) classNames += " slide--current scale-110";
  else if (current - 1 === index) classNames += " slide--previous";
  else if (current + 1 === index) classNames += " slide--next";

  const handleSlideClick = () => {
    props.handleSlideClick(index);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  return (
    <li ref={slide} className={classNames} onClick={handleSlideClick}>
      <div className="flex flex-col items-center p-4">
        <img
          className="mb-3 h-16 w-16 rounded-full shadow-lg object-cover"
          src={foto}
          onLoad={imageLoaded}
        />
        <h5 className="text-md mb-1 font-medium text-center text-gray-600 dark:text-white">
          {nombreCompleto}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {matricula}
        </span>
      </div>
    </li>
  );
};

export default AlumnoCard;
