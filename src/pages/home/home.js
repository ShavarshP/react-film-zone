import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../../api/hook";
import FilmCart from "./card/filmCard";
import Menue from "./components.js/menue";
import Headers from "./headers/headers";

const Home = () => {
  const { loading, request, error, clearError } = useHttp();
  const [list, setList] = useState([]);
  const history = useHistory();
  const [genres, setgenres] = useState([]);
  useEffect(() => {
    requestData();
  }, []);

  const toFilmPage = (id) => {
    console.log(id);
    history.push("/movie/" + id);
  };

  const requestData = async () => {
    const data = await request(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f53e6b2f16ed0b466ebc6de372262155&language=en-US&page=1&include_adult=false"
    );
    const data2 = await request(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=f53e6b2f16ed0b466ebc6de372262155"
    );
    const data3 = await request(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f53e6b2f16ed0b466ebc6de372262155&language=en-US&page=2&include_adult=false"
    );

    console.log(data3.results);
    setgenres(data2.genres);
    setList(
      [...data.results, data3.results[16]].map((item) => (
        <FilmCart
          key={item.id}
          img={item.poster_path}
          name={item.original_title}
          voteAverage={item.vote_average}
          originalLanguage={item.original_language}
          releaseDate={item.release_date}
          id={item.id}
          click={toFilmPage}
        />
      ))
    );
  };

  return (
    <div className="bg-black">
      <Headers login={true} />
      <Menue genres={genres} />
      <div className="flex flex-wrap mt-10 justify-center">{list}</div>
    </div>
  );
};

export default Home;
