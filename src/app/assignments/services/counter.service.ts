import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeUserCount = 0;
  inactiveUserCount = 0;

  incrementActiveUsers() {
    ++this.activeUserCount;
    console.log('Active ' + this.activeUserCount);
  }

  incrementInactiveUsers() {
    ++this.inactiveUserCount;
    console.log('Inactive ' + this.inactiveUserCount);
  }
}
