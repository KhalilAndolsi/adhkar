import { createSlice } from "@reduxjs/toolkit";

const audioPlayer = createSlice({
  name: "audioPlayer",
  initialState: "",
  reducers: {
    changeAudioPlayer: (state, action) => action.payload,
  },
});

export const { changeAudioPlayer } = audioPlayer.actions;
export default audioPlayer.reducer;
