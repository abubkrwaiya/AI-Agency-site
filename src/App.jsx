import Background from "./assets/background";
import ThreeCol from "./assets/ThreeCols";
import "./index.css";
import "./App.css";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Icons from "./assets/Icons";

function App() {
  const appStyle = {
    backgroundColor: "#bbd7e2",
  };
  return (
    <div style={appStyle}>
      <Background />
      <About />
      <ThreeCol />
      <Contact />
    </div>
  );
}

export default App;
