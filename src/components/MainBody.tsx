import { PersonData } from "./Persons";
import { Link } from "react-router-dom";
export default function MainBody() {
  return (
    <div className="body">
      <div className="container">
        <h3>5 birthdays today</h3>
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
        <Link to="/change" className="btn">
          <button>Clear all</button>
        </Link>
      </div>
    </div>
  );
}
