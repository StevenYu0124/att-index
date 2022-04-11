import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCompanyValuesComponent } from './content-company-values.component';

describe('ContentCompanyValueComponent', () => {
  let component: ContentCompanyValuesComponent;
  let fixture: ComponentFixture<ContentCompanyValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCompanyValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCompanyValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
