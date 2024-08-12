// Filename - App.js

function Background() {
  return (
    <div className="GeeksForGeeks">
      {/* overlay content */}
      <div
        class="absolute inset-0 flex 
                    items-center justify-center
                    text-white"
      >
        <div
          class="bg-transparent p-8 rounded-lg
                        border-2 border-white shadow-lg"
        >
          <h1 class="text-3xl font-bold mb-4">
            Welcome to The World Of Artificial Intelligence
          </h1>
          <p class="text-lg text-center">
            Artificial intelligence defined. Artificial intelligence <br></br>is
            a field of science concerned with building computers and<br></br>{" "}
            machines that can reason
          </p>
        </div>
      </div>
      {/* overlay */}

      {/* overlay button  */}

      <div
        class="absolute inset-0 flex 
                    items-end justify-center
                    mb-20
                    
                    text-white"
      >
        <button className="bg-blue-400 px-6 pb-3 pt-2 mb-7 border-2 hover:bg-black shadow-md shadow-red-200 border-white rounded-full text-center  text-2xl mr-6">
          button
        </button>

        <button className="bg-blue-400 px-6 pb-3 pt-2 mb-7 border-2 hover:bg-black shadow-md shadow-red-200 border-white rounded-full text-center  text-2xl ml-6">
          button
        </button>
      </div>

      {/* overlay button */}
    </div>
  );
}

export default Background;
