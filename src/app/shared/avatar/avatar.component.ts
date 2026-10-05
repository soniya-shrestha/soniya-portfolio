import { Component, Input, signal } from "@angular/core";
@Component({
  selector: "app-avatar",
  standalone: true,
  styleUrl: "./avatar.component.scss",
  templateUrl: "./avatar.component.html",
})
export class AvatarComponent {
  @Input() src = "";
  @Input() name = "";
  failed = signal(false);
  get initials() {
    return this.name
      .split(" ")
      .map((w) => w[0])
      .join("")
      .slice(0, 2);
  }
}
