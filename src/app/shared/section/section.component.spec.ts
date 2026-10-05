import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SectionComponent } from "./section.component";

describe("SectionComponent", () => {
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SectionComponent);
    fixture.componentRef.setInput("title", "Test title");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows the title", () => {
    expect(fixture.nativeElement.querySelector("h2").textContent).toContain(
      "Test title",
    );
  });
});
