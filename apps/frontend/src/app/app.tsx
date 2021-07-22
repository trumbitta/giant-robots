import { useEffect, useState } from 'react';

// Components
import { GiantRobotsList } from './giant-robots/giant-robots-list.component';

// Environments
import { environment } from '../environments/environment';

function App() {
  const { fairAdjective } = environment;
  const [giantRobots, setGiantRobots] = useState([]);

  useEffect(() => {
    // Thank you, Nx, for the proxy conf!
    fetch('/api')
      .then((response) => response.json())
      .then(
        (data) => setGiantRobots(data)
        // TODO: Add error handling
      );
  }, []);

  return (
    <>
      <h1>Welcome to the {fairAdjective} Giant Robot Fair!</h1>
      <main>
        <GiantRobotsList giantRobots={giantRobots} />
      </main>
    </>
  );
}

export default App;
