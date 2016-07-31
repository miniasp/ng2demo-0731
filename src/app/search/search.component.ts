import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  keyword: string;

  @Output()
  search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {

  }
  doSearch() {
    this.search.emit(this.keyword);
  }
}
