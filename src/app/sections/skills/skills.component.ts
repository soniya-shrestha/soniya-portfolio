import { Component } from "@angular/core";
import { SKILLS } from "../../data/portfolio.data";
import { SectionComponent } from "../../shared/section/section.component";
@Component({
  selector: "app-skills",
  standalone: true,
  imports: [SectionComponent],
  styleUrl: "./skills.component.scss",
  templateUrl: "./skills.component.html",
})
export class SkillsComponent {
  skills = SKILLS;
}
