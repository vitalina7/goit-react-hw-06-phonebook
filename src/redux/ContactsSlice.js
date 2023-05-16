import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [
    { id: 'id-1', name: 'Mary Slim', number: '0976549987' },
    { id: 'id-2', name: 'Garry Poter', number: '0667777800' },
    { id: 'id-3', name: 'Merry Poppins', number: '0987654563' },
    { id: 'id-4', name: 'Lavanda Way', number: '2279126987' },
  ],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
     addContact: (state, action) => {
  state.items = [...state.items, action.payload];
},
deleteContact: (state, action) => {
  state.items = state.items.filter((item) => item.id !== action.payload);
}
    }
    
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;