import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedMenu = "Home";
  
  selectMenu(option: string){
    this.selectedMenu = option;
    console.log(option);
  }
}