import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttp } from "../../api/hook";
import MiniLoading from "../component/loading/miniLoading";
import MyPage from "./componets/page";

const Movie = () => {
  const { loading, request, error, clearError } = useHttp();
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [casts, setCast] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    requestData();
  }, []);

  const requestData = async () => {
    const data = await request(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=f53e6b2f16ed0b466ebc6de372262155"
    );
    const cast = await request(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/credits?api_key=f53e6b2f16ed0b466ebc6de372262155"
    );
    const recommendations = await request(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/recommendations?api_key=f53e6b2f16ed0b466ebc6de372262155"
    );

    console.log(recommendations.results.splice(0, 13));
    setRecommendations(recommendations.results.splice(0, 10));
    setCast(cast.cast.splice(0, 6));
    setData(data);
    setLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <MiniLoading />
      ) : (
        <div className="">
          <MyPage
            img={data.poster_path}
            overview={data.overview}
            originalTitle={data.original_title}
            casts={casts}
            recommendations={recommendations}
          />
        </div>
      )}
    </>
  );
};

export default Movie;
