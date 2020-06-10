import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveStComponent } from './remove-st.component';

describe('RemoveStComponent', () => {
  let component: RemoveStComponent;
  let fixture: ComponentFixture<RemoveStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
