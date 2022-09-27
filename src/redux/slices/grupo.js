import { createSlice } from '@reduxjs/toolkit'

export const groupSlice =  createSlice({
    name: 'group',
    initialState:{
        init: {
            grupo: [],
            alumnos: [],
            estadisticas: []
        }
    },
    reducers: {
        setGroup: (state, action) =>{
            state.init = action.payload;
        }
    }
});

export const { setGroup } = groupSlice.actions;

export default groupSlice.reducer;