import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppRoutingModule } from '../../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss']
})
export class NavbarComponent   {
    public href: String = '';

    constructor(private translate: TranslateService,
        router: Router) {
              }

      switchLanguage(language: string) {
        this.translate.use(language);
    }

}
