import Item from '../../Components/Item/Item';
import {useState, useEffect} from 'react';
const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    let animes = fetch(
      `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=${count}`
    ).then((response) => response.json());
    animes.then((animes) => {
      setData(animes.data);
    });
  }, [count]);

  return (
    <div className="mt-12">
      <h1 className="text-white text-center text-5xl">Animepedia</h1>
      <div className="flex flex-row-reverse mr-48">
        <button
          className="ml-4 p-4 align-center bg-sky-800/100 rounded text-white hover:bg-sky-300"
          onClick={() => setCount(count + 20)}
        >
          Next
        </button>
        <button
          className={
            count > 0
              ? 'bg-sky-800/100 p-4  rounded text-white  hover:bg-sky-300 '
              : 'bg-sky-800/100 p-4   rounded text-white cursor-not-allowed'
          }
          disabled={count === 0}
          onClick={() => setCount(count - 20)}
        >
          Back
        </button>
      </div>
      <div className="bg-zinc-900 grid grid-cols-5 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-6  ml-44 mr-44 mt-12">
        {data.map((anime, key) => (
          <Item
            key={key}
            Name={anime.attributes.titles.en_jp}
            Image={anime.attributes.posterImage.small}
            slug={anime.attributes.slug}
            synopsis={anime.attributes.synopsis}
            startDate={anime.attributes.startDate}
            endDate={anime.attributes.endDate}
            status={anime.attributes.status}
            episodes={anime.attributes.episodeCount}
            rating={anime.attributes.averageRating}
            popularity={anime.attributes.popularityRank}
            ageRating={anime.attributes.ageRatingGuide}
            relatationShips={anime.relationships}
            link={anime.links.self}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
