import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '.app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  title = '<i>The Will Will Web</i>';
  titlelink = 'http://blog.miniasp.com/';

  editTitleText = this.title;

  num = 1;

  constructor() { }

  ngOnInit() {
  }

  PlusOne() {
    this.num = this.num + 1;
  }

  editTitle($event: KeyboardEvent) {
    //console.log($event);
    if($event.keyCode == 13) {
      this.title = this.editTitleText;
    }
  }

}
