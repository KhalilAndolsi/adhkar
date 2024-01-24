import axios from "axios";
import Error from "@components/Error";
import AudioPlayerBtn from "@components/AudioPlayerBtn";
import AudioPlayer from "@components/AudioPlayer";

async function dhikerById({ params: { id } }) {
  try {
    const response = await axios.get(
      `https://www.hisnmuslim.com/api/ar/${id}.json`
    );
    const firstKey = Object.keys(response.data)[0];
    const data = response.data[firstKey];
    return (
      <>
        <AudioPlayer/>
        <section className="adhkar">
          {data ? (
            data.map((item, i) => (
              <div key={i}>
                <h2>{item.ARABIC_TEXT}</h2>
                {item.AUDIO && <AudioPlayerBtn audio={item.AUDIO} />}
              </div>
            ))
          ) : (
            <div>No Data Of this Dhiker</div>
          )}
        </section>
      </>
    );
  } catch (error) {
    return <Error />;
  }
}

export default dhikerById;
