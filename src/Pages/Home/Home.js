import Items from '../../Components/Items/Items';
import {useState, useEffect} from 'react';
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let animes = fetch(
      'https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0'
    ).then((response) => response.json());
    animes.then((animes) => {
      console.log(animes);
      setData(animes.data);
    });
  }, []);
  return (
    <div className='mt-12'>
      <h1 className="text-white text-center text-2xl">Animepedia</h1>
      <div className="bg-zinc-900 grid grid-cols-5 gap-3 ml-44 mr-44 mt-12">
        {data.map((anime, key) => (
          <Items key={key}
            Name={anime.attributes.titles.en_jp}
            Image={anime.attributes.posterImage.small}
            slug={anime.attributes.slug}
            synopsis={anime.attributes.synopsis}
            startDate = {anime.attributes.startDate}
            endDate = {anime.attributes.endDate}
            status = {anime.attributes.status}
            episodes = {anime.attributes.episodeCount}
            rating = {anime.attributes.averageRating}
            popularity = {anime.attributes.popularityRank}
            ageRating = {anime.attributes.ageRatingGuide}
            relatationShips = {anime.relationships}
            link={anime.links.self}

          />
        ))} 
      </div>
    </div>
  );
};

export default Home;
