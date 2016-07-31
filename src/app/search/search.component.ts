import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  keyword: string;

  constructor(private searchsvc: SearchService) { }

  ngOnInit() {
  }
  ngOnChanges() {
  }

  doSearch() {
    this.searchsvc.doSearch(this.keyword);
  }
}
