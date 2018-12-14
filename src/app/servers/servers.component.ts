import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    allowNewServer: boolean = false;
    serverCreateStatus: string = 'No server was created!';
    serverName: string = '';
    serverCreated: boolean = false;
    // servers: any = new Array(10);
    servers: any = ['Testserver', 'Testserver 2'];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }

    ngOnInit() {
    }

    onUpdateServerName(event: Event) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreateStatus = 'Server was created! Name is ' + this.serverName;
    }

}
