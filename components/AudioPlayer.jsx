'use client'
import { useSelector, useDispatch } from "react-redux";
import { changeAudioPlayer } from "@redux/slices/audioPlayer";

const AudioPlayer = () => {
  const url = useSelector((state) => state.audioPlayer);
  const dispatch = useDispatch();
  return <audio src={url} autoPlay={true} className="hidden" onEnded={() => dispatch(changeAudioPlayer(""))}></audio>;
};

export default AudioPlayer;
