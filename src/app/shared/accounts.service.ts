import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter, OnInit } from "@angular/core";

//Marking a class with @Injectable ensures that the compiler will generate the necessary metadata to create the class's dependencies when the class is injected.
//A service class is properly marked so that a supporting service can be injected upon creation.
//Please visit, https://angular.io/api/core/Injectable.
@Injectable()
export class AccountsService implements OnInit {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated: EventEmitter<string>;

  constructor(private loggingService: LoggingService) {
    this.statusUpdated = new EventEmitter<string>();
  }

  ngOnInit() {
    //This initialize of the emitter here does not work, passed to the constructor.
    //this.statusUpdated = new EventEmitter<string>();
  }

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
    this.loggingService.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
