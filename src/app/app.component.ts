import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: '<router-outlet></router-outlet><app-header></app-header><app-footer></app-footer>',
  styles: ''
})
export class AppComponent {
  title = 'd-and-d-wiki';
}
