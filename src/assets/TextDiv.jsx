import {useState} from "react";

export default function TextDiv({children, textNum = 41}) {
  const [isCollapse, setIsCollapse] = useState(false);

  const displayText = isCollapse
    ? children
    : children.split(" ").slice(0, textNum).join(" ") + ".......";
  return (
    <div>
      <p>{displayText}</p>
      <Click setIsCollapse={setIsCollapse} />
    </div>
  );
}

function Click({setIsCollapse, isCollapse}) {
  const buttonStyle = {
    backgroundColor: "#1f4855",
    borderRadius: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    color: "white",
  };
  return (
    <button
      style={buttonStyle}
      className="border-b-2 hover:border-blue-600 transition-all mt-5"
      onClick={() => setIsCollapse((collap) => !collap)}
    >
      {isCollapse ? "Show Less" : "Show More"}
    </button>
  );
}
