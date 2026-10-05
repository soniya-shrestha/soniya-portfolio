import { Component } from "@angular/core";
import { PROJECTS } from "../../data/portfolio.data";
import { SectionComponent } from "../../shared/section/section.component";
import { ProjectCardComponent } from "../../shared/project-card/project-card.component";
@Component({
  selector: "app-projects",
  standalone: true,
  imports: [SectionComponent, ProjectCardComponent],
  styleUrl: "./projects.component.scss",
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent {
  projects = PROJECTS;
}
