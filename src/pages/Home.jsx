import { Link } from "react-router-dom";
function Home() {
  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://tse4.mm.bing.net/th/id/OIP.piemn4AWPLLwWPA-25XwhwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3')",
      }}>
      <div className="absolute inset-0 bg-black/50 bg-opacity-70"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          My Coding Journey
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Sharing experiences, tips, and beginner-friendly guides on programming
          languages, frameworks, and tools.
        </p>
        <Link
          to="/posts"
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition transform hover:scale-105">
          Explore Blog
        </Link>
      </div>
    </div>
  );
}

export default Home;
