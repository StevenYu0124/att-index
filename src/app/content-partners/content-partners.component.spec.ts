import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPartnersComponent } from './content-partners.component';

describe('ContentPartnersComponent', () => {
  let component: ContentPartnersComponent;
  let fixture: ComponentFixture<ContentPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPartnersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
