import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ContactComponent } from "./contact.component";
import { PROFILE } from "../../data/portfolio.data";

describe("ContactComponent", () => {
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("links to the email address", () => {
    expect(
      fixture.nativeElement
        .querySelector('a[href^="mailto:"]')
        .getAttribute("href"),
    ).toBe("mailto:" + PROFILE.email);
  });
});
