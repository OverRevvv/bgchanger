import { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center items-center "
      style={{ backgroundColor: color }}
    >
      <h1 className="text-4xl text-white">
        Click Buttons below to change background color
      </h1>
      <div className="flex justify-center items-center gap-3 text-3xl shadow-lg  text-purple-500 bottom-9 rounded-3xl h-16 w-2/3  fixed   bg-[#0c091b31] bg-opacity-40 backdrop-filter backdrop-saturate-150 backdrop-blur-xl firefox:bg-opacity-100">
        <button
          className="mr-10  rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "black" }}
          onClick={() => setcolor("black")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150 "
          style={{ backgroundColor: "red"}}
          onClick={() => setcolor("red")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "purple" }}
          onClick={() => setcolor("purple")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "orange" }}
          onClick={() => setcolor("orange")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "green" }}
          onClick={() => setcolor("green")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "blue" }}
          onClick={() => setcolor("blue")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "gray" }}
          onClick={() => setcolor("gray")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "pink" }}
          onClick={() => setcolor("pink")}
        ></button>
        <button
          className="mr-10 rounded-full p-5 scale-105 hover:scale-100 duration-150"
          style={{ backgroundColor: "white" }}
          onClick={() => setcolor("white")}
        ></button>
      </div>
    </div>
  );
}

export default App;
