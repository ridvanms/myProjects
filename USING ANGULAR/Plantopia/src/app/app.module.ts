import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from "@angular/fire/compat"
import { firebaseConfig } from 'src/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AccountModule,
    AuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
