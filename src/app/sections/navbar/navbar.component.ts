import { Component, signal } from "@angular/core";
import { PROFILE } from "../../data/portfolio.data";
@Component({
  selector: "app-navbar",
  standalone: true,
  styleUrl: "./navbar.component.scss",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  p = PROFILE;
  open = signal(false);
  links = ["About", "Experience", "Projects", "Skills", "Contact"];
}
