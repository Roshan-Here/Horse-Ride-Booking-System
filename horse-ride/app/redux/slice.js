import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookhorse: [],
};

const slice = createSlice({
  name: "HORSETIMESLOTSETUP",
  initialState,
  reducers: {
    updateslot: (state, action) => {
      const { horse_name, date, slot } = action.payload;

      // Find the horse entry
      let horseEntry = state.bookhorse.find(item => item.horse_name === horse_name && item.date === date);

      if (horseEntry) {
        // If the horse and date entry exist, update the slot
        horseEntry.slot = [...new Set([...horseEntry.slot, ...slot])];
      } else {
        // If the entry doesn't exist, add a new entry
        console.log('Data is Entering...');
        state.bookhorse.push({ horse_name, date, slot });
      }
    },
  },
});

export const { updateslot } = slice.actions;

export default slice.reducer;
