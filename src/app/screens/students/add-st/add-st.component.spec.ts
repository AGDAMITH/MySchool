import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStComponent } from './add-st.component';

describe('AddStComponent', () => {
  let component: AddStComponent;
  let fixture: ComponentFixture<AddStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
