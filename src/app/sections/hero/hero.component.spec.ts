import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { PROFILE } from "../../data/portfolio.data";

describe("HeroComponent", () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(HeroComponent);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows the name", () => {
    expect(fixture.nativeElement.querySelector("h1").textContent).toContain(
      PROFILE.name,
    );
  });
});
