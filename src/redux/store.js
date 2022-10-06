import { configureStore } from "@reduxjs/toolkit";
import group from "./slices/grupo";
import alumno from "./slices/alumnos";
import catalogo from "./slices/catalogo";

export default configureStore({
  reducer: {
    group,
    alumno,
    catalogo,
  },
});
