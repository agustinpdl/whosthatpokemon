import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [	
    AppComponent,
    LockScreenComponent,
      TimerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
