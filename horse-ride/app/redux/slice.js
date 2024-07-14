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

      
      let horseEntry = state.bookhorse.find(item => item.horse_name === horse_name);
      
      if (horseEntry) {
        let dateEntry = horseEntry.dates.find(item => item.date === date);
        
        if (dateEntry) {
          dateEntry.slot = [...new Set([...dateEntry.slot, ...slot])];
        } else {
          horseEntry.dates.push({ date, slot });
        }
      } else {
        state.bookhorse.push({ horse_name, dates: [{ date, slot }] });
      }
    },
  },
});

export const { updateslot } = slice.actions;

export default slice.reducer;
