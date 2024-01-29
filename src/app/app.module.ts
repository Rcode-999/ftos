import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { TestimonialsComponent } from './components/partials/testimonials/testimonials.component';
import { FoodtruckComponent } from './components/partials/foodtruck/foodtruck.component';
import { CarouselComponent } from './components/pages/carousel/carousel.component';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { TestsearchComponent } from './testsearch/testsearch.component';
import { RouterModule } from '@angular/router';
import { AccountPageComponent } from './components/pages/account-page/account-page.component';
import { FormsModule } from '@angular/forms';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { LOCALE_ID } from '@angular/core';
import localeZA from '@angular/common/locales/en-ZA';
import {CardModule } from 'primeng/card'
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { OrderHistoryComponent } from "./components/partials/order-history/order-history.component";
import { PasswordComponent } from "./components/partials/password/password.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomepageComponent,
        TestimonialsComponent,
        FoodtruckComponent,
        CarouselComponent,
        SearchComponent,
        TagsComponent,
        ProductPageComponent,
        CartPageComponent,
        TitleComponent,
        NotFoundComponent,
        TestsearchComponent,
        AccountPageComponent,
        CheckoutPageComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'en-ZA' },
        MessageService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        FormsModule,
        CardModule,
        InputTextModule,
        ReactiveFormsModule,
        ButtonModule,
        HttpClientModule,
        ToastModule,
        BrowserAnimationsModule,
        OrderHistoryComponent,
        PasswordComponent
    ]
})
export class AppModule { }
