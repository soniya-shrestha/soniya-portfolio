import { Component } from "@angular/core";
import { EDUCATION, EXPERIENCE } from "../../data/portfolio.data";
import { SectionComponent } from "../../shared/section/section.component";
import { TimelineItemComponent } from "../../shared/timeline-item/timeline-item.component";
@Component({
  selector: "app-experience",
  standalone: true,
  imports: [SectionComponent, TimelineItemComponent],
  styleUrl: "./experience.component.scss",
  templateUrl: "./experience.component.html",
})
export class ExperienceComponent {
  exp = EXPERIENCE;
  edu = EDUCATION;
}
