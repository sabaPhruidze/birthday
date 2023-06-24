import "./App.css";
import { PersonData } from "./components/Persons";
function App() {
  return (
    <div className="body">
      <div className="container">
        <h3>5 birthdays today</h3>
        <div>
          {PersonData.map((person: any, idx: number) => (
            <div className="person-container">
              <img src={person.img} alt={person.fullname} key={idx} />
              <div>
                <p>{person.fullname}</p>
                <p>{person.age} years</p>
              </div>
            </div>
          ))}
        </div>
        <button>Clear all</button>
      </div>
    </div>
  );
}

export default App;
