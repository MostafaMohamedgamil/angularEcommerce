import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private title: Title) {
    this.setTitle('Contact');
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
}
