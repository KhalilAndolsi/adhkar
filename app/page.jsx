import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

// Components
import Error from "@components/Error";
import AudioPlayerBtn from "@components/AudioPlayerBtn";
import AudioPlayer from "@components/AudioPlayer";

export default async function Home() {
  try {
    const response = await axios.get(
      "https://www.hisnmuslim.com/api/ar/husn_ar.json"
    );
    const data = response.data.العربية;
    return (
      <>
        <AudioPlayer />
        <section className="home-page">
          {data.map((item, i) => (
            <div key={i} className="main-dhiker">
              <AudioPlayerBtn audio={item.AUDIO_URL} />
              <h3>{item.TITLE}</h3>
              <Link href={`/dhiker/${item.TITLE.replaceAll(" ", "-")}/${item.ID}`}>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </Link>
            </div>
          ))}
        </section>
      </>
    );
  } catch (error) {
    return <Error />;
  }
}
