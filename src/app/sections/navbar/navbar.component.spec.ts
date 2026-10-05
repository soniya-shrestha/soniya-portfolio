import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("opens the mobile menu when the toggle is clicked", () => {
    const menu = fixture.nativeElement.querySelector(".navbar-collapse");
    expect(menu.classList).toContain("collapse");
    fixture.nativeElement.querySelector("button").click();
    fixture.detectChanges();
    expect(menu.classList).not.toContain("collapse");
  });
});
