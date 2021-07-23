import { useEffect, useState } from 'react';

// Components
import { GiantRobotsList } from '@giant-robots/features/robots';

// Environments
import { environment } from '../environments/environment';

function App() {
  const { apiEndPointRobots, fairAdjective } = environment;
  const [giantRobots, setGiantRobots] = useState([]);

  useEffect(() => {
    fetch(apiEndPointRobots)
      .then((response) => response.json())
      .then(
        (data) => setGiantRobots(data)
        // TODO: Add error handling
      );
  }, [apiEndPointRobots]);

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
