import { FC } from 'react';

// Libs
import { GiantRobot } from '@giant-robots/shared/models';

export interface GiantRobotsListProps {
  giantRobots: GiantRobot[];
}

export const GiantRobotsList: FC<GiantRobotsListProps> = ({ giantRobots }) => (
  <ul>
    {giantRobots.map((giantRobot) => (
      <li key={giantRobot.name}>
        {giantRobot.name} ({giantRobot.height}m &times; {giantRobot.weight}tons)
      </li>
    ))}
  </ul>
);
