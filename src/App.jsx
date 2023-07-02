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
        <main>
            <section className="container">
                <h3>{persons.length} birthdays today</h3>
                {persons.map((person) => (
                    <Person {...person} key={person.id} />
                ))}
                <button type="button" className="btn btn-block" onClick={handleClick}>
                    clear all
                </button>
            </section>
        </main>
    );
}

export default App;
