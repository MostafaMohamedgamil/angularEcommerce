import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { CartComponent } from './cart/cart.component';
import { BrandsComponent } from './brands/brands.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SignupComponent } from './signup/signup.component';
import { authguardGuard } from './authguard.guard';
import { ProductdetaliesComponent } from './allproducts/productdetalies/productdetalies.component';
import { AllproductsComponent } from './allproducts/allproducts.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home',canActivate:[authguardGuard], component: HomeComponent },



  {
    path: 'home', canActivate: [authguardGuard],
    loadChildren: () =>
      import('./home/home.module')
        .then(m => m.HomeModule)
  },
  {
    path: 'about-us', canActivate: [authguardGuard],
    loadChildren: () =>
      import('./about/about.module')
        .then(m => m.AboutModule)
  },
  {
    path: 'allproducts', canActivate: [authguardGuard],
    loadChildren: () =>
      import('./allproducts/allproducts.module')
        .then(m => m.AllproductsModule)
  },
  {
    path: 'brands', canActivate: [authguardGuard],
    loadChildren: () =>
      import('./brands/brands.module')
        .then(m => m.BrandsModule)
  },
  {
    path: 'cart', canActivate: [authguardGuard],
    loadChildren: () =>
      import('./cart/cart.module')
        .then(m => m.CartModule)
  },
  {
    path: 'categories', canActivate: [authguardGuard],
    loadChildren: () =>
      import('./categories/categories.module')
        .then(m => m.CategoriesModule)
  },







  // { path: 'Wishlist',canActivate:[authguardGuard], component: WishlistComponent },
  // { path: 'productdetalies/:id',canActivate:[authguardGuard], component: ProductdetaliesComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'signup', component: SignupComponent },
  // { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
