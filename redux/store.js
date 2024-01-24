import { configureStore } from "@reduxjs/toolkit";
import audioPlayer from "./slices/audioPlayer";

export const store = configureStore({
  reducer: {
    audioPlayer: audioPlayer,
  },
});
