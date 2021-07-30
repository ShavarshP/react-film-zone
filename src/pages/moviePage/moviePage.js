import { useEffect, useState } from "react";
import { useHttp } from "../../api/hook";
import MyPage from "./page";

const Movie = () => {
  const { loading, request, error, clearError } = useHttp();
  const [data, setData] = useState([]);
  useEffect(() => {
    requestData();
  }, []);

  const requestData = async () => {
    const data = await request(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=f53e6b2f16ed0b466ebc6de372262155"
    );
    console.log(data);
  };

  return (
    <div>
      <MyPage />
    </div>
  );
};

export default Movie;
