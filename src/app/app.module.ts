import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule, MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    MatStepperModule,
    ReactiveFormsModule ,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
