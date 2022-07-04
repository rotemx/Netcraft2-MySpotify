import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'spot-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() search = new EventEmitter();
  
  searchTerm:string = '';
  
  constructor() { }

  
  ngOnInit(): void {
  }
  
  onSearch() {
    this.search.emit(this.searchTerm)
  }
}
