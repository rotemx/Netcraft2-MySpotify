import {Component, Input, OnInit} from "@angular/core";
import {Song}                     from "../../../../types/interfaces/models/song";

@Component({
  selector: 'spot-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent implements OnInit {
  @Input() song:Song
  constructor() { }

  ngOnInit(): void {
  }

}
