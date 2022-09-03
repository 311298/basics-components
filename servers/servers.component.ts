import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowedNewServer:boolean=false
  serverCreation:string='no server is created'
  serverName!:string

  constructor() { 
    setTimeout(()=>{
      this.allowedNewServer=true
    },5000)
  }

  ngOnInit(): void {
  }

  onCreatedServer():void{
    this.serverCreation='server was created'
  }

  onUpdateServerName(input:Event):void{
    //input: { target: { value: string; }; } -> suggested by vs code
    this.serverName=(<HTMLInputElement>input.target).value
  }

}
