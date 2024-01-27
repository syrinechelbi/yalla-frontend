import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [  { path: 'events', component: EventComponent },
{ path: 'form', component: FormComponent },
{ path: '', redirectTo: '/events', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
