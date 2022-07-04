import { Component, OnInit } from '@angular/core';
import {Song}                from "../../../../types/interfaces/models/song";
import {SONGS_MOCK}          from "../../../../mock-data/SONGS_MOCK";

@Component({
  selector: 'spot-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  status:string = '';
  
  songList:Song[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onSongSearch(term:string) {
    this.status   = "search clicked! term:" + term;
    this.songList = SONGS_MOCK;
  }
}
