import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-selector-language',
  templateUrl: './selector-language.component.html',
  styleUrls: ['./selector-language.component.css']
})
export class SelectorLanguageComponent implements OnInit {
  lang = '';

  ngOnInit(): void {
  }

  constructor(
    public translate: TranslateService
  ){
    translate.addLangs(['en','zh-TW']);
    translate.setDefaultLang('zh-TW');
    this.lang = 'zh-TW';
  }

  translateLanguageTo(lang: string){
    this.translate.use(lang);
    this.lang = this.translate.currentLang;
  }
}
