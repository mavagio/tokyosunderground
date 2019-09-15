import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PubcrawlComponent } from './pubcrawl/pubcrawl.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'pubcrawl/:id', component: PubcrawlComponent, },
  { path: '**', redirectTo: ''},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
