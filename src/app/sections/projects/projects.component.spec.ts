import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProjectsComponent } from "./projects.component";
import { PROJECTS } from "../../data/portfolio.data";

describe("ProjectsComponent", () => {
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProjectsComponent);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("renders a card for each project", () => {
    expect(
      fixture.nativeElement.querySelectorAll("app-project-card").length,
    ).toBe(PROJECTS.length);
  });
});
