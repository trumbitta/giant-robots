import { useEffect, useState } from 'react';

// Libs
import {
  GiantRobotsApi,
  GiantRobot,
  Configuration,
} from '@giant-robots/shared/api';

// Components
import { GiantRobotsList } from '@giant-robots/features/robots';

// Environments
import { environment } from '../environments/environment';

function App() {
  const { apiEndPointRobots, fairAdjective } = environment;
  const [giantRobots, setGiantRobots] = useState<GiantRobot[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiConfiguration = new Configuration({
        basePath: apiEndPointRobots,
      });
      const api = new GiantRobotsApi(apiConfiguration);

      try {
        const robots = await api.getGiantRobots();

        setGiantRobots(robots);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
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
