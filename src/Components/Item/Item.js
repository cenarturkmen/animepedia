import {useNavigate} from 'react-router-dom';

const Item = (props) => {
  let navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-4 m-4 hover:bg-zinc-700 rounded-lg hover:m-0 "
      onClick={(e) =>
        navigate(`/detail/${props.slug}`, {
          state: {
            animeName: props.Name,
            image: props.Image,
            synopsis: props.synopsis,
            startDate: props.startDate,
            endDate: props.endDate,
            status: props.status,
            episodes: props.episodes,
            rating: props.rating,
            popularity: props.popularity,
            ageRating: props.ageRating,
            relatationShips: props.relatationShips,
            link: props.link,
          },
          replace: true,
        })
      }
    >
      <h1 className=" text-white object-center  text-md mb-2 text-center">
        {props.Name}
      </h1>
      <img className="rounded object-center" src={props.Image} alt="" />
    </div>
  );
};

export default Item;
