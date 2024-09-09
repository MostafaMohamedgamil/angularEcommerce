import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AccordionModule } from 'ngx-bootstrap/accordion';
// import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
// import { register } from 'swiper/element/bundle';
// import { AllproductsComponent } from './allproducts/allproducts.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from './login/login.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';
// register();

@NgModule({
  declarations: [
    AppComponent,
    // BrandsComponent,
    // CartComponent,
    // CategoriesComponent,
    FooterComponent,
    // HomeComponent,
    // LoginComponent,
    NavbarComponent,
    NotfoundComponent,
    RegisterComponent,
    WishlistComponent,
    SignupComponent,
    // FlashsalesaliderComponent,
    // ProductdetaliesComponent,
    // SwiperComponent,
    // CategorysliderComponent,
    // AllproductsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BsDropdownModule,
    // CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    LoginModule
  ],


  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
