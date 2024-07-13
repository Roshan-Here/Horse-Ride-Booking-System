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
      const booking = state.bookhorse.find(
        (item) => item.date === date && item.horse_name === horse_name
      );
      if (booking) {
        console.log("Updating existing booking", booking);
        booking.slot = [...new Set([...booking.slot, ...slot])];
      } else {
        const newdata = {
          horse_name: horse_name,
          date: date,
          slot: slot,
        };
        console.log("Adding new booking", newdata);
        state.bookhorse.push(newdata);
      }
    },
  },
});

export const { updateslot } = slice.actions;

export default slice.reducer;
