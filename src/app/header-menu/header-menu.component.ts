import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {
  menus = ["Home", "Company", "Applications", "Partners", "Contact"];
  @Input() selectedMenu = "Home";
  @Output() selectMenuEvent = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }

  selectMenu(option: string){
    this.selectedMenu = option;
    this.selectMenuEvent.emit(option);
  }
}
