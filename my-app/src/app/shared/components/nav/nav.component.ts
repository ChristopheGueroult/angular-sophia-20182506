import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isCollapsed = true;
  public appTitle = "My super app Angular 6";
  constructor() { }

  ngOnInit() {
  }

}
