import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeachComponent } from './add-teach.component';

describe('AddTeachComponent', () => {
  let component: AddTeachComponent;
  let fixture: ComponentFixture<AddTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
