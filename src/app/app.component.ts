import { Component } from '@angular/core';

@Component({
  selector: 'db-root',
  template: `
      <db-header></db-header>

      <main>
          <router-outlet></router-outlet>
      </main>

      <db-footer></db-footer>`
})
export class AppComponent{
  title = 'weatherApp';
 
}

