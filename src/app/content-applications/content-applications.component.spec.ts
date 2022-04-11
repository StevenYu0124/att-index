import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentApplicationsComponent } from './content-applications.component';

describe('ContentApplicationsComponent', () => {
  let component: ContentApplicationsComponent;
  let fixture: ComponentFixture<ContentApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
