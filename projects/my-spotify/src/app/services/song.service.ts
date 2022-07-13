import { Injectable } from '@angular/core';
import {Song}         from "../../types/interfaces/models/song";

declare let window:any;

@Injectable({
  providedIn: 'root'
})
export class SongService {
  
  state:{status:string,songList:Song[]} = {
    status:'',
    songList:[]
  }
  // songCount:number = 0;
  // WE DON'T NEED THIS!
  // THIS IS NOT DATA. THIS IS A DERIVED VALUE!
  
  
  status:string = '';
  songList:Song[] = [];
  
  constructor() {
    window["songService"] = this;
  }
  
  clearList():void{
    this.state.songList.length = 0;
  }
  
}

// DI - dependency injection - design pattern
