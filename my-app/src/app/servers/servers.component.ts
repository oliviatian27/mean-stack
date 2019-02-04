import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false
  serverCreationStatus="no server yet"
  serverName="server name"
  serverCreated=false
  servers=['server1','server2']

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated=true
    this.servers.push(this.serverName)
    this.serverCreationStatus="server is created"+this.serverName
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value
  }

}
