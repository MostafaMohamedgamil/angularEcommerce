import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangepassComponent } from './changepass/changepass.component';
import { ModalModule } from 'ngx-bootstrap/modal';
// imports: [...]

@NgModule({
  declarations: [
    AccountComponent,
    MyprofileComponent,
    AddressBookComponent,
    ChangepassComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ]
})
export class AccountModule { }
