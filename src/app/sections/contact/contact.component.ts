import { Component } from "@angular/core";
import { PROFILE } from "../../data/portfolio.data";
import { SectionComponent } from "../../shared/section/section.component";
import { SocialLinksComponent } from "../../shared/social-links/social-links.component";
@Component({
  selector: "app-contact",
  standalone: true,
  imports: [SectionComponent],
  styleUrl: "./contact.component.scss",
  templateUrl: "./contact.component.html",
})
export class ContactComponent {
  p = PROFILE; 
   items = [
    { label: "Email", value: PROFILE.email, href: "mailto:" + PROFILE.email },
    { label: "Location", value: PROFILE.location, href: "" },
  ];
}
