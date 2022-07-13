import { Component, OnInit } from '@angular/core';
import {SongService}         from "../../../services/song.service";

@Component({
  selector: 'spot-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //reflect-metadata
  constructor(public songService:SongService) { }

  ngOnInit(): void {
  }
  

}
