import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AboutComponent } from "./about.component";
import { PROFILE } from "../../data/portfolio.data";

describe("AboutComponent", () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows the about text", () => {
    expect(fixture.nativeElement.textContent).toContain(PROFILE.about);
  });
});
