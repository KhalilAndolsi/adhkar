import axios from "axios";


// Components
import Error from "@components/Error";
import AudioPlayerBtn from "@components/AudioPlayerBtn";
import AudioPlayer from "@components/AudioPlayer";
import DhikerLink from "@components/DhikerLink";

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
              <DhikerLink title={item.TITLE} id={item.ID} />
            </div>
          ))}
        </section>
      </>
    );
  } catch (error) {
    return <Error />;
  }
}
