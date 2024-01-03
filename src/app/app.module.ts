import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutpageComponent } from './pages/aboutpage/aboutpage.component';
import { ContactpageComponent } from './pages/contactpage/contactpage.component';
import { BlogspageComponent } from './pages/blogspage/blogspage.component';
import { NavbarComponent } from './pages/partials/navbar/navbar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { BloglistComponent } from './pages/bloglist/bloglist.component';
import { BlogeditComponent } from './pages/blogedit/blogedit.component';
import { LoginComponent } from './pages/partials/login/login.component';
import { SignupComponent } from './pages/partials/signup/signup.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomepageComponent,
    AboutpageComponent,
    ContactpageComponent,
    BlogspageComponent,
    NavbarComponent,
    NotfoundComponent,
    BloglistComponent,
    BlogeditComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
