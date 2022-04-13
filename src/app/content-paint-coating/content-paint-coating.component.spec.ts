import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPaintCoatingComponent } from './content-paint-coating.component';

describe('ContentPaintCoatingComponent', () => {
  let component: ContentPaintCoatingComponent;
  let fixture: ComponentFixture<ContentPaintCoatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPaintCoatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPaintCoatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
