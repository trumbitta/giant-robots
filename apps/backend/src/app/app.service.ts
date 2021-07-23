import { Injectable } from '@nestjs/common';

// Libs
import { GiantRobot } from '@giant-robots/shared/models';
import { getRobots } from '@giant-robots/shared/backend';

@Injectable()
export class AppService {
  getData(): GiantRobot[] {
    return getRobots();
  }
}
