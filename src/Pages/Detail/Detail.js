import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
const Detail = (props) => {
  const {state} = useLocation();
  const [image, setImage] = useState('');
  let navigate = useNavigate();
  console.log(state.link);
  useEffect(() => {
    if (state.link) {
      let image = fetch(state.link).then((response) => response.json());
      image.then((image) => {
        setImage(image.data.attributes.posterImage.original);
      });
    }
  }, [state]);

  return (
    <div className="mt-12">
      <h1 className="text-white text-center text-2xl">Animepedia</h1>
      <div className="bg-zinc-900 grid grid-cols-2 ml-44 mr-44 mt-12">
        <div className="flex flex-col wt-9">
          <img
            className='"object-cover mr-4 mb-4'
            src={image}
            alt="coverImage"
          />
        </div>
        <div className="flex flex-col wt-12">
          <h1 className="text-white text-center text-2xl">{state.animeName}</h1>
          <p className="text-white text-center text-md">
            {state.startDate} {state.endDate}
          </p>
          <p className="text-white text-center">{state.status}</p>
          <p className="text-white text-center">{state.episodes}</p>
          <p className="text-white text-center">{state.rating}</p>
          <p className="text-white text-center">{state.popularity}</p>
          <p className="text-white text-center">{state.ageRating}</p>
          <p className="text-white text-center">{state.synopsis}</p>
          <button className="bg-white" onClick={() => navigate('/')}>
            GoOOOOOOO Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default Detail;
