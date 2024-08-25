import faceImage from "../assets/images/face2.jpg";

const Header = () => {
  return (
    <header className="flex flex-wrap items-center justify-center">
      <div className="w-[300px]">
        <h1 className="text-[32px]">Hrona Olha</h1>
        <h2 className="mt-5 text-2xl">Junior front-end developer</h2>
      </div>
      <img
        src={faceImage}
        alt="Olha's face"
        className="rounded-full h-52 w-52"
      />
    </header>
  );
};

export default Header;
