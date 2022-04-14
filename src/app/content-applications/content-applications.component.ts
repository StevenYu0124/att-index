import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-applications',
  templateUrl: './content-applications.component.html',
  styleUrls: ['./content-applications.component.css']
})
export class ContentApplicationsComponent implements OnInit {
  constructor() { }
  @Output() selectMenuEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

  selectMenu(option: string){
    this.selectMenuEvent.emit(option);
  }
}
