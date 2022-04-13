import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlasticComponent } from './content-plastic.component';

describe('ContentPlasticComponent', () => {
  let component: ContentPlasticComponent;
  let fixture: ComponentFixture<ContentPlasticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPlasticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPlasticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
