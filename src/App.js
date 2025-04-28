import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let apiUrl = "https://9rbtr5sx6l.execute-api.us-east-2.amazonaws.com/baseball-stats/";

  useEffect(() => {
    let data = fetch(apiUrl).then(data => data.json())
    .then(jsonData => {
      setStats(jsonData);
    })
  }, [])

  const [team, setTeam] = useState("Pirates");
  const [stats, setStats] = useState([]);

  return (
    <div className="App">
      <input type="text" value={team} onChange={(e) => setTeam(e.target.value)} />
      <h3>Hello World, {team} Stink!!</h3>
  
      {stats.map(stat => (
        <div key={stat.TeamID}>{stat.TeamID}</div>
      ))}
    </div>
  );
  
}

export default App;
