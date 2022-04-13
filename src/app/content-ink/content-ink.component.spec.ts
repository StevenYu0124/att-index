import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInkComponent } from './content-ink.component';

describe('ContentInkComponent', () => {
  let component: ContentInkComponent;
  let fixture: ComponentFixture<ContentInkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
