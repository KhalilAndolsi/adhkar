"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeAudioPlayer } from "@redux/slices/audioPlayer";

const AudioPlayerBtn = ({ audio }) => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.audioPlayer);
  const handelAudioPlayer = () => {
    if (url != audio) {
      dispatch(changeAudioPlayer(audio));
    } else {
      dispatch(changeAudioPlayer(""));
    }
  };
  return (
    <button type="button" onClick={handelAudioPlayer}>
      {url != audio ? <FontAwesomeIcon icon={faCirclePlay} />: <FontAwesomeIcon className="text-blue-400" icon={faCirclePause} />}
      
    </button>
  );
};

export default AudioPlayerBtn;
