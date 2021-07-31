import PropTypes from "prop-types";
import Recommendations from "./recommendations";

const MyPage = ({ img, overview, originalTitle, casts, recommendations }) => {
  return (
    <div className="">
      <div className="flex max-w-xl my-10 bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="flex items-center w-full">
          <div className="w-full">
            <div className="border-b border-gray-100"></div>
            <div className="text-gray-400 font-medium text-sm mb-7 mt-6 mx-10 px-2">
              <img
                className="rounded"
                src={"https://image.tmdb.org/t/p/w500/" + img}
              />
            </div>
            <div className="text-gray-600 font-semibold text-lg mb-2 mx-3 px-2">
              {originalTitle}
            </div>
            <div className="text-gray-500 font-thin text-sm mb-6 mx-3 px-2">
              {overview}
            </div>
            <div className="flex justify-start mb-4 border-t border-gray-100">
              <div className="flex w-full mt-1 pt-2 pl-5">
                <span className="bg-white transition ease-out duration-300 hover:text-red-500 border w-8 h-8 px-2 pt-2 text-center rounded-full text-gray-400 cursor-pointer mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="14px"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </span>
                {casts.map((item) => (
                  <img
                    key={item.id}
                    className="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer"
                    src={"https://image.tmdb.org/t/p/w500/" + item.profile_path}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <Recommendations recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
};

MyPage.propTypes = {
  img: PropTypes.string,
  overview: PropTypes.string,
  originalTitle: PropTypes.string,
  casts: PropTypes.array,
  recommendations: PropTypes.array,
};
export default MyPage;
