import PropTypes from "prop-types";

const Menue = ({ genres }) => {
  const genre = genres.map((item) => (
    <div
      key={item.id}
      className="flex h-full items-center  hover:bg-black hover:bg-opacity-50"
    >
      <div className="mx-4 text-white">item.name</div>
      <div className=" h-8 w-px bg-gray-300"></div>
    </div>
  ));
  return (
    <div className=" w-full bg-black bg-gray-800">
      <div className="p-5 w-full h-full flex flex-wrap justify-center items-center">
        {genre}
      </div>
    </div>
  );
};

Menue.propTypes = {
  genres: PropTypes.array,
};
export default Menue;
