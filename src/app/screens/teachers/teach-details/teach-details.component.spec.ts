import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachDetailsComponent } from './teach-details.component';

describe('TeachDetailsComponent', () => {
  let component: TeachDetailsComponent;
  let fixture: ComponentFixture<TeachDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
