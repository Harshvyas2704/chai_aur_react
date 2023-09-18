import { useState } from "react";
import PropTypes from 'prop-types';

function App() {
  const [color, setColor] = useState("olive");

  const handleButtonClick = (newColor) => {
    console.log(newColor);
    setColor(newColor)
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-02">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <ButtonCard name="Orange" color="orange" onClick={() => handleButtonClick('orange')} />
          <ButtonCard name="Red" color="red" onClick={() => handleButtonClick('red')}/>
          <ButtonCard name="Blue" color="blue" onClick={() => handleButtonClick('blue')}/>
          <ButtonCard name="Green" color="green" onClick={() => handleButtonClick('green')}/>
          <ButtonCard name="Teal" color="teal" onClick={() => handleButtonClick('teal')}/>
          <ButtonCard name="Wheat" color="wheat" onClick={() => handleButtonClick('wheat')}/>
          <ButtonCard name="Purple" color="purple" onClick={() => handleButtonClick('purple')}/>
          <ButtonCard name="Black" color="black" onClick={() => handleButtonClick('black')}/>
        </div>
      </div>
    </div>
  );
}

const ButtonCard = (props) => {
  return (
    <>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: props.color }}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </>
  );
};

ButtonCard.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default App;
