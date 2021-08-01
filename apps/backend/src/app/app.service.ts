import { Injectable } from '@nestjs/common';

// Libs
import { GiantRobot } from '@giant-robots/shared/api';
import { getRobots } from '@giant-robots/shared/backend';

@Injectable()
export class AppService {
  getData(): GiantRobot[] {
    return getRobots();
  }
}
