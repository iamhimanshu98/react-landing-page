import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen bg-black flex">
        <nav className="flex items-center justify-between gap-20 px-20 absolute w-screen h-20 text-white text-2xl container">
          <a href="" className="text-blue-100 text-2xl font-semibold">
            Hey.io
          </a>
          <div className="flex gap-20">
            <button className="hover:text-cyan-400">Home</button>
            <button className="hover:text-cyan-400">Services</button>
            <button className="hover:text-cyan-400">About</button>
            <button className="hover:text-cyan-400">Contact</button>
          </div>
        </nav>
        <div className="h-full w-6/12 bg-gray-600 text-white">
          <h1 className="font-semibold text-4xl mx-20 mb-50 mt-72">
            Learn from the{" "}
            <span className="text-lime-400/90">
              coolest <br />
              coding platform
            </span>{" "}
            in <br /> India.
          </h1>
          <button className="rounded mx-20 font-bold bg-blue-500/80 p-5 text-white hover:bg-blue-500/90">
            Explore here
          </button>
        </div>
        <div className="h-full w-6/12 bg-red-400">
          <img
            src="./files/student.jpg"
            alt="image"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </>
  );
}

export default App;
