import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './login/log/log.component';
import { RegComponent } from './register/reg/reg.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { Acct1Component } from './acct1/acct1.component';
import { ProfileComponent } from './profile/profile.component';
import { PlansComponent } from './plans/plans.component';
import { RouterComponent } from './router/router.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    RegComponent,
    HomepageComponent,
    Acct1Component,
    ProfileComponent,
    PlansComponent,
    RouterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({// positionClass:"toast-bottom-center",
    preventDuplicates:true,
    timeOut:2000,
    progressBar:true,
    positionClass:'toast-bottom-center'
  }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
