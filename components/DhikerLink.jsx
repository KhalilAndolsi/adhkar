'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeAudioPlayer } from "@redux/slices/audioPlayer";

function DhikerLink({title, id}) {
  const dispatch = useDispatch();
  return (
    <Link href={`/dhiker/${title.replaceAll(" ", "-")}/${id}`} onClick={() => dispatch(changeAudioPlayer(""))}>
      <FontAwesomeIcon icon={faCircleArrowRight} />
    </Link>
  );
}

export default DhikerLink;
