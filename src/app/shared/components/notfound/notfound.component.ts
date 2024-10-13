import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent {

  constructor(private title: Title) {
    this.setTitle('Not Found Page');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

}
