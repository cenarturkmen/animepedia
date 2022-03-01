import {useLocation} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useEffect, useState} from 'react';
const Detail = (props) => {
  const {state} = useLocation();
  const [image, setImage] = useState('');

  let navigate = useNavigate();

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
      <div className="bg-zinc-900 flex flex-row ml-44 mr-44 mt-12">
        <div className="wt-24 min-w-200">
          <img
            className='"h-48 min-w-200 w-screen mr-4 mb-4 rounded'
            src={image}
            alt="coverImage"
          />
        </div>
        <div className="flex flex-col wt-12 ml-12">
          <h1 className="text-white  text-5xl">{state.animeName}</h1>
          <p className="text-white  text-2xl text-md mt-4">
            Start Date: {state.startDate}
          </p>
          <p className="text-white  text-2xl text-md">
            End Date: {state.endDate}
          </p>
          <p className="text-white text text-2xl">Status: {state.status}</p>
          <p className="text-white  text-2xl">
            Episodes Count: {state.episodes}
          </p>
          <p className="text-white  text-2xl">Rating: {state.rating}</p>
          <p className="text-white  text-2xl">Popularity: {state.popularity}</p>
          <p className="text-white  text-2xl">Age Rating: {state.ageRating}</p>
          <p className="text-white  text-2xl mt-4">{state.synopsis}</p>
          <div className="flex justify-end">
            <button
              className="ml-4 p-4 align-center bg-sky-800/100 rounded text-white hover:bg-sky-300"
              onClick={() => navigate('/')}
            >
              Back To Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
