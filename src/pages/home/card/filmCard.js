const FilmCart = ({
  img,
  name,
  voteAverage,
  originalLanguage,
  releaseDate = "0000-00-00",
  id,
  click,
}) => {
  return (
    <div className="m-2">
      <div className="max-w-md w-60 bg-gray-900 shadow-lg rounded-xl p-2 cursor-pointer">
        <div className="flex flex-col ">
          <div className="">
            <div className="relative h-62 w-full mb-3">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              <img
                onClick={() => click(id)}
                src={"https://image.tmdb.org/t/p/w500/" + img}
                className="w-full"
                alt="Mountain"
              />
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-500 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-400 whitespace-nowrap mr-3">
                    {voteAverage}
                  </span>
                  <span className="mr-2 text-gray-400">{originalLanguage}</span>
                </div>
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                    {name}
                  </h2>
                  <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    {releaseDate.split("-")[0]}
                  </div>
                </div>
              </div>
              <div className="text-xl text-white font-semibold mt-1">
                {releaseDate.split("-")[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCart;
