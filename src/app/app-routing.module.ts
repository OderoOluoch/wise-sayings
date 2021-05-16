import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from '../app/components/quote/quote.component';
import { AboutComponent } from '../app/components/about/about.component';
const routes: Routes = [
  {path:'qoutes', component:QuoteComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
