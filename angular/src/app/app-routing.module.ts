import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import {HomeComponent} from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'form', component: PostFormComponent },
  { path: 'form/:id', component: PostFormComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
