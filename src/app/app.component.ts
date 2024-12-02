import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { VideoSectionComponent } from './video-section/video-section.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, BannerComponent, VideoSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
  usuario = 'Manuel';
}
