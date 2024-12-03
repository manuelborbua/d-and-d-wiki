import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { VideoSectionComponent } from '../video-section/video-section.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-content',
  imports: [HeaderComponent, BannerComponent, VideoSectionComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
