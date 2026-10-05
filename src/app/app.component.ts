import { Component } from "@angular/core";
import { PROFILE } from "./data/portfolio.data";
import { NavbarComponent } from "./sections/navbar/navbar.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { AboutComponent } from "./sections/about/about.component";
import { ExperienceComponent } from "./sections/experience/experience.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { SkillsComponent } from "./sections/skills/skills.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { SocialLinksComponent } from "./shared/social-links/social-links.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent, 
    SocialLinksComponent,
  ],
  styleUrl: "./app.component.scss",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  year = new Date().getFullYear();
  name = PROFILE.name;
}
