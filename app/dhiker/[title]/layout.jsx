import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export async function generateMetadata(props) {
  return {
    title: decodeURIComponent(props.params.title).replaceAll("-", " "),
    discreption: `${decodeURIComponent(props.params.title).replaceAll("-", " ")}`
  };
}

export default function dhikerLayout({ children, params }) {
  return <main>
    <div className="dhiker-title relative">
      <Link href="/" className="absolute left-5"><FontAwesomeIcon icon={faArrowLeft} /></Link>
      <h1>{decodeURIComponent(params.title).replaceAll("-", " ")}</h1>
    </div>
    {children}
    </main>;
}
