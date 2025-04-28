import './App.css';
import { useState } from 'react';

function App() {

  const [team, setTeam] = useState("Pirates");

  return (
    <div className="App">
      <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
      <h3>Hello World, {team} Stink!!</h3>
    </div>
  );
}

export default App;
