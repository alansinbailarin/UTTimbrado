import { configureStore } from '@reduxjs/toolkit'
import group from './slices/grupo';
import alumno from './slices/alumnos';

export default configureStore({ 
    reducer:{
        group,
        alumno
    }  
});