import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProjectCardComponent } from "./project-card.component";
import { PROJECTS } from "../../data/portfolio.data";

describe("ProjectCardComponent", () => {
  let fixture: ComponentFixture<ProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectCardComponent);
    fixture.componentRef.setInput("project", PROJECTS[0]);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows one pill per technology", () => {
    expect(fixture.nativeElement.querySelectorAll(".pill").length).toBe(
      PROJECTS[0].tech.length,
    );
  });
});
