import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
  constructor( private title: Title) {
    this.setTitle('Account Managment');
   }

   setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

}
