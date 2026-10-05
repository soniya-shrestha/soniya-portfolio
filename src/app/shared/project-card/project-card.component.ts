import { Component, Input } from "@angular/core";
import { Project } from "../../data/portfolio.data";
@Component({
  selector: "app-project-card",
  standalone: true,
  styleUrl: "./project-card.component.scss",
  templateUrl: "./project-card.component.html",
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
