import { createSlice } from '@reduxjs/toolkit'

export const alumnoSlice =  createSlice({
    name: 'alumnos',
    initialState:{},
    reducers: {
        setAlumno: (state, action) =>{
            state.alumn = action.payload;
        }
    }
});

export const { setAlumno} = alumnoSlice.actions;

export default alumnoSlice.reducer;

