import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor( private title: Title) {
    this.setTitle('About');
   }

   setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
