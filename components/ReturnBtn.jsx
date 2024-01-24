import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeAudioPlayer } from "@redux/slices/audioPlayer";

const ReturnBtn = () => {
  const dispatch = useDispatch();
  return (
    <Link href="/" className="absolute left-5" onClick={() => dispatch(changeAudioPlayer(""))}><FontAwesomeIcon icon={faArrowLeft} /></Link>
  )
}

export default ReturnBtn