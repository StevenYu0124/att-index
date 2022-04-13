import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAdhesiveComponent } from './content-adhesive.component';

describe('ContentAdhesiveComponent', () => {
  let component: ContentAdhesiveComponent;
  let fixture: ComponentFixture<ContentAdhesiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentAdhesiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAdhesiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
