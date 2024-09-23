import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ChangepassComponent } from './changepass/changepass.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: "myprofile", pathMatch: 'full' },
      { path: 'myprofile', component: MyprofileComponent },
      { path: 'address-book', component: AddressBookComponent },
      { path: 'changepass', component: ChangepassComponent },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }


// {
//   path: '',
//   component: ParentComponent,
//   children: [
//     { path: '', redirectTo: 'child1', pathMatch: 'full' },
//     { path: 'child1', component: Child1Component },
//     { path: 'child2', component: Child2Component },
//   ]
// },
