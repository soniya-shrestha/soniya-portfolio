import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExperienceComponent } from "./experience.component";
import { EDUCATION, EXPERIENCE } from "../../data/portfolio.data";

describe("ExperienceComponent", () => {
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ExperienceComponent);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("lists every experience and education entry", () => {
    expect(
      fixture.nativeElement.querySelectorAll("app-timeline-item").length,
    ).toBe(EXPERIENCE.length + EDUCATION.length);
  });
});
