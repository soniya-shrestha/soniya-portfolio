import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AvatarComponent } from "./avatar.component";

describe("AvatarComponent", () => {
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AvatarComponent);
    fixture.componentRef.setInput("src", "missing.jpg");
    fixture.componentRef.setInput("name", "Soniya Dangol");
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows initials when the image fails to load", () => {
    fixture.nativeElement
      .querySelector("img")
      .dispatchEvent(new Event("error"));
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain("SD");
  });
});
