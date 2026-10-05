import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinksComponent } from './social-links.component';
import { PROFILE } from '../../data/portfolio.data';

describe('SocialLinksComponent', () => {
  let component: SocialLinksComponent;
  let fixture: ComponentFixture<SocialLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it("always shows the email link", () => {
    const a = fixture.nativeElement.querySelector('a[href^="mailto:"]');
    expect(a.getAttribute("href")).toBe("mailto:" + PROFILE.email);
  });
});
