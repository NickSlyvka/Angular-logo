import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FormComponent } from './form/form.component';
import { LogoListComponent } from './logo-list/logo-list.component';
import { LogoComponent } from './logo/logo.component';
import { RectComponent } from './components/rect/rect.component';
import { CircleComponent } from './components/circle/circle.component';
import { TriangleComponent } from './components/triangle/triangle.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LogoListComponent,
    LogoComponent,
    RectComponent,
    CircleComponent,
    TriangleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
