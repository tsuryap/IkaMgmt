import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  showSideNav: boolean;
  @Output() valueChange = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

  onClickExpand() {
    this.showSideNav = !this.showSideNav;
    this.valueChange.emit(this.showSideNav);
  }

}
