import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-company-values',
  templateUrl: './content-company-values.component.html',
  styleUrls: ['./content-company-values.component.css']
})
export class ContentCompanyValuesComponent implements OnInit {
  imageSrc = 'assets/images/company-values.png';
  constructor() { }

  ngOnInit(): void {
  }

}
