import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLubricantComponent } from './content-lubricant.component';

describe('ContentLubricantComponent', () => {
  let component: ContentLubricantComponent;
  let fixture: ComponentFixture<ContentLubricantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLubricantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLubricantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
