import { NavLink, useHistory } from "react-router-dom";

const Recommendations = ({ recommendations }) => {
  const history = useHistory();
  const toFilmPage = (id) => {
    console.log(id);
    history.push("/movie/" + id);
  };
  return (
    <div class="flex flex-col my-24" data-controller="slider">
      <div class="flex overflow-x-scroll" data-slider-target="scrollContainer">
        {recommendations.map((item) => (
          <div
            key={item.id}
            onClick={() => toFilmPage(item.id)}
            class="w-1/4  px-1 flex-shrink-0"
            data-slider-target="image"
          >
            <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Recommendations;
