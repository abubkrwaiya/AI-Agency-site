// ThreeCol.js
import Button from "./Button";
import TextDiv from "./TextDiv";

export default function ThreeCol() {
  return (
    <div class="flex flex-col md:flex-row bg-black mt-11 mb-20 ">
      <div
        className="w-full md:w-1/3 p-4 
       md:border-r-2 
      hover:border-b-8 transition-all border-black
      "
        id="divvv"
      >
        <h3 className="text-xl text-blue-100 font-semibold mb-2">Robotics</h3>
        <p className="text-white">
          <TextDiv>
            ReactJS is an open-source JavaScript library used to create user
            interfaces in a declarative and efficient way. It is a
            component-based front-end library responsible only for the view
            layer of a Model View Controller(MVC) architecture. Before you start
            learning ReactJS, we assume that you have knowledge of HTML, CSS and
            JavaScript learning ReactJS, we assume that you have knowledge of
            HTML, CSS and JavaScript
          </TextDiv>
        </p>
      </div>
      <div
        className="w-full md:w-1/3 p-4 
       md:border-r-2 
      hover:border-b-8 transition-all border-black
      
      "
        id="divvv"
      >
        <h3 className="text-xl text-blue-100 font-semibold mb-2">
          Artificial Intelligence
        </h3>
        <p className="text-white">
          <TextDiv>
            ReactJS is an open-source JavaScript library used to create user
            interfaces in a declarative and efficient way. It is a
            component-based front-end library responsible only for the view
            layer of a Model View Controller(MVC) architecture. Before you start
            learning ReactJS, we assume that you have knowledge of HTML, CSS and
            JavaScript learning ReactJS, we assume that you have knowledge of
            HTML, CSS and JavaScript
          </TextDiv>
        </p>
      </div>
      <div
        className="w-full md:w-1/3 p-4 
          md:border-r-2 
         hover:border-b-8 transition-all border-black
         
         "
        id="divvv"
      >
        <h3 className="text-xl text-blue-100 font-semibold mb-2">
          Deep Learning
        </h3>
        <p className="text-white">
          <TextDiv>
            ReactJS is an open-source JavaScript library used to create user
            interfaces in a declarative and efficient way. It is a
            component-based front-end library responsible only for the view
            layer of a Model View Controller(MVC) architecture. Before you start
            learning ReactJS, we assume that you have knowledge of HTML, CSS and
            JavaScript learning ReactJS, we assume that you have knowledge of
            HTML, CSS and JavaScript
          </TextDiv>
        </p>
      </div>

      <div
        className="w-full md:w-1/3 p-4 
                             md:border-r-2 
                            hover:border-b-8 transition-all border-black
                            
                            "
        id="divvv"
      >
        <h3 className="text-xl text-blue-100 font-semibold mb-2">
          Computer Vision
        </h3>
        <p className="text-white">
          <TextDiv>
            ReactJS is an open-source JavaScript library used to create user
            interfaces in a declarative and efficient way. It is a
            component-based front-end library responsible only for the view
            layer of a Model View Controller(MVC) architecture. Before you start
            learning ReactJS, we assume that you have knowledge of HTML, CSS and
            JavaScript learning ReactJS, we assume that you have knowledge of
            HTML, CSS and JavaScript
          </TextDiv>
        </p>
      </div>
    </div>
  );
}
