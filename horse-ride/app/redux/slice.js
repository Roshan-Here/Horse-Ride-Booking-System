const { createSlice } = require("@reduxjs/toolkit");

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
        booking.slot = [...new Set([...booking.slot, ...slot])];
      } else {
        const newdata = {
          horse_name: action.payload.horse_name,
          date: action.payload.date,
          slot: action.payload.slot,
        };
        state.bookhorse.push(newdata);
      }
    },
  },
});

export const { updateslot } = slice.actions;

export default slice.reducer;
