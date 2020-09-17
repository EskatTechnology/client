import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  constructor(private translate: TranslateService) {
    localStorage.setItem('Idioma', 'en');
    const activeLang = localStorage.getItem('Idioma');
    this.translate.setDefaultLang(activeLang);
    this.translate.use(activeLang);
  }  
}
