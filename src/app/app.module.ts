import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
// import { CrisisCenterModule } from './crisis-center/crisis-center.module'
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { AuthModule } from './auth/auth.module'
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    // CrisisCenterModule,
    AuthModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // Diagnostic only: inspect router configuration
  constructor(route: Router) {
    // Use a custom replacer to display function names in the route configs
    const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    console.log('Routes:', JSON.stringify(route.config, replacer, 2));
  }
}
