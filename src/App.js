import './App.css';
import data from './data'
import List from './List'
import { useState } from 'react'

function App() {
  const [people, setPeople] = useState(data)
  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1> {people.length} Birthdays today</h1>
        </div>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear reminders</button>
      </div>
    </div>
  );
}

export default App;
