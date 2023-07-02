import { useState } from "react";
import data from "./data";
import "./App.css";
import Person from "./Person";

function App() {
    const [persons, setPersons] = useState(data);
    const handleClick = () => {
        setPersons([]);
    };
    return (
        <div>
            <h1>{persons.length} birthday today</h1>
            {persons.map((person) => (
                <Person {...person} key={person.id} />
            ))}
            <button type="button" className="btn" onClick={handleClick}>
                {" "}
                Clear All
            </button>
        </div>
    );
}

export default App;
