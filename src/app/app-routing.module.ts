import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { LogoListComponent } from './logo-list/logo-list.component';
import { LogoComponent } from './logo/logo.component';

const routes: Routes = [
  { path: '', redirectTo: 'logo', pathMatch: 'full' },
  { path: 'logo', component: LogoListComponent },
  { path: 'logo/:id', component: LogoComponent },
  { path: 'create', component: FormComponent },
  { path: 'edit/:id', component: FormComponent },
  { path: '**', redirectTo: 'logo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
