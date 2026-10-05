import { Component } from "@angular/core";
import { PROFILE } from "../../data/portfolio.data";
import { AvatarComponent } from "../../shared/avatar/avatar.component";
@Component({
  selector: "app-hero",
  standalone: true,
  imports: [AvatarComponent],
  styleUrl: "./hero.component.scss",
  templateUrl: "./hero.component.html",
})
export class HeroComponent {
  p = PROFILE;
}
