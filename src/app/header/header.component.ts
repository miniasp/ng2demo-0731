import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'The Will Will Web';
  
  num = 1;

  constructor() { }

  ngOnInit() {
  }

  PlusOne() {
    this.num = this.num + 1;
  }

}
