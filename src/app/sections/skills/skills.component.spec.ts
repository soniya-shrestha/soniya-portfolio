import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SkillsComponent } from "./skills.component";
import { SKILLS } from "../../data/portfolio.data";

describe("SkillsComponent", () => {
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SkillsComponent);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("renders each skill group", () => {
    expect(fixture.nativeElement.querySelectorAll("h3").length).toBe(
      SKILLS.length,
    );
  });
});
