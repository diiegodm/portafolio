import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from "./components/contact/contact.component";
import { ResumeComponent } from './components/resume/resume.component';
import { AboutMeComponent } from "./components/about-me/about-me.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    FooterComponent,
    ContactComponent,
    ResumeComponent,
    AboutMeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';
}
