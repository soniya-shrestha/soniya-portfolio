import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TimelineItemComponent } from "./timeline-item.component";
import { EXPERIENCE } from "../../data/portfolio.data";

describe("TimelineItemComponent", () => {
  let fixture: ComponentFixture<TimelineItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineItemComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TimelineItemComponent);
    fixture.componentRef.setInput("entry", EXPERIENCE[0]);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows the entry title", () => {
    expect(fixture.nativeElement.textContent).toContain(EXPERIENCE[0].title);
  });
});
