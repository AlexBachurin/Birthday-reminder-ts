import React, { useState } from "react";
import data from "./data";
import List from "./List";
import { PeopleItem } from "./models";



const App = () => {
  const [people, setPeople] = useState<PeopleItem[]>(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear all</button>
      </section>
    </main>
  );
};

export default App;
