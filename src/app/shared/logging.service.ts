import { Injectable } from "@angular/core";

//This injectable decorator is not necesary here, because we do not inject anything into this class. But, it is recommended.
//Please visit, https://angular.io/api/core/Injectable.
@Injectable({ providedIn: 'root' })
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
