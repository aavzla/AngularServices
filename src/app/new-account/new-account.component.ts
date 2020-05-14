import { Component, OnInit } from '@angular/core';
//import { LoggingService } from '../shared/logging.service';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  constructor(
    //private loggingService: LoggingService,
    private accountsService: AccountsService
  ) { }

  ngOnInit() {
    this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    //console.log('loggingService: ' + this.loggingService);
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
