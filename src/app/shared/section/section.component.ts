import { Component, Input } from "@angular/core";
@Component({
  selector: "app-section",
  standalone: true,
  styleUrl: "./section.component.scss",
  templateUrl: "./section.component.html",
})
export class SectionComponent {
  @Input() id = "";
  @Input() title = "";
  @Input() alt = false; 
  @Input() centered = false;
}
