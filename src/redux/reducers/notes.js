import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
    },
    reducers: {
        updateNotes: (state, action) => {
            const jsonValue = JSON.stringify(action.payload);
            AsyncStorage.setItem('notes', jsonValue)
                .catch(err => {
                    console.error(err);
                });
            state.notes = action.payload;
        },
        addNote: (state, action) => {
            const jsonValue = JSON.stringify([...state.notes, action.payload]);
            AsyncStorage.setItem('notes', jsonValue)
                .catch(err => {
                    console.error(err);
                });
            state.notes = [...state.notes, action.payload];
        },
    },
});

export const {
    updateNotes,
    addNote
} = notesSlice.actions;

export default notesSlice.reducer;
