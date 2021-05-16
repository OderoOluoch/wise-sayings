import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from '../app/components/quote/quote.component';
import { AboutComponent } from '../app/components/about/about.component';
import { QuoteFormComponent } from '../app/components/quote-form/quote-form.component'
import { NotFoundComponent } from '../app/components/not-found/not-found.component';

const routes: Routes = [
  {path:'', component:QuoteComponent},
  {path:'about', component:AboutComponent},
  {path:'form', component:QuoteFormComponent},
  {path: '', redirectTo:"/quotes", pathMatch:"full"},
  {path:'***', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
