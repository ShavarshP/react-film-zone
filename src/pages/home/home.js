import { useEffect, useState } from "react";
import { useHttp } from "../../api/hook";
import FilmCart from "./card/filmCard";
import Headers from "./headers/headers";

const Home = () => {
  const { loading, request, error, clearError } = useHttp();
  const [list, setList] = useState([]);

  useEffect(async () => {
    const data = await request(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f53e6b2f16ed0b466ebc6de372262155"
    );
    console.log(data.results);
    setList(
      data.results.map((item) => (
        <FilmCart img={item.poster_path} name={item.original_title} />
      ))
    );
  }, []);

  return (
    <div>
      <Headers login={true} />
      <div className="flex flex-wrap">{list}</div>
    </div>
  );
};

export default Home;
