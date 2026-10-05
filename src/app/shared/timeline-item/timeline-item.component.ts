import { Component, Input } from "@angular/core";
import { TimelineEntry } from "../../data/portfolio.data";
@Component({
  selector: "app-timeline-item",
  standalone: true,
  styleUrl: "./timeline-item.component.scss",
  templateUrl: "./timeline-item.component.html",
})
export class TimelineItemComponent {
  @Input({ required: true }) entry!: TimelineEntry;
}
