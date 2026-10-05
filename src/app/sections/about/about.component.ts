import { Component } from "@angular/core";
import { FACTS, PROFILE } from "../../data/portfolio.data";
import { SectionComponent } from "../../shared/section/section.component";
@Component({
  selector: "app-about",
  standalone: true,
  imports: [SectionComponent],
  styleUrl: "./about.component.scss",
  templateUrl: "./about.component.html",
})
export class AboutComponent {
  p = PROFILE; 
  facts = FACTS;
}
