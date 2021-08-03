import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useHttp } from "../../api/hook";
import MiniLoading from "../component/loading/miniLoading";
import FilmCart from "./card/filmCard";
import Menue from "./components/menue";
import MyScroll from "./components/myScroll";
import Headers from "./headers/headers";

const Home = () => {
  const { loading, request, error, clearError } = useHttp();
  const [list, setList] = useState([]);
  const history = useHistory();
  const [genres, setgenres] = useState([]);
  const [myData, setMyData] = useState([]);
  const [page, setpage] = useState(2);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    requestData();
  }, []);

  const toFilmPage = (id) => {
    history.push("/movie/" + id);
  };

  const newlis = (data) => {
    setList(
      data.map((item) => (
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

  const requestData = async () => {
    const data = await request(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f53e6b2f16ed0b466ebc6de372262155&language=en-US&page=1&include_adult=false"
    );
    const data2 = await request(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=f53e6b2f16ed0b466ebc6de372262155"
    );
    const data3 = await request(
      "https://api.themoviedb.org/3/find/28?api_key=f53e6b2f16ed0b466ebc6de372262155&language=en-US&external_source=imdb_id"
    );

    setMyData(data.results);
    setgenres(data2.genres);
    newlis(data.results);
    setLoading(false);
  };

  const more = async () => {
    const data = await request(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=f53e6b2f16ed0b466ebc6de372262155&language=en-US&page=" +
        page +
        "&include_adult=false"
    );
    setpage(page + 1);
    newlis([...myData, ...data.results]);
    setMyData([...myData, ...data.results]);
  };

  return (
    <div className="bg-black justify-center content-center bg-gray-200">
      {isLoading ? (
        <MiniLoading />
      ) : (
        <>
          <Headers login={true} />
          <Menue genres={genres} />
          <div className="flex flex-wrap mt-10 justify-center">
            {list}
            <button
              onClick={more}
              className="my-10 max-h-10 mr-10 bg-gray-200 hover:bg-gray-300 border border-gray-400 text-black font-bold py-2 px-6 rounded-md"
            >
              more
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
