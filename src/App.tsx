import { useState } from "react";
import "./App.css";
import { PersonData } from "./components/Persons";

function App() {
  const [change, setChange] = useState<boolean>(false);
  return (
    <div className="body">
      <div className={change ? "container container-plus" : "container"}>
        <h3>{change ? "0 birthdays today" : "5 birthdays today"}</h3>
        {change ? (
          ""
        ) : (
          <div>
            {PersonData.map((person: any, idx: number) => (
              <div className="person-container" key={idx}>
                <img src={person.img} alt={person.fullname} />
                <div>
                  <p className="info-container">{person.fullname}</p>
                  <p className="info-container">{person.age} years</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button onClick={() => setChange(true)}>Clear all</button>
      </div>
    </div>
  );
}

export default App;
