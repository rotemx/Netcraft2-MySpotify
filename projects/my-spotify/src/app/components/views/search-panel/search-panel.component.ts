import {ChangeDetectorRef, Component, OnDestroy, OnInit} from "@angular/core";
import {SONGS_MOCK}                                      from "../../../../mock-data/SONGS_MOCK";
import {SongService}       from "../../../services/song.service";

declare let window:any;

@Component({
  selector: 'spot-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  
  constructor(
      public songService:SongService,
      public cdr:ChangeDetectorRef
      ) {
    window['searchPanelComponent'] = this;
  }

  //lifecycle hook
  ngOnInit(): void {
  }
  
  ngOnDestroy():void {}
  
  onSongSearch(term:string) {
    this.songService.state.status   = "search clicked! term:" + term;
    this.songService.state.songList = [...SONGS_MOCK];  //spread operator - new reference (shallow copy = not deep clone)
  }
}
