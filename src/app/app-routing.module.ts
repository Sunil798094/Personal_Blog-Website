import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { BlogspageComponent } from './pages/blogspage/blogspage.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BloglistComponent } from './pages/bloglist/bloglist.component';
import { BlogeditComponent } from './pages/blogedit/blogedit.component';
import { LoginComponent } from './pages/partials/login/login.component';
import { SignupComponent } from './pages/partials/signup/signup.component';
import { SearchComponent } from './search/search.component';



const routes: Routes = [
  {path:'', component:HomepageComponent, title: 'Home'},
  {path:"home", component:HomepageComponent, title: 'Home'},
  {path:"about", component:AboutpageComponent, title: 'About'},
  {path:"contact-us", component:ContactpageComponent,title: 'Contact Us'},
  {path:"createblogs", component:BlogspageComponent,title: 'Create Blogs'},
  {path:"blogslist", component:BloglistComponent,title: 'Blog list'},
  {path:"blogslist/blog/:id/edit", component:BlogeditComponent,title: 'Edit'},
  {path:"login", component:LoginComponent, title: 'login'},
  {path:"Signup", component:SignupComponent, title: 'Signup'},
  // {path:"Form",component:ReactiveComponent, title: 'form'},
  {path:"search", component:SearchComponent, title: 'search'},
  {path: '**', component:NotfoundComponent,title: 'Not Found'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
