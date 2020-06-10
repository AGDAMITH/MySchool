import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTeachComponent } from './remove-teach.component';

describe('RemoveTeachComponent', () => {
  let component: RemoveTeachComponent;
  let fixture: ComponentFixture<RemoveTeachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTeachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
