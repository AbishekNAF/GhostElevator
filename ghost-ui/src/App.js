import { useState } from "react";
import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Floors from "./components/Floors";
import LiftShaft from "./components/LiftShaft";
// import { useState } from "react";
function App() {
  let no_of_floors = 5;
  let no_of_spaces = 6;

  const [peopleCoordinates, setPeopleCoordinates] = useState([
    { name: "🧍‍♂️", floor_no: 0, space_no: 0 },
    { name: "🧍‍♀️", floor_no: 0, space_no: 1 },
    { name: "🕴", floor_no: 0, space_no: 2 },
    { name: "⛹️‍♀️", floor_no: 0, space_no: 3 },
    { name: "🤸‍♂️", floor_no: 0, space_no: 4 },
  ]);

  const updatePeopleCoordinates = (name, direction) => {
    setPeopleCoordinates(
      peopleCoordinates.map((person) => {
        if (person.name === name) {
          let temp = {
            name: person.name,
            floor_no: person.floor_no,
            space_no:
              direction === "→" ? person.space_no + 1 : person.space_no - 1,
          };
          return temp;
        } else {
          return person;
        }
      })
    );
  };

  const [style, setStyle] = useState({});
  const [door, setDoor] = useState(false);

  return (
    <div className="App main-grid">
      <div className="main-grid-item">
        <Floors
          no_of_floors={no_of_floors}
          no_of_spaces={no_of_spaces}
          peopleCoordinates={peopleCoordinates}
          updatePeopleCoordinates={updatePeopleCoordinates}
        />
      </div>
      <div className="main-grid-item elevator-shaft">
        <LiftShaft
          style={style}
          setStyle={setStyle}
          door={door}
          setDoor={setDoor}
        />
      </div>
      <div className="main-grid-item">
        <ControlPanel
          style={style}
          setStyle={setStyle}
          setDoor={setDoor}
          door={door}
          peopleCoordinates={peopleCoordinates}
          updatePeopleCoordinates={updatePeopleCoordinates}
        />{" "}
      </div>
    </div>
  );
}

export default App;
