import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [],
    },
    reducers: {
        updateNotes: (state, action) => {
            state.notes = action.payload;
        },
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload];
        },
    },
});

export const {
    updateNotes,
    addNote
} = notesSlice.actions;

export default notesSlice.reducer;
